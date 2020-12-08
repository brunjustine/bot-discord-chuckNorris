module.exports = {
	name: 'ping',
	description: 'Renvoie la lantence + un message classique « Pong ! »',
	execute(message, args) {
		const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
	},
};