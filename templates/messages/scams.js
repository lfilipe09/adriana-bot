const { scams } = require("../../db/mock/scams")

const scamsMessage = (user, index) => {
  const message = scams[index]
  return ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "Tome cuidado com esse golpe! 🕵️‍♀️"
    },
    "body": {
      "text": `${message}`
    },
    "footer": { 
      "text": "O que deseja fazer agora?"
    },
    "action": {
      "buttons": [
        {
          "type": "reply",
          "reply": {
            "id": "menu",
            "title": "Voltar ao menu"
          }
        },
        {
          "type": "reply",
          "reply": {
            "id": "repeat",
            "title": "Mais uma!"
          }
        }
      ]
    } 
  }
})}

const fallbackScamsMessage = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "Não entendi o que quer fazer!"
    },
    "body": {
      "text": 'Por favor, selecione uma das opções abaixo:'
    },
    "action": {
      "buttons": [
        {
          "type": "reply",
          "reply": {
            "id": "menu",
            "title": "Voltar ao menu"
          }
        },
        {
          "type": "reply",
          "reply": {
            "id": "repeat",
            "title": "Mais uma!"
          }
        }
      ]
    } 
  }
})

module.exports = { scamsMessage, fallbackScamsMessage }