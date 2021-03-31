const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
const express = require("express");
require("./util/eventLoader.js")(client);
const path = require("path")
const request = require("request");
const snekfetch = require("snekfetch");
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
client.queue = new Map()


var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

//sa-as

client.on("message", async msg => {
  let saas = await db.fetch(`saas_${msg.guild.id}`);
  if (saas == 'kapali') return;
  if (saas == 'acik') {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('**Aleyküm Selam, Hoşgeldin**');
  }
  }
});

//sa-as
client.on('guildCreate', guild => {
 let virus = guild.channels.filter(c => c.type === "text").random()
 const eklendim = new Discord.MessageEmbed()
.setTitle(`HyropsBOT | İnfo`)
.setTimestamp()
.setColor("GREEN")
.setDescription(`Thank you for adding me your server \n My prefix : h! \n [My invite link!](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8) \n thanks!`)
 virus.send(eklendim)

 db.set(`dil_${guild.id}`, `en`)
 
});

client.reload = command => {
 return new Promise((resolve, reject) => {
 try {
 delete require.cache[require.resolve(`./komutlar/${command}`)];
 let cmd = require(`./komutlar/${command}`);
 client.commands.delete(command);
 client.aliases.cache.forEach((cmd, alias) => {
 if (cmd === command) client.aliases.delete(alias);
 });
 client.commands.set(command, cmd);
 cmd.conf.aliases.cache.forEach(alias => {
 client.aliases.set(alias, cmd.help.name);
 });
 resolve();
 } catch (e) {
 reject(e);
 }
 });
};

//güvenlik

client.on('guildMemberAdd',async member => {
 let user = client.users.cache.get(member.id);
 let chan = client.channels.cache.get(db.fetch(`guvenlik${member.guild.id}`)) 
 const Canvas = require('canvas')
 const canvas = Canvas.createCanvas(360,100);
 const ctx = canvas.getContext('2d');
 
 const resim1 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/819144745699508224/819151675457404938/image_1.jpg')
 const resim2 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/814810944277315585/819155005738450984/image_2.jpg')
 const kurulus = new Date().getTime() - user.createdAt.getTime();
 
 var kontrol;
 if (kurulus > 1296000000) kontrol = resim1
 if (kurulus < 1296000000) kontrol = resim2

 const avatar = await Canvas.loadImage(member.user.displayAvatarURL());
 ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
 ctx.beginPath();
 ctx.lineWidth = 4;
 ctx.fill()
 ctx.lineWidth = 4;
 ctx.arc(180, 46, 36, 0, 2 * Math.PI);
 ctx.clip();
 ctx.drawImage(avatar, 143,10, 73, 72 );

 
 const attachment = new Discord.Attachment(canvas.toBuffer(), 'gvnlik.png'); 
 chan.send(attachment)
});
//güvenlik yane anne ajslfkdjkaf


client.load = command => {
 return new Promise((resolve, reject) => {
 try {
 let cmd = require(`./komutlar/${command}`);
 client.commands.set(command, cmd);
 cmd.conf.aliases.cache.forEach(alias => {
 client.aliases.set(alias, cmd.help.name);
 });
 resolve();
 } catch (e) {
 reject(e);
 }
 });
};

client.unload = command => {
 return new Promise((resolve, reject) => {
 try {
 delete require.cache[require.resolve(`./komutlar/${command}`)];
 let cmd = require(`./komutlar/${command}`);
 client.commands.delete(command);
 client.aliases.cache.forEach((cmd, alias) => {
 if (cmd === command) client.aliases.delete(alias);
 });
 resolve();
 } catch (e) {
 reject(e);
 }
 });
};

