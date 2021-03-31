const Discord = require('discord.js');//ÖGÜN SERT DESTEK EKİBİ ✩ DaniellePanabakerᴹᴬᴳ#0761
const { MessageEmbed } = require('discord.js');//YAPIMCI ✩ DaniellePanabakerᴹᴬᴳ#0761
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyBNGwDeZSns_dzmdUvxyU9j5qtYFLKtx6o');//APİKEYİNİZİKOYUN


exports.run = async (client, message, args) => {
 const queue = client.queue; 
 var searchString = args.slice(0).join(' ');
 var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
 var serverQueue = queue.get(message.guild.id);

 var voicechannel = message.member.voice.channel;
 
 const err0 = new MessageEmbed()
 .setColor("RANDOM")
 .setDescription(`**Bir sesli kanalda değilsin.**`) 
 if (!voicechannel) return message.channel.send(err0);
 const err05 = new MessageEmbed()
 .setColor("RANDOM")
 .setDescription(`**Şu anda herhangi bir şarkı çalmıyor.**`)
 if (!serverQueue) return message.channel.send(err05);
 const songSkip = new MessageEmbed()
 .setColor("RANDOM")
 .setDescription(`✅ **Şarkı başarıyla geçildi!**`)
 serverQueue.connection.dispatcher.destroy()('');
 message.channel.send(songSkip)

};

exports.conf = {
 enabled: true,
 aliases: ['skip'],
 permLevel: 0
};

exports.help = {
 name: 'geç',
 description: 'Sıradaki şarkıya geçer. Sırada şarkı yoksa şarkıyı kapatır.',
 usage: 'geç'
};