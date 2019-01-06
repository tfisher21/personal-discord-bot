const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require("axios");

require("dotenv").config();

const botToken = process.env.BOT_TOKEN;

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", message => {
  if (message.content === "!ping") {
    message.channel.send("Pong.");
    // message.channel.send(message.author.bot);
  }
  if (message.content === "!marx") {
    message.channel.send(
      "Workers of the world unite; you have nothing to lose but your chains."
    );
  }

  // If the message is "how to embed"
  if (message.content === "how to embed") {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    // const embed = new Discord.RichEmbed()
    //   // Set the title of the field
    //   .setTitle("A slick little embed")
    //   // Set the color of the embed
    //   .setColor(0xff0000)
    //   // Set the main content of the embed
    //   .setDescription("Hello, this is a slick embed!");
    // // Send the embed to the same channel as the message
    // message.channel.send(embed);
    message.channel.send("https://twitter.com/AOC/status/1081566337225375745");
  }
});

client.login(botToken);