//CAPSLOCK SİSTEMİ ///

    client.on("message", async msg => {
    if (msg.channel.type === "dm") return;
      if(msg.author.bot) return;  
        if (msg.content.length > 4) {
         if (db.fetch(`capslock_${msg.guild.id}`)) {
           let caps = msg.content.toUpperCase()
           if (msg.content == caps) {
             if (!msg.member.hasPermission("ADMINISTRATOR")) {
               if (!msg.mentions.users.first()) {
                 msg.delete()
                 return msg.channel.send(`✋ ${msg.author}, Bu sunucuda, büyük harf kullanımı engellenmekte!`).then(m => m.delete(5000))
     }
       }
     }
   }
  }
});

//CAPSLOCK SİSTEMİ ///

client.on('guildMemberAdd', async member => {
 
 let tag = await db.fetch(`tag_${member.guild.id}`);
 let tagyazi;
 if (tag == null) tagyazi = member.setNickname(`${member.user.username}`)
 else tagyazi = member.setNickname(`${tag} | ${member.user.username}`)
});

client.reload = command => {
 return new Promise((resolve, reject) => {
 try {
 delete require.cache[require.resolve(`./komutlar/${command}`)];
 let cmd = require(`./komutlar/${command}`);
 client.commands.delete(command);
 client.aliases.cache.forEach((cmd, alias) => {
 if (cmd === command) client.aliases.delete(alias);
 });
 client.commands.set(command, cmd);
 cmd.conf.aliases.cache.forEach(alias => {
 client.aliases.set(alias, cmd.help.name);
 });
 resolve();
 } catch (e){
 reject(e);
 }
 });
};




client.on('message', async message => {
 let ke = await db.fetch(`reklam_${message.guild.id}`)
 
 if (ke === "kapali" || ke === undefined || ke === null){
 return;
 } else if (ke === "acik") {
 let reklam = ["discord.gg/", "https://", ".org", ".com", ".cf", ".tk", ".xyz"]
 if (reklam.some(word => message.content.includes(word))){
 if (!message.member.hasPermission("BAN_MEMBERS")) {
 message.delete();
 message.channel.send("**❌ Bu Sunucuda Reklam Koruması Bulunmaktadır. ❌**")
 }
 }
 
 }
})

client.on("message", async message => {
 let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
 let reklamkick = await db.fetch(`kufur_${message.guild.id}`);
 let kullanici = message.member;
 if (!reklamkick) return;
 if (reklamkick == "Açık") {
 const reklam = [
 "discord.app",
 "discord.gg",
 ".com",
 ".net",
 ".xyz",
 ".tk",
 ".pw",
 ".io",
 ".me",
 ".gg",
 "www.",
 "https",
 "http",
 ".gl",
 ".org",
 ".com.tr",
 ".biz",
 ".party",
 ".rf.gd",
 ".az"
 ];
 if (reklam.some(word => message.content.toLowerCase().includes(word))) {
 if (!message.member.hasPermission("BAN_MEMBERS")) {
 message.delete();
 db.add(`reklamuyari_${message.author.id}`, 1); //uyarı puanı ekleme
 if (uyarisayisi === null) {
 let uyari = new Discord.MessageEmbed()
 .setColor("BLACK")
 .setTitle("Reklam-Engel!")
 .setDescription(
 `**❌ <@${message.author.id}> reklam yapmayı kes! bu ilk uyarın! (1/3) ❌**`
 )
 .setFooter(client.user.username, client.user.avatarURL())
 .setTimestamp();
 message.channel.send(uyari);
 }
 if (uyarisayisi === 1) {
 let uyari = new Discord.MessageEmbed()
 .setColor("BLACK")
 .setTitle("Reklam-Engel!")
 .setDescription(
 `**❌ <@${message.author.id}> reklam yapmayı kes! bu ikinci uyarın! (2/3) ❌**`
 )
 .setFooter(client.user.username, client.user.avatarURL())
 .setTimestamp();
 message.channel.send(uyari);
 }
 if (uyarisayisi === 2) {
 message.delete();
 await kullanici.kick({
 reason: `Reklam-Engel sistemi!`
 });
          let uyari = new Discord.MessageEmbed()
 .setColor("BLACK")
 .setTitle("Reklam-Engel!")
 .setDescription(
 `<@${message.author.id}> üç kere reklam yaptığı için sunucudan atıldı!`
 )
 .setFooter(client.user.username, client.user.avatarURL())
 .setTimestamp();
 message.channel.send(uyari);
 }
 if (uyarisayisi === 3) {
 message.delete();
 await kullanici.members.ban({
 reason: `Reklam-Engel sistemi!`
 });
 db.delete(`reklamuyari_${message.author.id}`);
 let uyari = new Discord.MessageEmbed()
 .setColor("BLACK")
 .setTitle("Reklam kick sistemi")
 .setDescription(
 `**❌ <@${message.author.id}> atıldıktan sonra tekrar reklam yaptığı için sunucudan yasaklandı! ❌**`
 )
 .setFooter(client.user.username, client.user.avatarURL())
 .setTimestamp();
 message.channel.send(uyari);
 }
 }
 }
 }
});

