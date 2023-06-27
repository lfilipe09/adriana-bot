const gameIntro = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "Que ótimo! Você quer jogar um jogo comigo? 🎮🤩"
    },
    "body": {
      "text": `Tenho dois jogos incríveis disponíveis para você escolher: o clássico Jogo da Forca e o empolgante Jogo do Milhão! 🕹️💰\n\nNo Jogo da Forca, desafie suas habilidades adivinhando as palavras secretas e evite que o bonequinho seja enforcado. 🪓🔠\n\nJá no Jogo do Milhão, teste seus conhecimentos gerais e arrisque-se para ganhar um prêmio em 'sabedoria' e 'aprendizado' virtual que vale mais do que um milhão de reais! 📚💡💰`
    },
    "footer": { 
      "text": "O que você escolhe?"
    },
    "action": {
      "buttons": [
        {
          "type": "reply",
          "reply": {
            "id": "menu",
            "title": "Menu"
          }
        },
        {
          "type": "reply",
          "reply": {
            "id": "forca",
            "title": "Jogo da forca"
          }
        },
        {
          "type": "reply",
          "reply": {
            "id": "milhao",
            "title": "Jogo do milhão"
          }
        }
      ]
    } 
  }
})

const gameIntroFallback = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "Eita, não entendi o que disse!"
    },
    "body": {
      "text": `Você precisa escolher entre os dois jogos incríveis disponíveis para você escolher: o clássico Jogo da Forca e o empolgante Jogo do Milhão! 🕹️💰\n\n Ou caso deseje, pode também retornar ao menu`
    },
    "footer": { 
      "text": "O que você escolhe?"
    },
    "action": {
      "buttons": [
        {
          "type": "reply",
          "reply": {
            "id": "menu",
            "title": "Menu"
          }
        },
        {
          "type": "reply",
          "reply": {
            "id": "forca",
            "title": "Jogo da forca"
          }
        },
        {
          "type": "reply",
          "reply": {
            "id": "milhao",
            "title": "Jogo do milhão"
          }
        }
      ]
    } 
  }
})

module.exports = {gameIntro, gameIntroFallback} 