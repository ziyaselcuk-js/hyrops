const db = require('quick.db')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (client, message, args) => {
 if(message.author.id !== "792750149070880809") if(message.author.id !== "792750149070880809") return message.channel.send("hoop bilader sahip komutu bu");
 
 let user = client.users.cache.get(args.slice(0).join(' '));
 let nesne = args[0]
 if (!nesne) return message.channel.send('id belirt')
 
 db.set(`üyelikk_${nesne}`, 'üyelik')
 
 message.channel.send(`:ok: <@${nesne}> adlı kişinin gold üyeliğini başarıyla aktif ettim.`)
client.channels.cache.get('819138126148272158').send(`:tik2: <@${nesne}> ID'li Kullanıcı Gold Üyeliğe Eklendi.`)
if (client.users.cache.get(''+nesne+'').send(`:hayde: \`Gold üyeliğiniz aktif edildi.\` H.o`)){
 
} else return
 
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['goldekle'],
 permLevel: 0
};
exports.help = {
 name: 'goldüyeekle',
 description: 'Gold üye ekler',
 usage: 'gold-üye-ekle'
};