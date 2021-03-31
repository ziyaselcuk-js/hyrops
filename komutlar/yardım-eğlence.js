const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  let yardım = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .addField("**Our Fun Commands are in Maintenance.**", "HyropsBOT")
    .setImage("https://cdn.discordapp.com/attachments/819587699375079434/819858181474746368/standard.gif")
  message.channel.send(yardım);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eğlence", "yardım-eğlence", "help-fun", "fun", "fun-help"],
  permLevel: 0
};
exports.help = {
  name: "yardım-eğlence"
};
