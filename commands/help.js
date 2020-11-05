const Discord = require("discord.js");

module.exports = {
    name: 'help',
    description: 'Help',
    execute(message, args){
        var embedhelpmember = new Discord.MessageEmbed()
            .setTitle("**Lista Comandi**\n")
            .addField(" - info", "Vuoi sapere di piu su di me uh? :smirk:")
            .addField(" - cookie", "manda un biscottino a qualcuno, (uso corretto: !cookie @username")
            .addField(" - 8ball", "Chiedi e ti rispondero, (uso corretto: !8ball <domanda>?")
            .addField(" - slap", "Buono per quando qualcuno dice troppe minchiate e devi rimetterlo sulla retta via, (uso corretto: !slap @user)")
            .setColor(0xFFA500)
            .setFooter("Ti serve aiuto, eh?");
    
        message.channel.send(embedhelpmember);
            
        var embedhelpadmin = new Discord.MessageEmbed()
            .setTitle("**Lista comandi admin**\n")
            .addField(" - say", "Fa dire al bot quello che vuoi (uso corretto: !say [message])")
            .addField(" - mute", "Muta membro desiderato (Uso corretto: !mute @username [reason])")
            .addField(" - unmute", "Smuta un membro mutato (uso corretto: !unmute @username)")
            .addField(" - kick", "butta fuori un membro con motivazione (uso corretto: !kick @username [reason])")
            .addField(" - purge", "cancella i messaggi della chat (uso corretto: !purge [n messaggi da cancellare])")
            .setColor(0xFF0000)
            .setFooter("Ooo, un admin!");
        message.channel.send(embedhelpadmin);
    }
}