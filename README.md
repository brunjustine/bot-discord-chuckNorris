# Bot-discord-chuckNorris

Creation of a discord bot able to interact with the Chuck Norris Jokes API.

[Discord Documentation](https://discord.js.org/#/docs/main/stable/general/welcome)

[Chuck Norris API](http://www.icndb.com/api/)

--------
###Set Up
You will nedd to create a file config.json with a strucuture like this :

```javascript
{
  "BOT_TOKEN": "YourToken",
  "prefix": "%"
}
```
---------
###Run 
```console
foo@bar:~$ npm install
foo@bar:~$ npm start
```
----------
###Bot Commands 
* %joke => Return a random joke from the Chuck Norris API.
* %jokeCount => Return the number of jokes from the Chuck Norris API.
* %joke [category] => Return a random joke from the category entered if it exists.
* %jokeCategories => Return the available API categories.
* %joke [id] => Return the joke pointed by the Chuck Norris API id.
* %ping => Return the lantern + a classic message "Pong! ».
* %prefix [prefix] => Change the bot prefix if appropriate.
* %help => List all of my commands or info about a specific command.
