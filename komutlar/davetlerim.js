const discord = require('discord.js')
const db = require('quick.db')


exports.run = async(client, message, args) => {
  const dil = db.fetch(`dil_${message.guild.id}`)
    if(dil == 'tr'){
    if (!message.guild) {
  let user = message.mentions.users.first() || message.author;
  if(!user) return message.channel.send("Birisini Etiketle")
 let invites = await message.guild.fetchInvites() 
  let regular = invites.array().find(invite => invite.inviter.id === user.id) ? invites.find(invite => invite.inviter.id === user.id).uses : 0

message.channel.send(`Toplam **${regular}** davetin var!`) 
    }} else { // WAOW 500 AQ :d SDGFIUDOKJLGMDFGF
    let user = message.mentions.users.first() || message.author;
  if(!user) return message.channel.send("Mention someone please.")
 let invites = await message.guild.fetchInvites() 
  let regular = invites.array().find(invite => invite.inviter.id === user.id) ? invites.find(invite => invite.inviter.id === user.id).uses : 0

message.channel.send(`Total invites :  **${regular}**`)   
      
    }
}; 
exports.conf = {
  aliases: ['invites']
}
exports.help = {
  name: "davetlerim"
}