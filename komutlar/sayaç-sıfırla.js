const Discord = require('discord.js')
const fs = require('fs')

exports.run = async (client, message, args) => {
 let sayac = JSON.parse(fs.readFileSync("./sayac.json", "utf8"));
 if(!sayac[message.guild.id]) {
 const embed = new Discord.MessageEmbed()
 .setDescription(`Sayaç, ayarlanmadığından dolayı sıfırlanamaz!`)
 .setFooter('İyi eğlenceler dileriz!', client.user.avatarURL())
 .setColor("RANDOM")
 .setTimestamp()
 message.channel.send({embed})
 return
 }
 delete sayac[message.guild.id]
 fs.writeFile("./sayac.json", JSON.stringify(sayac), (err) => {
 console.log(err)
 })
 const embed = new Discord.MessageEmbed()
 .setDescription(`Sayaç, başarılı bir şekilde sıfırlandı!`)
 .setFooter('iyi eğlenceler dileriz!', client.user.avatarURL())
 .setColor("RANDOM")
 .setTimestamp()
 message.channel.send({embed})
 return
 }

exports.conf = {
 enabled: true, 
 guildOnly: false, 
 aliases: ['sayaçsıfırla'],
 permLevel: 0
};

exports.help = {
 name: 'sayaç-sıfırla', 
 description: 'Sayaçı, sıfırlar!',
 usage: 'sayaç-sıfırla'
};