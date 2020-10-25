const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Slowex: Aktif, Komutlar Yüklendi.`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Slowex: ${client.user.username} İsmi İle Giriş Yapıldı.`);
  client.user.setStatus("online");
  client.user.setActivity(`timsahtim.com`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Slowex: Oyun İsmi Ayarlandı.`);
 // console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Slowex: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};
