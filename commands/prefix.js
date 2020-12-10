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

        fs.readFile('./config.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
            obj = JSON.parse(data); //now it an object
            obj.prefix = args[0];
            json = JSON.stringify(obj,null,2); //convert it back to json
            fs.writeFileSync("./config.json", json, (error) => {
                if (error) console.log(error)
            });
        }});       

        //display the new prefix to the user
        let sEmbed = new Discord.MessageEmbed()
        .setColor('#FF9900')
        .setTitle('Prefix set!')
        .setDescription(`Set to ${args[0]}`);
        message.channel.send(sEmbed);

	},
};