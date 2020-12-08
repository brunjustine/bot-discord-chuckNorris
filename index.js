const Discord = require('discord.js');
const config = require('./config.json');
const axios = require('axios');

const client = new Discord.Client();
const prefix = "%";

client.on("message", function(message) {
  //author message est un bot ?
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift();

  switch(command) {
    case 'joke':
      if (parseInt(args[0])) {
        
        //with id
        axios.get("http://api.icndb.com/jokes/"+args)
        .then(response => message.reply(` ${response.data.value.joke}`))
        .catch(error => console.log(error));
      
      } else if (args[0]) {

        //with categorie
        axios.get("http://api.icndb.com/jokes/random/?limitTo="+args)
        .then(response => message.reply(` ${response.data.value.joke}`))
        .catch(error => console.log(error));

      } else {

        //with nothing
        axios.get("http://api.icndb.com/jokes/random")
        .then(response => message.reply(` ${response.data.value.joke}`))
        .catch(error => console.log(error));
      }
      break;

    case 'jokeCount':
      axios.get("http://api.icndb.com/jokes/count")
      .then(response => message.reply(`Number of jokes : ${response.data.value}`))
      .catch(error => console.log(error));
      break;
    
    case 'jokeCategories':
      axios.get("http://api.icndb.com/categories")
      .then(response => message.reply(`Categories : ${response.data.value}`))
      .catch(error => console.log(error));
      break;

    default:
      message.reply('command not implement, sorry !')
  }
});

client.login(config.BOT_TOKEN);