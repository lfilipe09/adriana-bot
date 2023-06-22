const axios = require('axios');

const config = {
  headers: { 'Authorization': 'Bearer EAANvl8azHFIBAL1vnJnlwInmIjL38oTs2K9iGELlZBxwXqSo0ZAuteuSF55Waiql6GpaB3ljgEF53Xc3NKkPiUzisOHP8CYmdhaqxHQIfjw3ZAfkYOglLTQQYEH6VKYihzoj43TqQW8YO8oIgLeiTabWEJWrzZCsjDaD1APh3UdBUAli1xnx', 'Content-Type': 'application/json'}
};

async function answerUser (template) {
  await axios.post('https://graph.facebook.com/v17.0/108417682295481/messages', 
  template,
  config
  ).catch((err) =>  console.log("error", err.response?.data))
}

module.exports = {answerUser}