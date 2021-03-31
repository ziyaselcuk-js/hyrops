const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
 var cevaplar = ['Boks Makinesi Sonucu : **Boks makinesi kırıldı :D=3000** !', 
 'Boks Makinesi Sonucu : **Çok yavaş vurdun bir daha dene 😄 100** !', 
 'Boks Makinesi Sonucu : **Eh,yani 900** !', 
 'Boks Makinesi Sonucu : **1000** !',
 'Boks Makinesi Sonucu : **Acayip yavaş vurdun 🤢 =50** !', 
 'Boks Makinesi Sonucu : **Çok iyi! 🥊 =2000** !', 
 'Boks Makinesi Sonucu : **Daha iyisini yapabilirsin! 💪 =700** !',
 'Boks Makinesi Sonucu : **Daha iyisini yapabilirsin! 💪 = 550** !', 
 'Boks Makinesi Sonucu : **Niye 1000 değil :D=999** !', 
 'Boks Makinesi Sonucu : **Orta! 👑=1250** !', 
 'Boks Makinesi Sonucu : **Yine iyisin ✅ =1150** !', 
 'Boks Makinesi Sonucu : **Fena değil 😄 =1200** !'
 ];
 var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 
 const ping = new Discord.MessageEmbed()
 .setColor(2828)
 .setDescription("🥊 " + cevap)
 return message.channel.send(ping)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['boks-makinası'],
 permLevel: 0
 };

 exports.help = {
 name: 'boks-makinesi',
 description: 'Boks makinesine vurur.',
 usage: 'boks-makinesi'
}