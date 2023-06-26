const { recipes } = require("../../db/mock/recipes")

const recipesIntro = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "Hora de se aventurar na cozinha! 🍳👩‍🍳"
    },
    "body": {
      "text": "Cozinhar é uma atividade maravilhosa e cheia de sabor. Vamos preparar algo incrível juntos! 🌟\n\nAgora me conta, você prefere uma receita doce ou salgada? 😋🍩🍔"
    },
    "action": {
      "buttons": [
        {
          "type": "reply",
          "reply": {
            "id": "doce",
            "title": "Doce"
          }
        },
        {
          "type": "reply",
          "reply": {
            "id": "salgada",
            "title": "Salgada"
          }
        }
      ]
    } 
  }
})

const recipesAnswer = (user, index) => {
  const allRecipes = [...recipes.salgada, ...recipes.doce]
  const recipe = allRecipes[index]
  return({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "Aqui está a sua receita! 🧑‍🍳"
    },
    "body": {
      "text": `${recipe}`
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

const fallbackRecipesIntro = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "Vixi, não entendi sua resposta"
    },
    "body": {
      "text": "Preciso que me conte se você prefere uma receita doce ou salgada? Por favor, selecione uma opção abaixo 😋🍩🍔"
    },
    "action": {
      "buttons": [
        {
          "type": "reply",
          "reply": {
            "id": "doce",
            "title": "Doce"
          }
        },
        {
          "type": "reply",
          "reply": {
            "id": "salgada",
            "title": "Salgada"
          }
        }
      ]
    } 
  }
})

const fallbackRecipesAnswer = (user) => {
  return({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "Vixi, não entendi sua resposta"
    },
    "body": {
      "text": 'Por favor, pressione um dos botões abaixo:'
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


module.exports = {recipesIntro, recipesAnswer, fallbackRecipesIntro, fallbackRecipesAnswer}