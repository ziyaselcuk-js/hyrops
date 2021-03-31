const Discord = require('discord.js');

exports.run = (client, message, args) => {
 let kanal = args.slice(0).join(' ');
 let guild = message.guild;
 if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('❌ **Bunun için gerekli iznin yok**');
 if (kanal.length < 1) return message.reply('⚠️ **Lütfen Oluşturacağım Kanalın Adını Yaz.!!**');
 message.delete({timeout: 10})();
 guild.channels.create({ name: 'Channel' })(kanal, 'text');
 message.channel.send("**\:tik1: Yazı Kanalı Oluşturuldu!**");
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['yazı-kanal-aç','metin-kanal-aç','metin-kanalı-aç'],
 permLevel: 3
};

exports.help = {
 name: 'yazı-kanal-aç',
 description: 'Bir ses kanalı açar',
 usage: 'yazı-kanal-aç [açmak istediğiniz kanalın adı]'
};