const discord = require('discord.js');
const superagent = require("snekfetch");

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekos.life/api/v2/img/feet')
    .query({ type: '4k'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.url });
    });
  } else {
    msg.channel.send("**Bu Kanalda NSFW Aktif Değil ! Kanal Ayarlarından Aktifleştiriniz !** 🔞")
  }
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ["ayak","ayaj","hentai-feet"], 
  permLevel: 0 
};
exports.help = {
  name: 'feet', 
  description: 'Sunucuda kullanıcıyı kayıt etmeye yarar.', 
  usage: 'feet'
};