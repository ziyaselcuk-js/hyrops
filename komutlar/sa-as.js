const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

var p = ayarlar.prefix;

exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Yetkiniz Bulunmamaktadır!');

    if (!args[0]) return message.reply(`**Kullanmak İçin : ${p}sa-as aç/kapat**`);

    if (args[0] == 'aç') {
        var durum = await db.fetch(`saas_${message.guild.id}`)            
        if (durum == "acik") return message.channel.send("**:warning: Sistem Zaten Açık !**");
        db.set(`saas_${message.guild.id}`, 'acik')
        message.channel.send(`**Sistem Aktifleştirildi.!**`)
    }

    if (args[0] == 'kapat') {
        var durum = await db.fetch(`saas_${message.guild.id}`)            
        if (durum == "kapali") return message.channel.send("**:warning: Sistem Zaten Kapalı !**");
        db.set(`saas_${message.guild.id}`, 'kapali')
        message.channel.send(`**Sistem Kapatıldı.!**`)
    }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
}

exports.help = {
    name: 'sa-as',
    description: 'Botun Sa Yazana Cevap Versin mi Vermesin mi?',
    usage: '<prefix>sa-as aç/kapat'
}