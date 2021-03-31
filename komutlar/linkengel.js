const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!args[0]){
    message.channel.send("❌ Reklam Engel için Doğru Kullanım: **h!link-engel aç / h!link-engel kapat**")
  }
  if (args[0] === 'aç'){
    message.channel.send("✅ Sistem Başarıyla Aktifleştirildi. \n **KICK_MEMBERS** Yetkisi Olan Kişileri Engellemez !")
    
    db.set(`reklam_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send("✅ Reklam Filtresi başarıyla kapatıldı!.")
    
    db.set(`reklam_${message.guild.id}`, "kapali")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reklam-engel","link-engel"],
  permLevel: 2
}
exports.help = {
  name: "link-engel",
  description: "Reklam engel açar yada kapatır.",
  usage: "link-engel"
}