client.on("message", async msg => {
 if(msg.author.bot) return;
 if(msg.channel.type === "dm") return;
 
 let i = await db.fetch(`küfürFiltre_${msg.guild.id}`) 
 if (i == 'acik') {
 const küfür = ["amcık", "yarrak", "orospu","piç", "sikerim", "sikik", "amına", "pezevenk", "yavşak", "ananı", "anandır", "orospu", "evladı", "göt", "pipi", "sokuk", "yarak", "bacını", "karını","am", "orospu", "orosbu", "sik", "siktir", "puşt", "am","sikiş","s2ş","j4j","aq"];
 if (küfür.some(word => msg.content.toLowerCase().includes(word))) {
 try {
 if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) {
 msg.delete();
 const hyropskufur = new Discord.MessageEmbed()
.setDescription("Küfürlü konuşmak yasak!:uyar:")
.setFooter("Hyrops Küfür Sistemi")
 return msg.channel.send(hyropskufur)
 

 } 
 } catch(err) {
 console.log(err);
 }
 }
 }
 if (!i) return;
 });

 client.on("guildMemberAdd", async cmember => {
if(!cmember.guild) return
if(cmember.user.bot) return

let cveri = await db.fetch(`cotorol.${cmember.guild.id}`)
if(!cveri) return

let ckanal = client.channels.cache.get(cveri.kanal)
let crol = cmember.guild.roles.cache.get(cveri.rol)
if(!ckanal || !crol) return
//
cmember.roles.add(crol.id)
ckanal.send(`${cmember} kullanıcısına **${crol.name}** rolü verildi.`)

})

client.on("roleCreate", async (rolee, member, guild) => {
 let rolkoruma = await db.fetch(`rolk_${rolee.guild.id}`);
 if (rolkoruma == "acik") {
 rolee.delete();
 const embed = new Discord.MessageEmbed()
 .setDescription(
 "Sunucunuzda yeni bir rol oluşturuludu! fakat geri silindi! (Rol Koruma Sistemi)"
 )
 .setColor("BLACK");
 rolee.guild.owner.send(embed);
 return;
 } else {
 return;
 }
});

client.on("channelCreate", async (channel, member, guild) => {
 let kanal = await db.fetch(`kanalk_${channel.guild.id}`);
 if (kanal == "acik") {
 channel.delete();
 const embed = new Discord.MessageEmbed()
 .setDescription(
 "**⚒️ Sunucunuzda yeni bir kanal oluşturuludu! fakat geri silindi! ( Kanal Koruma Sistemi)**"
 )
 .setColor("BLACK");
 channel.guild.owner.send(embed);
 return;
 } else {
 return;
 }
});

