const Discord = require("discord.js");

const TOKEN = "Mzc2MDU2NDc3OTU1MzkxNDg4.DN42tw.BGfGPV1zFeS-Ja8Tsu59c-1Ttnk"
const PREFIX = "^."

var fortunes = [
    "Da.",
    "Nu.",
    "Poate.",
    "Probabil.",
    "Nu doresc să răspund la această întrebare."
];



var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Botul este gata!");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
       case "ping":
            message.channel.sendMessage("Pong!");
            break;
       case "pong":
            message.channel.sendMessage("Ping!");
            break;
       case "magia":
            message.channel.sendMessage("Harry Pooter are magia c;");
            break;
       case "salut":
            message.channel.sendMessage("Salut,necunoscutule!");
            break;
       case "8ball":
            if (args [1]) {
               message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            } else {
               message.channel.sendMessage("Nu pot să citesc aceast text....");
            }
            break;
       default:
            message.channel.sendMessage("Se pare că această nu există ! Te rog să folosești o comandă validă!");
            break;
    }
});

bot.login(TOKEN);
