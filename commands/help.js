const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push('Here\'s a list of all my commands:\n');
            data.push(commands.map(command => `**${command.name}** \n${command.description} \n\n`));
            console.log(data);
            return message.reply(data, { split: true })
                .catch(error => {
                    console.error(`Error Help Command :${message.author.tag}.\n`, error);
                });
        }
	},
};