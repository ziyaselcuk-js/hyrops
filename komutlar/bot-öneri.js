const Discord = require('discord.js');
const db = require('quick.db')

exports.run = function(client, message, args) {
 const dil = db.fetch(`dil_${message.guild.id}`)
 if(dil == 'tr'){
 if (!message.guild) {
 let type = args.slice(0).join(' ');
 if (type.length < 1) return message.channel.send(
new Discord.MessageEmbed()
.setDescription('Kullanım: h!sikayet <Şikayet>'));
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('Şikayetiniz Bildirildi!')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının Şikayeti:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Şikayet", type)
client.channels.cache.get('819133352992047134').send(embed2); // Kanal ID BURAYI KESİNLİKLE DÜZENLEYİNİZ!

};
 } else{
      
   let type = args.slice(0).join(' ');
 if (type.length < 1) return message.channel.send(
new Discord.MessageEmbed()
.setDescription('Usage : h!complaint <your-complaint>'));
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('Your complaint has been reported!')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının Şikayeti:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Şikayet", type)
client.channels.cache.get('819133352992047134').send(embed2); // Kanal ID BURAYI KESİNLİKLE DÜZENLEYİNİZ!
 }}
exports.conf = {
 enabled: true,
 guildOnly: false, 
 aliases: [],
 permLevel: 0 
};

exports.help = {
  name: 'şikayet',
  description: 'Şikayet de bulunursunuz..',
  usage: 'sik' 
}