const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json')
var PREFİX = ayarlar.prefix
exports.run = async (client, message, args) => {
 const dil = db.fetch(`dil_${message.guild.id}`)
 if(dil == 'tr'){
 if (!message.guild) {

let kinal = db.fetch(`hgK3_${message.guild.id}`) 

if (message.channel.id !=kinal) return message.channel.send(`Bot ekleme kodunu Sadece bot ekleme kanalında kullanabilirsin. O kanal ayarlı ise <#${kinal}> Kullanabilirsin degilse h!botekle-log-kanal #kanal`)
message.delete({ timeout: 5000})
 const botid = args[0];
 if (!botid)
 return message
 .reply(
 (`Lütfen eksik kısımları doldurun.\n**Doğru Kullanım**; \`\`${PREFİX}botekle <bot-id> <bot-prefix>\`\``)
 )
message.delete({ timeout: 5000})
 const prefix = args.slice(1).join(" ");
 if (!prefix)
 return message
 .reply(
 (`Lütfen eksik kısımları doldurun.\n**Doğru Kullanım**; \`\`${PREFİX}botekle <bot-id> <bot-prefix>\`\``)
 )
message.delete({ timeout: 5000})
 let kanal = await db.fetch(`hgK9_${message.guild.id}`); 
 if (!kanal) return;
 const embed3 = new Discord.MessageEmbed()
 .setColor("GREEN")
 .setDescription(`${message.author}, botun başvuruya eklendi.`);
 message.channel.send(embed3)
message.delete({ timeout: 5000})
 const embed2 = new Discord.MessageEmbed()
 .setColor("BLUE")
 .setDescription(
 `⚪ | ${message.author} adlı kullanıcı prefixi **\`${prefix}\`** olan <@${botid}> adlı botu ile başvuru yaptı!`);
 client.channels.cache.get(kanal).send(embed2); // Kanal ID
 let yetkilikanal = await db.fetch(`hgK2_${message.guild.id}`); 
 if (!yetkilikanal) return;
 const yetkili = new Discord.MessageEmbed()
 .setColor("BLUE")
 .setTitle("Başvuru")
 .setDescription(`**Bot Sahibi**:\n${message.author}\n**Bot ID**:\n${botid}\n**Bot Prefix**:\n${prefix}\n**Davet Linkleri**:\n[Perm 0](https://discord.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0) | [Perm 8](https://discord.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8)`)
 client.channels.cache.get(yetkilikanal).send(yetkili);
};
} else{

let kinal = db.fetch(`hgK3_${message.guild.id}`) 

if (message.channel.id !=kinal) return message.channel.send(`You can only use the bot add code in the bot add channel.`)
message.delete({timeout: SÜRE})({ timeout: 5000})
 const botid = args[0];
 if (!botid)
 return message
 .reply(
 (`Please fill in the missing parts.\n**Usage**; \`\`${PREFİX}addbot <bot-id> <bot-prefix>\`\``)
 )
message.delete({ timeout: 5000})
 const prefix = args.slice(1).join(" ");
 if (!prefix)
 return message
 .reply(
 (`Please fill in the missing parts.\n**Usage**; \`\`${PREFİX}addbot <bot-id> <bot-prefix>\`\``)
 )
message.delete({ timeout: 5000})
 let kanal = await db.fetch(`hgK9_${message.guild.id}`); 
 if (!kanal) return;
 const embed3 = new Discord.MessageEmbed()
 .setColor("GREEN")
 .setDescription(`${message.author}, your bot has been added to the bot-list.`);
 message.channel.send(embed3)
message.delete({ timeout: 5000})
 const embed2 = new Discord.MessageEmbed()
 .setColor("BLUE")
 .setDescription(
 `:white_circle: | ${message.author} user has been submit a bot. Prefix: **\`${prefix}\`** olan <@${botid}> made an application with the bot named!`);
 client.channels.cache.get(kanal).send(embed2); // Kanal ID
 let yetkilikanal = await db.fetch(`hgK2_${message.guild.id}`); 
 if (!yetkilikanal) return;
 const yetkili = new Discord.MessageEmbed()
 .setColor("BLUE")
 .setTitle("New Submit")
 .setDescription(`**Bot Owner**:\n${message.author}\n**Bot ID**:\n${botid}\n**Bot Prefix**:\n${prefix}\n**İnvite Links**:\n[Perm 0](https://discord.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0) | [Perm 8](https://discord.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8)`)
 client.channels.cache.get(yetkilikanal).send(yetkili);
};
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['addbot'],
  PermLevel: 0
};

exports.help = {
  name: "botekle",
  description: "Bot ekleme başvurusu",
  usage: "bot"
};