client.on("message", async message => {
  let prefix = ayarlar.prefix;

  var id = message.author.id;
  var gid = message.guild.id;

  let hm = await db.fetch(`seviyeacik_${gid}`);
  let kanal = await db.fetch(`svlog_${gid}`);
  let xps = await db.fetch(`verilecekxp_${gid}`);
  let seviyerol = await db.fetch(`svrol_${gid}`);
  let rollvl = await db.fetch(`rollevel_${gid}`);

  if (!hm) return;
  if (message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  var xpToLvl = await db.fetch(`xpToLvl_${id}_${gid}`);

  if (!lvl) {
    //CodEming/Ft.Yasin..
    if (xps) {
      db.set(`xp_${id}_${gid}`, xps);
    }
    db.set(`xp_${id}_${gid}`, 4);
    db.set(`lvl_${id}_${gid}`, 1);
    db.set(`xpToLvl_${id}_${gid}`, 100);
  } else {
    if (xps) {
      db.add(`xp_${id}_${gid}`, xps);
    }
    db.add(`xp_${id}_${gid}`, 4);

    if (xp > xpToLvl) {
      db.add(`lvl_${id}_${gid}`, 1);
      db.add(
        `xpToLvl_${id}_${gid}`,
        (await db.fetch(`lvl_${id}_${gid}`)) * 100
      );
      if (kanal) {
        client.channels
          .get(kanal.id)
          .send(
            message.member.user.username +
              "** Seviye Atladı! Yeni seviyesi; `" +
              lvl +
              "` Tebrikler! :tada: **"
          );

        //zepo
      }
      //zepo
    }

    if (seviyerol) {
 if (lvl >= rollvl) {
 message.guild.member(message.author.id).roles.add(seviyerol);
 if (kanal) {
 client.channels
 .get(kanal.id)
 .send(
 message.member.user.username +
 "** Yeni Seviyesi **" +
 rollvl +
 "** seviyeye ulaştı ve " +
 seviyerol +
 " Rolünü kazandı! 🎉 **"
 );
 }
 }
 }
 }

 //ZEPST
});

client.on("guildCreate", guild => { // sunucuya eklendim ve atıldım
let add = client.channels.cache.get("819157210692714516")
const eklendim = new Discord.MessageEmbed()

.setTitle(`Sunucuya Eklendim`)
.setTimestamp()
.setColor("GREEN")
.setThumbnail(guild.iconURL())
.addField(`Sunucu İsmi`,guild.name)
.addField(`Sunucu ID`, guild.id)
.addField(`Üye Sayısı`,guild.memberCount)

add.send(eklendim)

});

client.on("guildDelete", guild => {
let remove = client.channels.cache.get("819157210692714516")
const atildim = new Discord.MessageEmbed()

.setTitle(`Sunucudan Atıldım`)
.setTimestamp()
.setColor("RED")
.setThumbnail(guild.iconURL())
.addField(`Sunucu İsmi`,guild.name)
.addField(`Sunucu ID`, guild.id)
.addField(`Kurucu`,guild.owner.user.tag)
.addField(`Üye Sayısı`,guild.memberCount)

remove.send(atildim)

});

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);

