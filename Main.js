const Discord = require("discord.js");
const client = new Discord.Client();
const snekfetch = require("snekfetch");
const website = "http://xyz.potato-host.com/puddingWhitelistCheck.php?key="
const website2 = "http://xyz.potato-host.com/puddingAddWhitelist.php?Key="
var PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('3a3f03696725a46033929f7ca868f1f4');


client.on("ready", () => {
    client.channels.get("424208779849236483").send({embed: {
        color: 3066993,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Update Recieved!",
        url: "https://discord.gg/GwmHMfE",
        description: "Cyber BOT has updated!",
        fields: [{
            name: "- Working on RWF (Remote Whitelist Function) :white_check_mark: ",
            value: "Will be able to whitelist HWIDs from the discord with the bot."
          },
          {
            name: "- Working on WSF (Whitelist Status Function) :white_check_mark: ",
            value: "Will be able to view if you're whitelisted/blacklisted/neutral."
          },
          {
              name: "- Purchase Function :white_check_mark: ",
              value: "Allows users to quickly purchase Cyber."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
        }
      }
    });
});

client.on("message", (message) => {
    if (message.channel.type == "dm"){
    let args = message.content.split(" ").slice(1);    
    if (message.content.startsWith(";buy")){
        client.users.get('356506864231514112').send({embed: {
            color: 3066993,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Request Recieved!",
            url: "https://discord.gg/GwmHMfE",
            description: "A purchase request has been recieved.",
            fields: [{
                name: "Username",
                value: message.author.username
              },
              {
                  name: "User ID",
                  value: message.author.id
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
            }
          }
        });
        message.author.send({embed: {
            color: 3066993,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Request Sent!",
            url: "https://discord.gg/GwmHMfE",
            description: "Your request has been sent.",
            fields: [{
                name: "Your request has been sent to `Pudding Mug#6560` for a purchase!",
                value: "Please awaite a response."
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
            }
          }
        });
    } else
    if (message.content.startsWith(";hds")){
        var HWIND = args.join(" ");
        snekfetch
  .get(website+HWIND)
  .then(function (data) {
    if(data.body.toString().includes('1')){
      message.delete();
        console.log("Whitelisted. " + HWIND);
        message.author.sendMessage({embed: {
            color: 3066993,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Whitelist Status",
            url: "https://discord.gg/GwmHMfE",
            description: "Whitelist status for your HWID..",
            fields: [{
                name: HWIND+" is **WHITELISTED**.",
                value: "You can use Cyber."
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
            }
          }
        })
    }
    else if (data.body.toString().includes('0')){
      message.delete();
        console.log("Not whitelisted. Tried to use "+HWIND);
        message.author.sendMessage({embed: {
            color: 15158332,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Whitelist Status",
            url: "https://discord.gg/GwmHMfE",
            description: "Whitelist status for your HWID..",
            fields: [{
                name: HWIND+" is **NOT WHITELISTED**.",
                value: "You can **NOT** use Cyber."
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
            }
          }
        })
    }
    else if (message.content == ";hds"){
        message.author.send({embed: {
            color: 15158332,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Invalid HWID",
            url: "https://discord.gg/GwmHMfE",
            description: "This HWID is invalud.",
            fields: [{
                name: HWIND+" is not a valid HWID.",
                value: "You can **NOT** use Cyber."
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
            }
          }
        })
    }
    else if (!HWIND){
        message.author.send({embed: {
            color: 15158332,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Invalid HWID",
            url: "https://discord.gg/GwmHMfE",
            description: "This HWID is invalud.",
            fields: [{
                name: HWIND+" is not a valid HWID.",
                value: "You can **NOT** use Cyber."
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
            }
          }
        })
    }
    }
)}
else
if (message.content.startsWith(";wl")){
  if (message.author.id == "223557159151992832" || message.author.id == "225631118223867914" || message.author.id == "279627951283372033" || message.author.id == "356506864231514112"){
    message.delete();
    var HWIND = args.join(" ");
    snekfetch
.get(website2+HWIND)
.then(function (data) {
if(data.body.toString().includes('1')){
    console.log("Whitelisted " + HWIND);
    message.author.sendMessage({embed: {
        color: 3066993,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Whitelisted!",
        url: "https://discord.gg/GwmHMfE",
        description: "Info below.",
        fields: [{
            name: HWIND+" was whitelisted successfully!",
            value: HWIND+" can use Cyber."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
        }
      }
    })
}
else if (data.body.toString().includes('0')){
    console.log("Error whitelisting "+HWIND);
    message.author.sendMessage({embed: {
        color: 15158332,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "There was an error...",
        url: "https://discord.gg/GwmHMfE",
        description: "Error was returned.",
        fields: [{
            name: HWIND+" has not been whitelisted.",
            value: "You can **NOT** use Cyber. Please send a DM to my creator."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
        }
      }
    })
}
else if (message.content == ";wl"){
  message.author.sendMessage({embed: {
        color: 15158332,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Invalid HWID",
        url: "https://discord.gg/GwmHMfE",
        description: "This HWID is invalud.",
        fields: [{
            name: HWIND+" is not a valid HWID.",
            value: "You can **NOT** use Cyber."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
        }
      }
    })
}
else if (!HWIND){
  message.author.sendMessage({embed: {
        color: 15158332,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Invalid HWID",
        url: "https://discord.gg/GwmHMfE",
        description: "This HWID is invalud.",
        fields: [{
            name: HWIND+" is not a valid HWID.",
            value: "You can **NOT** use Cyber."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Remember: If your profile pic is from an anime, your opinion doesn't count."
        }
      }
    })
}
}
)}}
}
        
})




client.login(process.env.TOKEN);
