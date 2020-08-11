const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json');
const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
   const command = require(`./commands/${file}`);
client.commands.set(command.name, command);
};

client.on("ready", () => {
   console.log("Estou online");
});

client.on("message", async message => {
    if (message.author.bot || !message.guild) return;
    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(" ");
    const commandName = args.shift().toLowerCase();
    
    if (!client.commands.has(commandName)) return;
    
    const command = client.commands.get(commandName);
    
    try {
        command.execute(client, message, args);
    } catch (error) {
        console.log(error);
    }

});

client.login(config.token);