const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(cclient, message, args) => {

if(message.author.id !== "792750149070880809") if(message.author.id !== "792750149070880809") return message.channel.send("❌ Bu komutu sadece sahiplerim kullanabilir.")

let cuser = message.mentions.users.first() || cclient.users.cache.get(args[0])
if(!cuser) return message.channel.send("❌ Bir kullanıcı belirtmelisin!")
let csebep = args.slice(1).join(' ')
if(!csebep) return message.channel.send("❌ Bir sebep belirtmelisin!")

message.channel.send(" 🆗 **"+cuser.tag+"** kullanıcısı **"+csebep+"** sebebinden başarıyla karalisteye alındı.")
const westra = new Discord.MessageEmbed()
.setColor(`RED`)
.setTimestamp()
.setDescription(`:tik3: **${cuser.tag}** kullanıcısı **${csebep}** sebebinden karalisteye alındı.`)
cclient.channels.cache.get("819133003325243402").send(westra)
db.set(`ckaraliste.${cuser.id}`, csebep)

}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
 };
 
 exports.help = {
 name: 'karaliste',
 description: 'Türkiyenin Saatini Gösterir',
 usage: 'gç'
 };