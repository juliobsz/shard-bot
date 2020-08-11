const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: "botinfo",
    description: "informações do bot",
    execute(client, message, args) {
        let embed = new Discord.MessageEmbed()
        .setAuthor('Bot Info', client.user.displayAvatarURL())
        .setDescription(`Olá, eu sou o shard-bot, um simples bot para te ensinar como fazer sharding no seu próprio bot!\n\nMeu prefixo é \"${config.prefix}\"\n\nEu fui criado pelo [White](https://twitter.com/Whiteziin_?s=09), um desenvolvedor de bots com vários projetos em seu [Github](https://github.com/Whiteziin)!\n\nEsse bot foi feito com o intuito de ensinar como fazer shard em seu bot, que consiste em dividir a quantidade de servers em que seu bot está, como se fosse uma nova aba do discord aberta.\n\nVeja o meu [repositório aqui](https://github.com/Whiteziin/shard-bot)!`)
        .setColor('#020202')
        .setFooter('Bot Open-Source');
        
        message.channel.send(embed);
    }
};