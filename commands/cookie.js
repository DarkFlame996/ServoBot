const Discord = require("discord.js");

module.exports = {
    name: "cookie",
    description: "give someone a cookie",
    execute(message, args){
        if(args[1]) message.channel.send(message.author.toString() + " ha dato ad " + args[1].toString() + " un biscottino! :cookie:");
        else message.channel.send("a chi vuoi mandare il biscottino? :cookie: (Uso corretto: !cookie @username)");
    }
}