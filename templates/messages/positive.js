const { positiveMessages } = require("../../db/mock/positiveMessages")

const positiveMessage = (user, index) => {
  const message = positiveMessages[index]
  return ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "Desejo que o seu dia seja repleto de boas energias.☀️"
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

const fallbackPositiveMessage = (user) => ({
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
 
module.exports = { positiveMessage, fallbackPositiveMessage }