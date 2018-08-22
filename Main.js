/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
    client.channels.get("469262685645701141").send({
        embed: {
            color: 3447003,
            description: "The Bot has Updated!"
        }
    });
});

// Create an event listener for messages
client.on('message', message => {
    // If the message is "ping"
    if (message.content === '!testembed') {
        // Send "pong" to the same channel
        message.channel.send({
        embed: {
           color: 3447003,
           description: "A very simple Embed!"
        }
        });
    }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NDgwNDgxMTU0MjQ4NDc0NjQ1.Dl37og.1G2R9DJyfXBTs_uXVPvFx2az4PQ');


// client.on("ready", () => {
//     client.channels.get("427205992015462401").send({embed: {
//         color: 3066993,
//         author: {
//           name: client.user.username,
//           icon_url: client.user.avatarURL
//         },
//         title: "The Bot has Updated!",
//         url: "https://discord.gg/6C3xjY4",
//         description: "Riverrain123 Bot has Updated!",
//         fields: [{
//             name: "Started Development!",
//             value: "The Riverrain123 bot is now in development. Hoping for release later this week."
//           }
//         ],
//         timestamp: new Date(),
//         footer: {
//           icon_url: client.user.avatarURL,
//           text: "Bot developed by Orangedude4221"
//         }
//       }
//     });
// });

