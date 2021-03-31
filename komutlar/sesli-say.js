const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
 if(message.author.bot || message.channel.type === "dm") return;
 const voicechannels = message.guild.channels.filter(c => c.type === 'voice');
 let count = 0;
 
 for (const [id, voicechannel] of voicechannels) count += voicechannel.members.cache.size;
 const emoji = client.emojis.cache.find(emoji => emoji.name === "tik");
 const arrifentembed = new Discord.MessageEmbed()
 .setColor("black")
 .setAuthor('Bilgi', `${client.user.avatarURL()}`)
 .addField(`Sesli Kanallarda`,`${count} kişi bulunmaktadır.`)
 .addField(`Sunucuda`,`${message.guild.memberCount} kişi bulunmaktadır.`)
 .setTimestamp()
 .setFooter(`HyropsBOT`)
 
 message.channel.send(arrifentembed)
 message.react(emoji)
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'say',
 description: 'kullanıcıyı susturur.',
 usage: 'say'
};