const Discord = require('discord.js');
//HYROPS
exports.run = (client, message, args) => {
  if (message.author.id !== "792750149070880809") return message.reply(':warning: bu komutu sadece sahibim kullanabilir!');
   message.channel.send('Sunucuan ayrıldım!');
   message.guild.leave()
};
//HYROPS
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ayrıl'],
  permLevel: 4,
};
//HYROPS
exports.help = {
  name: 'leave',
  description: 'Bot Sunucudan Ayrılır.',
  usage: 'leave'
};