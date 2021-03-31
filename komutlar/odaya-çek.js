const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    if (!message.member.voice.channel) { return message.channel.send("**Ses kanalında olman lazım!**"); }
 let kullanıcı = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
 if (!kullanıcı) return message.channel.send('**Kullanıcıyı etiketlemelisin.**')
 let rol = message.mentions.roles.first()
 let member = message.guild.member(kullanıcı)
 if(!member.voice.channel) return message.channel.send("**Etiketlenen kullanıcı bir ses kanalında değil**").then(m =>m.delete(5000))
 const voicechannel = message.member.voice.channel.id;
 if (message.member.voice.channel.id === kullanıcı.voice.channel.id) return message.channel.send("Zaten aynı kanaldasınız")
 const filter = (reaction, user) => {
 return ['✅', '❌'].includes(reaction.emoji.name) && user.id === kullanıcı.id;
 };
 let casper = new Discord.MessageEmbed()
 .setColor("BLUE")
 .setDescription(`${kullanıcı}, ${message.author} seni ${kullanıcı.voice.channel.name} odasına çekmek istiyor. Kabul ediyormusun?`)
 .setFooter('Henor BOT') 

 let mesaj = await message.channel.send(casper)
 await mesaj.react("✅")
 await mesaj.react("❌")
 mesaj.awaitReactions(filter, {
 max: 1,
 time: 60000,
 errors: ['time']
 }).then(collected => {
 const reaction = collected.first();
 const voicechannel = message.member.voice.channel.id;
 if (reaction.emoji.name === '✅') {
 let kabul = new Discord.MessageEmbed()
 .setColor("GREEN")
 .setDescription(`${kullanıcı} odaya çekildi`)
 message.channel.send(kabul)
 member.voice.setChannel(voicechannel);
 const voicechannel1 = message.member.voice.channel.name;
        } else {
            let sama = new Discord.MessageEmbed()
 .setColor("RED")
 .setDescription(`${kullanıcı} odaya çekilme teklifini reddetti`)
 message.channel.send(sama)
 }
 })
}
exports.conf = {
    enabled: true,
    aliases: ['çek','odayaçek'],
    permLevel: 0
};

exports.help = {
    name: "çek",
    description: "Etiketlediğiniz kullanıcıyı odaya çeker",
    usage: "çek @kullanıcı"

};