const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async(bot, message, args) => {
 let gold = await db.fetch(`üyelikk_${message.author.id}`)
if (!gold) return message.channel.send("Gold üye değilsin o yüzden bu komutu kullanamazsın.") 
 let komut = await db.fetch(`sunucuKomut_${message.guild.id}`)

 let gonderileceksey = await db.fetch(`sunucuMesaj_${message.guild.id}`)
 if(!komut) await db.set(`sunucuKomut_${message.guild.id}`, 'Bulunmuyor.')
 
 
 let welcomeEmbed = new Discord.MessageEmbed()
 .addField(`Oto Cevap Liste.`, `\`${komut}\``)
 .setColor('GREEN')
 message.channel.send(welcomeEmbed)
 };


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permlevel: 0
};

exports.help = {
 name: "otocevap-liste"
};