const db = require("quick.db");
const Discord = require("discord.js");
const henor = require("../ayarlar.json");

 
exports.run = function(client, message, args) {
 const dil = db.fetch(`dil_${message.guild.id}`)
 if(dil == 'tr'){
 if (!message.guild) {
 var USER = message.author;
 var REASON = args.slice(0).join(" ");
 const embed = new Discord.MessageEmbed()
 .setColor('BLUE')
 .setImage("")
 .setAuthor(message.author.username, message.author.avatarURL())
 .setDescription(`**AFK Olmak İçin Bir Sebep Belirtin.**\n\n**AFK Örnek Kullanım :** \`h!afk <sebep>\``)
 if(!REASON) return message.channel.send(embed)

 db.set(`afk_${USER.id}`, REASON);
 db.set(`afk_süre_${USER.id}`, Date.now());
 const afk = new Discord.MessageEmbed()
 .setColor('BLUE')
 .setImage("")
 .setAuthor(message.author.username, message.author.avatarURL())
 .setDescription(` **AFK Moduna Başarıyla Girildi**\n\n**AFK Olma Sebebi :** \`${REASON}\``)
 message.channel.send(afk)
 
};
 } else{
 var USER = message.author;
 var REASON = args.slice(0).join(" ");
 const embed = new Discord.MessageEmbed()
 .setColor('BLUE')
 .setImage("")
 .setAuthor(message.author.username, message.author.avatarURL())
 .setDescription(`**Give a Reason to Become AFK.**\n\n**Example:** \`h!afk <reason>\``)
 if(!REASON) return message.channel.send(embed)

 db.set(`afk_${USER.id}`, REASON);
 db.set(`afk_süre_${USER.id}`, Date.now());
 const afk = new Discord.MessageEmbed()
 .setColor('BLUE')
 .setImage("")
 .setAuthor(message.author.username, message.author.avatarURL())
 .setDescription(` **AFK Mode Entered Successfully**\n\n**Reason:** \`${REASON}\``)
 message.channel.send(afk)
 } }
exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: [],
 permLevel: 0
};
 
exports.help = {
 name: 'afk',
 description: 'afk komutu',
 usage: 'afk'
};
