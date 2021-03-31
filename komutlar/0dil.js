const Discord = require('discord.js');
const db = require('quick.db')  
exports.run = (client, message, args) => {
 if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry: **Yeterli yetkin yok!** :no_entry:")
  
  let arg = args[0]
  if(!arg) return message.channel.send(`**You didn't select a language!**`)
  
  
  if(args[0] == 'tr') {
    db.set(`dil_${message.guild.id}`, 'tr')
    message.channel.send(`<:y_tik:820918443264049174> **Dil ** :flag_tr: Türkçe ** olarak ayarlandı. **`)
    
    
    
    
    
  } else if(args[0] == 'en'){
    db.set(`dil_${message.guild.id}`, 'en')
    message.channel.send(`<:y_tik:820918443264049174> **Language seted to ** ** :flag_us:  English**.`)

    /*  
    const dil = db.fetch(`dil_${message.guild.id}`)
    if(dil == 'tr'){
    
    // KOMUTUN
    // TÜRKÇESi
    
    } else{
    
    // KOMUTUN
    // İNGILİŞİ
    
    }
    
    */
    
    
    
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dil"],
  permLevel: 0
};

exports.help = {
  name: 'lang',
  description: 'Dil değiştirir',
  usage: 'Valens&Demon'
};