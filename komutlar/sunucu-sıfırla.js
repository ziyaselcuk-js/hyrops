const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
 let gold = await db.fetch(`üyelikk_${message.author.id}`)
if (!gold) return message.channel.send("Gold üye değilsin o yüzden bu komutu kullanamazsın.") 
 if (!message.member.hasPermission('ADMINISTRATOR'))
 return message.channel.send(" Yetkin bulunmuyor.");
 message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setTitle('Komut Girişi').setDescription('Sunucuyu Sıfırlamak İstiyor Musun?.').setFooter('Bu eylemi onaylıyorsan "yes " yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'yes', {
max: 1,
time: 40000,
errors: ['time'],
})
.then((collected) => {
 message.guild.channels.map(c => c.delete())
 message.guild.roles.cache.forEach(sil => {sil.delete()}); 
 message.guild.channels.map(c => c.delete())
 message.guild.roles.cache.forEach(sil => {sil.delete()}); 
 message.guild.channels.map(c => c.delete())
 message.guild.roles.cache.forEach(sil => {sil.delete()}); 

 message.guild.channels.create({ name: 'Channel' })('HyropsBOT', 'category', [{
 id: message.guild.id,
 }]);

 message.guild.channels.create({ name: 'Channel' })(`Sunucu-Sıfırlandı`, 'text')
 
 .then(channel =>
 channel.setParent(message.guild.channels.cache.find(channel => channel.name === "hyrops-bot")))
 .then(channels =>
 channels.send(`Başarıyla Kanallar Sıfırlandı.Eğer sizde hala bazı kanallar var olarak gözüküyor ise discordu yeniden başlatmanızı tavsiye ediyoruz.Bu bizden kaynaklı değil discorddan kaynaklı bir bugdır.`))

 });
});
};

exports.conf = { 
 enabled: true,
 guildOnly: true,
 aliases: ['sunucu-sil'],
 permLevel: 0
};

exports.help = {
 name: 'sunucu-sıfırla',
 description: 'Bot İçin gerekli kanlları sıfırlar.',
 usage: 'sunucu-sıfırla'
};
