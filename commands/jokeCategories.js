const axios = require('axios');

module.exports = {
	name: 'jokeCategories',
	description: 'Renvoie les catégories disponibles de l’API',
	execute(message, args) {
		axios.get("http://api.icndb.com/categories")
        .then(response => message.reply(`Categories : ${response.data.value}`))
        .catch(error => console.log(error));
	},
};