const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.delete();
message.channel.createWebhook(message.author.username, {avatar: message.author.avatarURL ? message.author.avatarURL({dynamic: true}) : ''}).then(async web => {
const hook = new Discord.WebhookClient(web.id, web.token);
const attachment = new Discord.MessageAttachment('https://cdn.glitch.com/e0fb4ccb-6b63-480b-a6ea-1ba3e7f3425e%2Fkurallar.gif?v=1608708467131');
hook.send(`\`${message.guild.name}\` **Sunucu Kuralları**

 ・ <:kural:820202807784505364>   **\`Ağır\` ve \`kişi hedefli\` küfür kullanmayınız.**
 ・ <:kural:820202807784505364>   **Özelden veya genelden \`reklam\` yapmayınız.**
 ・ <:kural:820202807784505364>   **\`Flood\`, \`spam\` ve \`siyasi\`, \`cinsel\` muhabbet benzerlerini yapmayınız.**
 ・ <:kural:820202807784505364>   **\`Irkçı\`, \`cinsiyetçi\`, \`homofobik\` davranmayınız,Üyeleri Rahatsız etmeyiniz.**
 ・ <:kural:820202807784505364>   **Gereksiz yere \`spoiler\`, \`embed\` vs. kullanmayınız,etiket atmayınız.**
 ・ <:kural:820202807784505364>   **Discord'un \`kullanım\` şartlarına uyunuz.**

<a:pin:816961344934379540>   ** Yetkililer verecekleri ceza konusunda \`insiyatif\` kullanabilirler ve sunucu için zararlı olduğunu düşündükleri kişilere sebep belirtmeksizin yine aynı inisiyatifle ceza verebilirler.**


> \`Sunucuya Giren HERKES Okumuş Ve Kabul etmiş Sayılır.\`

`, attachment).then(() => hook.delete())
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kurallar'
};