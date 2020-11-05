const Discord = require("discord.js");
const botSetting = require("../settings.json");
const prefix = botSetting.prefix;

module.exports = {
    name: "say",
    description: "fai dire al bot qualcosa",
    execute(message, args){
        message.channel.send(message.content.substring(prefix.length + 4));
    }
}