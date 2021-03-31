const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const DarkCode = new Discord.MessageEmbed()

             .setColor('RANDOM')
              .setTitle(`Emoji Menü`)
             .setAuthor(`HyropsBOT`, client.user.avatarURL()) 
             .setThumbnail(client.user.avatarURL())
             .addField(`<a:Sa:821264496156475393> **${prefix}ara**`,`Emoji Ararsınız.`)
             .addField(`<a:Sa:821264496156475393> **${prefix}rol**`,`Emojiye rol engel koyarsınız.`)
             .addField(`<a:Sa:821264496156475393> **${prefix}bilgi**`, `Emoji bilgi gösterir.`)
             .addField(`<a:Sa:821264496156475393> **${prefix}büyüt**`, `Emojiyi büyütür.`)
             .addField(`<a:Sa:821264496156475393> **${prefix}gönder**`, `Bot belirtilen emojiyi gönderir.`)
             .addField(`<a:Sa:821264496156475393> **${prefix}liste**`, `Sunucudaki emojileri listeler.`)
             .addField(`<a:Sa:821264496156475393> **${prefix}rastgele-yükle**`, `Sunucuya rastgele emoji ekler.`)
             .addField(`<a:Sa:821264496156475393> **${prefix}hızlı-yükle**`, `Sunucuya hızlı emoji yükler.`)
             .setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
            
        return message.channel.send(DarkCode);
}

exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ['help-emoji'],
    permLevel : 0
}

exports.help = {
    name : 'yardım-emoji',
    description : 'Komut Gösterir atar',
    usage : 'yardım'
}