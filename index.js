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


  let team_mystic = msg.guild.roles.find("name", "mystic");
  let team_valor = msg.guild.roles.find("name", "valor");
  let team_instinct = msg.guild.roles.find("name", "instinct");

  //imagens equipas
  let team_imagem = "";
  const valor = client.emojis.find("name", "valor");
  const mystic = client.emojis.find("name", "mystic");
  const instinct = client.emojis.find("name", "instinct");

  function alteraHora(nomecanal, ahora) {
    msg.channel.send({
      embed: {
        color: 3447003,
        description: "ATENÇÃO:" + nomecanal + " " + ahora
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
        description: "novotitulo:" + novotitulo
      }
    });
    msg.guild.channels.find("name", "testing").setName(novotitulo);

    msg.channel.send({
      embed: {
        color: 3447003,
        description: "novotitulo:" + novotitulo
      }
    });



  }



  function leinforaid(pCode, cb) {  //leraud

    http.request(pCode).on('response', function (response) {
      var data = '';
      response.on("data", function (chunk) {
        data += chunk;
      });
      response.on('end', function () {
        var pCJSON = JSON.parse(data);
        cb(pCJSON);

      });
    }).end();
  }


  //---------------------------------------------------	
  //informação 	
  //---------------------------------------------------	






  //---------------------------------------------------		
  //fim informacao
  //---------------------------------------------------		


  function horaCanal(offset) {
    var d = new Date();

    var sunriseMills = d.getTime() + (d.getTimezoneOffset() * 60000);;

    return textTime = new Date(sunriseMills + (3600000 * offset))
      .toLocaleTimeString({ hour: 'numeric', minute: 'numeric' });
  }


  function myFunc(arg) {


    msg.guild.channels.find("name", arg).sendMessage({
      embed: {
        color: 16580627,
        title: "Olá Treinadores\nEste canal é temporário e será apagado às " + horaCanal('+2.5'),
        description: "Para mais informação consultar " + msg.guild.channels.find("name", "tutorial-raids"),


        timestamp: new Date(),
        footer: {
          icon_url: "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png",
          text: "PN PoGo Raids, pubicado - Pinhal Novo, pubicado "
        }

      }
    });


  }




  function apagacanal(arg) {
    // setTimeout(function () {
    msg.guild.channels.find("name", arg).delete();

    //     }, 20000);

  }




  if (msg.channel.name.startsWith('_raid')) {






    //apaga mensagem - retira da raid
    if (msg.content.startsWith('👎')) {
      autor = msg.author;


      // msg.reply(msg.channel.name);//nome do canal onde esta


      let xpto = msg.channel.fetchMessages()
        .then(messages => messages.array().forEach(
          message => message.author.equals(autor) && message.delete()



        ));


      setTimeout(function () {

        // msg.channel.send(bicho);
        msg.channel.send("->" + autor + " ,saiu da RAID.");
      }, 1500);


    }
    //fim ----



    //+++++

    function delmsgdocanal(nomecanal) {

      let xpto = msg.guild.channels.find("name", nomecanal).fetchMessages()
        .then(messages => messages.array().forEach(
          message => message.delete()



        ));
    }



    //++++







    //-------------------------------------------
    if (msg.content.startsWith('👍') || msg.content.startsWith(':+1:') || msg.content.startsWith('->') || msg.content.startsWith('%') || msg.content.startsWith('!exraid') || msg.content.startsWith('!t') || msg.content.startsWith('!h')) {


      //paga todas as mensagens do canal
      delmsgdocanal("raids-pinhal-novo");



      //-----
      //le os canais que das raids _raids
      let raidcanal = "";
      const listedChannels = [];
      msg.guild.channels.forEach(channel => {



        if (channel.name.startsWith('_raid')) {
          listedChannels.push(channel.name);




          //  msg.reply("aqui 2"+channel.name);


          raidcanal = msg.guild.channels.find("name", channel.name);




          //-----

          //pelo teste  let raidcanal = msg.channel.name;



          var array = [];

          adicional = "";
          mewtwo = "";
          pkmraid = "";









          //--------------------------------
          //le todas as mensagens do canal
          //------------------------
          msg.guild.channels.find("name", channel.name).fetchMessages({ limit: 100 }).then(msg => {
            msg.forEach(msg => {

              //  msg.reply("aqui 3"+channel.name);

              //msg inicia com %
              if (msg.content.startsWith('%')) {
                pkmraid = msg.content.substring(1);
                array.push(msg.content);
                //  msg.channel.send(pkmraid);
              }

              if (msg.content.startsWith('!exraid')) {
                mewtwo = msg.content.substring(1);
                array.push(msg.content);
              }
              //tempo da raid em horas    
              if (msg.content.startsWith('!t') && msg.content.length == 3) {
                mewtwo = msg.content.substring(2);
                array.push(msg.content);
              }


              //msg inicia com    
              if (msg.content.startsWith('👍')) {





                if (msg.member.roles.has(team_valor.id)) {
                  team_imagem = valor.toString();
                  // msg.reply(team_imagem);
                  quantidade++;
                  array.push(team_imagem + " " + msg.author + " " + msg.content.substring(2));
                  adicional = adicional + team_imagem + " " + msg.author + " " + msg.content.substring(2) + "\n";
                }

                if (msg.member.roles.has(team_mystic.id)) {
                  team_imagem = mystic.toString();
                  // msg.reply(team_imagem);
                  quantidade++;
                  array.push(team_imagem + " " + msg.author + " " + msg.content.substring(2));
                  adicional = adicional + team_imagem + " " + msg.author + " " + msg.content.substring(2) + "\n";
                }

                if (msg.member.roles.has(team_instinct.id)) {
                  team_imagem = instinct.toString();
                  // msg.reply(team_imagem);
                  quantidade++;
                  array.push(team_imagem + " " + msg.author + " " + msg.content.substring(2));
                  adicional = adicional + team_imagem + " " + msg.author + " " + msg.content.substring(2) + "\n";
                }

                // 
              }


            })
          })

          //---- fim ler mensagens 


    //--------------------------------------     
//--novo --   

if (msg.content.startsWith('!h') && msg.content.length > 2) {
  mewtwo = msg.content.substring(2);
  msg.channel.send({
    embed: {
      color: 3447003,
      description: "novotitulo:" + mewtwo
    }
  });

   alteraHora(raidcanal,mewtwo)
}
//--fim novo --
 //--------------------------------------     




          //   msg.channel.send(msg.author.toString() + ", inserido na RAID!");

          //------------------------     
          setTimeout(function () {

            pkmraid = "";
            mewtwo = "";
            // msg.channel.send("array 0"+array);                 
            var result = [];


            array.forEach(function (item) {
              if (result.indexOf(item) < 0) {

                if (item.startsWith('%')) {
                  pkmraid = item.substring(1);
                }
                if (item.startsWith('!exraid')) {
                  mewtwo = item.substring(1);
                }
                //tempo da raid
                if (item.startsWith('!t') && msg.content.length == 3) {
                  mewtwo = item.substring(2);
                }

                if (item.startsWith('!') || item.startsWith('%')) {

                } else {
                  result.push(item);
                }
              }
            });

            //msg.channel.send("result 1"+result);              

            result = result.filter(item => item !== autor);
            var qtatr = result.filter(item => item !== autor).length


            //msg.channel.send("result 2"+result);            

        
            



            //-----------------------------

            criaRaid(channel.name, pkmraid, result, qtatr, mewtwo);

          }, 1500);


        }//fim if canal_raid
      });


    }//fim if

  }





  //  if (msg.content.startsWith('%c')) {
  //  let canal = msg.content.substring(3);

  //   setTimeout(myFunc, 5500, canal);

  //   msg.guild.createChannel(canal, "text");
  //  msg.guild.createRole({name:canal}) ;


  //   }





  //lista todos os elementos que tem a regra
  async function criaRaid(canalRaid, bicho, adicional, participantesRaid, sponser) {

    try {
      var temporaid = 45;



      //tempo duranção raid 
      if (parseInt(sponser) > 0) {
        temporaid = 60 * parseInt(sponser)
      }     //-------




      var titulo = "RAID " + canalRaid.substr(5);
      var tiporaid = canalRaid.substring(5, 6);
      let bosscp = "";
      var status = "Desconhecido";
      var cpiv = "Desconhecido"

      var ovo = "";
      var braid = ovo;
      //var bicho="";

      cor = "0x00AE86";

      //-------

      //-------

      //verifica se o numero é positivo ou negarivo
      var thoras = titulo.split("-");
      var horas = thoras[thoras.length - 3];
      var minutos_abrir_aberta = thoras[thoras.length - 2];
      if (minutos_abrir_aberta.startsWith("a")) {
        minutos_abrir_aberta = minutos_abrir_aberta.replace("a", "");
      } else {
        minutos_abrir_aberta = minutos_abrir_aberta.replace("f", "-");
      }

      //--------------------------

      var horas_relogio = thoras[thoras.length - 1];
      horas_relogio = horas_relogio.replace("h", ":")

      //tira o hora que foi marcada a raid do nome do canal
      var horas_relogio_horas_minutos = horas_relogio.split(":")
      var today = new Date();
      var date = new Date(today.getFullYear(), today.getMonth(), today.getDate(), horas_relogio_horas_minutos[0], horas_relogio_horas_minutos[1]);
      var dformat = [mzero(date.getHours()),
      mzero(date.getMinutes())].join(':');

      //-----------------------------

      //cria o titulo da raid
      var titulo_raid = ""
      for (var i = 0; i < thoras.length - 3; i++) {

        titulo_raid = titulo_raid + " " + thoras[i]


      }

      //console.log("Ntitulo "+titulo_raid)

      //-----------

      y = thoras;

      var local = titulo_raid;
      //console.log ("aberta_fechada: "+minutos_abrir_aberta);

      var choca = minutos_abrir_aberta;
      if (parseInt(choca) < 0) {
        choca = -(parseInt(temporaid) + parseInt(choca))
      }
      //console.log("hora atual: "+add_minutes(new Date(),0));
      //mais esta ouvo +30
      // menos esta aberta -30
      //horas que abre o ovo
      var abre = add_minutes(date, choca).toString();
      // console.log("Abre ovo : "+abre);
      //-----------------------
      var desaparece = parseInt(choca) + parseInt(temporaid);

      // console.log("tempo da raid "+ desaparece)

      var hinicio = add_minutes(date, choca).toString();
      var hovo = add_minutes(date, choca).toString();

      var hfim = add_minutes(date, desaparece).toString()

      switch (tiporaid) {
        case "1":
          ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000097-88ffa8a090/200/nivel1.png";
          break;
        case "2":
          ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000097-88ffa8a090/200/nivel1.png";
          break;

        case "3":
          ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";

          break;
        case "4":
          ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";

          break;
        case "5":
          ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000019-4d5f84e5ec/200/Egg_Raid_Legendary.png";

          break;

      }



      //--- fim novo          



      var result = await leinforaid('http://pnraidspn.atwebpages.com/raid.php', async function (pCLatLng) {
        pCLatLng.forEach(nivel => {


          if (nivel.boss == bicho && nivel.nivel == tiporaid) {

            braid = nivel.imagem
            cpiv = nivel.cpiv + " " + nivel.bosted;
            bosscp = nivel.bosscp + " " + nivel.bosstipo;
            status = nivel.fraco + "\n" + nivel.counter;
          }



        })





        if (sponser == "exraid") {
          cor = "0XFEAFEA";
          ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000023-29ab72ab0f/450/Mewtwo.png"
          horas = horas + "\nGinásio em pontuação para o Deoxys";
        }
        //----  FIM TIPO RAID ---


        await disparaRaid(local, horas, canalRaid, adicional, participantesRaid, ovo, braid, cpiv, status, adicional, bosscp, hinicio, hfim, hovo);

      });//leinforaid

    } catch (err) {
      console.log(err);


    }



  }






  async function disparaRaid(local, horas, canal, treinadores, total, ovo, bicho, cpiv, status, adicional, cpboss, hinicio, hfim, hovo) {
    //+"\nAbre: "+hinicio+" Termina :"+hfim +" "+hovo
    //msg.reply("disparaRaid");
    const embed = new Discord.RichEmbed()
      .setTitle(horas)
      .setAuthor(local.toUpperCase(), ovo)

      /*
      * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
      */
      .setColor(cor)
      .setDescription("Use o canal " + msg.guild.channels.find("name", canal))
      .setFooter("PN PoGo Raids, pubicado ", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")
      // .setImage("http://i.imgur.com/yVpymuV.png")

      .setThumbnail(bicho)
      /*
       * Takes a Date object, defaults to current date.
       */
      .setTimestamp()
      .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")

      .addField("Abre: " + hinicio + "\nTermina: " + hfim + "\nBOSS CP " + cpboss, cpiv)

      /*
       * lista dos jogadores que vão RAID.
       */
      .addField("Treinadores : " + total, treinadores, true)
      /*
       * Blank field, useful to create some space.
       */


      .addBlankField(true)
      .addField("\n\n\n\n\n\Fraco contra:", status, true);

    msg.guild.channels.find("name", "raids-pinhal-novo").sendMessage({ embed });


  }


  //-------------------------


  var dia = function (dt) {
    var d = new Date(dt.getTime()),
      dformat = [mzero(d.getDate()),
      mzero(d.getMonth()) + 1,
      d.getFullYear()].join('-');

    return dformat;
  }

  var add_minutes = function (dt, minutes) {
    var d = new Date(dt.getTime() + minutes * 60000),
      dformat = [mzero(d.getHours()),
      mzero(d.getMinutes())].join(':');

    return dformat;
  }

  var mzero = function (mzero) {
    if (mzero < 10) {
      mzero = "0" + mzero

    }

    return mzero;

  }

  var validaNumero = function (num) {
    if (Number(num)) {
      if (num < 0) {
        num = "f" + Math.abs(num);
      } else {
        num = "a" + Math.abs(num);
      }
      return num
    } else {
      return false
    }

  }







  //--------------------------
  //----criar canal ---

  if (msg.channel.name == 'professor-boss') {

    if (msg.content.startsWith("!5") || msg.content.startsWith("!4") || msg.content.startsWith("!3")) {


      //noovo...
      var text = msg.content.substring(1);


      var divide_texto = text.split(' ');
      var tempo_falta = validaNumero(divide_texto[divide_texto.length - 1])
      text = text.substring(0, text.length - divide_texto[divide_texto.length - 1].length) + " " + tempo_falta;

      //console.log("Verifica se é numero tempo_falta "+tempo_falta)



      //LE A MENSAGEM EXCLUINDO O !
      var text = text.replace(/[`~@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
      text = text.replace(/\s\s+/g, ' ');;



      var canal = '_raid' + text

      canal = canal.split('!').join('').toLowerCase();
      var nomecanal = canal.split(' ').join('-').toLowerCase();
      // msg.reply(nomecanal); 
      nomecanal = nomecanal.replace(/--/gi, '-');


      //mete minutos positivo ou negativos

      //console.log("nome canal sem ver tempo e horas : "+nomecanal)


      //meter a hora do relogio

      var dhlocal = new Date();
      var data_local = dhlocal.getTimezoneOffset();
      var horas_locais = dhlocal.getHours() + 1;


      var relogio = horas_locais + ":" + dhlocal.getMinutes();

      if (tempo_falta != false) {



        // var relogio=add_minutes(new Date(),0);
        relogio = relogio.replace(":", "h");
        nomecanal = nomecanal + "-" + relogio;




        //msg.reply(nomecanal); 
        if (msg.guild.channels.find("name", nomecanal)) {
        } else {



          msg.guild.createChannel(nomecanal, "text");


        }
        //
        setTimeout(apagacanal, 5000000, nomecanal);
        setTimeout(myFunc, 1500, nomecanal);


      } else {

        msg.channel.send({
          embed: {
            color: 3447003,
            description: "ATENÇÃO:\nNecessário inserir o tempo que falta para a RAID\nExemplo: Raid aberta a 12 minutos:\n!5 piscinas !09h30 -12\nRaid com o Ovo 12 minutos para abrir:\n!5 piscinas !09h30 12\n"
          }
        });



      }



    }   // fim do inicio carater
    //fim criação de RAID PROFESSOR BOSS



    //---inicio regras
    var regra = "";
    var role = "";
    if (msg.content.toLowerCase().startsWith('+pnpogoraids') || msg.content.toLowerCase().startsWith('+treinador') || msg.content.toLowerCase().startsWith('+su') || msg.content.toLowerCase().startsWith('+bot') || msg.content.toLowerCase().startsWith('+4fun') || msg.content.toLowerCase().startsWith('+deoxys')) {
      msg.guild.channels.find("name", "professor-boss").sendMessage("Olá, " + msg.author + "\nEssa regra não pode ser associada ao teu utilizador");
    } else {
      if (msg.content.startsWith('+')) {
        msg.guild.channels.find("name", "professor-boss").sendMessage("Olá, " + msg.author + "\nAdicionado ás notificações da Quest de " + msg.content.substring(1) + ", no canal " + msg.guild.channels.find("name", "alertas"));


        regra = msg.content.substring(1).toLowerCase();
        role = msg.guild.roles.find(role => role.name.toLowerCase() === regra);
        msg.member.addRole(role);

      }

      if (msg.content.startsWith('-')) {
        regra = msg.content.substring(1).toLowerCase();
        role = msg.guild.roles.find(role => role.name.toLowerCase() === regra);
        msg.member.removeRole(role);
        msg.guild.channels.find("name", "professor-boss").sendMessage("Olá, " + msg.author + "\nRemovido das notificações da Quest de " + msg.content.substring(1) + ", no canal " + msg.guild.channels.find("name", "alertas"));

      }

    }
    // FIM ADICIONAR REGRAS TREINADORES

    //----




    //quest
    if (msg.content.startsWith('!q')) {


      //---------------  
      var mensagem = msg.content
      var find = ""//mensagem.split(" ")[1].toLocaleLowerCase()
      var pokemon = mensagem.split(" ")[1]

      for (x = 2; x < mensagem.split(" ").length; x++) {
        find = find + mensagem.split(" ")[x] + " "
      }

      var quest = "";

      var missao = "";
      var questimagem = "";

      console.log(find.toUpperCase())


      async function getQuest(endereco, qualPokemon) {


        var achou = false;
        var result = await leinforaid(endereco, async function (pCLatLng) {
          pCLatLng.forEach(nivel => {

            if (nivel.cod.toUpperCase().includes(qualPokemon.toUpperCase())) {
              achou = true;
              quest = nivel.quest;
              missao = nivel.missao;
              questimagem = nivel.questimagem;

            }
          })

          if (achou) {

            //--
            const embed = new Discord.RichEmbed()
              .setTitle("Direcção para " + find)
              .setURL("https://exraidspinhalnovo.webnode.pt/_files/200000083-e9b0feaad1/450/pkst.png")
              .setAuthor(find, "https://exraidspinhalnovo.webnode.pt/_files/200000083-e9b0feaad1/450/pkst.png")
              /*
               * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
               */
              .setColor(0x00AE86)
              .setDescription(" ")
              .setFooter("PN PoGo Raids, pubicado ", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")

              .setThumbnail(questimagem)
              .addField('Missão', missao, false)
              .addField('Recompensa', quest, false)
              .addField('Reportado por:', msg.author.username, false)
              .setURL("https://exraidspinhalnovo.webnode.pt/_files/200000083-e9b0feaad1/450/pkst.png")
              /*
               * Takes a Date object, defaults to current date.
               */
              .setTimestamp();
            msg.guild.channels.find("name", "quest").sendMessage({ embed });

          } else {
            msg.channel.send({
              embed: {
                color: 3447003,
                description: "O Quest " + qualPokemon + " não foi encontrado!"
              }
            });

          }

        })
      }

      getQuest('http://pnraidspn.atwebpages.com/teste.php', pokemon)

      //----fim quest 




      let autor = msg.author;







      // let roleName = msg.content.split(" ").slice(1).join(" ");
      let roleName = quest;
      //Filtering the guild members only keeping those with the role
      //Then mapping the filtered array to their usernames
      let membersWithRole = msg.guild.members.filter(member => {

        return member.roles.find("name", roleName);
      }).map(member => {
        //  msg.guild.channels.find("name", "quest-info").sendMessage(member.user+"\n")
        // msg.guild.channels.find("name", "quest-info").sendMessage(client.users.find(member.user.username, "mensagem").toString())



        // member.user.send("lkjlkjk");



        msg.guild.channels.find("name", "alertas").sendMessage(member.user + " Quest **" + quest + "** - Pokestop : **" + pokestop + "**");





      })



      const embed = new Discord.RichEmbed()
        .setTitle(quest)
        .setAuthor(pokestop, "https://exraidspinhalnovo.webnode.pt/_files/200000084-5d1115e10b/450/Pass.png")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(0x00AE86)
        .setDescription(missao)
        .setFooter("PN PoGo Raids, pubicado ", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")

        .setThumbnail(questimagem)
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp();


      if (msg.content.startsWith("!5") || msg.content.startsWith("!4") || msg.content.startsWith("!3")) {
        msg.guild.channels.find("name", "alertas").sendMessage("\@everyone");
        msg.guild.channels.find("name", "alertas").sendMessage({ embed });



      }








    }//fim regras










  }//fim if

  //fim criar canal----











  //---teste ----
  if (msg.channel.name.startsWith('adm-pg-')) {
    if (msg.content.startsWith('!')) {

      var texto = msg.content.substring(1)
      const embed = new Discord.RichEmbed()
        .setTitle("INFORMAÇÃO")
        .setAuthor("Olá treinadores.", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(0x00AE86)
        .setDescription(texto)
        .setFooter("PN PoGo Raids, pubicado ", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")


        .setThumbnail("https://exraidspinhalnovo.webnode.pt/_files/200000078-4d2264e1df/450/mboss.png")

        .setTimestamp();



      msg.guild.channels.find("name", "🔔-informacao").sendMessage({ embed });
      msg.guild.channels.find("name", "💬-chat-geral").sendMessage({ embed });


    }
  }



  //--- fim teste ----

});

client.login(process.env.BOT_TOKEN);
