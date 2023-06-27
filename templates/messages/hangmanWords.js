const hangmanWordsIntro = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "🎮🔠 Jogo da Forca! 🔠🎮"
    },
    "body": {
      "text": `Prepare-se para um desafio emocionante! No Jogo da Forca, sua missão é descobrir a palavra oculta, letra por letra, antes que o bonequinho seja enforcado. 😮💀\n\nO que você prefere? Vamos começar a ação ou quer conhecer as instruções primeiro? `
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
            "id": "play",
            "title": "Jogar agora!"
          }
        },
        {
          "type": "reply",
          "reply": {
            "id": "instructions",
            "title": "Escutar instruções"
          }
        }
      ]
    } 
  }
})

const fallbackHangmanWordsIntro = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "Não entendi!"
    },
    "body": {
      "text": `Por favor, selecione uma das opções abaixo:`
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
            "id": "play",
            "title": "Jogar agora!"
          }
        },
        {
          "type": "reply",
          "reply": {
            "id": "instructions",
            "title": "Escutar instruções"
          }
        }
      ]
    } 
  }
})

const hangmanWordsRules = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "🎮🔠 Jogo da Forca - Regras e Diversão! 🔠🎮"
    },
    "body": {
      "text": `Ei, você está pronto para um desafio emocionante? No Jogo da Forca, você terá a chance de testar seus conhecimentos e habilidades linguísticas de forma divertida! 🤓💡\n\nAqui estão as regras básicas do jogo:\n\n1️⃣ O objetivo é descobrir a palavra oculta. Você verá uma linha representando cada letra da palavra que precisa adivinhar.\n\n2️⃣ Você terá um número limitado de tentativas para adivinhar corretamente as letras da palavra. Cada vez que você errar, você perde uma tentativa. Se perder todas as tentativas o jogo termina.\n\n3️⃣ Você pode chutar uma letra de cada vez. Se a letra estiver na palavra, ela será revelada nas posições corretas. Caso contrário, você perde uma tentativa.\n\nAgora que você sabe as regras, está pronto para encarar o desafio? 🤔💪\nEstou animada para jogar com você! 🎉🔤`
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
            "id": "play",
            "title": "Jogar agora!"
          }
        }
      ]
    } 
  }
})

const fallbackHangmanWordsRules = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "Oops! Parece que você não selecionou uma opção correta"
    },
    "body": {
      "text": `Vamos lá, escolha uma opção abaixo e vamos começar a diversão! 🎮✨`
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
            "id": "play",
            "title": "Jogar agora!"
          }
        }
      ]
    } 
  }
})

const hangmanWordsInGame = (user, hiddenWord, chosenWords, attempts) =>({
  "messaging_product": "whatsapp",
  "preview_url": true,
  "to": user,
  "text": {
      "body": `🎮🔠 *Jogo da Forca!* 🔠🎮\n\n*Palavra:* ${hiddenWord}\n\n*Letras já escolhidas:* ${chosenWords}\n*Tentativas:* ${attempts}\n\nDigite abaixo 1 letra como sua tentativa.`
  }
})

const fallbackHangmanWordsInGame = (user) =>({
  "messaging_product": "whatsapp",
  "preview_url": true,
  "to": user,
  "text": {
      "body": `Desculpe, mas não consegui entender sua mensagem corretamente. Parece que ela não está no formato adequado para o jogo da forca. Mande apenas a letra desejada. \nExemplo: G`
  }
})

const hangmanWordsWinner = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "Você é um(a) verdadeiro(a) vencedor(a)!!🎉🎊"
    },
    "body": {
      "text": `Agora, você pode escolher entre jogar novamente e desafiar suas habilidades ou voltar ao menu principal e explorar outras opções pra gente se divertir.\n\nEstou ansiosa para te ver novamente em ação! 🎮💪`
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
            "id": "play",
            "title": "Outra vez!"
          }
        }
      ]
    } 
  }
})

const fallbackHangmanWordsWinner = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "Não entendi!"
    },
    "body": {
      "text": `Por favor, selecione uma das opções abaixo:`
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
            "id": "play",
            "title": "Outra vez!"
          }
        }
      ]
    } 
  }
})

const hangmanWordsLoser = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "Ah, que pena! 🥺️"
    },
    "body": {
      "text": `Infelizmente você não conseguiu vencer o jogo desta vez. Mas não desanime, pois a diversão continua! A cada partida você ganha mais experiência e conhecimento.\n\nQue tal tentar novamente e desafiar suas habilidades? Tenho certeza de que na próxima você vai arrasar! Ou se preferir, você pode explorar outras opções incríveis em nosso menu principal.\n\nLembre-se: cada desafio é uma oportunidade de aprendizado e crescimento. Você é capaz de superar qualquer obstáculo, eu acredito em você! 💪💫`
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
            "id": "play",
            "title": "Outra vez!"
          }
        }
      ]
    } 
  }
})

const fallbackHangmanWordsLoser = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "Não entendi!"
    },
    "body": {
      "text": `Por favor, selecione uma das opções abaixo:`
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
            "id": "play",
            "title": "Outra vez!"
          }
        }
      ]
    } 
  }
})

module.exports = {
  hangmanWordsIntro, 
  fallbackHangmanWordsIntro, 
  hangmanWordsRules, 
  fallbackHangmanWordsRules,
  hangmanWordsInGame,
  fallbackHangmanWordsInGame,
  hangmanWordsWinner,
  fallbackHangmanWordsWinner,
  hangmanWordsLoser,
  fallbackHangmanWordsLoser
}