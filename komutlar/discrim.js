const discord = require("discord.js");
const db = require('quick.db') //aynştayn akıllandı


exports.run = (client, message, args) => {
 const dil = db.fetch(`dil_${message.guild.id}`)
 if(dil == 'tr'){
 if (!message.guild) {
var dis = args[0]
if(isNaN(dis) || dis === "0000") { message.channel.send(`Böyle bir discrim yok.`) 
} else {
var discriminator = client.users.filter(t => t.discriminator === dis)
var liste = []//hyrops
discriminator.cache.forEach(bulunan => liste.push(bulunan.tag))
message.channel.send(`${dis} etiketine sahip 20 üye: ${liste.slice(0, 10).join("\n")}`)
}
}
 
 } else {
 var dis = args[0]
if(isNaN(dis) || dis === "0000") { message.channel.send(`There is no such discrim.`) 
} else {
var discriminator = client.users.filter(t => t.discriminator === dis)
var liste = []//hyrops
discriminator.cache.forEach(bulunan => liste.push(bulunan.tag))
message.channel.send(`20 members have this discrim (${dis}) \n${liste.slice(0, 10).join("\n")}`)
}
}
 
 }
 exports.conf = {
 enabled: true, 
 guildOnly: true, 
 aliases: [], 
 permLevel: 0
 };
 //hropsBOT
 exports.help = {
 name: 'discrim'
 };