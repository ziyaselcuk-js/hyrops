const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  const dil = db.fetch(`dil_${message.guild.id}`)
    if(dil == 'tr'){
    if (!message.guild) {

  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if (message.author.id !== ayarlar.sahip) return message.channel.send(`Capslock engelleme adlı komutu kullanabilmek için, siteyi ziyaret ediniz.`)
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:fire: Yeterli yetki, bulunmamakta!`)
  
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`)
    message.channel.send(`:fire: Capslock engelleme sistemi, kapatıldı!`)
  }
 
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'acik')
    message.channel.send(`:fire: Capslock engelleme sistemi, aktif!`)
  }
};
 } else {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:fire: Sufficient authorization, not available!`)
  
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`)
    message.channel.send(`:fire: Capslock blocking system is turned off!`)
  }
 
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'on') 
    message.channel.send(`:fire: Capslock blocking system, active!`)
  }
};
   
} 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capslock'],
  permLevel: 3
};

exports.help = {
  name: 'capslock',
  category: 'Moderasyon komutları!',
  description: 'Capslock kullanımını engeller.',
  usage: 'capslock'
};