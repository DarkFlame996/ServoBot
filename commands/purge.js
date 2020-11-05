const Discord = require("discord.js");

module.exports = {
    name: "purge",
    description: "purga la chat da tutta la merda",
    execute(message, args){
        if(!message.member.roles.cache.some(role => ["Admin" || "admin" || "Bot" || "bot"].includes(role.name))) return message.reply("mi dispiace ma sei troppo scarso per fare sta cosa...");

        message.channel.bulkDelete(99, true)
        .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
        .catch(console.error);
    }
}