const Discord = require("discord.js");

module.exports = {
    name: "mute",
    dicription: "muta un membro",
    execute(message, args){
        if(args[1] != null){
            
        } else{
            message.channel.send("Seleziona un membro valido!");
        }
    }
}