const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {
 const dil = db.fetch(`dil_${message.guild.id}`)
 if(dil == 'tr'){
 if (!message.guild) {


 if (!message.guild) {
 return message.author.send('**❌ Bu komut özel mesajlarda kullanma kapatılmıştır.**'); } 
 if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için **Kullanıcıları At** yetkisine sahip olmalısın.`);
 let sunucu = message.guild;
 let uyarilacak = message.mentions.users.first();
 let sebep = args.slice(1).join(' ');
 if (message.mentions.users.cache.size < 1) return message.channel.send('**❌ Uyaracağın kişiyi etiketlemelisin.**').catch(console.error);
 if (sebep.length < 1) return message.channel.send('**❌ Uyarı Nedenini Yazmalısın !**');
 message.channel.send('**✅ Kişiyi başarıyla uyardım, özel mesajlarında uyarısı gözükecektir.**')
 return uyarilacak.send(`**:warning: \`${sunucu} sunucusunda\` \`${sebep}\` sebebiyle uyarıldın.**`);
};
    } else {
      
  if (!message.guild) {
 return message.author.send('**❌ You can\'t use this command in DM.**'); } 
 if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`You must have **KICK_MEMBERS** to use this command.`);
 let sunucu = message.guild;
 let uyarilacak = message.mentions.users.first();
 let sebep = args.slice(1).join(' ');
 if (message.mentions.users.cache.size < 1) return message.channel.send('**❌ Please mention an user.**').catch(console.error);
 if (sebep.length < 1) return message.channel.send('**❌ Please type the warn reason**');
 message.channel.send('**✅ Was warned, I sent a DM message to user.**')
 return uyarilacak.send(`**:warning: You are warned in \`${sunucu}\`. \nReason: \`${sebep}\`.**`);
 
 //elleme benim bu LJKDDJLSFKJAŞLFAŞ
 //OK
 
 }
}
exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['uyarı', 'uyarıver'],
 permlevel: 0
};

exports.help = {
 name: 'uyar',
 description: 'Belirtilen kullanıcıyı özel mesajlarında gözükecek şekilde uyarır.',
 usage: 'uyarı'
};