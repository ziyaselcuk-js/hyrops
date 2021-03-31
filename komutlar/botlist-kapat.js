const Discord = require('discord.js');
const db = require('quick.db') 
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {
const dil = db.fetch(`dil_${message.guild.id}`)
    if(dil == 'tr'){
    if (!message.guild) {

if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(':x: bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')

  if(!db.fetch(`hgK9_${message.guild.id}`)) return message.channel.send('Görünüşe Göre Botlist Sistemi Kapalı Görünüyor :).')
   

   message.reply('Botlist Tüm Ayarları Sıfırlanmıstır.')
db.delete(`hgK3_${message.guild.id}`)
db.delete(`hgK9_${message.guild.id}`)
db.delete(`hgK2_${message.guild.id}`)
db.delete(`botlistyetkilirol_${message.guild.id}`)


}; 
} else{
  if(!db.fetch(`hgK9_${message.guild.id}`)) return message.channel.send('It Looks like the Botlist System is Closed :).')
   

   message.reply('Botlist All Settings Are Reset.')
db.delete(`hgK3_${message.guild.id}`)
db.delete(`hgK9_${message.guild.id}`)
db.delete(`hgK2_${message.guild.id}`)
db.delete(`botlistyetkilirol_${message.guild.id}`)

}}
exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: ['close-botlist', 'botlist-close'], 
permLevel: 0
}

exports.help = {
 name: 'botlist-kapat', 
description: 'kayıt sistemini kapatır',
 usage: 'kayıt-kapat' 
};