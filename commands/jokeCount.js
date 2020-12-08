const axios = require('axios');

module.exports = {
	name: 'jokeCount',
	description: 'Renvoie le nombre de blagues de l’API Chuck Norris',
	execute(message, args) {
		axios.get("http://api.icndb.com/jokes/count")
        .then(response => message.reply(`Number of jokes : ${response.data.value}`))
        .catch(error => console.log(error));
	},
};