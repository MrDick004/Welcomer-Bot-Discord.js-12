const Discord = require('discord.js');
const client = new Discord.Client();

const welcomeChannelId = 'INSERISCI L\'ID DEL CANALE DEL MESSAGGIO DI BENVENUTO';
const goodbyeChannelId = 'INSERISCI L\'ID DEL CANALE DEL MESSAGGIO DI ADDIO';

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('guildMemberAdd', member => {
    const welcomeChannel = member.guild.channels.cache.get(welcomeChannelId);
    if (welcomeChannel) {
        welcomeChannel.send(`Benvenuto/a ${member.user.tag} nel nostro server Discord!`);
    }
});

client.on('guildMemberRemove', member => {
    const goodbyeChannel = member.guild.channels.cache.get(goodbyeChannelId);
    if (goodbyeChannel) {
        goodbyeChannel.send(`Arrivederci ${member.user.tag}!`);
    }
});

client.login('INSERISCI IL TOKEN DEL TUO BOT QUI');
