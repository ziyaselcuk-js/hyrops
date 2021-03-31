const Discord = require("discord.js");
const db = require ('quick.db')

exports.run = (client, message, args) => {
 const dil = db.fetch(`dil_${message.guild.id}`)
 if(dil == 'tr'){
 if (!message.guild) {

if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("⛔️ **Yeterli yetkin yok!** ⛔️")
 let user = message.mentions.users.first();

 if(!user) return message.channel.send("⚠️ **Kimi members.banlayacağını belirtmedin**")
 
 message.guild.members.ban(user);
 
 
 const embed = new Discord.MessageEmbed()
 .setColor("RED")
 .setDescription(`✅ ${user.username}#${user.discriminator} Adlı Kullanıcı ${message.author.username}#${message.author.discriminator} Tarafından Banlandı`)
 message.channel.send(embed)
};
 } else{
 if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("⛔️ **No permission yet!** ⛔️")
 let user = message.mentions.users.first();

 if(!user) return message.channel.send("⚠️ **Please mention an user**")
 
 message.guild.members.ban(user);
 
 
 const embed = new Discord.MessageEmbed()
 .setColor("RED")
 .setDescription(`✅ ${user.username}#${user.discriminator} user ${message.author.username}#${message.author.discriminator} by members.banned`)
 message.channel.send(embed)
};
}
exports.conf = {
 enabled: true, 
 guildOnly: false,
 aliases: ["yasakla"], 
 permLevel: 0 
};
exports.help = {
 name: 'members.ban', 
 description: 'Sunucuda kullanıcıyı kayıt etmeye yarar.', 
 usage: 'members.ban @kullanıcı'
};