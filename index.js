
const Discord = require("discord.js");

const client = new Discord.Client();

const http = require('https');

const { ReactionCollector } = require('discord.js')
//console.log(tamanhoFicheiro)









client.on("message", async (msg) => {
   
	
	 var semelhante=0;
	
	 var ultimolido=0;
	
  
var raid1=['Swablu','Snorunt','Bagon','Shinx'];
var raid2=['Cloyster','Exeggutor','Sneasel','Combusken','Kirlia','Breloom','Mawile']
var raid3=['Raichu','Onix','Jynx','Aerodactyl','Piloswine','Machamp','Hitmonlee']
var raid4=['Marowak','Lapras','Dragonite','Togetic','Granbull']
var raid5=['Rayquaza','Suicune']




var ginasiosPN = [
    'A Ler',
    'Antiga Estação De Comboios',
    'Biblioteca Municipal',
   'Colonia De Felinos',
   'Comboios PN',
   'Deposito De Agua',
   'Manás',
   'Moral de Grafiti Do Campo De Futebol',
   'PI Ferreira da Costa',
   'PI Da Vila Serena',
   'PI Da Escola Zeca Afonso',	
   'Piscinas Municipais',
   'Polidesportivo 25 De Abril',
   'Polidesportivo Da Sul Ponte',
   'PN Sauda-vos',
   'Mercado Mensal',
   'O Ferroviário'
   	
   
  ]

  
  
 
 
 function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}
function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
  
    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0)
          costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0)
        costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }

 
 
 
 
 
 
 
 
 
 
 
 function getTextoImagem(htelef,exgym,timagem,mraid,gymraid,pokemon,tier){


	 
	if(pokemon.trim().length<1){
        pokemon='?'
    } 
	if(htelef.trim().length<1){
    htelef='?'
}
 if(timagem.trim().length<1){
    timagem='?'
}
 if(mraid.trim().length<1){
    mraid='?'
}
if(gymraid.trim().length<1){
    gymraid='?'
}
 
	 

	 

	 msg.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "INFO RAID",
    url: "http://google.com",
    description: "Raid "+tier,
    fields: [{
        name: "Pokemon",
        value: pokemon
      },
	    {
        name: "Hora Telefone",
        value: htelef
      },
	     {
        name: "Ginásio",
        value: gymraid
      },
	     {
        name: "Tempo Raid",
        value: mraid
      },
      
      {
        name: "exgym",
        value: exgym
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "PN PoGo Raids Reportado por : "+msg.author.username
      
    }
  }
}).then(msg => {
	 msg.react('👍')
	 });
//------
	 /**
	 //apaga a imagem
	let xpto = msg.channel.fetchMessages()
        .then(messages => messages.array().forEach(
          message => message.author.equals(msg.author.username) && message.delete()



        )); 
*/
	 
//-----
 
//-------	 
	 
      
}






function readOCR(m) {

    //var found = ginasios.includes('PARQUEINFANTIL');
    // console.log('found ',found)
    var tier;
    var pokemon="?"
	var ginasioRaid="?";    
    var exraidgym="NORMAL";
var horasTelefone=" ";
var textoimagem=" ";
var minutosraid=" ";
    var x = m.split('\n')



    for (z in x) {




        if (x[z].trim().toUpperCase().startsWith('EXRAID')) {
            exraidgym='EXRAID'
        }
        
        var xx = x[z].trim().replace(/[^:a-zA-Z0-9]/g, '');
        //console.log(xx)
        //retorna true ou false se encontrar
        var n = xx.includes(":");

        //console.log('Quantas vezes ',xx.split('').filter(x => x == ':').length)

        //se econtrou : :
        if (xx.split('').filter(x => x == ':').length == 2) {

            minutosraid="\n"+xx


        }
        //se econtrou : 
        if (xx.split('').filter(x => x == ':').length == 1) {
         var horasplit=xx.split(':')[0].substring(xx.split(':')[0].length-2)
            var minsplit=xx.split(':')[1].substring(0,2)
   // console.log('horasplit ',horasplit,' minsplit ',minsplit)
            var nanhoras=!isNaN(horasplit)
            var nanminutos=!isNaN(minsplit)
           if(nanhoras && nanminutos){
            horasTelefone=horasplit+":"+minsplit
           }
            


        }
	    
	
    
	
        
       // console.log('--->',x[z].toUpperCase(),!/[^a-zA-Z]/.test(x[z]))
if (!/[^a-zA-Z0]/.test(xx) && !xx.toUpperCase().trim().startsWith('WALKCLOSERTOI') && xx.toUpperCase().trim().length>0) {
  //  console.log('Orginal -> ',xx)
    semelhante=0;
        for (f in ginasiosPN) {
           
            semelhante = similarity(xx.toUpperCase(), ginasiosPN[f].toUpperCase())
           // console.log(xx.toUpperCase())
            if (semelhante > 0.35) {
		    if(semelhante>ultimolido){
                ginasioRaid= ginasiosPN[f]
               // console.log(xx.toUpperCase(),' -> ',ginasiosPN[f].toUpperCase(),' -> ',semelhante)
                ultimolido=semelhante
             }
       
               
            }

        }
      var  raids=[raid1,raid2,raid3,raid4,raid5]
      semelhante=0;
     
for(g in raids)
        for (f in raids[g]) {
           
            semelhante = similarity(xx.toUpperCase(), raids[g][f].toUpperCase())
            //console.log(xx.toUpperCase(),' -> ',raids[g][f].toUpperCase(),' -> ',semelhante)
            
            if (semelhante > 0.35) {
               
		    if(semelhante>ultimolido){
               
                pokemon= raids[g][f]
                tier=parseInt(g)+1
                ultimolido=semelhante
             }
       
               
            }

        }




        textoimagem = textoimagem + "\n" + xx
   
}

       

    }

    getTextoImagem(horasTelefone,exraidgym,textoimagem,minutosraid,ginasioRaid,pokemon,tier)
    
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
    var texto;
    var result = await leinforaid(endereco, async function (pCLatLng) {
      
        try{
            leuOCR=  pCLatLng.ParsedResults[0].ParsedText
           // console.log(pCLatLng.ParsedResults[0].ParsedText)
        
    }catch(error) {
        leuOCR='Erro na imagem:\nVerique o tamanho, não pode ser superior a 1MB.'
        //console.log('As imagens deve ter 1MB.');
      }
      if(leuOCR.startsWith('Erro')){
	      
      // console.log(leuOCR)
    }else{
       
        
   readOCR(leuOCR); 
    }
   
    
    

})

   
} 
  
  
  if (msg.channel.name == 'ocr-teste') {
	  
	var Attachment = (msg.attachments).array();
         // msg.channel.send(Attachment); //outputs array
        //  msg.channel.send(Attachment[0].url);
       var imagem=Attachment[0].url
    
	 
	  
  getNest('https://api.ocr.space/parse/imageurl?apikey='+process.env.TOKEN+'&url='+imagem+'&scale=true&isOverlayRequired=false&language=por&OCREngine=2')
 
  //-----
	  



  
  
  }//fim msg.channel.name

       
         
         
     


  //--- fim teste ----

});

client.login(process.env.BOT_TOKEN);
