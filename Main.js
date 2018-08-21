/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDgwNDgxMTU0MjQ4NDc0NjQ1.Dl37og.1G2R9DJyfXBTs_uXVPvFx2az4PQ';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});


client.on("ready", () => {
    client.channels.get("427205992015462401").send({embed: {
        color: 3066993,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "The Bot has Updated!",
        url: "https://discord.gg/6C3xjY4",
        description: "Riverrain123 Bot has Updated!",
        fields: [{
            name: "Started Development!",
            value: "The Riverrain123 bot is now in development. Hoping for release later this week."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Bot developed by Orangedude4221"
        }
      }
    });
});



client.on('message', message => {
  // If the message is "ping"
  var words = message.content.split(' ')
	if (words[0] === '!!vote') {
  message.channel.send({embed: {
      color: 3447003,
  description: "Successfully Voted for the " + words[1] + " Series!"
}});
  }
});


// Log our bot in
client.login(token);
