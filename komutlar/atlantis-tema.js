const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('ms');

exports.run = async (client, message, args) => {
 let gold = await db.fetch(`üyelikk_${message.author.id}`)
if (!gold) return message.channel.send("Gold üye değilsin o yüzden bu komutu kullanamazsın.") 
message.channel.send(new Discord.MessageEmbed()
.setDescription(`${message.author} **Özelden Atlantis Sunucusu gönderdim bakar mısın.**`));
message.author.send(`> **1 adet __Atlantis__ sunucusu kurmak için tema geldi.**

> Güle güle kullan 😇

https://discord.new/FMRQ2B6s8K2E`).catch(error => message.channel.send(new Discord.MessageEmbed().setDescription("Mesajı gönderemedim. Muhtemelen DM'n kapalı.")));
};
exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: [],
 permLevel: 0
}

exports.help = {
 name: 'şablon-atlantis'
};