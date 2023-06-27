const { putDataFromMessages } = require("../db/actions")
const { hangmanWords } = require("../db/mock/hangmanWords")
const { templatebyContext } = require("../templates/context")
const { menu } = require("../templates/messages/default")
const { hangmanWordsInGame, hangmanWordsWinner, hangmanWordsLoser, fallbackHangmanWordsInGame, hangmanWordsRules } = require("../templates/messages/hangmanWords")
const { storageAnswerByContext, dbColumnName, getSubcontextByContext } = require("../templates/validations")
const { answerUser } = require("../utils/bot")
const { generateWordView } = require("../utils/generateWordView")
const { getRandomNumberExcluding } = require("../utils/randomNumber")
const { transformTextToHandle } = require("../utils/transformTextToHandle")
const { validateNumberArray } = require("../utils/validateNumbers")

const hangmanFlows = {
  hangmanWordsInGame: (userData, userPhone, answer,userMessagesObject,res) => {
    const regex = /^[a-zA-Z]$/;
    if(regex.test(answer)){
      const hangmanAnswer = userData[0].Item['hangman_answer']
      const hangmanChosenWords = userData[0].Item['hangman_chosen_words']?.split(',')
      const hangmanAttempts = userData[0].Item['hangman_attempts']
      const isCorrect = hangmanAnswer.includes(answer)
      const hiddenWord = generateWordView(hangmanAnswer, [...hangmanChosenWords, answer])
      if(isCorrect){
        if(hiddenWord.includes('_')){
          answerUser(
            hangmanWordsInGame(
              userPhone, 
              hiddenWord, 
              hangmanChosenWords 
                ? hangmanChosenWords + `,${answer}` 
                : answer, 
              hangmanAttempts
            )
          )
          const data = { 
            ...userData[0].Item , 
            hangman_chosen_words: userData[0].Item['hangman_chosen_words'] 
            ? userData[0].Item['hangman_chosen_words'] + `,${answer}` 
            : `${answer}`
          }
          delete data.phonenumber
          delete data.context
          putDataFromMessages(userMessagesObject, data , 'hangmanWordsInGame').then((userPutPending) => {
            Promise.all(userPutPending).then(() => res.sendStatus(200))
          }) 
        }else{
          answerUser(hangmanWordsWinner(userPhone))
          const data = {...userData[0].Item}
          delete data.phonenumber
          delete data.context
          delete data.hangman_answer
          delete data.hangman_chosen_words
          delete data.hangman_attempts
          putDataFromMessages(userMessagesObject, data , 'hangmanWordsWinner').then((userPutPending) => {
            Promise.all(userPutPending).then(() => res.sendStatus(200))
          })
        }
      }else{
        if(hangmanAttempts === 1){
          answerUser(hangmanWordsLoser(userPhone))
          const data = {...userData[0].Item}
          delete data.phonenumber
          delete data.context
          delete data.hangman_answer
          delete data.hangman_chosen_words
          delete data.hangman_attempts
          putDataFromMessages(userMessagesObject, data , 'hangmanWordsLoser').then((userPutPending) => {
            Promise.all(userPutPending).then(() => res.sendStatus(200))
          })
        }else{
          answerUser(
            hangmanWordsInGame(
              userPhone, 
              hiddenWord, 
              hangmanChosenWords 
                ? hangmanChosenWords + `,${answer}` 
                : answer, 
              hangmanAttempts - 1
            )
          )
          const data = { 
            ...userData[0].Item , 
            hangman_chosen_words: userData[0].Item['hangman_chosen_words'] 
            ? userData[0].Item['hangman_chosen_words'] + `,${answer}` 
            : `${answer}`,
            hangman_attempts: hangmanAttempts - 1
          }
          delete data.phonenumber
          delete data.context
          putDataFromMessages(userMessagesObject, data , 'hangmanWordsInGame').then((userPutPending) => {
            Promise.all(userPutPending).then(() => res.sendStatus(200))
          }) 
        }
      }
    }else{
      answerUser(fallbackHangmanWordsInGame(userPhone))
    }
  },
  hangmanWordsIntro: (userData, userPhone, answer,userMessagesObject,res) => {
    if(answer == 'jogar_agora'){
      const exceptions = userData[0].Item['answered_hangman']?.split(',')
      const isAlreadyAllGames = 
          exceptions 
            ? validateNumberArray(exceptions.filter((element) => element !== ""), 0, 461)
            : false
      const index = 
          isAlreadyAllGames  
            ? getRandomNumberExcluding(0, 461)
            : getRandomNumberExcluding(0, 461, exceptions)
      const newHangmanAnswer = transformTextToHandle(hangmanWords[index])
      const hiddenWord = generateWordView(newHangmanAnswer)
      answerUser(hangmanWordsInGame(userPhone, hiddenWord, '', 5))
      const data = { 
        ...userData[0].Item , 
        answered_hangman : userData[0].Item['answered_hangman'] 
          ? userData[0].Item['answered_hangman'] + `,${index}` 
          : `${index}`,
        hangman_answer: newHangmanAnswer,
        hangman_chosen_words: '',
        hangman_attempts: 5
      } 
      delete data.phonenumber
      delete data.context
      putDataFromMessages(userMessagesObject, data , 'hangmanWordsInGame').then((userPutPending) => {
        Promise.all(userPutPending).then(() => res.sendStatus(200))
      })
    }else if(answer == 'escutar_instrucoes') {
      answerUser(hangmanWordsRules(userPhone))
      const data = {...userData[0].Item}
      delete data.phonenumber
      delete data.context
      putDataFromMessages(userMessagesObject, data , 'hangmanWordsRules').then((userPutPending) => {
        Promise.all(userPutPending).then(() => res.sendStatus(200))
      })
    }else if(answer == 'voltar_ao_menu') {
      answerUser(menu(userPhone))
      const data = {...userData[0].Item}
      delete data.phonenumber
      delete data.context
      putDataFromMessages(userMessagesObject, data , 'menu').then((userPutPending) => {
        Promise.all(userPutPending).then(() => res.sendStatus(200))
      })
    }
  },
  hangmanWordsRules: (userData, userPhone, answer,userMessagesObject,res) => {
    if(answer == 'jogar_agora'){
      const exceptions = userData[0].Item['answered_hangman']?.split(',')
      const isAlreadyAllGames = 
          exceptions 
            ? validateNumberArray(exceptions.filter((element) => element !== ""), 0, 461)
            : false
      const index = 
          isAlreadyAllGames  
            ? getRandomNumberExcluding(0, 461)
            : getRandomNumberExcluding(0, 461, exceptions)
      const newHangmanAnswer = transformTextToHandle(hangmanWords[index])
      const hiddenWord = generateWordView(newHangmanAnswer)
      answerUser(hangmanWordsInGame(userPhone, hiddenWord, '', 5))
      const data = { 
        ...userData[0].Item , 
        answered_hangman : userData[0].Item['answered_hangman'] 
          ? userData[0].Item['answered_hangman'] + `,${index}` 
          : `${index}`,
        hangman_answer: newHangmanAnswer,
        hangman_chosen_words: '',
        hangman_attempts: 5
      } 
      delete data.phonenumber
      delete data.context
      putDataFromMessages(userMessagesObject, data , 'hangmanWordsInGame').then((userPutPending) => {
        Promise.all(userPutPending).then(() => res.sendStatus(200))
      })
    }else if(answer == 'voltar_ao_menu') {
      answerUser(menu(userPhone))
      const data = {...userData[0].Item}
      delete data.phonenumber
      delete data.context
      putDataFromMessages(userMessagesObject, data , 'menu').then((userPutPending) => {
        Promise.all(userPutPending).then(() => res.sendStatus(200))
      })
    }
  },
  hangmanWordsWinner: (userData, userPhone, answer,userMessagesObject,res) => {
    if(answer == 'outra_vez'){
      const exceptions = userData[0].Item['answered_hangman']?.split(',')
      const isAlreadyAllGames = 
          exceptions 
            ? validateNumberArray(exceptions.filter((element) => element !== ""), 0, 461)
            : false
      const index = 
          isAlreadyAllGames  
            ? getRandomNumberExcluding(0, 461)
            : getRandomNumberExcluding(0, 461, exceptions)
      const newHangmanAnswer = transformTextToHandle(hangmanWords[index])
      const hiddenWord = generateWordView(newHangmanAnswer)
      answerUser(hangmanWordsInGame(userPhone, hiddenWord, '', 5))
      const data = { 
        ...userData[0].Item , 
        answered_hangman : userData[0].Item['answered_hangman'] 
          ? userData[0].Item['answered_hangman'] + `,${index}` 
          : `${index}`,
        hangman_answer: newHangmanAnswer,
        hangman_chosen_words: '',
        hangman_attempts: 5
      } 
      delete data.phonenumber
      delete data.context
      putDataFromMessages(userMessagesObject, data , 'hangmanWordsInGame').then((userPutPending) => {
        Promise.all(userPutPending).then(() => res.sendStatus(200))
      })
    }else if(answer == 'voltar_ao_menu') {
      answerUser(menu(userPhone))
      const data = {...userData[0].Item}
      delete data.phonenumber
      delete data.context
      putDataFromMessages(userMessagesObject, data , 'menu').then((userPutPending) => {
        Promise.all(userPutPending).then(() => res.sendStatus(200))
      })
    }
  },
  hangmanWordsLoser: (userData, userPhone, answer,userMessagesObject,res) => {
    if(answer == 'outra_vez'){
      const exceptions = userData[0].Item['answered_hangman']?.split(',')
      const isAlreadyAllGames = 
          exceptions 
            ? validateNumberArray(exceptions.filter((element) => element !== ""), 0, 461)
            : false
      const index = 
          isAlreadyAllGames  
            ? getRandomNumberExcluding(0, 461)
            : getRandomNumberExcluding(0, 461, exceptions)
      const newHangmanAnswer = transformTextToHandle(hangmanWords[index])
      const hiddenWord = generateWordView(newHangmanAnswer)
      answerUser(hangmanWordsInGame(userPhone, hiddenWord, '', 5))
      const data = { 
        ...userData[0].Item , 
        answered_hangman : userData[0].Item['answered_hangman'] 
          ? userData[0].Item['answered_hangman'] + `,${index}` 
          : `${index}`,
        hangman_answer: newHangmanAnswer,
        hangman_chosen_words: '',
        hangman_attempts: 5
      } 
      delete data.phonenumber
      delete data.context
      putDataFromMessages(userMessagesObject, data , 'hangmanWordsInGame').then((userPutPending) => {
        Promise.all(userPutPending).then(() => res.sendStatus(200))
      })
    }else if(answer == 'voltar_ao_menu') {
      answerUser(menu(userPhone))
      const data = {...userData[0].Item}
      delete data.phonenumber
      delete data.context
      putDataFromMessages(userMessagesObject, data , 'menu').then((userPutPending) => {
        Promise.all(userPutPending).then(() => res.sendStatus(200))
      })
    }
  }
}

module.exports = {hangmanFlows}