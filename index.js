
const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "+";
const http = require('http');


//console.log(tamanhoFicheiro)









client.on("message", async (msg) => {
  let mewtwo = "";
  let cor = "0x00AE86";
  let mais = "";
  let autor = ""
  let quantidade = 0;
  let obs = "";
  var regra = "Mod"
  let pkmraid = "Desconhecido";
  let adicional = "";





  if (msg.channel.name.startsWith('_raid')) {





    if (msg.content.startsWith('!h') && msg.content.length > 2) {

      msg.channel.send({
        embed: {
          color: 3447003,
          description: "---msg.channel.name---:" + msg.channel.name
        }
      });

      var nomecanal = msg.channel.name
      var thoras = nomecanal.split("-");
      var horas = thoras[thoras.length - 3];



      var novahora = msg.content.substring(2);

      // console.log(horas)
      var novotitulo = nomecanal.replace(horas, novahora)
      msg.channel.send({
        embed: {
          color: 3447003,
          description: "---novotitulo---:" + novotitulo
        }
      });
      //onsole.log(novotitulo)

      msg.guild.channels.find("name", nomecanal).setName(novotitulo);



    }
    //--fim novo --
    //--------------------------------------     





  }








  //--- fim teste ----

});

client.login(process.env.BOT_TOKEN);
