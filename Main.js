const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDcxMDQyOTEyMTk3NTQxODg5.DjfFfg.akT2UawKbMyh7epj-pRSeFrx_4E';
VideoLink = ""


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
	let args = message.content.split(" ").slice(0);
	if (words[0] === '!Status') {
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Status",
    url: VideoLink,
    description: "Status of Axonify",
    fields: [{
        name: "Status",
        value: "In Development"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: " "
    }
  }
});

	}
});

client.login(token);
