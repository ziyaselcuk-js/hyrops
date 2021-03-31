let database = require("quick.db")
const Discord = require('discord.js');
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message, args) => {
  const dil = database.fetch(`dil_${message.guild.id}`)
    if(dil == 'tr'){
    if (!message.guild) {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)

if (args[0] === 'sıfırla') {
let kanal = database.fetch(`abonerol.${message.guild.id}`)  
  if (!kanal) return message.channel.send(`:white_small_square: Abone Rolü Yok!`)
  message.channel.send(`:white_small_square: Abone Rolü Silindi!`)
database.delete(`abonerol.${message.guild.id}`)
  return;
}
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abonerol @rol`)
  
  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(`Abone rolü başarıyla ${rol} olarak ayarlandı.`)
}
 } else{
    if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`You do not have the necessary privileges to use this command.`)

if (args[0] === 'reset') {
let kanal = database.fetch(`abonerol.${message.guild.id}`)  
  if (!kanal) return message.channel.send(`:white_small_square: No subscriber role!`)
  message.channel.send(`:white_small_square: Subscriber Role Deleted!`)
database.delete(`abonerol.${message.guild.id}`)
  return;
}
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Please mention a role. Example: ${ayarlar.prefix}subscriber @role`)
  
  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(`The subscriber role has been successfully set to ${rol}.`)
 }}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-rol'],
  perm: 0
}
exports.help = {
  name: 'abonerol'
}

exports.play = {
  kullanım: '!abonerol @rol',
  açıklama: 'Abone Rolünü Ayarlarsınız',
  kategori: 'Abone'
}