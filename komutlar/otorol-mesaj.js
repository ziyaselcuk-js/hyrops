const Discord = require('discord.js')
const fs = require('fs')
 const ayarlar = require('../ayarlar.json');
 const prefix = ayarlar.prefix
 
exports.run = async (client, message, args) => {

 
 let sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
 if(!sunucuyaözelayarlarOtorol[message.guild.id]) {
 const embed = new Discord.MessageEmbed()
 .setDescription(`Otorolü Ayarlamadığın İçin Kapatamazsın!`)
 .setColor("RANDOM")
 .setTimestamp(`Ayarlamak İçin ${prefix}otorol @roladı`)
 message.channel.send({embed})
 return
 }
 exports.run = async (client, message, args, member) => {
 let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
 delete giriscikis[message.guild.id]
 fs.writeFile("./otorol.json", JSON.stringify(giriscikis), (err) => {

 })
 const embed = new Discord.MessageEmbed()
 .setDescription(`Otorol Mesajları Başarıyla Kapatıldı`)
 .setColor("RANDOM")
 .setTimestamp()
 message.channel.send({embed})
 return
 }}

exports.conf = {
 enabled: true, 
 guildOnly: false, 
 aliases: ["kapatotoyazı","otorolmesajkapat"],
 permLevel: 3,
};

exports.help = {
 name: 'otorolmesajkapat', 
 description: 'Otorol Kapatır',
 usage: 'otorolmesajkapat'
};