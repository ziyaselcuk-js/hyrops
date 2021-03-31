const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
 const guildArray = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
 while (guildArray.length) {
 const embed = new Discord.MessageEmbed();
 const guilds = guildArray.splice(0,20);
 for (const guild of guilds) {
 embed.setDescription(`${guilds.map(a => '`' +a.id + '` | **Üye Sayýsý:** `' + a.memberCount + '` | **Bölgesi:** `' + a.region + '` | `' + a.name + '`').join('\n')}`);
 embed.setColor('#D97634')
 embed.setAuthor(`Botun Bulunduðu Sunucular; (${client.guilds.cache.size})`, client.user.avatarURL())
 }
 message.channel.send({embed: embed});
 }
};

exports.conf = {
 enabled: false,
 guildOnly: false,
 aliases: ['ailemiz', 'sunuculiste'],
 permLevel: 4
};

exports.help = {
 name: 'sunucu-liste',
 description: 'Botun sunucularýný detaylý bir þekilde listeler.',
 usage: 'sunucu-liste',
};