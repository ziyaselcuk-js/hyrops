const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');




let botid = ('816259117642547202') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
  const dil = db.fetch(`dil_${message.guild.id}`)
    if(dil == 'tr'){
    if (!message.guild) {

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL())
        .setColor('RED')
        .setTitle(`:large_orange_diamond: Hyrops Kullanıcı Komutları`)
        .setDescription(`:white_small_square: **h!afk** = Afk Olursunuz  !\n:white_small_square: **h!davetlerim** = Davet Sayınızı Gösterir !\n:white_small_square: **h!servericon** = Sunucu İkonunu Gösterir !\n:white_small_square: **h!botbilgi** = Bot Bilgilerini Gösterir !\n:white_small_square: **h!profil** = Discord Hesabınızla ilgili Bilgiler Verir !\n:white_small_square: **h!sunucubilgi** = Sunucu bilgilerini Gösterir !\n:white_small_square: **h!çeviri** = Yazdığınız Metinin Çeviri Linkini Atar !\n:white_small_square: **h!rolbilgi** = Bir Rol hakkında bilgi verir !\n:white_small_square: **h!seviye** = Sunucudaki Seviyenizi Gösterir (eğer açıksa) !\n:white_small_square: **h!havadurumu** = Hava Durumunu Gösterir !\n:white_small_square: **h!sunucutanıt** = Destek Sunucumuzda Sunucunuzu Tanıtırsınız !\n:white_small_square: **h!üyedurum** = Sunucunun üye durumunu gösterir !\n:white_small_square: **h!bug-bildir** = Bulduğunuz Bugları Bize Bildirmenizi Sağlar !\n:white_small_square: **h!ping** = Botun Pingini Gösterir !\n:white_small_square: **h!playstore** = Play store'da oyun aramanızıa Yarar !\n:white_small_square: **h!say** = Sesli Kanallarda ve sunucuda bulunan kişi sayısını gösterir !\n:white_small_square: **h!odayagit** = Etiketlediğiniz Kullanıcı Onaylarsa Yanına Gidersiniz \n:white_small_square: **h!odayaçek** = Etiketlediğiniz Kullanıcı Onaylarsa Yanınıza Çekersiniz`)  
        .setThumbnail(client.user.avatarURL())
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL())
    
       .setImage("https://cdn.discordapp.com/attachments/819587699375079434/819858181474746368/standard.gif")
    return message.channel.send(embed);
  
  
};
    } else {
      const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL())
        .setColor('RED')
        .setTitle(`:large_orange_diamond: Hyrops User Commands`)
        .setDescription(`:white_small_square: **h!afk** = Be afk  !\n:white_small_square: **h!invites** = Shows the Number of Invitations !\n:white_small_square: **h!servericon** = Shows Server Icon !\n:white_small_square: **h!stats** = Shows Bot Information !\n:white_small_square: **h!profile** = Provides Information About Your Discord Account!\n:white_small_square: **h!server-info** = Displays Server Information !\n:white_small_square: **h!translate** = Throws the Translation Link of Your Text!\n:white_small_square: **h!role-info** = Gives information about a Role!\n:white_small_square: **h!weather forecast** = Show weather forecast !\n:white_small_square: **h!server-ads** = Promote Your Server on Our Support Server !\n:white_small_square: **h!report-bug** = Lets You Notify Us of Bugs You Find!\n:white_small_square: **h!ping** = Show bot's ping !`)  
        .setThumbnail(client.user.avatarURL())
        .setFooter(`${message.author.username} by used command.`, message.author.avatarURL())
    
       .setImage("https://cdn.discordapp.com/attachments/819587699375079434/819858181474746368/standard.gif")
   return message.channel.send(embed);
      
    }}  
      
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcıyardım','yardımkullanıcı','kullanıcı','help-kullanıcı', 'help-user'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım-kullanıcı',
  description: '',
  usage: 'yardım-kullanıcı'
};