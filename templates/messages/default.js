const greetings = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "Olá! Eu sou a Adriana 👋"
    },
    "body": {
      "text": "Estou aqui para ajudar e será um prazer guiá-lo em sua jornada rumo ao bem-estar emocional. Seja qual for a sua preocupação ou o que você gostaria de compartilhar, estou aqui para ouvir. Juntos, podemos explorar diferentes maneiras de manter sua mente ativa, descobrir novos hobbies e lembrá-lo de tomar seus medicamentos na hora certa. 😊\n\nPara começarmos, vamos fazer um rápido cadastro. Assim, poderei personalizar ainda mais minha assistência para você. Posso te fazer algumas perguntas simples para iniciar o processo de onboarding?\n\nMais uma vez, seja bem-vindo(a)! Estou animada para embarcar nessa jornada de cuidado mental com você. Vamos começar? 😉 "
    },
    "action": {
      "buttons": [
        {
          "type": "reply",
          "reply": {
            "id": "sim",
            "title": "Sim"
          }
        },
        {
          "type": "reply",
          "reply": {
            "id": "nao",
            "title": "Não"
          }
        }
      ]
    } 
  }
})

const menu = (user) => ({
	"messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive":{
    "type": "list",
    "header": {
      "type": "text",
      "text": "🌟 Olá! Tudo bem? 🌟"
    },
    "body": {
      "text": "Estou aqui para cuidar de você e te ajudar da melhor maneira. Confira as opções disponíveis clicando no botão abaixo: 😊"
    },
    "action": {
      "button": "Menu",
      "sections":[
        {
          "rows": [
            {
              "id":"jogos",
              "title": "Vamos jogar🃏"    
            },
						{
              "id":"lembrete",
              "title": "Salvar lembrete📝"    
            },
						{
              "id":"receitas",
              "title": "Vamos cozinhar🥗"    
            },
						{
              "id":"biblia",
              "title": "Ler a bíblia🙏"    
            },
            {
              "id":"positiva",
              "title": "Mensagem positiva✌️"    
            },
            {
              "id":"golpes",
              "title": "Sobre golpes🔎"    
            }
          ]
        }
      ]
    }
  }
}) 

const fallbackGreetings = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "Eita, não entendi o que disse!😢"
    },
    "body": {
      "text": "Quando se sentir pronto(a), basta selecionar uma opção abaixo para começarmos 😉 "
    },
    "action": {
      "buttons": [
        {
          "type": "reply",
          "reply": {
            "id": "sim",
            "title": "Sim"
          }
        },
        {
          "type": "reply",
          "reply": {
            "id": "nao",
            "title": "Não"
          }
        }
      ]
    } 
  }
}) 

const fallbackMenu = (user) => ({
	"messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive":{
    "type": "list",
    "header": {
      "type": "text",
      "text": "Poxa, não entendi o que você disse 😢"
    },
    "body": {
      "text": "Parece que você mandou algo que eu não entendi! Para navegar no menu e prosseguirmos, selecione uma opção no botão abaixo:"
    },
    "action": {
      "button": "Menu",
      "sections":[
        {
          "rows": [
            {
              "id":"jogos",
              "title": "Vamos jogar🃏"    
            },
						{
              "id":"lembrete",
              "title": "Salvar lembrete📝"    
            },
						{
              "id":"receitas",
              "title": "Vamos cozinhar🥗"    
            },
						{
              "id":"biblia",
              "title": "Ler a bíblia🙏"    
            },
            {
              "id":"positiva",
              "title": "Mensagem positiva✌️"    
            },
            {
              "id":"golpes",
              "title": "Sobre golpes🔎"    
            }
          ]
        }
      ]
    }
  }
}) 

module.exports = {greetings, menu, fallbackMenu, fallbackGreetings}