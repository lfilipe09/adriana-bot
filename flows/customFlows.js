const { putDataFromMessages } = require("../db/actions")
const { bibleMessage } = require("../templates/messages/bible")
const { recipesAnswer } = require("../templates/messages/recipes")
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
}

module.exports = {customFlows}