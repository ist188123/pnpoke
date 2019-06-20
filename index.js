const Discord = require('discord.js')
const client = new Discord.Client()
const http = require('http');




client.on("message", async (msg) => {
 
  
  
 if (msg.content.startsWith('%')) {

  msg.guild.channels.find("name", "general").setName("Testing");


      }
})
client.login(process.env.BOT_TOKEN);
