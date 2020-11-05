const Discord = require("discord.js");

var eightball = ["si!", "no...", "forse?", "è probabile", "non credo.", "mai!", "puoi provare...", "decidi tu"];

module.exports = {
    name: "8ball",
    description: "ask a question and thou shalt receive an answer",
    execute(message, args){
        if (args[1] != null) message.reply(eightball[Math.floor(Math.random() * eightball.length).toString(16)]);
        else message.channel.send("Ummmm, Qual'è la tua domanda? :rolling_eyes: (Uso Corretto: !8ball [domanda]?)");
    }
}