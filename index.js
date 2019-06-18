const Discord = require('discord.js')
const client = new Discord.Client()
const http = require('http');




client.on("message", async (msg) => {
 
  
  //quest


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

var mzero= function(mzero){
    if(mzero<10){
      mzero="0"+mzero
     
  }

  return mzero;

  }
  var add_minutes =  function (dt, minutes) {
    var d =  new Date(dt.getTime() + minutes*60000),
    dformat =  [mzero(d.getHours()),
           mzero(d.getMinutes())].join(':');

           return dformat;
}




  


async function criaRaid(canalRaid, bicho, adicional, participantesRaid, sponser) {

    try {
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
        var titulo = "RAID " + canalRaid.substr(5);
        var tiporaid = canalRaid.substring(5, 6);
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
            choca = -(45 + parseInt(choca))
        }
        //console.log("hora atual: "+add_minutes(new Date(),0));
        //mais esta ouvo +30
        // menos esta aberta -30
        //horas que abre o ovo
        var abre = add_minutes(date, choca).toString();
        // console.log("Abre ovo : "+abre);
        //-----------------------
        var desaparece = parseInt(choca) + 45;

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
               

                if (nivel.boss == bicho ) {
                    tiporaid=nivel.nivel
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

async function disparaRaid(local, horas, canalRaid, adicional, participantesRaid, ovo, braid, cpiv, status, adicional, bosscp, hinicio, hfim, hovo){
msg.channel.send("funcao disparaRaid")
 msg.channel.send( local+"\n"+ horas+"\n"+ canalRaid+"\n"+ adicional+"\n"+ participantesRaid+"\n"+ ovo+"\n"+ braid+"\n"+ cpiv+"\n"+ status+"\n"+ adicional+"\n"+ bosscp+"\n"+ hinicio+"\n"+ hfim+"\n"+ hovo );
 //console.log(local+"\n", horas+"\n", canalRaid+"\n", adicional+"\n", participantesRaid+"\n", ovo+"\n", braid+"\n", cpiv+"\n", status+"\n", adicional+"\n", bosscp+"\n", hinicio+"\n", hfim+"\n", hovo);
}


  
 if (msg.content.startsWith('%')) {

      var texto = msg.content.substring(1) 
  
  msg.channel.send(texto);
criaRaid('_raid3-teste-teste-00h00-a21-21h38',texto , 'adicional', 'participantesRaid', 'sponser')
      
  
      }
})
client.login(process.env.BOT_TOKEN);
