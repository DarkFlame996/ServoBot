const Discord = require("discord.js");
const fs = require("fs");

const bot = new Discord.Client();
const botsettings = require("./settings.json");
const prefix = botsettings.prefix;
const botCommands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    botCommands.set(command.name, command);
}

bot.on("ready", () => {
    bot.user.setActivity("Usa !info");
    console.log("Booted up and ready to go")
});

bot.on("message", message => {
    if(message.content.indexOf(prefix) !== 0) return;
    if(message.author.equals(bot.user)) return;
    if (!message.content.startsWith(prefix)) return;
    
    var args = message.content.substring(prefix.length).split(" ");
    var command = args[0].toLowerCase();

    botCommands.get(command).execute(message, args);
});

bot.login(botsettings.token);