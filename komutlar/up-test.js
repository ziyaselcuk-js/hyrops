const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
 const rexuszaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
 const rexusistatistikler = new Discord.MessageEmbed()
 .setTitle("HyropsBOT Uptime-Stats")
 .addField("**Çalışma süresi**", rexuszaman)
 .addField("**Discord.JS sürüm**", "v"+Discord.version, true)
 .addField("**Ping**", bot.ping+" ms", true)
 .addField("**CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
 .addField("**Bit**", `\`${os.arch()}\``, true)
 .setFooter(`Made By Valens | HyropsBOT 2021`)
 return message.channel.send(rexusistatistikler);
 };

exports.conf = {
 enabled: false,
 guildOnly: false,
 aliases: [ 'up', 'up', 'up', 'up'],
 permLevel: 0
};

exports.help = {
 name: "up",
 description: "Bot i",
 usage: "istatistik"
};