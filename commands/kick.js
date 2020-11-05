const Discord = require("discord.js");

module.exports = {
    name: "kick",
    description: "spedisci quel negro dritto dritto all'inferno in pieno stile dante",
    execute(message, args){
        if(!message.member.roles.cache.some(role => ["Admin" || "admin" || "Bot" || "bot"].includes(role.name))) return message.reply("mi dispiace ma sei troppo scarso per fare sta cosa...");
        var kickedMember = message.mentions.members.first();
        if(!kickedMember) return message.reply("devi menzionare un utente valido!");
        if (!kickedMember.kickable) return message.reply("non ci riesco è troppo op!");
        var kickreasondelete = 10 + kickedMember.user.id.length;
        var kickreason = message.content.substring(kickreasondelete).split(" ");
        kickreason = kickreason.join(" ");
        if (!kickreason) return message.reply("Mi devi dire perche lo vuoi bannare");
        kickedMember.kick(kickreason)
            .catch(error => message.reply(`Mi dispiace @${message.author} Non riesco a bannarlo perche : ${error}`));
        message.reply(`${kickedMember.user.username} è stato bannato da ${message.author.username} perché: ${kickreason}`);
        }
}