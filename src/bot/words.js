module.exports = {
  food: (bot, food, foodEmbed) => {
    bot.on('message', message => {
      if (message.content.toLowerCase() == 'food') {
        const rand = Math.floor(Math.random() * food.length);

        foodEmbed
          .setColor('#e67e22')
          .setTitle(food[rand].name)
          .setDescription(`${food[rand].price} €`)
          .setThumbnail(food[rand].img)
        
        message.channel.sendMessage(foodEmbed);
      }
    })
  },
  
  break: (bot) => {
    bot.on('message', message => {
      var d = new Date();
      if (message.content.toLowerCase() == 'break') {
        if (d.getDay() === 0 || d.getDay() === 6) {
          message.channel.sendMessage("Non, mais c'est le weekend :partying_face:")
        } else {
          if (d.getHours() === 10 && d.getMinutes() >= 30 && d.getMinutes() < 45) {
            message.channel.sendMessage("C'est la pause!! :sunglasses:")
          } else {
            message.channel.sendMessage("non :cry:")
          }
        }
      }
    })
  }
}