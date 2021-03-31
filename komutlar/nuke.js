const dc = require("discord.js")
exports.run = async(client, message, args) => {
  /*
  if(!message.member.hasPermission("ADMİNİSTRATOR")) return;
  let kerim = message.channel.parentID
 message.channel.delete(message.channel).then
  message.channel.clone().then(z => {
    let baskan = z.guild.channels.cache.find(c => c.name === z.name)
    baskan.setParent(
    baskan.guild.channels.cache.find(channel => channel.id === kerim))
    const başkan = new dc.MessageEmbed()
    .setTitle("Kanal Nukelendı!")
    .setColor("ORANGE")
    .setImage("https://cdn.discordapp.com/attachments/779937117300195338/779937292528910347/unnamed.gif")
    z.send(başkan)
    })*/
    const yetki = new dc.MessageEmbed()
.setDescription(`Bu komutu kullanabilmek için MANAGE_CHANNELS-KANALLARI YÖNET yetkisine sahip olmanız gerekir!`)
  .setTitle('Başarısız!')
  .setColor('RED')
  .setImage('https://s4.gifyu.com/images/KANALALRI-YOENT.gif')
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(yetki);
message.channel.clone().then(knl => {
  let position = message.channel.position;
  knl.setPosition(position);
  message.channel.delete();
  const embed = new dc.MessageEmbed()
  .setTitle('Bir kanal patladı!')
.setImage('https://media1.giphy.com/media/oe33xf3B50fsc/giphy.gif')
    .setThumbnail(message.author.displayAvatarURL({size:4096,dynamic:true}))
.setFooter(`Nuke atan: ${message.author.id}`)
knl.send(embed)
});
  };
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["nuke"],
  permLevel: 0
}
exports.help = {
  name: "nuke"
  }