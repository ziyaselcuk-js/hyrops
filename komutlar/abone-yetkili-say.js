const Discord = require('discord.js');
let db = require("quick.db")
const Client = new Discord.Client();
exports.run = (client, message) => {
 const dil = db.fetch(`dil_${message.guild.id}`)
 if(dil == 'tr'){
 if (!message.guild) {
 
 let rochelle = message.mentions.users.first();

 if (!rochelle) rochelle = message.author;

 let abone = db.fetch(`abone.${message.author.id}`);

 if(!message.mentions.users.first()) return message.channel.send(`Bir Üye Etiketle!`)
 let user = message.mentions.users.first() || message.author;

 
const Embed = new Discord.MessageEmbed().setColor(0x36393F)
.setDescription(`Toplam Abone Verdigi Kisi : **${abone} Kisiye Abone Rolü Vermis**`)
message.channel.send(Embed)
};
 } else{
 let rochelle = message.mentions.users.first();

 if (!rochelle) rochelle = message.author;

 let abone = db.fetch(`abone.${message.author.id}`);

 if(!message.mentions.users.first()) return message.channel.send(`Mention a Member!`)
 let user = message.mentions.users.first() || message.author;

 
const Embed = new Discord.MessageEmbed().setColor(0x36393F)
.setDescription(`Total Giving Subscribe : **${abone}**`)
message.channel.send(Embed)
};
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["aboneysay","abone-yetkili-say", "subscribe-count", "subscribe"],
 kategori: "Bot",
 permLevel: 0
};

exports.help = {
 name: 'abone-yetkili',
 description: 'Bot ile ilgili bilgi verir.',
 usage: 'bilgi'
};