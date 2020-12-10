const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');

//start Bot
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

//get all commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", function(message) {
  //get prefix
  let prefix = JSON.parse(fs.readFileSync("./config.json","utf8")).prefix;

  //author message est un bot ?
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  //analize the user command
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift();

  //command doesn't exist
  if (!bot.commands.has(command)) return;

  //exec command
  try {
    bot.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});

bot.login(config.BOT_TOKEN);