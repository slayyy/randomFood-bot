const Discord = require('discord.js');
const bot = new Discord.Client();

const food = require('./food.js');
const words = require('./words.js');

const token = process.env.TOKEN;

bot.login(token);

bot.on("ready", () => {
  bot.user.setPresence({
    game: {
      name: 'Random meal for you (:',
      type: 'WATCHING'
    }
  })
})

const foodEmbed = new Discord.RichEmbed();

words.food(bot, food, foodEmbed);
words.break(bot)