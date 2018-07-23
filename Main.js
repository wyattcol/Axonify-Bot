/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDcxMDQyOTEyMTk3NTQxODg5.DjfG2Q._vqWK6jUW8L7XLpehKdRmRMx2pA';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '!status') {
    // Send "pong" to the same channel
      const numEmb = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setAuthor("basic", 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/120px-Yes_Check_Circle.svg.png')
  .addField("Axonify is currently in development! Releasing soon.")
  // message.channel.send("`Axonify is currently in development! Releasing soon.`")
  }
});


// Log our bot in
client.login(token);
