const discord = require("discord.js");
const { prefix } = require("../ayarlar.json");
const db = require('quick.db') //db olmadan nabıyon aq

module.exports.run = async (bot, message, args) => {
  const dil = db.fetch(`dil_${message.guild.id}`)
    if(dil == 'tr'){
    if (!message.guild) {
  let embed = new discord.MessageEmbed()
    .setColor("YELLOW")
    .setThumbnail(bot.user.avatarURL())
    .setTitle(`:white_small_square: ${bot.user.username} Abone Sistem Menüsü`)
    .addField(`:white_small_square: ${prefix}aboneysay`, "Abone Yetkililerin Kaç Kisi Abone verdigini gösterir")
    .addField(
      `:white_small_square: ${prefix}abone`,
      "Belirtilen Kisiye ayarlanmıs abone rolünü verir !"
    )
    .addField(`:white_small_square: ${prefix}abone-yetkili-rol @rol`, "Üyeye Abone Rolü Vercek Yetkili Rolünü Ayarlar!")
    .addField(`:white_small_square: ${prefix}abone-yetkili-rol sıfırla`, "Üyeye Abone Rolü Vercek Yetkili Rolünü Sıfırlar!")
    .addField(`:white_small_square: ${prefix}abonerol @rol`, "Üyeye Verilcek Abone Rolünü Ayarlar!")
	    .addField(`:white_small_square: ${prefix}abonerol sıfırla`, "Üyeye Verilcek Abone Rolünü Sıfırlar!")
  	
.setImage("https://cdn.discordapp.com/attachments/819587699375079434/819858181474746368/standard.gif")
  message.channel.send(embed);
};
 } else{
   let embed = new discord.MessageEmbed()
    .setColor("YELLOW")
    .setThumbnail(bot.user.avatarURL())
    .setTitle(`:white_small_square: ${bot.user.username} Subscribre System Menu`)
    .addField(`:white_small_square: ${prefix}subscribe`, "Shows how many Subscribers have subscribed")
    .addField(
      `:white_small_square: ${prefix}subscriber`,
      "Gives the set subscriber role to the specified Contact!"
    )
    .addField(`:white_small_square: ${prefix}subscribe-s-role @role`, "Set the Authorized Role to Assign the Subscriber Role to the Member!") 
    .addField(`:white_small_square: ${prefix}subscribe-s-role reset`, "Giving Subscriber Role to Member Resets Authorized Role!") 
    .addField(`:white_small_square: ${prefix}subscribe @role`, "Sets the Subscriber Role to be Given to the Member!")
	    .addField(`:white_small_square: ${prefix}subscribe reset`, "Resets the Subscriber Role to be Given to the Member!")
  	
.setImage("https://cdn.discordapp.com/attachments/819587699375079434/819858181474746368/standard.gif")
  message.channel.send(embed);
   
 } } //parantezi unutma :)
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["abonesistemleri","abone-sistem","abonesistem","abonesistemi", "subscribe-help", "help-subscribe", "help-subscriber", "help-subscriber"],
  PermLevel: 0
};

exports.help = {
  name: "yardım-abone",
  description: "Bot Yardım Menüsü",
  usage: "yardım"
};
