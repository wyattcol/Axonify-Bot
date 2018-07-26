/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDcxMDQyOTEyMTk3NTQxODg5.Djumog.nXFl1mL5d-x1fGCEPKH0sjfBrIk';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var itemwon = "";
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '!SpinBasicCrate') {
    // Send "pong" to the same channel
    
    var int = getRandomInt(2);
    if (int = 1) {
    itemwon = "1$";
    }
    else if (int = 2) {
    itemwon = "2$";
    }
  message.channel.send({embed: {
      color: 3447003,
  description: "You recieved a " + itemwon
}});
  // message.channel.send("`Axonify is currently in development! Releasing soon.`")
  }
});


// Log our bot in
client.login(token);
