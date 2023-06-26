const serverless = require('serverless-http')
const express = require('express')
const { templatebyContext, getFallbackByContext } = require('./templates/context')
const { answerUser } = require('./utils/bot')
const { putDataFromMessages, getDataFromMessages } = require('./db/actions')
const { answersValidations, getSubcontextByContext, storageAnswerByContext, dbColumnName, specialContext } = require('./templates/validations')
const { customFlows } = require('./flows/customFlows')
const { transformTextToHandle } = require('./utils/transformTextToHandle')

const app = express()

const token = process.env.TOKEN || 'testtoken'

app.get('/webhooks',  (req, res) => {
  if (
    req.query['hub.mode'] == 'subscribe' &&
    req.query['hub.verify_token'] == token
  ) {
    res.send(req.query['hub.challenge']);
  } else {
    res.sendStatus(400);
  }
})

app.post('/webhooks', async (req, res) => {
  const body = JSON.parse(req.body)
  const userMessagesObject = body.entry?.[0].changes?.[0].value.messages
  const userPhone = body.entry?.[0].changes?.[0].value.messages?.[0].from

  if(body.entry[0].changes[0].field !== 'messages' || !userMessagesObject){
    // not from the messages webhook so dont process
    return res.sendStatus(400)
  }

  console.log('olha o changes: ', body.entry)
  console.log('olha o changes: ', body.entry?.[0].changes?.[0])
  console.log('olha o messages: ', body.entry?.[0].changes?.[0].value.messages)
  
  getDataFromMessages(userMessagesObject).then((userDataPending) => {
    Promise.all(userDataPending).then(async (userData) => {
      if(Object.keys(userData[0]).length === 0){
        const { template } = templatebyContext.initialContact
        answerUser(template(userPhone))
        putDataFromMessages(userMessagesObject, {}, templatebyContext.initialContact.name).then((userPutPending) => {
          Promise.all(userPutPending).then(() => res.sendStatus(200))
        })
      }else{
        const answer = 
        'interactive' in body.entry[0].changes[0].value.messages[0] 
            ? 'list_reply' in body.entry[0].changes[0].value.messages[0].interactive 
              ? body.entry[0].changes[0].value.messages[0].interactive.list_reply.title 
              : body.entry[0].changes[0].value.messages[0].interactive.button_reply.title
            : body.entry[0].changes[0].value.messages[0].text.body
        const answerFormatted = transformTextToHandle(answer)
        const userContext = userData[0].Item.context;

        const isAnswerRight = 
          !(userContext in answersValidations) 
            ? true 
            : answersValidations[userContext].test(answerFormatted)

        if(isAnswerRight){
          if(specialContext.includes(userContext)){
            customFlows[userContext](userData,userPhone,answerFormatted,userMessagesObject,res);
          }else if(userContext === 'menu' && (answerFormatted == 'ler_a_biblia' || answerFormatted == 'mensagem_positiva' || answerFormatted == 'sobre_golpes' )){
            customFlows[answerFormatted == 'ler_a_biblia' ? 'bibleMessage' : answerFormatted == 'mensagem_positiva' ? 'positiveMessage' : 'scamsMessage'](userData,userPhone,answerFormatted,userMessagesObject,res);
          }else{
            const { template, name } = 
              getSubcontextByContext.includes(userContext) 
                ? templatebyContext[userContext][answerFormatted] 
                : templatebyContext[userContext]
            answerUser(template(userPhone))
            const data = storageAnswerByContext.includes(userContext) 
              ? { ...userData[0].Item , [dbColumnName[userContext] ? dbColumnName[userContext] : userContext] : answer} 
              : {...userData[0].Item}
            delete data.phonenumber
            delete data.context
            putDataFromMessages(userMessagesObject, data , name).then((userPutPending) => {
              Promise.all(userPutPending).then(() => res.sendStatus(200))
            })
          }
        }else{
          const template = getFallbackByContext[userContext]
          answerUser(template(userPhone), ()=>{res.sendStatus(200)})
        }
      }
    })
  })
})

module.exports.handler = serverless(app);
