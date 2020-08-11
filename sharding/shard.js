const config = require('./config.json');
const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: `${config.token}` });

manager.spawn();
manager.on('shardCreate', shard => console.log(`Iniciando shard ${shard.id}`));