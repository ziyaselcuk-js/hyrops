const Discord = require("discord.js");
const db = require('quick.db')

exports.run = (client, message) => {

 let prex = new Discord.MessageEmbed()
 .addField(
 "``Veriler``",
 ` **Toplam sunucu:** **${client.guilds.cache.size}** \n **Toplam kullanıcı:** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n **Toplam kanal:** **${client.channels.cache.size}**`)
 .addField(
 "``Bot Geliştiricisi``",
 ` <@792750149070880809> \n <@697454127545974895> `)
 .addField(
 "Sürümler",
 ` **Discord.js sürümü:** **v${Discord.version}** \n **Node.js sürümü:** **${process.version}**`)
 .addField(
 "``Gecikmeler``",`
 ** Bot pingi:** **${Math.round(client.ws.ping)}** \n
 ** Mesaj gecikmesi:** **${new Date().getTime() - message.createdTimestamp}**`)
 
 
 .setThumbnail(client.user.avatarURL())
 .setTimestamp()
 .setFooter(client.user.username, client.user.avatarURL())
 .setColor("BLACK");
 message.channel.send(prex);
};

 
exports.conf = {
 enabled: true,
 guildOnly: false,
 permLevel: 0,
 aliases: ["botbilgi", "i","istatistik", "stats"]
};

exports.help = {
 name: "istatistik",
 description: "Botun İstatistiklerini Atar",
 usage: "!istatistik"
};