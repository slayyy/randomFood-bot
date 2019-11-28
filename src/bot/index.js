const Discord = require('discord.js');
const bot = new Discord.Client();
const food = require('./food.js');

const aws = require('aws-sdk');

let s3 = new aws.S3({
  TOKEN: process.env.TOKEN,
});

const token = s3.config.TOKEN;



bot.on('message', message => {
  if(message.content.toLowerCase() == 'food') {
    const rand = Math.floor(Math.random() * food.length);
    message.channel.sendMessage(`${food[rand].name} => ${food[rand].price} €`)
  }
})

bot.on('ready', () => {
  bot.user.setPresence({game: {name: 'Random meal for you (:'}})
})

bot.login(token);


bot.on('message', message => { 
  var d = new Date();
  if(message.content.toLowerCase() == 'break') {  
    if(d.getDay() === 0 || d.getDay() === 6){
      message.channel.sendMessage("Non, mais c'est le weekend :partying_face:")
    }else{
      if(d.getHours() === 10 && d.getMinutes() >= 30 && d.getMinutes() < 45){
        message.channel.sendMessage("C'est la pause!! :sunglasses:")
      }
      else{
        message.channel.sendMessage("non :cry:")
      }
  }
  }
  })