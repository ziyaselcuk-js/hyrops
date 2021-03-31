const Discord = require ('discord.js');
exports.run = async (client,message,args) => {
  let karmabutnitrolu = args.join('%20')
  if (!karmabutnitrolu) return message.channel.send('Lütfen Bir Şey Yaz')
  message.channel.send(`https://ctk-api.herokuapp.com/clyde/${karmabutnitrolu}`)
};
exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['clyde', "clyde"],
  permlevel: 0
}
exports.help = {
  name: 'clyde'
}