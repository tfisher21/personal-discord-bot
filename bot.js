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

let aocChannel = "";

client.once("ready", () => {
  console.log("Ready!");

  aocChannel = client.channels.get("530851329720057857");
  // console.log(aocChannel.id);
  // aocChannel.send("Testing");
});

client.on("message", message => {
  if (message.content === "!ping") {
    message.channel.send("Pong.");
    // message.channel.send(message.author.bot);
    console.log(message.channel.id);
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
const metaphorminute = "575930104";
const stream = T.stream("statuses/filter", {
  follow: AOC
  // filter_level: "low"
});

stream.on("tweet", tweet => {
  if (tweet.user.id_str === AOC) {
    console.log(tweet);
    aocChannel
      .send("https://twitter.com/AOC/status/" + tweet.id_str)
      .catch(errors => {
        console.log(errors);
      });
  }
});

client.login(process.env.BOT_TOKEN);
