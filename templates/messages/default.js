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
            "id": "greetings_1",
            "title": "Sim"
          }
        },
        {
          "type": "reply",
          "reply": {
            "id": "greetings_2",
            "title": "Não"
          }
        }
      ]
    }
  }
})

const menu = (user) => ({})

module.exports = {greetings, menu}