
const Discord = require("discord.js");

const client = new Discord.Client();

const http = require('https');


//console.log(tamanhoFicheiro)









client.on("message", async (msg) => {
   
  
  var Attachment = (msg.attachments).array();
         // msg.channel.send(Attachment); //outputs array
        //  msg.channel.send(Attachment[0].url);
 var imagem=Attachment[0].url
  
  
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
       
      msg.channel.send(leuOCR);
    })
   
} 
  
  
  getNest('https://api.ocr.space/parse/imageurl?apikey=56695ba50588957&url='+imagem+'&isOverlayRequired=false&language=cht')


       
         
         
     


  //--- fim teste ----

});

client.login(process.env.BOT_TOKEN);
