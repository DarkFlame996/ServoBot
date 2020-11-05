const Discord = require('discord.js');

module.exports = {
    name: 'info',
    execute(message, args){
        message.channel.send("Hello there, Io sono il servo bot nigeriano di Sebastiano D'Angelo, scrivi !help per avere un po di aiuto con i comandi");
    }
}