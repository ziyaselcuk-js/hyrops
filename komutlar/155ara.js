const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db') 

exports.run = (client, message, params) => {
 const dil = db.fetch(`dil_${message.guild.id}`)
 if(dil == 'tr'){
 if (!message.guild) { 
 const ozelmesajuyari = new Discord.MessageEmbed()
 .setColor('RANDOM')
 .setTimestamp()
 .setAuthor(message.author.username, message.author.avatarURL())
 .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
 return message.author.send(ozelmesajuyari); }
 if (message.channel.type !== 'dm') {
 const sunucubilgi = new Discord.MessageEmbed()
 .setAuthor(message.author.username + ' Polis Geliyor!!!!')
 .setColor('RANDOM')
 .setTimestamp()
 .setDescription('')
 .setImage(`http://www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif`)
 return message.channel.send(sunucubilgi);
 }
 } else{
 if (!message.guild) {
 const ozelmesajuyari = new Discord.MessageEmbed()
 .setColor('RANDOM')
 .setTimestamp()
 .setAuthor(message.author.username, message.author.avatarURL())
 .addField('**You can\'t use my fun commands in DM**')
 return message.author.send(ozelmesajuyari); }
 if (message.channel.type !== 'dm') {
 const sunucubilgi = new Discord.MessageEmbed()
 .setAuthor(message.author.username + ' Cops Are Coming!!!!')
 .setColor('RANDOM')
 .setTimestamp()
 .setDescription('')
 .setImage(`http://www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif`)
 return message.channel.send(sunucubilgi);
 
 
 
 
 }
 }
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["155ara", "callpolice", "call911"],
 permLevel: 0
};

exports.help = {
 name: 'ara155',
 description: 'Polisi Arar (ciddiye almayın)',
 usage: 'ara155'
};