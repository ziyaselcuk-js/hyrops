const discord = require('discord.js')

exports.run = async(client, message, args) => {
  
  if(message.author.id !== "792750149070880809") return message.channel.send(`${message.author}, Bu menüye erişim izniniz yok <a:no2:816961355926994955>.`)
      const hyrops = new discord.MessageEmbed()                                                                      

  
.setTitle(`${client.user.username} - Geliştirici Ekibi`)
.setColor('BLUE')
.addField("<a:discordianstaffian:819487619922264084> h!eval", "`Eval Kod.`")
.addField("<a:discordianstaffian:819487619922264084> h!ayrıl","`Bot belirtilen sunucudan ayrılır.`")
.addField("<a:discordianstaffian:819487619922264084> h!karaiste", "`Bot kullanıma kapatılır.`")
.addField("<a:discordianstaffian:819487619922264084> h!beyazliste", "`Bot kullanıma açar.`")
.addField("<a:discordianstaffian:819487619922264084> h!load", "`Komut yeniler`")
.addField("<a:discordianstaffian:819487619922264084> h!reboot", "`Botu yeniler`")
.addField("<a:discordianstaffian:819487619922264084> h!goldekle", "`Gold üye ekler`")
.addField("<a:discordianstaffian:819487619922264084> h!goldkaldır", "`Gold üye kaldırır.`")
.setImage("https://cdn.discordapp.com/attachments/819587699375079434/819858181474746368/standard.gif")
message.channel.send(hyrops)

}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['geliştirici'],
  permlevel: 0
}
exports.help = {
  name: 'valenseözelmenü'
}
 