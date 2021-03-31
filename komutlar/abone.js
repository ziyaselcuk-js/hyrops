let Discord = require("discord.js")
let database = require("quick.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message, args) => {
 const dil = database.fetch(`dil_${message.guild.id}`)
 if(dil == 'tr'){
 if (!message.guild) {
let aboneyetkilisi = await database.fetch(`aboneyetkilisi.${message.guild.id}`)
let abonerol = await database.fetch(`abonerol.${message.guild.id}`)
 let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
 
if(!abonerol) return message.channel.send(`Abone rolü ayarlanmamış!`)
 if(!aboneyetkilisi) return message.channel.send(`Abone yetkili rolü ayarlanmamış!`)
 let user = message.mentions.users.first()
 if(!message.member.roles.cache.has(aboneyetkilisi)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
 
 if(!message.mentions.users.first()) return message.channel.send(`Bir Üye Etiketle!`)
 
 await(abonekisi.roles.add(abonerol))
 const embed = new Discord.MessageEmbed()
 .setTitle(`Abone Rolü Verildi!`)
 .addField(`Abone Rolünü Veren Kişi:`, `Adı:${message.author.tag} İD:${message.author.id}`, true)
 .addField(`Abone Rolü Verilen Kişi`, `${user}`, true)
 .addField(`Mesaj linki`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`, true)
 .setColor(`BLUE`)
 .setFooter(`${client.user.username} Abone Sistemi`)
message.channel.send(embed)
 database.add(`abone.${message.author.id}`, 1);
}
  } else{
let aboneyetkilisi = await database.fetch(`aboneyetkilisi.${message.guild.id}`)
let abonerol = await database.fetch(`abonerol.${message.guild.id}`)
 let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!abonerol) return message.channel.send(`Subscriber role is not set!`)
 if(!aboneyetkilisi) return message.channel.send(`Subscriber authority role is not set!`)
 let user = message.mentions.users.first()
 if(!message.member.roles.cache.has(aboneyetkilisi)) return message.channel.send(`You do not have the necessary privileges to use this command.`)
 
 if(!message.mentions.users.first()) return message.channel.send(`Mention a member!`)
 
 await(abonekisi.roles.add(abonerol))
 const embed = new Discord.MessageEmbed()
 .setTitle(`The subscriber role has been given!`)
 .addField(`Subscriber Role Giving Staff:`, `Name :${message.author.tag} İD:${message.author.id}`, true)
 .addField(`Person Given the Subscriber Role`, `${user}`, true)
 .addField(`Message Link`,`[Click!](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`, true)
 .setColor(`BLUE`)
 .setFooter(`${client.user.username} Subscribe System`)
message.channel.send(embed)
 database.add(`abone.${message.author.id}`, 1);
 }
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['abone', 'subscribe'],
 perm: 0
}
exports.help = {
 name : 'subscribe',
 descripton: 'Abone Rolünü Ayarlarsınız',
 kategori : 'Abone'
}
