const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://random.cat/meow`);

  let catEmbed = new Discord.RichEmbed()
  .setColor("#ff9900")
  .setTitle("This a cute cat! >:3")
  .setImage(body.file);

  message.channel.send(catEmbed);

}

module.exports.help = {
  name: "cat"
}
