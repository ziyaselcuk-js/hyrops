const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('ms');

exports.run = async (client, message, args) => {
 let gold = await db.fetch(`üyelikk_${message.author.id}`)
if (!gold) return message.channel.send("Gold üye değilsin o yüzden bu komutu kullanamazsın.") 
message.channel.send(new Discord.MessageEmbed()
.setDescription(`${message.author} **Özelden Tasarım Sunucusu gönderdim bakar mısın.**`));
message.author.send(`> **1 adet __Tasarım__ sunucusu kurmak için tema geldi.

> Güle güle kullan 😇

https://discord.new/CbSHSRZS8EvK`).catch(error => message.channel.send(new Discord.MessageEmbed().setDescription("Mesajı gönderemedim. Muhtemelen DM'n kapalı.")));
};
exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: [],
 permLevel: 0
}

exports.help = {
 name: 'şablon-tasarım'
};