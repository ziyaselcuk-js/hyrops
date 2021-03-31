const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(client, message, args) => {
 
 const yetkyok = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setAuthor(`Bu Komutu Kullanmak İçin Yeterli İzine Sahip Değilsin`, message.author.avatarURL())
 
 if (!message.member.hasPermission ("SEND_MESSAGES"))
 return message.chanel.send(yetkyok)
 
 if(args[0] == "verilecek-rol") {
 
 var verilcekrol = message.mentions.roles.first()
 
 const verilcetk = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setAuthor(`Verilecek Rolü Belirtmelisin`, message.author.avatarURL())
 
 if (!verilcekrol)
 return message.channel.send(verilcetk)
 
 db.set(`ksverilecekrol${message.guild.id}`, verilcekrol.id)
 
 const tm = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setAuthor(`Verilecek Rol Başarıyla Ayarlandı`, message.author.avatarURL())
 
 message.channel.send(tm)
 
 return
 }
  
 if(args[0] == "alınacak-rol") {
 
 var alincakrol = message.mentions.roles.first()
 
 const roletk = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setAuthor(`Alınacak Rolü Belirtmelisin`, message.author.avatarURL())
 
 if (!alincakrol)
 return message.channel.send(roletk)
 
 db.set(`ksalinacakrol${message.guild.id}`, alincakrol.id)
 
 const tmtm = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setAuthor(`Alınacak Rol Başarıyla Ayarlandı`, message.author.avatarURL())
 
 message.channel.send(tmtm)

 
 return
 
 }
  
  if(args[0] == "tag") {
 
 var tagi = args.slice(1).join(" ")
 
 const tagetk = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setAuthor(`Bir Tag Belirtmelisin`, message.author.avatarURL())
 
 if (!tagi)
 return message.channel.send(tagetk)
 
 db.set(`kstag${message.guild.id}`, tagi)
 
 const tmtmtm = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setAuthor(`Tag Başarıyla Ayarlandı`, message.author.avatarURL())
 
 message.channel.send(tmtmtm)

 
 return
 
 }
 
 if(args[0] == "kayıt-görevlisi-rolü") {
 
 var kgr = message.mentions.roles.first()
 
 const dudu = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setAuthor(`Bir Rol Belirtmelisin`, message.author.avatarURL())
 
 if (!kgr)
 return message.channel.send(dudu)
 
 db.set(`kskgrol${message.guild.id}`, kgr.id)
 
 const tmds = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setAuthor(`Kayıt Görevlisi Rolü Başarıyla Ayarlandı`, message.author.avatarURL())
 
 message.channel.send(tmds)
 
 return
 
 }

 if(args[0] == "yardım") {
 
 const yardim = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} `, client.user.avatarURL())
 .setColor("RANDOM")
 .setTitle(`Kayıt Sistemi Yardım`)
 .setFooter(`HyropsBOT | Yardım`)
 .addField(`ÖnemliNOTLAR!`, `Bu sistem Kanalların yetkilerini **ayarlamaz!** **Kanal Yetkilerini Kendiniz Ayarlamanız Gerekmektedir!** Destek Sunucumuzdan Yardım Alabilirsiniz.`)
 .addField(`kayıt verilecek-rol @Rol`, `Kayıt Edilince Verilecek Rolü Ayarlar`)
 .addField(`kayıt alınacak-rol @Rol`, `Kayıt Edilince Alınacak Rolü Ayarlar`)
 .addField(`kayıt tag (Tagınız)`, `Kayıt Edilince İsminin Başına Yazılacak Tagı Ayarlarsınız. NOT: Tagı Sadece Sayı Yaparsanız Hata Verir Örneğin 10 Diye Bir Tag Ayarlarsanız Hata Verir. Ama Sayı ve Harf/Sembol Kullanarak Yaparsanız Hata Vermez Örneğin 10Bir`)
 .addField(`kayıt kayıt-görevlisi-rolü @Rol`, `Kayıt Görevlisi Rolü Ayarlarsınız. NOT : Sunucu Sahibi Olsanız Dahi Ayarladığınız Rol Sizde Yoksa Kayıt Et Komutunu Kullanamazsınız`)
 .addField(`kayıt et @Kişi (İsim) (Yaş)`, `Kayıt Edersiniz`)
 .addField(
 "» Linkler",
 `:pushpin: [Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=816259117642547202&scope=bot&permissions=2146958847)` +
 "**\n**" +
 `:pushpin: [Bota Oyver](https://top.gg/bot/816259117642547202)` +
 "**\n**" +
 `:pushpin: [Destek Sunucusu](https://discord.gg/UAuAtakMZW)`,
 false
 )
 
 message.channel.send(yardim)
 
 return
 }
 
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kayıt"],
  perm: 0
}

exports.help = {
  name: "kayıt",
  description: "Kayıt Sistemi",
  usage: "kayıt"
}