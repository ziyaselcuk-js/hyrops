const discord = require("discord.js");
const db = require('quick.db')
const { prefix } = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {
  const dil = db.fetch(`dil_${message.guild.id}`)
    if(dil == 'tr'){
    if (!message.guild) {

  let embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${bot.user.username} BotList Menüsü`)
    .addField(`${prefix}onayla <sahipid> <botid>`, "Botu Kabul Eder")
    .addField(`${prefix}reddet <botsahip id> <nedeni>`, "Üyenin Botunu Reddedir")
    .addField(
      `${prefix}botekle-log-kanal #kanal`,
      "Hangi Kanalda Üyenin Botu ekleyebilceni ayarlar)"
    )
    .addField(`${prefix}botekle-log-kanal kapat`, "Üyenin Hangi kanalda botu ekleyeni kapatır!")
    .addField(`${prefix}log-kanal #kanal`, "Botun reddedilip onaylanan bekliyenleri gözüken logu ayarlar!")
    .addField(`${prefix}log-kanal sıfırla`, "Botun reddedilip onaylanan bekliyenleri gözüken logu sıfırlar!")
    .addField(`${prefix}botlist-yetkili-rol`, "Botlistte botu onaylıcak reddedicek rolü ayarlar!")
    .addField(`${prefix}botlist-yetkili-rol sıfırla`, "Botları onaylıcak reddedicek rolü sıfırlar")
    .addField(`${prefix}yetkili-log #kanal`, "Botlist yetkili log kanal ayarlar")
	.addField(`${prefix}yetkili-log sıfırla`, "Botlist Yetkili Log kanalı sıfırlar")
	.addField(`${prefix}botlist-kapat`, "Botlist sistemini sıfırlar")
	.addField(`${prefix}botekle <id> <prefix>`, "Üye botunu ekliyebilir")
.setImage("https://cdn.discordapp.com/attachments/819587699375079434/819858181474746368/standard.gif")
  message.channel.send(embed);
};
 } else{
   let embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${bot.user.username} BotList Help Menu`)
    .addField(`${prefix}approve <owner id> <botid>`, "Approve a bot")
    .addField(`${prefix}reject <bot owner id> <reason>`, "Reject a bot") //afrm lan bu sefer unutmamışın
    .addField(
      `${prefix}addbot-log-channel #channel`,
      "Sets the channel where members can add their bot."
    )
    .addField(`${prefix}addbot-log-channel reset`, "Which channel of the member closes the bot who added the bot!")
    .addField(`${prefix}log-channel #channel`, "Sets the log that shows the bot's rejected and approved waiters!")
    .addField(`${prefix}log-channel reset`, "Resets the log that appears to wait for the bot to be rejected and approved!")
    .addField(`${prefix}botlist-staff-role`, "Sets the role that will approve the bot on the botlist and deny it!")
    .addField(`${prefix}botlist-staff-role reset`, "Approve bots but reset role to deny")
    .addField(`${prefix}staff-log #channel`, "Botlist authorized log channel settings")
	.addField(`${prefix}staff-log reset `, "Botlist Authorized Log resets the channel")
	.addField(`${prefix}botlist-close`, "Reset botlist system.")
	.addField(`${prefix}addbot <botid> <prefix>`, "Add bot on the system.")
.setImage("https://cdn.discordapp.com/attachments/819587699375079434/819858181474746368/standard.gif")
  message.channel.send(embed);
 } } 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardım-botlist","botlist-sistem","botlist-sistemi", "help-botlist", "botlist-help"],
  PermLevel: 0
};

exports.help = {
  name: "botlist",
  description: "Bot ekleme başvurusu",
  usage: "bot"
};