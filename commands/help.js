const config = require('../config.json');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "lista de todos os comandos!",
    async execute(client, message, args) {
        let embed = new Discord.MessageEmbed()
        .setAuthor(`Help Command`, message.author.displayAvatarURL())
        .setDescription(`Olá, eu sou o shard-bot, um simples bot para te ensinar como fazer sharding no seu bot!\n\nObs: o bot utiliza shard, além disso vai haver a pasta \"sharding\", nela terá tudo que é necessário para fazer shard!\n\n**Comandos:**\n${config.prefix}botinfo | Veja informações sobre mim e sobre meus criadores!\n\n[Github](https://github.com/Whiteziin/shard-bot)\n[Servidor](https://discord.gg/cy2Rmh9)`)
        .setColor('#020202')
        .setFooter('Bot Open-Source');
        
        message.channel.send(embed);
    }
};