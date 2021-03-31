const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
if(!message.member.hasPermission("ADMINISTRATOR")) {
const embed = new Discord.MessageEmbed()
.setColor('RED')
.setDescription('**Yetkili Log kanalını ayarlamak için `Yönetici` İznine sahip olmalısın!')
return message.channel.send(embed)
}

if (args[0] === 'sıfırla') {
let rol = db.fetch(`hgK2_${message.guild.id}`) 
 if (!rol) return message.channel.send(` Botlist Yönetici Log Aayrlanmamış!`)
 message.channel.send(` Botlist Yönetici log Sıfırlandı!`)
db.delete(`hgK2_${message.guild.id}`)
 return;
}


let kinal = db.fetch(`hgK2_${message.guild.id}`)
if(db.has(`hgK2_${message.guild.id}`)) {
const embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`**Yetkili Log kanalı <#${kinal}> kanalına ayarlı! \nKapatmak için** \`${ayarlar.prefix}yetkili-log-kapat\``)
return message.channel.send(embed)
}
let kanal = message.mentions.channels.first();
 
if(!kanal) {
const embed = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`**Yetkili Log kanalın etiketlemedin! \`Doğru kullanım: ${ayarlar.prefix}yetkili-log-kanal #kanal\`**`)
return message.channel.send(embed)
}
db.set(`hgK2_${message.guild.id}`, kanal.id);
const embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`**Yetkili Log kanalını ${kanal} olarak ayarlandı!**`) 
message.channel.send(embed) 
}; // xFixxy :)///
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['modlog','yetkili-log'],
permLevel: 0
};
exports.help = {
name: 'yetkili-log-kanal',
description: 'Hoşgeldin kanalını ayarlamaya yarar.',
usage: 'giriş-kanal #kanal'
};// Bu altyapı xFixxy'e aittir.