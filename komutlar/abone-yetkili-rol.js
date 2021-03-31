let db = require("quick.db")
let ayarlar = require("../ayarlar.json")



exports.run = async (client, message, args) => {
	const dil = db.fetch(`dil_${message.guild.id}`)
    if(dil == 'tr'){
    if (!message.guild) {

if (args[0] === 'sıfırla') {
let kanal = db.fetch(`aboneyetkilisi.${message.guild.id}`)  
  if (!kanal) return message.channel.send(`:white_small_square: Abone Yetkili Rolü Ayarlanmamıs`)
  message.channel.send(`:white_small_square: Abone Yetkili Rolü Silindi!`)
db.delete(`aboneyetkilisi.${message.guild.id}`)
  return;
}	

  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abone-y-rol @rol`)
  
  
  db.set(`aboneyetkilisi.${message.guild.id}`, rol.id)
  message.channel.send(`Abone yetkilisi başarıyla ${rol} olarak ayarlandı.`)
}
      } else{
        if (args[0] === 'reset') {
let kanal = db.fetch(`aboneyetkilisi.${message.guild.id}`)  
  if (!kanal) return message.channel.send(`:white_small_square: Subsricbre staff not set.`)
  message.channel.send(`:white_small_square: Subsricbre staff has been set!`)
db.delete(`aboneyetkilisi.${message.guild.id}`)
  return;
}	

  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`You do not have the necessary privileges to use this command.`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Please mention a staff role. Example: ${ayarlar.prefix}sub-s-role @role`)
  
  
  db.set(`aboneyetkilisi.${message.guild.id}`, rol.id)
  message.channel.send(`The subscriber role has been successfully set!`)
}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["abone-y-rol", "sub-s-role"],
  permLevel: 0,
  kategori: "sunucu"
};

exports.help = {
  name: "abone-yetkili-rol",
  description: "Rol koruma",
  usage: "rol-koruma"
};