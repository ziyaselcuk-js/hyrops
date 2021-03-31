const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
 
if(!message.member.hasPermission("ADMINISTRATOR")) {
const embed = new Discord.MessageEmbed()
.setColor('RED')
.setDescription('**Log kanalını ayarlamak için `Yönetici` İznine sahip olmalısın!')
return message.channel.send(embed)
}


if (args[0] === 'sıfırla') {
let rol = db.fetch(`hgK9_${message.guild.id}`) 
 if (!rol) return message.channel.send(` Botlist Log Kanal Aayrlanmamış!`)
 message.channel.send(`Botlist Log Kanalı Sıfırlandı!`)
db.delete(`hgK9_${message.guild.id}`)
 return;
}

let kinal = db.fetch(`hgK9_${message.guild.id}`)
if(db.has(`hgK9_${message.guild.id}`)) {
const embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`**Log kanalı <#${kinal}> kanalına ayarlı! \nKapatmak için** \`${ayarlar.prefix}log-kanal sıfırla\``)
return message.channel.send(embed)
}
let kanal = message.mentions.channels.first();
 
if(!kanal) {
const embed = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`**Log kanalın etiketlemedin! \`Doğru kullanım: ${ayarlar.prefix}log-kanal #kanal\`**`)
return message.channel.send(embed)
}
db.set(`hgK9_${message.guild.id}`, kanal.id);
 //youtube.com/xfixxyyy
//teşekkürler xFixxy
const embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`**Log kanalını ${kanal} olarak ayarlandı!**`) 
message.channel.send(embed) 
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['logkanal','log'],
permLevel: 0
};
exports.help = {
name: 'log-kanal',
description: 'Hoşgeldin kanalını ayarlamaya yarar.',
usage: 'giriş-kanal #kanal'
};