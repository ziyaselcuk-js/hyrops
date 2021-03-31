const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args) => {
   if(!message.member.permissions.has('MANAGE_GUİLD')) return message.channel.send('Bu komutu kullanabilmek için `Sunucuyu_Yönet` yetkisine sahip olmalısın')
   
  let prefix = args[0]
  if (!prefix) return message.reply(' **:x: Prefix Belirt!**')
      db.set(`prefix_${message.guild.id}`, prefix)
     message.channel.send('**  <:y_tik:819144238947762186> Prefixim ' + prefix + 'Olarak Ayarlandı  **')
  
  
}

exports.conf = {
    aliases:[],
    permlevel: 0
};

exports.help = {
    name: "prefix-ayarla"
}