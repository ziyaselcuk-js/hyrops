const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, args) => {
const dil = db.fetch(`dil_${message.guild.id}`)
    if(dil == 'tr'){
    if (!message.guild) {

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL())
        .setColor('RANDOM')
        .setTitle(`🔰 HyropsBOT Koruma Komutları`)
        .setDescription(`:white_small_square: **h!modlog** = Log Kanalını Ayarlar !\n:white_small_square: **h!modlog sıfırla** = Log kanalını Sıfırlar Sistemi Kapatır !\n:white_small_square: **h!link-engel** = Link (Reklam) Korumasını Açar/Kapatır !\n:white_small_square: **h!reklam-taraması** = Sunucuda Reklam Taraması Yapar !\n:white_small_square: **h!küfür** = Küfür Korumasını Açar/Kapatır !\n:white_small_square: **h!tag sıfırla** = Tag Sistemini Sıfırlar(kapatır) !\n:white_small_square: **h!tag** = Sunucuya Giren kişilere otomatik tag verir !\n:white_small_square: **h!capslock** = Sunucuda Capslock Korumasını açar/kapatır !\n:white_small_square: **h!rol-koruma** = Rol koruma sistemini açar/kapatır !\n:white_small_square: **h!kanal-koruma** = Kanal koruma sistemini Açar/Kapatır !\n:white_small_square: **h!güvenlik-sistemi** = Güvenlik Sistemini Açar !\n:white_small_square: **h!güvenlik kapat** = Güvenlik Sistemini Kapatır !`)  
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    .setImage("https://cdn.discordapp.com/attachments/819587699375079434/819858181474746368/standard.gif")
    return message.channel.sendEmbed(embed); 
};


} else {
const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL())
        .setColor('RANDOM')
        .setTitle(`🔰 HyropsBOT Guard Commands`)
        .setDescription(`:white_small_square: **h!link-engel** =Toggles Link Protection On / Off\n:white_small_square: **h!reklam-taraması** = Scans Ads on Server\n:white_small_square: **h!küfür** = Toggles Profanity Protection On / Off\n:white_small_square: **h!tag sıfırla** =Resets (closes) the Tag System\n:white_small_square: **h!tag** =It gives automatic tags to the people entering the server\n:white_small_square: **h!capslock** = Turns Capslock Protection on / off on server\n:white_small_square: **h!rol-koruma** = Turns on / off the role protection system\n:white_small_square: **h!kanal-koruma** = Turns the channel protection system On / Off\n:white_small_square: **h!güvenlik-sistemi** = Opens the Security System\n:white_small_square: **h!güvenlik kapat** = Closes the Security System`)  
        .setThumbnail(client.user.avatarURL())
        .setFooter(`${message.author.username} by using command.`, message.author.avatarURL())
    .setImage("https://cdn.discordapp.com/attachments/819587699375079434/819858181474746368/standard.gif")
    return message.channel.sendEmbed(embed); 
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['koruma','yardım-guard','help-guard','guard'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım-koruma',
  description: '',
  usage: 'yardım-koruma'
};