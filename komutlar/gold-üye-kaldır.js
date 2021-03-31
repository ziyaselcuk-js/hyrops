const db = require('quick.db')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (client, message, args) => {
 if(message.author.id !== "792750149070880809") if(message.author.id !== "792750149070880809") return message.channel.send("hoop bilader sahip komutu bu");
 
 let user = client.users.cache.get(args.slice(0).join(' '));
 let nesne = args[0]
 if (!nesne) return message.channel.send('id belirt')
 
 db.delete(`üyelikk_${nesne}`, 'üyelik')
 
 message.channel.send(`:discordstaff: <@${nesne}> adlı kişinin gold üyeliğini başarıyla kaldırdım.`)
client.channels.cache.get('819138126148272158').send(` <@${nesne}> ID'li Kullanıcı Gold Üyeliği Kaldırıldı.`)
if (client.users.cache.get(''+nesne+'').send(`:discordstaff: \`Gold üyeliğiniz kaldırıldı.\` `)){
 
} else return
 
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['goldkaldır', 'gold-kaldır'],
 permLevel: 0
};
exports.help = {
 name: 'goldüyekaldır',
 description: 'Gold üye ekler',
 usage: 'gold-üye-ekle'
};