const Discord = require('discord.js');
const db = require('quick.db') 
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
 const dil = db.fetch(`dil_${message.guild.id}`) 
 
 if(dil == 'tr'){
 if (!message.guild) {

const davethenor = new Discord.MessageEmbed()
 .setTitle(`${client.user.username} Davet Menüsü `)
 .setDescription(` **Botun Davet Linki İçin** [tıkla](https://discord.com/oauth2/authorize?client_id=816259117642547202&permissions=8&scope=bot) \n **Destek İçin ** [tıkla](https://discord.gg/UAuAtakMZW)`)
 .setThumbnail(client.user.avatarURL())
 .setFooter(`${message.author.username} Başarıyla Davet Sistemi Kullandı`, message.author.avatarURL())
 .setColor(`#ffd100`)
message.channel.send(davethenor)

 
 
};
} else {
 

const davethenor2 = new Discord.MessageEmbed()
 .setTitle(`${client.user.username} İnvite Menu `)
 .setDescription(` **For the bot's invitation link** [click](https://discord.com/oauth2/authorize?client_id=816259117642547202&permissions=8&scope=bot) \n **For support ** [click](https://discord.gg/UAuAtakMZW)`)
 .setThumbnail(client.user.avatarURL())
 .setFooter(`${message.author.username} Successfully Used Invitation System`, message.author.avatarURL()) //çalış köpekkkkk xd
 .setColor(`#ffd100`)
message.channel.send(davethenor2)
}}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["bot-davet", "invite"],
 permLevel: 0,
};

exports.help = {
 name: 'davet',
 description: '',
 usage: 'davet'
};