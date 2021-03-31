const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
 
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`); 

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`guvenlik${message.guild.id}`)
 if(!args[0]) {
const mbed = new Discord.MessageEmbed() 
.setAuthor("HyropsBot", client.user.avatarURL())
.setTitle("HyropsBOT Güvenlik")
.setDescription("Sistemi Açmak için **h!güvenlik-sistemi #kanal**")
.addField("Ne İşe Yarar?", `Bu Sizin Sunucunuzda Reklam Yapacak Veya Zararlı Üyeleri Tespit Etmeye Yarar. 
Bu Üyeler Genelde Zararlı Üyelerdir.
Açtıktan Sonra Otomatik Aktif Olur. Başka Birşey Yazmanıza Gerek Yok
`)
.setColor("BLUE")
.setTimestamp()
.setFooter("Güvenlik Sistemi")
message.channel.send(mbed)
 }
 if (args[0] === "sıfırla" || args[0] === "kapat") {
 if(!logkanal) return message.channel.send(` Güvenliği kapatmak için \`güvenlik kanalının\` seçili olması lazım örnek kullanım: \`h!güvenlik-sistemi #kanal\``);
 
 db.delete(`guvenlik${message.guild.id}`)
 message.channel.send(`Güvenlik başarıyla kapatıldı.`);
 
 return
 }
 
 
 

 db.set(`guvenlik${message.guild.id}`, logk.id)

message.channel.send(`Güvenlik başarıyla ${logk} olarak ayarlandı`);

}

module.exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['gks','güvenliksistemi'],
 permLevel: 0
};

module.exports.help = {
 name: 'güvenlik-sistemi',
 description: '',
 usage: ''
};