//SAYAÇ//
client.on('guildMemberAdd', async member => {
let sayaç = db.fetch(`ottoman.sayaç_${member.guild.id}`)
let sayaçk = db.fetch(`ottoman.sayaçk_${member.guild.id}`)
if(!sayaç) return;
if(!sayaçk) return;
if(member.guild.memberCount >= sayaç) {

client.channels.cache.get(sayaçk).send(`Tebrikler! Sunucunuz başarıyla ayarlanmış olan \`${sayaç}\` kişiye ulaştı. Sayaç sistemi sıfırlandı.`)
db.delete(`ottoman.sayaç_${member.guild.id}`)
db.delete(`ottoman.sayaçk_${member.guild.id}`)
} else {
client.channels.cache.get(sayaçk).send(`╔▬▬▬▬▬▬▬ HyropsBOT Sayaç Sistemi     ▬▬▬▬▬▬▬▬▬
║İşte Karşısınızda **${member}** Giriş Yaptı
║**${sayaç}** Kişi Olmamıza **${sayaç - member.guild.memberCount}** Kişi Kaldı
║Seninle Beraber **${member.guild.memberCount}** Kişiyiz !
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)


}
})

client.on('guildMemberRemove', async member => {
let sayaç = db.fetch(`ottoman.sayaç_${member.guild.id}`)
let sayaçk = db.fetch(`ottoman.sayaçk_${member.guild.id}`)
if(!sayaç) return;
if(!sayaçk) return;
if(member.guild.memberCount >= sayaç) {

client.channels.get(sayaçk).send(`Tebrikler! Sunucunuz başarıyla ayarlanmış olan \`${sayaç}\` kişiye ulaştı. Sayaç sistemi sıfırlandı.`)
db.delete(`ottoman.sayaç_${member.guild.id}`)
} else {
   
client.channels.cache.get(sayaçk).send(`╔▬▬▬▬▬▬▬ HyropsBOT Sayaç Sistemi ▬▬▬▬▬▬▬▬▬
║**${member}** Aramızdan Ayrıldı
║**${sayaç}** Kişi Olmamıza **${sayaç - member.guild.memberCount}** Kişi Kaldı
║Toplam **${member.guild.memberCount}** Kişiyiz !
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
}

})
//AKTİFLİK MESAJI //
//SUNUCUYA EKLENDİĞİNDE RANDOM MESAJ //
//GOLD-ÜYE-SİSTEMİ//
//RESİMLİ-HG-BB//
client.on("guildMemberRemove", async member => {
 //let resimkanal = JSON.parse(fs.readFileSync("./ayarlar/gç.json", "utf8"));
 //const canvaskanal = member.guild.channels.cache.get(resimkanal[member.guild.id].resim);
 
 if (db.has(`gçkanal_${member.guild.id}`) === false) return;
 var canvaskanal = member.guild.channels.cache.get(db.fetch(`gçkanal_${member.guild.id}`));
 if (!canvaskanal) return;

 const request = require("node-superfetch");
 const Canvas = require("canvas"),
 Image = Canvas.Image,
 Font = Canvas.Font,
 path = require("path");

 var randomMsg = ["Sunucudan Ayrıldı."];
 var randomMsg_integer =
 randomMsg[Math.floor(Math.random() * randomMsg.length)];

 let msj = await db.fetch(`cikisM_${member.guild.id}`);
 if (!msj) msj = `{uye}, ${randomMsg_integer}`;

 const canvas = Canvas.createCanvas(640, 360);
 const ctx = canvas.getContext("2d");

 const background = await Canvas.loadImage(
 "https://i.hizliresim.com/Wrn1XW.jpg"
 );
 ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

 ctx.strokeStyle = "#74037b";
 ctx.strokeRect(0, 0, canvas.width, canvas.height);

 ctx.fillStyle = `#D3D3D3`;
 ctx.font = `37px "Warsaw"`;
 ctx.textAlign = "center";
 ctx.fillText(`${member.user.username}`, 300, 342);

 let avatarURL = member.user.displayAvatarURL()({ format: 'png', dynamic: true, size: 1024 });
 const { body } = await request.get(avatarURL());
 const avatar = await Canvas.loadImage(body);

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
  ctx.clip();
  ctx.drawImage(avatar, 250, 55, 110, 110);

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "ro-BOT-güle-güle.png"
  );

    canvaskanal.send(attachment);
    canvaskanal.send(
      msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)
    );
    if (member.user.bot)
      return canvaskanal.send(`🤖 Bu bir bot, ${member.user.tag}`);
  
});

