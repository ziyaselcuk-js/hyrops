const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
 
 
 let hm = await db.fetch(`seviyeacik_${message.guild.id}`)
 let kanal = await db.fetch(`svlog_${message.guild.id}`)
 let xp = await db.fetch(`verilecekxp_${message.guild.id}`)
 let seviyerol = await db.fetch(`svrol_${message.guild.id}`)
 let rollvl = await db.fetch(`rollevel_${message.guild.id}`)
 
 let kontrol;
 if(kanal == null) kontrol = '❌'
 else kontrol = '✅ | '+ kanal
 
 let kontrol2;
 if(xp == null) kontrol2 = '4 (Varsayılan)'
 else kontrol2 = '✅ | '+ xp
 
 let kontrol3;
 if(seviyerol == null) kontrol3 = '❌'
 else kontrol3 = '✅ | '+ seviyerol
 
 let kontrol4;
 if(rollvl == null) kontrol4 = '❌'
 else kontrol4 = '✅ | '+rollvl
 if(!hm) return message.channel.send('Seviye sistemi bu sunucuda aktif durumda değil! \n Bunu mu arıyorsun? `h!seviye-aç`')
 let ayarlar = new Discord.MessageEmbed()
 .setTitle('Sunucu Seviye Ayarları:')
 .setDescription(message.guild.name + ' Sunucusunun seviye ayarları!')
 .addField('Göstergeler', '✅ : **Aktif** \n ❌ : **Devre Dışı**')
 .addBlankField()
 .addField('Seviye Logs Kanalı:', kontrol, true)
 .addField('Mesaj Başı Verilecek XP:', kontrol2, true)
 .addField('Seviye Rol', kontrol3, true)
 .addField('Seviye Rol Leveli:', kontrol4, true)
 message.channel.send(ayarlar)
 

 };
exports.conf = {
 enabled: true, 
 guildOnly: false, 
 aliases: [], 
 permLevel: 2
};

exports.help = {
 name: 'seviye-ayarlar',
 description: 'taslak', 
 usage: 'seviye-ayarlar'
};