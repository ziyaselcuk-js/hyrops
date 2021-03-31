const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');

let botid = ('712705315367550981')


exports.run = (client, message, args) => {
const dil = db.fetch(`dil_${message.guild.id}`)
    if(dil == 'tr'){
    if (!message.guild) {



    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL())
        .setColor('RANDOM')
        .setTitle(` 🔗 HyropsBOT Yetkili Komutları`)
        .setDescription(`<a:yildiz_1:819148188924510208> **h!ban** = Kullanıcıyı Sunucudan Banlar !\n <a:yildiz_1:819148188924510208> **h!sayaç-ayarla** = Sayaç Ayarlar/Sıfırlarsınız !\n <a:yildiz_1:819148188924510208> **h!sayaç-sıfırla** = Sayaç Ayarlar/Sıfırlarsınız\n<a:yildiz_1:819148188924510208> **h!forceban** = Kullanıcıya İD'si Üzerinden Ban Atar !\n<a:yildiz_1:819148188924510208> **h!kick** = Kullanıcıyı Sunucudan Atar !\n<a:yildiz_1:819148188924510208> **h!mute** = Kullanıcıyı Süreli Olarak Susturur !\n<a:yildiz_1:819148188924510208> **h!otorol** = Otorol Rolünü Ayarlar !\n<a:yildiz_1:819148188924510208> **h!otorolmesajkapat** = Otorol Mesajını Kapatmanızı Sağlar !\n<a:yildiz_1:819148188924510208> **h!otorol-kapat** = Otorol Kapatmanızı sağlar !\n<a:yildiz_1:819148188924510208> **h!temizle** = Mesajları Temizler !\n<a:yildiz_1:819148188924510208> **h!çekiliş** = Kullanıcılar Arasında Çekiliş Yapar !\n<a:yildiz_1:819148188924510208> **h!seviye-aç** = Seviye sistemini Açar !\n<a:yildiz_1:819148188924510208> **h!seviye-log** = Seviye log kanalını ayarlar !\n<a:yildiz_1:819148188924510208> **h!seviye-xp** = Seviye XP Değerini Ayarlar !\n<a:yildiz_1:819148188924510208> **h!seviye-rol** = Seviye sistemini role göre ayarlar !\n<a:yildiz_1:819148188924510208> **h!seviye-kapat** = Seviye sistemini kapatır !\n<a:yildiz_1:819148188924510208> **h!banlist** = Sunucudan Banlananları Listeler !\n<a:yildiz_1:819148188924510208> **h!ses-kanal-aç** = Ses Kanalı Oluşturur !\n<a:yildiz_1:819148188924510208> **h!metin-kanal-aç** = Metin Kanalı Oluşturur !\n<a:yildiz_1:819148188924510208> **h!uyarı** = Kullanıcıya Uyarı Vermenizi Sağlar !\n<a:yildiz_1:819148188924510208> **h!oylama** = Sunucuda Oylama Yapmanızı Sağlar !\n<a:yildiz_1:819148188924510208> **h!sohbet-kapat** = Kanalı Yazışmaya Kapatırsınız !\n<a:yildiz_1:819148188924510208> **h!sohbet-aç** = Komutunu Yazıldığı Kanalı Yazışmaya Açarsınız !\n<a:yildiz_1:819148188924510208> **h!sa-as** = Sa-as Sistemini Açar/Kapatır !`)  
        .setThumbnail(client.user.avatarURL())
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL())
    
        .setImage("https://cdn.discordapp.com/attachments/819587699375079434/819858181474746368/standard.gif") 
    return message.channel.send(embed);
};

} else {
const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL())
        .setColor('RANDOM')
        .setTitle(` 🔗 HyropsBOT Moderation Commands`)
        .setDescription(`<a:yildiz_1:819148188924510208> **h!ban** = Ban the User from the Server \n<a:yildiz_1:819148188924510208> **h!forceban** = Ban the User via ID
\n<a:yildiz_1:819148188924510208> **h!kick** = Kicks the User from the Server \n<a:yildiz_1:819148188924510208> **h!mute** = Silences the User Periodically!\n<a:yildiz_1:819148188924510208> **h!otorol** =Sets the Autoroller Role\n<a:yildiz_1:819148188924510208> **h!otorolmesajkapat** = Allows you to turn off the Autorol Message\n<a:yildiz_1:819148188924510208> **h!otorol-kapat** =Autorol allows you to close\n<a:yildiz_1:819148188924510208> **h!sil ** = Clears Messages\n<a:yildiz_1:819148188924510208> **h!çekiliş** = Draws Among Users  \n  <a:yildiz_1:819148188924510208>**h!banlist** = Lists Banned From Server\n<a:yildiz_1:819148188924510208> **h!ses-kanal-aç** = Create a voice channel !\n<a:yildiz_1:819148188924510208> **h!metin-kanal-aç** = Create a text channel !\n<a:yildiz_1:819148188924510208> **h!uyarı** = Allows you to give warning to the user\n<a:yildiz_1:819148188924510208> **h!oylama** = Allows You to Vote on the Server\n<a:yildiz_1:819148188924510208> **h!sohbet-kapat** = You Close the Channel to Correspondence!\n<a:yildiz_1:819148188924510208> **h!sohbet-aç** = You Open the Channel the Command is Written in to Correspondence!`)  
        .setThumbnail(client.user.avatarURL())
        .setFooter(`${message.author.username} by using comamnd.`, message.author.avatarURL())
    
        .setImage("https://cdn.discordapp.com/attachments/819587699375079434/819858181474746368/standard.gif") 
   return message.channel.send(embed);  
};
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardımyetkili','help-yetkili','yardım-yetkili','help-yetkili','yetkili', 'help-moderation', 'moderation'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım-yetkili',
  description: '',
  usage: 'yardım-yetkili'
};