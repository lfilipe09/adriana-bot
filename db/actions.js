const AWS = require('aws-sdk')

const dynamoDb = new AWS.DynamoDB.DocumentClient();

async function getDataFromMessages(messages){
  return messages.map((message)=>{
    const userInfo = {
    TableName: 'onboarding',
    Key: {
      phonenumber: message.from,
      }
    }
    return dynamoDb.get(userInfo).promise()
  })

}

async function putDataFromMessages(messages, newData, newContext){
  return messages.map((message)=>{
      const newUserInfo = {
      TableName: 'onboarding',
      Item: {
      phonenumber: message.from,
      context: newContext,
      ...newData
      }
      }
      return dynamoDb.put(newUserInfo).promise()
    })
}

async function deleteDataFromMessages(messages){
  return messages.map((message)=>{
    const userInfo = {
    TableName: 'onboarding',
    Key: {
      phonenumber: message.from
      }
    }
    return dynamoDb.delete(userInfo).promise()
  })

}

module.exports = {getDataFromMessages, putDataFromMessages, deleteDataFromMessages}