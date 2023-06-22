const axios = require('axios');

const config = {
  headers: { 'Authorization': proccess.env.FACETOKEN, 'Content-Type': 'application/json'}
};

async function answerUser (template) {
  await axios.post('https://graph.facebook.com/v17.0/108417682295481/messages', 
  template,
  config
  ).catch((err) =>  console.log("error", err.response?.data))
}

module.exports = {answerUser}