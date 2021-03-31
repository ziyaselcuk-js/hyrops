const discord = require("discord.js");
const db = require('quick.db')
const { prefix } = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {
  let gold = await db.fetch(`üyelikk_${message.author.id}`)
if (!gold) return message.channel.send("Gold üye değilsin o yüzden bu komutu kullanamazsın.") 
  const  goldsistem = new discord.MessageEmbed()
    .setColor("BLUE")
 .setDescription('Bu komutların hepsi Gold Üyelere Özeldir!')
    .setTitle(`${bot.user.username} Gold Menüsü`)
    .addField(`${prefix}şablon-atlantis`, "`Atlantis'in orjinal sunucu şablonunu atar.`")
    .addField(`${prefix}şablon-botdestek`, "`Gelişmiş Bot Destek Sunucu şablonunu atar.`")
    .addField(`${prefix}şablon-csgo`, "`CS:GO Sunucu şablonunu atar.`")
    .addField(`${prefix}şablon-minecraft`, "`Minecraft Sunucu şablonunu atar.`")
    .addField(`${prefix}şablon-tasarım`, "`Tasarım/Çizim Sunucu şablonunu atar.`")
    .addField(`${prefix}otocevap-ekle`, "`Otocevap Ekler`")
    .addField(`${prefix}otocevap-liste`, "`Otocevap Listesini Gösterir.`")
    .addField(`${prefix}otocevap-sil`,"`Otocevap Siler`")
    .addField(`${prefix}nuke`, "`Kullandığınız kanalı silip aynı kanalı tekrar açar..`")
.setImage("https://cdn.discordapp.com/attachments/819587699375079434/819858181474746368/standard.gif")
  message.channel.send(goldsistem);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardım-gold","yardım-gold","yardım-gold", "help-gold"],
  PermLevel: 0
};

exports.help = {
  name: "yardım-gold",
  description: "Bot ekleme başvurusu",
  usage: "bot"
};