client.on("guildMemberAdd", async member => {
 if (db.has(`gçkanal_${member.guild.id}`) === false) return;
 var canvaskanal = member.guild.channels.cache.get(db.fetch(`gçkanal_${member.guild.id}`));

 if (!canvaskanal || canvaskanal === undefined) return;
 const request = require("node-superfetch");
 const Canvas = require("canvas"),
 Image = Canvas.Image,
 Font = Canvas.Font,
 path = require("path");

 var randomMsg = ["Sunucuya Katıldı."];
 var randomMsg_integer =
 randomMsg[Math.floor(Math.random() * randomMsg.length)];

 let paket = await db.fetch(`pakets_${member.id}`);
 let msj = await db.fetch(`cikisM_${member.guild.id}`);
 if (!msj) msj = `{uye}, ${randomMsg_integer}`;

 const canvas = Canvas.createCanvas(640, 360);
 const ctx = canvas.getContext("2d");

 const background = await Canvas.loadImage(
 "https://i.hizliresim.com/UyVZ4f.jpg"
 );
 ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

 ctx.strokeStyle = "#74037b";
 ctx.strokeRect(0, 0, canvas.width, canvas.height);

 ctx.fillStyle = `#D3D3D3`;
 ctx.font = `37px "Warsaw"`;
 ctx.textAlign = "center";
 ctx.fillText(`${member.user.username}`, 300, 342);

 let avatarURL = member.user.displayAvatarURL()({ format: 'png', dynamic: true, size: 1024 }) ;
 const { body } = await request.get(avatarURL());
 const avatar = await Canvas.loadImage(body);

 ctx.beginPath();
 ctx.lineWidth = 4;
 ctx.fill();
 ctx.lineWidth = 4;
 ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
 ctx.clip();
 ctx.drawImage(avatar, 250, 55, 110, 110);

 const attachment = new Discord.MessageAttachment(
 canvas.toBuffer(),
 "ro-BOT-hosgeldin.png"
 );

  canvaskanal.send(attachment);
  canvaskanal.send(
    msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)
  );
  if (member.user.bot)
    return canvaskanal.send(`🤖 Bu bir bot, ${member.user.tag}`);
});
//OTOCEVPA//
client.on('message', async msg => {
  let ozelkomut = await db.fetch(`sunucuKomut_${msg.guild.id}`);
  let ozelkomutYazi;
  if (ozelkomut == null) ozelkomutYazi = 'Burayı silme yoksa hatalı olur'
  else ozelkomutYazi = ''+ ozelkomut +''
  if (msg.content.toLowerCase() === ozelkomutYazi) {
      let mesaj = await db.fetch(`sunucuMesaj_${msg.guild.id}`);
  let mesajYazi;
  if (mesaj == null) mesajYazi = 'Burayı silme yoksa hatalı olur'
  else mesajYazi = ''+ mesaj +''
    msg.channel.send(mesajYazi)
  }
});
//AFK//
  const ms = require("parse-ms");
const { DiscordAPIError } = require("discord.js");

client.on("message", async message => {
 if (message.author.bot) return;
 if (!message.guild) return;
 if (message.content.includes(`afk`)) return;

 if (await db.fetch(`afk_${message.author.id}`)) {
 db.delete(`afk_${message.author.id}`);
 db.delete(`afk_süre_${message.author.id}`);

 const embed = new Discord.MessageEmbed()
 .setColor("BLUE")
 .setAuthor(message.author.username, message.author.avatarURL())
 .setImage("")
 .setDescription(`**AFK Modundan Tekrar Aktif Olduğunuz İçin Çıkıldı**`);

 message.channel.send(embed);
 }

  var USER = message.mentions.users.first();
 if (!USER) return;
 var REASON = await db.fetch(`afk_${USER.id}`);

 if (REASON) {
 let süre = await db.fetch(`afk_süre_${USER.id}`);
 let timeObj = ms(Date.now() - süre);

 const afk = new Discord.MessageEmbed()

 .setColor("BLUE")
 .setImage("")
 .setDescription(
 
 `** AFK Sistemi**\n\n\n\`${USER.tag}\` **Adlı Kullanıcı,\n\n\`${REASON}\` Sebeplerden Dolayı AFK**\n\n**AFK Süresi :**\n\n\`${timeObj.hours} Saat\` \`${timeObj.minutes} Dakika\` \`${timeObj.seconds} Saniye\``
 );

 message.channel.send(afk);
 }
});

