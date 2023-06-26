const { putDataFromMessages } = require("../db/actions")
const { bibleMessage } = require("../templates/messages/bible")
const { menu } = require("../templates/messages/default")
const { positiveMessage } = require("../templates/messages/positive")
const { recipesAnswer } = require("../templates/messages/recipes")
const { scamsMessage } = require("../templates/messages/scams")
const { answerUser } = require("../utils/bot")
const { getRandomNumberExcluding } = require("../utils/randomNumber")
const { validateNumberArray } = require("../utils/validateNumbers")

const customFlows = {
  recipesIntro: (userData, userPhone, answer,userMessagesObject,res) => {
    const exceptions = userData[0].Item['answered_recipes']?.split(',')
    const isAlreadyAllRecipes = 
      exceptions 
        ? answer == 'salgada'
          ? validateNumberArray(exceptions.filter((element) => element !== ""), 0, 19) 
          : validateNumberArray(exceptions.filter((element) => element !== ""), 20, 39) 
        : false
      const index = 
        isAlreadyAllRecipes  
          ? exceptions && answer == 'salgada'  
            ? getRandomNumberExcluding(0, 19) 
            : getRandomNumberExcluding(20, 39)
          : exceptions && answer == 'salgada' 
            ? getRandomNumberExcluding(0, 19, exceptions)
            : getRandomNumberExcluding(20, 39, exceptions)
      answerUser(recipesAnswer(userPhone, index))
      const data = { ...userData[0].Item , answered_recipes : userData[0].Item['answered_recipes'] ? userData[0].Item['answered_recipes'] + `,${index}` : `${index}`} 
      delete data.phonenumber
      delete data.context
      putDataFromMessages(userMessagesObject, data , 'recipesAnswer').then((userPutPending) => {
        Promise.all(userPutPending).then(() => res.sendStatus(200))
      })
  },
  bibleMessage: (userData, userPhone, answer,userMessagesObject,res) => {
    if(answer == 'voltar_ao_menu'){
        answerUser(menu(userPhone))
        const data = {...userData[0].Item}
        delete data.phonenumber
        delete data.context
        putDataFromMessages(userMessagesObject, data , 'menu').then((userPutPending) => {
          Promise.all(userPutPending).then(() => res.sendStatus(200))
        })
    }else{
      const exceptions = userData[0].Item['answered_bible']?.split(',')
      const isAlreadyAllBible = 
        exceptions 
          ? validateNumberArray(exceptions.filter((element) => element !== ""), 0, 144)
          : false
      const index = 
        isAlreadyAllBible  
          ? getRandomNumberExcluding(0, 144)
          : getRandomNumberExcluding(0, 144, exceptions)
      answerUser(bibleMessage(userPhone, index))
      const data = { ...userData[0].Item , answered_bible : userData[0].Item['answered_bible'] ? userData[0].Item['answered_bible'] + `,${index}` : `${index}`} 
      delete data.phonenumber
      delete data.context
      putDataFromMessages(userMessagesObject, data , 'bibleMessage').then((userPutPending) => {
        Promise.all(userPutPending).then(() => res.sendStatus(200))
      })
    }
  },
  positiveMessage: (userData, userPhone, answer,userMessagesObject,res) => {
    if(answer == 'voltar_ao_menu'){
      answerUser(menu(userPhone))
      const data = {...userData[0].Item}
      delete data.phonenumber
      delete data.context
      putDataFromMessages(userMessagesObject, data , 'menu').then((userPutPending) => {
        Promise.all(userPutPending).then(() => res.sendStatus(200))
      })
    }else{
      const exceptions = userData[0].Item['answered_positive']?.split(',')
      const isAlreadyAllPositive = 
        exceptions 
          ? validateNumberArray(exceptions.filter((element) => element !== ""), 0, 100)
          : false
      const index = 
        isAlreadyAllPositive  
          ? getRandomNumberExcluding(0, 100)
          : getRandomNumberExcluding(0, 100, exceptions)
      answerUser(positiveMessage(userPhone, index))
      const data = { ...userData[0].Item , answered_positive : userData[0].Item['answered_positive'] ? userData[0].Item['answered_positive'] + `,${index}` : `${index}`} 
      delete data.phonenumber
      delete data.context
      putDataFromMessages(userMessagesObject, data , 'positiveMessage').then((userPutPending) => {
        Promise.all(userPutPending).then(() => res.sendStatus(200))
      })
    }
  },
  scamsMessage: (userData, userPhone, answer,userMessagesObject,res) => {
    if(answer == 'voltar_ao_menu'){
      answerUser(menu(userPhone))
      const data = {...userData[0].Item}
      delete data.phonenumber
      delete data.context
      putDataFromMessages(userMessagesObject, data , 'menu').then((userPutPending) => {
        Promise.all(userPutPending).then(() => res.sendStatus(200))
      })
    }else{
      const exceptions = userData[0].Item['answered_scams']?.split(',')
      const isAlreadyAllPositive = 
        exceptions 
          ? validateNumberArray(exceptions.filter((element) => element !== ""), 0, 19)
          : false
      const index = 
        isAlreadyAllPositive  
          ? getRandomNumberExcluding(0, 19)
          : getRandomNumberExcluding(0, 19, exceptions)
      answerUser(scamsMessage(userPhone, index))
      const data = { ...userData[0].Item , answered_scams : userData[0].Item['answered_scams'] ? userData[0].Item['answered_scams'] + `,${index}` : `${index}`} 
      delete data.phonenumber
      delete data.context
      putDataFromMessages(userMessagesObject, data , 'scamsMessage').then((userPutPending) => {
        Promise.all(userPutPending).then(() => res.sendStatus(200))
      })
    }
  }
}

module.exports = {customFlows}