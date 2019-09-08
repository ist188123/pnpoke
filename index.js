
const Discord = require("discord.js");

const client = new Discord.Client();

const https = require('https');
const http = require('http');

const { ReactionCollector } = require('discord.js')
//console.log(tamanhoFicheiro)









client.on("message", async (msg) => {
   var mensagem=msg.content;
	
	 var semelhante=0;
	
	 var ultimolido=0;

 var f_nivelraid=[]
 var f_imagem_boss=[]




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

  
  var horas=function(h,m){

    if(h<10){
        h=0+""+h
    }
    if(m<10){
        m=0+""+m
    }

    return h+":"+m
}
 
 
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

var ovo='https://torneiopokemongopinhalnovo.webnode.pt/_files/200000047-74c3d74c3f/450/question.jpg';
	 
	if(pokemon.trim().length<1){
        pokemon='?'
    } 
	if(htelef.trim().length<1){
    htelef='?'
}
 if(timagem.trim().length<1){
    timagem='?'
	 
switch (tier) {
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
	 
	 
}else{
ovo=timagem	
}
 if(mraid.trim().length<1){
    mraid='?'
}
if(gymraid.trim().length<1){
    gymraid='?'
}
 
if(isNaN(parseInt(tier))){  
  tier='?'
}	 

//-----
var mn=mraid.split(':')[1];
var horas_telefone=htelef.split(':')[0];
var minutos_telefone=htelef.split(':')[1];
var today = new Date();


var inicioRaid = new Date(today.getFullYear(), today.getMonth(), today.getDate(), horas_telefone, minutos_telefone);
//se boss
  if(pokemon!='?'){
    mn=-(45-mn)
  }
inicioRaid.setMinutes(parseInt(minutos_telefone)+parseInt(mn));

var fimRaid  = new Date(today.getFullYear(), today.getMonth(), today.getDate(), inicioRaid.getHours(), inicioRaid.getMinutes());

//miutos raids
fimRaid.setMinutes(inicioRaid.getMinutes()+90);
var hora_inicio_raid=horas(inicioRaid.getHours(),inicioRaid.getMinutes())
 var hora_fim_raid=horas(fimRaid.getHours(),fimRaid.getMinutes())  
	
 
 var mi=inicioRaid.getTime();
var mf=fimRaid.getTime();
var tempoEspera=mf-mi;
	 
	 
	 
	 

 
//-----	 
	 
 if( msg.channel.name == 'info-raids'){
	 //apaga a imagemmessage.channel.fetchMessages({limit: 1}).then(
	 msg.delete()
	}	 
	 
	 
	 
	 
const filter = (reaction, user) => {
	return ['👍', '\u0031\u20E3','\u0032\u20E3','\u0033\u20E3','\u0034\u20E3','\u0035\u20E3'].includes(reaction.emoji.name) && user.id === msg.author.id;
};
	 
 




	 

	 
//------------
	 
msg.channel.send({embed: {
    color: 15158332,
	
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "ANUNCIO RAID",
    url: "http://google.com",
		
    description: "\@everyone",
	thumbnail: {
		url: ovo,
	},
    fields: [{
        name: "Nivel ",
        value: tier
      },
	    {
        name: "Boss",
        value: pokemon
      },
	    {
        name: "Abre",
        value: hora_inicio_raid
      },
	    {
        name: "Termina",
        value: hora_fim_raid
      },
	     {
        name: "Ginásio",
        value: gymraid
      }
	 /**   ,
	     {
        name: "Tempo Raid",
        value: mraid
      },
      
      {
        name: "exgym",
        value: exgym
      }*/
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "PN PoGo Raids Reportado por : "+msg.author.username
      
    }
  }
}).then(msg => {
	
	 if(pokemon=='?'){
		  msg.react('\u0031\u20E3')
		  msg.react('\u0032\u20E3')
		  msg.react('\u0033\u20E3')
		  msg.react('\u0034\u20E3')
		  msg.react('\u0035\u20E3')
		 
	 }else{
		msg.react('👍') 
	 }
		 
	
	let embedLikeField = Object.assign({}, embed.fields[0]);
	const newEmbed = new Discord.RichEmbed({
        title: embed.title,
        description: embed.description,
        fields: [embedLikeField]
	  });
	
	
	msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		
		
		const reaction = collected.first();
                if (reaction.emoji.name === '👍') {
			msg.reply('thumbs up.');
		} 
		
		if (reaction.emoji.name === '\u0031\u20E3') {
			msg.reply('Nivel 1');
			//embedLikeField.value = '1';
			collected.msg.edit(newEmbed)
			msg.react('👍')
		} 
		if (reaction.emoji.name === '\u0032\u20E3') {
			msg.reply('Nivel 2');
			//embedLikeField.value = '2';
			msg.react('👍')
		} 
		if (reaction.emoji.name === '\u0033\u20E3') {
			msg.reply('Nivel 3');
			//embedLikeField.value = '3';
			msg.react('👍')
		} 
		if (reaction.emoji.name === '\u0034\u20E3') {
			msg.reply('Nivel 4');
			//embedLikeField.value = '4';
			msg.react('👍')
		} 
		if (reaction.emoji.name === '\u0035\u20E3') {
			msg.reply('Nivel 5');
			//embedLikeField.value = '5';
			msg.react('👍')
		} 
	
		
	})
	.catch(collected => {
		msg.reply('Teste OCR, obrigado por colaborar.');
	});		 
	 
	 });
	 
	 //------
	
	




	 
	 
	 
	 
	 
//------
	
	 
//-----
 
//-------	 
	 
      
}






