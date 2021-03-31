const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async(bot, message, args) => {
    let gold = await db.fetch(`üyelikk_${message.author.id}`)
if (!gold) return message.channel.send("Gold üye değilsin o yüzden bu komutu kullanamazsın.") 
 const rache = require("../ayarlar.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || rache.prefix 

 const embeddd = new Discord.MessageEmbed()
 .setDescription('Bu Komutu Kullanmak İçin `Sunucuyu Yönet` Yetkisi Lazım!')
 .setColor("RED");

 let mentionEmbed = new Discord.MessageEmbed()
 .setDescription(`Lütfen \`komut\` - \`gönderilecek şey\` olarak kullanınız.\nÖrnek: \`${prefix}otocevap-ekle hyropsbot efendim ab\``)
 .setColor('RED')
 var user = message.mentions.users.first() || message.author;
if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(embeddd)
 if (!args[0]) return message.channel.send(mentionEmbed)
 if (!args[1]) return message.channel.send(mentionEmbed) 
 
 let komut;
 if (!args[0]) komut = ''; 
 else komut = (args[0]); 
 if(args[0] == 'yardım' || args[0] == 'davet') return message.channel.send('Bottaki Olan Komutu Ekleyemessin.') 
 let gonderileceksey;
 if (args.slice(1, 1000, args[1]).join(' ') === 'NONE') gonderileceksey = ''; 
 else gonderileceksey = args.slice(1, 1000, args[1]).join(' '); 
 
 let welcomeEmbed = new Discord.MessageEmbed()
 .addField(`Bu sunucuya özel komut eklendi.`, `\`${komut}\` yazıldığı zaman \`${gonderileceksey}\` olarak yanıt verecek.`)
 .setColor('GREEN')
 db.set(`sunucuKomut_${message.guild.id}`, komut)
 db.set(`sunucuMesaj_${message.guild.id}`, gonderileceksey)
 message.channel.send(welcomeEmbed) 
 };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 0
};

exports.help = {
  name: "otocevap-ekle"
};