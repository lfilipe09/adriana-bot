const onboardingOne = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "text",
  "text": { 
    "preview_url": false,
    "body": "*PERGUNTA 01 de 04*\n\nEstou muito feliz em tê-lo(a) aqui!🌟\nPara iniciarmos nossa jornada juntos, preciso conhecer você melhor.\n\n Qual é o seu nome? 😊"
  }
})

const onboardingTwo = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "text",
  "text": { 
    "preview_url": false,
    "body": "*PERGUNTA 02 de 04*\n\nQue nome lindo!\nAgora, posso saber qual é a sua idade?\n\n(digite somente os números. Ex: 25, 47)"
  }
})

const onboardingThree = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "text",
  "text": { 
    "preview_url": false,
    "body": "*PERGUNTA 03 de 04*\n\nQue legal!\nEm que estado você mora?\n\n(digite a sigla. Ex: SP, RJ)"
  }
})

const onboardingFour = (user) => ({
	"messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive":{
    "type": "list",
    "body": {
      "text": "*PERGUNTA 04 de 04*\n\nPara que eu possa me comunicar de forma mais adequada, posso saber qual é o seu gênero?"
    },
    "action": {
      "button": "Gêneros",
      "sections":[
        {
          "rows": [
            {
              "id":"masculino",
              "title": "Masculino"    
            },
						{
              "id":"feminino",
              "title": "Feminino"    
            },
						{
              "id":"outro",
              "title": "Outro"    
            }
          ]
        }
      ]
    }
  }
})

const refuseOnboarding = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "text",
  "text": { 
    "preview_url": false,
    "body": "Ah, que pena! Fico triste que você não tenha iniciado o nosso cadastro. Mas não se preocupe, estarei aqui, aguardando ansiosamente para receber você novamente quando estiver pronto para começar. Estarei à disposição para ajudar em qualquer momento que desejar. 😊"
  }
})

const fallbackOnboardingTwo = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "text",
  "text": { 
    "preview_url": false,
    "body": "Ops! Parece que algo deu errado. Por favor, digite apenas valores numéricos para idade, sem utilizar caracteres especiais ou do alfabeto.\nExemplo: 45\n\nVamos tentar novamente? 😊"
  }
})

const fallbackOnboardingThree = (user) => ({
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "text",
  "text": { 
    "preview_url": false,
    "body": "Ops! Parece que algo deu errado. Por favor, digite apenas siglas para a cidade, sem utilizar caracteres especiais ou números.\nExemplo: SP, DF, RJ\n\nVamos tentar novamente? 😊"
  }
})

const fallbackOnboardingFour = (user) => ({
	"messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": user,
  "type": "interactive",
  "interactive":{
    "type": "list",
    "body": {
      "text": "Ops! Parece que algo deu errado. Por favor, selecione uma das opções do seletor abaixo\n\nVamos tentar novamente? 😊"
    },
    "action": {
      "button": "Gêneros",
      "sections":[
        {
          "rows": [
            {
              "id":"masculino",
              "title": "Masculino"    
            },
						{
              "id":"feminino",
              "title": "Feminino"    
            },
						{
              "id":"outro",
              "title": "Outro"    
            }
          ]
        }
      ]
    }
  }
})

module.exports = {
  onboardingOne, 
  onboardingTwo, 
  refuseOnboarding, 
  fallbackOnboardingTwo, 
  onboardingThree, 
  onboardingFour, 
  fallbackOnboardingThree,
  fallbackOnboardingFour
}