function readOCR(m,arraypkm,f_imagem_boss,f_nivelraid) {

     var tier;
    var pokemon = "?"
    var ginasioRaid = "?";
    var exraidgym = "NORMAL";
    var horasTelefone = " ";
    var textoimagem = " ";
    var minutosraid = " ";
    var x = m.split('\n')
    var semelhantePokemon = 0;
    var ultimolidoPokemon = 0;
    var imagem_boss=" ";
   
    for (z in x) {
        


        //exraid
        if (x[z].trim().toUpperCase().startsWith('EX RAID') || (x[z].trim().toUpperCase().startsWith('EXRAID'))) {
            exraidgym = 'EXRAID'
        }
        //-----

        //horas e minutos
       // var xx = x[z].trim().replace(/[^:a-zA-Z0-9]/g, '');
        var xx = x[z].trim()
      
        //retorna true ou false se encontrar
        var n = xx.includes(":");

        //se econtrou : :
        if (xx.split('').filter(x => x == ':').length == 2) {
            minutosraid = "\n" + xx
        }
        //se econtrou : 
        if (xx.split('').filter(x => x == ':').length == 1) {
            var horasplit = xx.split(':')[0].substring(xx.split(':')[0].length - 2)
            var minsplit = xx.split(':')[1].substring(0, 2)
            var nanhoras = !isNaN(horasplit)
            var nanminutos = !isNaN(minsplit)
            if (nanhoras && nanminutos) {
                horasTelefone = horasplit + ":" + minsplit
            }
        }





       
      //  if (!/[^a-zA-Z0]/.test(xx) && !xx.toUpperCase().trim().startsWith('WALKCLOSERTOI') && xx.toUpperCase().trim().length > 0) {
        if (!xx.toUpperCase().trim().startsWith('WALKCLOSERTOI') && xx.toUpperCase().trim().length > 0) {     
            for (f in ginasiosPN) {

                semelhante = similarity(xx.toUpperCase(), ginasiosPN[f].toUpperCase())
              
                if (semelhante > 0.35) {
                    if (semelhante > ultimolido) {
                        ginasioRaid = ginasiosPN[f]             
                        ultimolido = semelhante
                    }


                }

            }

//------------


//-----------

         

          // console.log(arraypkm)
            for (g in arraypkm){

                    semelhantePokemon = similarity(xx.toUpperCase(), arraypkm[g].toUpperCase())
                  //  console.log(xx.toUpperCase(),' -> ',arraypkm[g].toUpperCase(),' -> ',semelhantePokemon,'%')
                    if (xx.toUpperCase() != 'NI') {
                        if (semelhantePokemon > 0.38) {
                          
                            if (semelhantePokemon > ultimolidoPokemon) {
                               imagem_boss= f_imagem_boss[g]
                                pokemon = arraypkm[g]
                                tier=f_nivelraid[g]
                               // tier = parseInt(g) + 1
                                ultimolidoPokemon = semelhantePokemon
                            }


                        }

                    }

                }


            textoimagem = textoimagem + "\n" + xx
         //   console.log('->',textoimagem + "\n" + xx)
        }



    }

   // console.log('horasTelefone\n',horasTelefone,'\nexraidgym\n',exraidgym,'\ntextoimagem\n',textoimagem,'\nminutosraid\n',minutosraid,'\nginasioRaid\n',ginasioRaid,'\npokemon\n',pokemon,'\ntier\n',tier)
    getTextoImagem(horasTelefone, exraidgym, imagem_boss, minutosraid, ginasioRaid, pokemon, tier)

    
}



 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 function leinforaid(pCode, cb) {

    https.request(pCode).on('response', function (response) {
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


async function getNest(arraypkm,f_imagem_boss,f_nivelraid,endereco) {
    var leuOCR = ""
    var result = await leinforaid(endereco, async function (pCLatLng) {
        try {

            leuOCR = pCLatLng.ParsedResults[0].ParsedText


        } catch (error) {

            leuOCR = 'Erro na imagem:\nVerique o tamanho, não pode ser superior a 1MB.'
           
        }
      
        readOCR(leuOCR,arraypkm,f_imagem_boss,f_nivelraid)
        
    })

}





//------
function leinfoBoss(pCode, cb) {  //leraud

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


 
 async function inicio(endereco,allboss) {
    var cp=""
    var nivelraid="?"
    var achou=false;
    var pokemon="?";
    var imagem="";
    var tipo="?";

 var f_boss=[]


var t=0;
    var result = await leinfoBoss(endereco, async function (pCLatLng) {
        pCLatLng.forEach(nivel => {
          //  if(nivel.boss.toLocaleUpperCase()==qualPokemon.toLocaleUpperCase()){
                achou=true;
                cp="";
                nivelraid=nivel.nivel;
                pokemon=nivel.boss;
                imagem=nivel.imagem;
                tipo=nivel.bosstipo

                
             //   arrays.push[[nivelraid][tipo][pokemon][imagem]]
             f_imagem_boss[t]=imagem
             f_nivelraid[t]=nivelraid
             f_boss[t]=pokemon
      
            t=++t;

      //  }
        })
      
       

        getNest(f_boss,f_imagem_boss,f_nivelraid,allboss)
     
    })

}
	
	
	
	
  
  if (msg.channel.name == 'ocr-teste' || msg.channel.name == 'info-raids') {
	  
	var Attachment = (msg.attachments).array();
         // msg.channel.send(Attachment); //outputs array
        //  msg.channel.send(Attachment[0].url);
       var imagem=Attachment[0].url
    
	inicio('http://pnraidspn.atwebpages.com/raid.php',process.env.pnPoGoOCR+imagem+process.env.valuespnPoGo) 
	  

  //-----
	  



  
  
  }//fim msg.channel.name
	
if (msg.channel.name == 'teste' ){
	    if (mensagem.startsWith("!x")) {
	    
		//----  
		//msg.react('👍').then(() => msg.react('👎'));
	    
const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) ;
};

const collector = msg.createReactionCollector(filter, { time: 60000 });

collector.on('collect', (reaction, reactionCollector) => {
	
	
	msg.reply('Collected '+msg.id+'\n'+reaction.users+'\n'+reaction.users.name);
});

collector.on('end', collected => {
	msg.reply('Collected ${collected.size} items');
});    
		    
		//---    
		    
	    }
     
	
	
	
	if (msg.content === '!fruits') {
		try {
			await msg.react('🍎');
			await msg.react('🍊');
			await msg.react('🍇');
		} catch (error) {
			msg.reply('One of the emojis failed to react.');
		}
	}
	
	
	
	
	
	
	
	
	
	
	
if (mensagem.startsWith("!c")) {	
	
	const reactionFilter = (reaction, user) => reaction.emoji.name === '👍';

const embed = new Discord.RichEmbed({
  title: 'Raid Boss',
  description: 'Teste para adicionar treinadores :)',
  fields: [{
    name: 'Treinadores:',
    value: '<3'
  }]
});

// add reaction emoji to message
msg.channel.send(embed)
  .then(msg => msg.react('👍'))
  .then(mReaction => mReaction.message.react('👎'))
  .then(mReaction => {
    // createReactionCollector - responds on each react, AND again at the end.
    const collector = mReaction.message
      .createReactionCollector(reactionFilter, {
        time: 60000
      });

    // set collector events
    collector.on('collect', r => {
	   
      // immutably copy embed's Like field to new obj
     let embedLikeField = Object.assign({}, embed.fields[0]);
 
      // update 'field' with new value
     embedLikeField.value = msg.author.username;
	   
      // create new embed with old title & description, new field
      const newEmbed = new Discord.RichEmbed({
        title: embed.title,
        description: embed.description,
        fields: [embedLikeField]
	
      });
  newEmbed.addField('#:', msg.author.username, true);
      // edit message with new embed
      // NOTE: can only edit messages you author
      r.message.edit(newEmbed)
        .then(newMsg => msg.reply('new embed added'))
        .catch(console.log);
    });
    collector.on('end', collected => msg.reply('Collected ${collected.size} reactions'));
  })
  .catch(console.log);
	
	
}//fim mensagem inicia com c	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
       
     
     


  //--- fim teste ----

});















client.login(process.env.BOT_TOKEN);
