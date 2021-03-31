const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Yapımcı istatistik')
.setTimestamp()
.addField('» isim yaş', 'Anıl 14')
.addField('» Instagram ', 'valensoffical')
.addField('» Facebook', 'Kullanmıyor')
.addField('» Youtube', 'Adres Verilmedi')
.addField('» Dc etiket', '<@!792750149070880809>')
.setFooter(' 2021 HyropsBOT', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false, 
 aliases: ["yapımcı","kurucu",], 
 permLevel: 0 
};

exports.help = {
 name: 'Owner',
 description: 'TÃ¼m komutlarÄ± gÃ¶sterir.',
 usage: 'yardÄ±m'
};