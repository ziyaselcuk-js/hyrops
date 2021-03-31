const discord = require('discord.js')
const db = require('quick.db') // 
const ms = require('parse-ms') // 

exports.run = async(client, message, args) => { //

 let demon = 6000 // Demon Development
let demonTime = await db.fetch(`demonsüre_${message.member.id}`) // Demon Development
 // Demon Development
 if (demonTime !== null && demon - (Date.now() - demonTime) > 0) { // Demon Development
 let timeObj = ms(demon - (Date.now() - demonTime)) // Demon Development
 const süre = new discord.MessageEmbed()
 .addField("Komutu kullanmak için dakika ${timeObj.seconds} saniye** beklemelisin.", "HyropsBOT")
 message.channel.send(süre) // Demon Development
 } else { // Demon Development
      
          const dil = db.fetch(`dil_${message.guild.id}`)
    if(dil == 'tr'){
      
    

const henoryardım = new discord.MessageEmbed()

.setTitle(`${client.user.username} - Yardım Menüsü`)
.setColor('BLUE')
.setDescription('<:eywkalp:819207255047798805> [Destek Sunucusuna gelmeyi unutma!](https://discord.gg/UAuAtakMZW) \n<:eywkalp:819207255047798805>  [Beni Davet et!](https://discord.com/oauth2/authorize?client_id=816259117642547202&permissions=8&scope=bot) \n <:eywkalp:819207255047798805> [Bana Oyver!](https://botsfordiscord.com/bot/816259117642547202/vote) ')
.addField(`<a:bye:786605302886694952>__Eğlence Komutları__`,` \`h!yardım-eğlence\``,false)
.addField(`<a:bye:786605302886694952>__Abone Komutları__`,` \`h!yardım-abone\``,false)
.addField(`<a:bye:786605302886694952>__Botlist Komutları__`,` \`h!yardım-botlist\``,false)
.addField(`<a:bye:786605302886694952>__Yetkili Komutl  arı__`,` \`h!yardım-yetkili\``,false)
.addField(`<a:bye:786605302886694952>__Kayıt Komutları__`,` \`h!kayıt yardım\``,false)
.addField(`<a:bye:786605302886694952>__Nsfw Komutları__`,` \`h!yardım-nsfw\``,false)
.addField(`<a:bye:786605302886694952>__Gold Üye Komutları__`,` \`h!yardım-gold\``,false)
.addField(`<a:bye:786605302886694952>__Sunucu Koruma Komutları__`,` \`h!yardım-koruma\``,false)
.addField(`<a:bye:786605302886694952>__Kullanıcı Komutları__`,` \`h!yardım-kulanıcı\``,false)
.setFooter(`${message.author.username} tarafından istendi!`, message.author.avatarURL())
.setImage("https://cdn.discordapp.com/attachments/819587699375079434/819858181474746368/standard.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(henoryardım)

   db.set(`demonsüre_${message.member.id}`, Date.now())
      
    } else{
     
const henoryardım = new discord.MessageEmbed()

.setTitle(`${client.user.username} - Help Menu`)
.setColor('BLUE')
.setDescription('<:eywkalp:819207255047798805> [Support Server!](https://discord.gg/UAuAtakMZW) \n<:eywkalp:819207255047798805>  [Invite me!](https://discord.com/oauth2/authorize?client_id=816259117642547202&permissions=8&scope=bot) \n <:eywkalp:819207255047798805> [Vote me!](https://botsfordiscord.com/bot/816259117642547202/vote) ')
.addField(`<a:bye:786605302886694952>__Funny Commands__`,` \`h!help-fun (In maintenance)\``,false)
.addField(`<a:bye:786605302886694952>__Subcriber Commands__`,` \`h!help-subscriber\``,false)
.addField(`<a:bye:786605302886694952>__Botlist Commands__`,` \`h!help-botlist\``,false)
.addField(`<a:bye:786605302886694952>__Moderation Commands__`,` \`h!help-moderation\``,false)
.addField(`<a:bye:786605302886694952>__Register Commands__`,` \`h!regiser help\``,false) // BUNU TAB2 DEMON DEVELOPMENT YAPTI SJ  
.addField(`<a:bye:786605302886694952>__Nsfw Commands__`,` \`h!help-nsfw\``,false)
.addField(`<a:bye:786605302886694952>__Premium Commands__`,` \`h!help-gold\``,false)
.addField(`<a:bye:786605302886694952>__Protect Commands__`,` \`h!help-guard\``,false)
.addField(`<a:bye:786605302886694952>__User Commands__`,` \`h!help-user\``,false)
.setFooter(`${message.author.username} used command!`, message.author.avatarURL())
.setImage("https://cdn.discordapp.com/attachments/819587699375079434/819858181474746368/standard.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(henoryardım)
   db.set(`demonsüre_${message.member.id}`, Date.now())
      
    }
  } 
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['yardım', "help"],
  permlevel: 0
}
exports.help = {
  name: 'yardım'
}
