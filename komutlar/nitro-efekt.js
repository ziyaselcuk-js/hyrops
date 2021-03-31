const discord = require('discord.js');

exports.run = (client, message) => {

const efeadamdır = new discord.MessageEmbed()

.setTitle('Nitro Efekt')
.setColor('RANDOM')
.setImage('https://eggsy.xyz/api/overlay/create.png?overlay=nitro2&url=' + message.author.avatarURL())
message.channel.send(efeadamdır)
 
};
exports.help = {

 name: "efekt-nitro",

 description: 'nitro efekti',

 usage: ""

};

exports.conf = {

 enabled: true,

 guildOnly: true,

 aliases: ["nitroefekt"]

};