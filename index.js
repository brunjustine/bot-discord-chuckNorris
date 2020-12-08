const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');


const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", function(message) {
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json","utf8"));
  
  
  if(!prefixes[message.guild.id]) {
    prefixes[message.guild.id]= {
      prefixes:config.prefix
    };
  }
  
  let prefix = prefixes[message.guild.id].prefixes

  //author message est un bot ?
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift();

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});

bot.login(config.BOT_TOKEN);