const Discord = require('discord.js');

exports.run = (client, message, args) => {
 let kanal = args.slice(0).join(' ');
 let guild = message.guild;
 if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('❌**Bunun için gerekli iznin yok**'); // Bunu Başkasıda Kullana Bilmesi İçin Kanalları Yönet Yetkisi Verin
 if (kanal.length < 1) return message.reply('⚠️ **Lütfen oluşturacağım kanalın adını yaz.**');
 message.delete({timeout: 10})();
 guild.channels.create({ name: 'Channel' })(kanal, 'voice');
 message.channel.send("**✅ Ses Kanalı Oluşturuldu**");
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ses-kanal-aç','ses-kanalı-aç'],
 permLevel: 3
};

exports.help = {
 name: 'ses-kanal-aç',
 description: 'Bir ses kanalı açar',
 usage: 'ses-kanal-aç [açmak istediğiniz kanalın adı]'
};