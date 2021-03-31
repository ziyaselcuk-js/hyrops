const Discord = require("discord.js");
const db = require('quick.db')




exports.run = async (client, message, args) => {
  const dil = db.fetch(`dil_${message.guild.id}`)
    if(dil == 'tr'){
    if (!message.guild) {

 if (message.channel.nsfw === false)
 return message.channel.send(
 " ⚠️ **Bu kanal bir NSFW kanalı değil!**"
 );
 let yardım = new Discord.MessageEmbed()
 .setColor("PURPLE")
 .addField(
 `**Komutlar**`,
 `

• Bu kanalda NSFW Kanal seçeneği açık olmadığından NSFW komutları kullanılamaz.

• Eğer +18 yaşından büyük iseniz Kanalı Düzenle > Genel Görünüm'e girin ve oradaki NSFW Kanal seçeneğini aktif ederek NSFW komutlarını kullanabilirsiniz.

\`h!4k\` = Rastgele 4K NSFW fotoğrafı gösterir.
\`h!porno-gif\` = Rastgele Porno Gifi gösterir.
\`h!anal\` = Rastgele Gif veya fotoğraf sevişmelerini gösterir.
\`h!pussy\` = Rastgele pussy fotoğrafı gösterir.
\`h!hentai\` = Rastgele Anime sevişmeleri gösterir.
\`h!ass\` = Rastgele göt fotoğrafları gösterir.
\`h!thigh\` = Rastgele Tayt fotoğrafı gösterir.
\`h!solo\` = Rastgele solo fotoğrafı gösterir.
\`h!anime-wallpaper\` = Rastgele Anime Wallpaper fotoğrafı gösterir.
\`h!hentai-gif\` = Rastgele hentai gif atar.
\`h!hkitsune\` = Rastgele Kedi veya Kurt Anime fotoğrafları gösterir.
\`h!pussy-art\` = Rastgele pussy-art fotoğrafları gösterir.
\`h!boobs\` = Rastgele boobs fotoğrafları gösterir.
\`h!feet\` = Rastgele Ayak fotoğrafları gösterir.
`
 )
 .setImage(
 "https://cdn.discordapp.com/attachments/819587699375079434/819858181474746368/standard.gif"
 );
 message.channel.send(yardım);
};
   } else {
 exports.run = async (client, message, args) => {
if (message.channel.nsfw === false)
 return message.channel.send(
 " ⚠️ **This channel is not a NSFW channel!**"
 );
 let yardım = new Discord.MessageEmbed()
 .setColor("PURPLE")
 .addField(
 `**Commands**`,
 `

• NSFW commands are not available because the NSFW Channel option is not turned on for this channel.

• If you are over 18 years old, go to Edit Channel> Overview and activate the NSFW Channel option there and use NSFW commands.

\`h!4k\` = It shows a random 4K NSFW photo.
\`h!porno-gif\` = Random Porn Gif shows.
\`h!anal\` = It shows random Gif or photo lovemaking.
\`h!pussy\` = It shows a random pussy photo.
\`h!hentai\` = Random Anime shows make love.
\`h!ass\` = Shows random ass photos.
\`h!thigh\` = Random Tights shows photo.
\`h!solo\` = It shows a random solo photo.
\`h!anime-wallpaper\` = Random Anime Wallpaper shows photo.
\`h!hentai-gif\` = Throws random hentai gifs.
\`h!hkitsune\` = Shows random Cat or Wolf Anime photos.
\`h!pussy-art\` = It shows random pussy-art photos.
\`h!boobs\` = Shows random boobs photos.
\`h!feet\` = Random Foot photos shows.
`
 )
 .setImage(
 "https://cdn.discordapp.com/attachments/819587699375079434/819858181474746368/standard.gif"
 );
 message.channel.send(yardım);
};
 }}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nsfw", "yadım-nsfw", "help-nsfw"],
  permLevel: 0
};
exports.help = {
  name: "yardım-nsfw"
};