client.on("message", message => {
if(message.channel.id == "819496341260468255") { 
message.react("816961373481336833")
}
})
//EKO AYARLAER//
client.ekoayarlar = {
  parabirimi: ":dollar:",
  botunuzunprefixi: "h!",
  botunuzunidsi: "",
  botismi: "HyropsBOT'",
  renk: "RANDOM", //İNGİLİZCE TERCİH ETTİĞİNİZ RENGİ YAZINIZ! EĞER BÖYLE BIRAKIRSANIZ RASTGELE ATAR!
  isimsiz: "Bilinmiyor", //İSİMSİZ KİŞİLERİN HANGİ İSİM İLE GÖZÜKECEĞİNİ BELİRLEYEBİLİRSİNİZ!
  rastgelepara: true, //EĞER BUNU TRUE YAPARSANIZ RASTGELE PARA VERME ÖZELLİĞİ AKTİF OLUR VE GÜNLÜK PARALARI RASTGELE VERİR!
  minpara: 1100, //EĞER RASTGELE PARA DURUMUNU AKTİF ETTİYSENİZ BURADAN RASTGELE PARA PARAMETRESİNİNİN MİNUMUM PARASINI BELİRTİNİZ!
  maxpara: 2000, //EĞER RASTGELE PARA DURUMUNU AKTİF ETTİYSENİZ BURADAN RASTGELE PARA PARAMETRESİNİNİN MAXİMUM PARASINI BELİRTİNİZ!
  günlükpara: 1500, //EĞER RASTGELE PARAYI TRUE YAPTIYSANIZ BURAYI ELLEMENİZE GEREK YOK!
  haftalıkrastgelepara: false, //EĞER BUNU TRUE YAPARSANIZ RASTGELE PARA VERME ÖZELLİĞİ AKTİF OLUR VE GÜNLÜK PARALARI RASTGELE VERİR!
  haftalıkminpara: 1100, //EĞER RASTGELE PARA DURUMUNU AKTİF ETTİYSENİZ BURADAN RASTGELE PARA PARAMETRESİNİNİN MİNUMUM PARASINI BELİRTİNİZ!
  haftalıkmaxpara: 2000, //EĞER RASTGELE PARA DURUMUNU AKTİF ETTİYSENİZ BURADAN RASTGELE PARA PARAMETRESİNİNİN MAXİMUM PARASINI BELİRTİNİZ!
  haftalıkpara: 20000, //EĞER RASTGELE PARAYI TRUE YAPTIYSANIZ BURAYI ELLEMENİZE GEREK YOK!
  dbloy: false, //EĞER BOTUNUZ DBL (DİSCORD BOT LİST) DE KAYITLIYSA GÜNLÜK ÖDÜL ALMAK İÇİN OY İSTER FALSE KAPALI, TRUE AKTİF DEMEK!
  dblkey: "KEY", //EĞER DBLOY U AKTİF ETMEDİYSENİZ BURAYA KEY EKLEMENİZE GEREK YOK EĞER AKTİF ETTİYSENİZ DBL SİTESİNDEN BULABİLİRSİNİZ!
  dblmsj:
    "Bu komutu kullanabilmek için bota **oy** vermelisiniz. Oy vermek için `**d!oyver**`", //EĞER DBLOY U AKTİF ETMEDİYSENİZ BURAYA MESAJ YAZMANIZA GEREK YOK! EĞER AKTİF ETTİYSENİZ BOTA OY VERMEK İÇİN HANGİ MESAJI YAZACAĞINI AYARLAYABİLİRSİNİZ.
  başlangıçparası: 300, //EĞER RASTGELE PARAYI TRUE YAPTIYSANIZ BURAYI ELLEMENİZE GEREK YOK!
  admin: ["792750149070880809", ""]
};