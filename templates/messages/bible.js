const { bible } = require("../../db/mock/bible")

const bibleMessage = (user, index) => {
  const message = bible[index]
  return ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "Que a Palavra de Deus esteja sempre com você 🕊"
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

const fallbackBible = (user) => ({
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

module.exports = {bibleMessage,fallbackBible}