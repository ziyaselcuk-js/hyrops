const Discord = require('discord.js');
const moment = require('moment');
const ms = require('ms')
exports.run = async (client, message) => {
var time = moment().format('Do MMMM YYYY , hh:mm');
var room;
var title;
var duration;
var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
var filter = m => m.author.id === message.author.id;
 
  
  
     message.channel.send(`:confetti_ball: | **Çekilişin yapılacağı kanalın adını yazınız !**`).then(msg => {
 message.channel.awaitMessages(filter, {
 max: 1,
 time: 20000,
 errors: ['time']
 }).then(collected => {
 let room = message.guild.channels.cache.find('name' , collected.first().content);
 if(!room) return message.channel.send('✖️| **Böyle bir kanal bulamadım**');
 room = collected.first().content;
 collected.first().delete();
 msg.edit('🎊 | **Çekilişin süresini belirleyiniz (1s, 1m, 1h, 1d, 1w)**').then(msg => {
 message.channel.awaitMessages(filter, {
 max: 1,
 time: 20000,
 errors: ['time']
 }).then(collected => {
 if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('🎊| **Süre Belirlenemede ! :(**');
 duration = collected.first().content
 collected.first().delete();
 msg.edit('🎊 | **Şimdi de Ödülü Yazın !**').then(msg => {
 message.channel.awaitMessages(filter, {
 max: 1,
 time: 20000,
 errors: ['time']
 }).then(collected => {
 title = collected.first().content;
 collected.first().delete();
 msg.delete();
 message.delete({timeout: 5})();
 try {
                  let giveEmbed = new Discord.MessageEmbed()
 .setColor("#f558c9")
 .setDescription(`**Ödül: ${title}** \n🎉'a Basarak Katıl \nKalan Süre : ${duration} \n **Başlama Zamanı :** ${hours}:${minutes}:${seconds} ${suffix}`)
 .setFooter(message.author.username + " HyropsBOT", message.author.avatarURL());
 message.guild.channels.cache.find("name" , room).send(' ✔️ **ÇEKİLİŞ BAŞLADI** ✔️' , {embed: giveEmbed}).then(m => {
 let re = m.react('🎉');
 setTimeout(() => {
 let users = m.reactions.get("🎉").users
 let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
 let gFilter = list[Math.floor(Math.random() * list.length) + 0]
 let endEmbed = new Discord.MessageEmbed()
 .setAuthor(message.author.username, message.author.avatarURL())
 .setTitle(title)
 .setColor("#f558c9")
 .setFooter("HyropsBOT")
 .addField('Çekiliş Bitti !🎉',`Kazanan : ${gFilter} \nBitiş zamanı :`)
 .setTimestamp()
 m.edit('** 🎉 ÇEKİLİŞ BİTTİ 🎉**' , {embed: endEmbed});
 
 var embedLel = new Discord.MessageEmbed()
 .setColor("#f558c9")
 .setDescription("Ödülünü Sunucu Yetkililerinden Alabilirsiniz").setFooter("HyropsBOT")
 message.guild.channels.cache.find("name" , room).send(`**Tebrikler ${gFilter}! \`${title}\` kazandın!**` , embedLel)
 }, ms(duration));
 });
 } catch(e) {
 message.channel.send(`:heavy_multiplication_x:| **Maalesef gerekli yetkilerim bulunmamakta**`);
 console.log(e);
 }
 });
 });
 });
 });
 });
 });
 
 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};
exports.help = {
  name: 'çekiliş',
  description: 'Çekiliş mi? Sunucunda güzel şeyler olacak :3',
  usage: 'çekiliş'
};