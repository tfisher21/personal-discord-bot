const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require("axios");
const Twit = require("twit");

require("dotenv").config();

const T = new Twit({
  consumer_key: process.env.CONSUMER_API_KEY,
  consumer_secret: process.env.CONSUMER_SECRET_API_KEY,
  access_token: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET_KEY
});

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
});

// @AOC Twitter Embed
const AOC = "138203134";
const tfisher21 = "14386881";
const chicagobears = "47964412";
const stream = T.stream("statuses/filter", {
  follow: chicagobears,
  filter_level: "medium"
});

stream.on("tweet", tweet => {
  console.log(tweet);
});

client.login(process.env.BOT_TOKEN);
