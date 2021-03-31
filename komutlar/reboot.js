const Discord = require("discord.js");
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");
//DarkCode
module.exports.run = async (bot, message, args) => {
 if (message.author.id !== "792750149070880809")
 return message.channel.send("Bu komutu kullanabilmek için **Botun** sahibi olmalısın.");
 
 console.log(`[-] Bot Yeniden Başlatıldı`);
const embed = new Discord.MessageEmbed()
 .setDescription(`Bot Yeniden Başlatıldı ✅`)
 .setAuthor(`HyropsBOT`,`Valensxd`)
 .setColor("BLUE")
 message.channel.send(embed);
 process.exit(0);
 };
module.exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["reboot", "yenile"],
 permLevel: 4
};
//DarkCode
module.exports.help = {
 name: "reboot"
};