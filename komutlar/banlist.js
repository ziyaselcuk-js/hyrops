const Discord = require('discord.js')
const db = require('quick.db')
exports.run = (bot, message, args) =>
{
 const dil = db.fetch(`dil_${message.guild.id}`)
 if(dil == 'tr'){
 if (!message.guild) {
 let Discord = require('discord.js');
 var userlist = message.guild.fetchBans();
 userlist.then(collection =>
 {
 if(collection.first() == null)
 {
 const embed = new Discord.MessageEmbed()
 .setTitle(`:no_entry_sign: Banlanan Kullanıcı bulunamadı :no_entry_sign:`)
 .setColor("RED");
 message.channel.send({embed});
 }
 else
 {
 const embed = new Discord.MessageEmbed()
 .setTitle("🚫 Banlistesi | Sunucudan Banlananlar")
 .setColor("RED");
 for(userlist of collection)
 {
 var user = userlist[1];
 embed.addField(` **${user.tag}**`, `_________ _____________`);
 }
 message.channel.send({embed});
 }
 });
 }
 } else{
 let Discord = require('discord.js');
 var userlist = message.guild.fetchBans();
 userlist.then(collection =>
 {
 if(collection.first() == null)
 {
 const embed = new Discord.MessageEmbed()
 .setTitle(`:no_entry_sign: Banned User not found :no_entry_sign:`)
 .setColor("RED");
 message.channel.send({embed});
 }
 else
 {
 const embed = new Discord.MessageEmbed()
 .setTitle("🚫 Ban List| Banned this server")
 .setColor("RED");
 for(userlist of collection)
 {
 var user = userlist[1];
 embed.addField(` **${user.tag}**`, `_________ _____________`);
 }
 message.channel.send({embed});
 }
 });
 }
}
module.exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["members.banlılar","members.banliste","members.banlist"],
 permLevel: 2
};
module.exports.help = {
 name: 'members.banlist',
 description: 'Sunucundan Banlanan üyeleri gösterir.',
 usage: 'members.banlist'
};