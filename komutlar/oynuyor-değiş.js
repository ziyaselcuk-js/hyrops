const Discord = require('discord.js');
exports.run = function(client, message, args) {
 if(message.author.id !== '792750149070880809') return message.reply('Yetkin Yok Kardeşim! ');
 const sayMessage = args.join(` `);
 client.user.setActivity(sayMessage);
 message.channel.send(`Oyun ismi **${sayMessage}** olarak değiştirildi :ok_hand:`)
 }
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'oyundeğiş',
 description: 'Botun pingini gösterir.',
 usage: 'oyundeğiş'
};