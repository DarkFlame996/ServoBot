const Discord = require("discord.js");

module.exports = {
    name: "slap",
    description: "manda gli infedeli a casa a forza di sberle",
    execute(message, args){
        if(args[1]){
            var embedSlap = new Discord.MessageEmbed()
                .setTitle(message.author.username + " ha dato uno schiaffo a " + message.mentions.members.first().user.username + " :eyes: ")
                .setImage("https://media1.tenor.com/images/cd42fca18b194ecde6a4244b5d6daaf6/tenor.gif");
            message.channel.send(embedSlap);
        }   
        else message.channel.send("chi vuoi scassare di botte? (!slap @user)")
    }
}