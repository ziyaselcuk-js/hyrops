const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");

exports.run = async (client, message, args) => {
    let gold = await db.fetch(`üyelikk_${message.author.id}`)
if (!gold) return message.channel.send("Gold üye değilsin o yüzden bu komutu kullanamazsın.") 
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`Bu Komutu Kullanabilmek İçin **Sunucuyu_Yönet** İznine Sahip Olmalısın!`);

  let channel = message.mentions.channels.first();
  if (!channel) {
    return message.reply("Bir kanal etiketleyin");
  }
  db.set(`gçkanal_${message.guild.id}`, channel.id);
  //var i = db.set(`capsE_${message.guild.id}`, "acik")
  message.channel.send(`<a:tik2:816961327862906900> | ** Resimli Hoşgeldin - Güle Güle kanalı ${channel} Olarak Ayarlandı.** `);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gç-ayarla"],
  permLevel: 0
};

exports.help = {
  name: "giriş-çıkış-ayarla",
  description: "Giriş Çıkış Kanalını Ayarlar.",
  usage: "gç-ayarla <#kanal>"
};