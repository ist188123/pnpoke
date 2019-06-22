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


  
  
  function alteraHora(nomecanal, ahora) {
    msg.channel.send({
      embed: {
        color: 3447003,
        description: "---1-->:" + nomecanal + " " + ahora
      }
    });
    var thoras = nomecanal.split("-");
    var horas = thoras[thoras.length - 3];

    // console.log(horas)
    var novotitulo = nomecanal.replace(horas, ahora)
    //onsole.log(novotitulo)
    msg.channel.send({
      embed: {
        color: 3447003,
        description: "novotitulo----2---->:" + novotitulo
      }
    });
    msg.guild.channels.find("name", nomecanal).setName(novotitulo);

    msg.channel.send({
      embed: {
        color: 3447003,
        description: "novotitulo:----3--->" + novotitulo
      }
    });



  }

if (channel.name.startsWith('_raid')) {
  listedChannels.push(channel.name);




  //  msg.reply("aqui 2"+channel.name);


  var raidcanal = msg.guild.channels.find("name", channel.name);


if (msg.content.startsWith('!h') && msg.content.length > 2) {
  mewtwo = msg.content.substring(2);
  msg.channel.send({
    embed: {
      color: 3447003,
      description: "---ddd---mewtwo:" + mewtwo
    }
  });

   alteraHora(raidcanal,mewtwo)
  msg.channel.send({
    embed: {
      color: 3447003,
      description: "----ee----novotitulo:" + mewtwo
    }
  });
}
//--fim novo --
 //--------------------------------------     




        
  }





  //  if (msg.content.startsWith('%c')) {
  //  let canal = msg.content.substring(3);

  //   setTimeout(myFunc, 5500, canal);

  //   msg.guild.createChannel(canal, "text");
  //  msg.guild.createRole({name:canal}) ;


  //   }






  //--- fim teste ----

});

client.login(process.env.BOT_TOKEN);
