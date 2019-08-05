
const Discord = require("discord.js");

const client = new Discord.Client();

const http = require('https');


//console.log(tamanhoFicheiro)









client.on("message", async (msg) => {
   
  
  var Attachment = (msg.attachments).array();
         // msg.channel.send(Attachment); //outputs array
        //  msg.channel.send(Attachment[0].url);
 var imagem=Attachment[0].url
  
  
 
 
 function getTextoImagem(htelef,exgym,timagem,mraid){

//msg.channel.send("estou getTextoImagem\n"+exgym+"\n"+timagem+"\n"+mraid);
	 
	 msg.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "TESTE OCR",
    url: "http://google.com",
    description: "Compilação",
    fields: [{
        name: "Hora Telefone",
        value: htelef
      },
	     {
        name: "Tempo Raid",
        value: mraid
      },
      {
        name: "Texto imagem",
        value: timagem
      },
      {
        name: "exgym",
        value: exgym
      }
	
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "©2019 PN PoGo Raids"
    }
  }
});
//------
      
}


function readOCR(m) {

    //var found = ginasios.includes('PARQUEINFANTIL');
    // console.log('found ',found)
var exraidgym="NORMAL GYM";
var horasTelefone="";
var textoimagem="";
var minutosraid="";
    var x = m.split('\n')



    for (z in x) {




        if (x[z].trim() == 'EXRAIDGYM') {
            exraidgym='EXRAID GYM'
        }
        //console.log('Orginal -> ',x[z])
        var xx = x[z].trim().replace(/[^:a-zA-Z0-9]/g, '');
        //console.log(xx)
        //retorna true ou false se encontrar
        var n = xx.includes(":");

        //console.log('Quantas vezes ',xx.split('').filter(x => x == ':').length)

        //se econtrou :
        if (xx.split('').filter(x => x == ':').length == 2) {

            minutosraid=minutosraid+"\n"+xx


        }
        if (xx.split('').filter(x => x == ':').length == 1) {

            horasTelefone=horasTelefone+"\n"+xx


        }

        if (!/[^a-zA-Z]/.test(xx)) {
		if(xx!='BATTLE' || xx!='PRIVATEGROUP'|| xx!='WalkclosertointeractwiththisGym'){
            textoimagem=textoimagem+"\n"+ xx
		}
        }

       

    }

    getTextoImagem(horasTelefone,exraidgym,textoimagem,minutosraid)
    
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  function leinforaid(pCode, cb) {  

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
  
  
 async function getNest(endereco) {
    var leuOCR=""
    var result = await leinforaid(endereco, async function (pCLatLng) {
        try{
            leuOCR=pCLatLng.ParsedResults[0].ParsedText
       // console.log(pCLatLng.ParsedResults[0].ParsedText)
        
    }catch(error) {
        leuOCR='Erro na imagem:\nVerique o tamanho, não pode ser superior a 1MB.'
        //console.log('As imagens deve ter 1MB.');
      }
       msg.channel.send("estou readOCR(leuOCR); ");
      readOCR(leuOCR); 
    //  msg.channel.send(leuOCR);
    })
   
} 
  
  
  getNest('https://api.ocr.space/parse/imageurl?apikey='+process.env.TOKEN+'&url='+imagem+'&isOverlayRequired=false&language=cht')


       
         
         
     


  //--- fim teste ----

});

client.login(process.env.BOT_TOKEN);
