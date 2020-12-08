const axios = require('axios');

module.exports = {
	name: 'joke',
    description: 'Renvoie une blague aléatoire provenant de l’API Chuck Norris\n'+
                    'si <id> : renvoie la blague pointée,\n'+
                    'si <categorie> renvoie une blague alea toire de cette catégorie',
	execute(message, args) {
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
	},
};