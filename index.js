
const Discord = require("discord.js");

const client = new Discord.Client();

const http = require('http');

const tesseract = require(TESSDATA_PREFIX)
//console.log(tamanhoFicheiro)









client.on("message", async (msg) => {
  


       
          var Attachment = (msg.attachments).array();
          msg.channel.send(Attachment); //outputs array
          msg.channel.send(Attachment[0].url);
         
     


  //--- fim teste ----

});

client.login(process.env.BOT_TOKEN);
