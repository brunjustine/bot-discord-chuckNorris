const Discord = require('discord.js');
const fs = require('fs');


module.exports = {
	name: 'prefix',
	description: 'Change le préfixe du bot s’il est convenable',
	execute(message, args) {
        //invalid syntax    
        if (!args[0] || args[0 == "help"]) return message.reply("Usage: !prefix <NewPrefix>");

        //invalid prefix
        if (args[0].length != 1 ) return message.reply("incorrect prefix | prefix can't be more than one char")

        let prefixes = JSON.parse(fs.readFileSync("./prefixes.json","utf8"));
        prefixes[message.guild.id] = {
            prefixes : args[0]
        };

        fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (error) => {
            if (error) console.log(error)
        });

        //display the new prefix to the user
        let sEmbed = new Discord.MessageEmbed()
        .setColor('#FF9900')
        .setTitle('Prefix set!')
        .setDescription(`Set to ${args[0]}`);
        message.channel.send(sEmbed);

	},
};