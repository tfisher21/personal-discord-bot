# Discord Bot
> A NodeJS, DiscordJS, and Twitter API Project

This project is an opportunity to familiarize myself with NodeJS, in addition to automating various tasks within a Discord server, and learning how to move around the Twitter API using the Twit JS library.

## Installing / Getting started

Clone the repository, and install the node modules.

```shell
git clone https://github.com/tfisher21/personal-discord-bot.git
npm install
```

### Initial Configuration

You'll be required to provide your own Discord and Twitter API keys/tokens. the NPM package, dotenv is used to securely store your API keys.

[dotenv](https://www.npmjs.com/package/dotenv)

[Discord API Setup](https://discordapp.com/developers/applications/)

[Twitter API - Getting Started](https://developer.twitter.com/en/docs/basics/getting-started)

## Features

This bot's primary function is to allow a user to assign a Twitter account to follow and stream new tweets from the account to display in an assigned channel.

## Configuration

Here you should write what are all of the configurations a user can enter when
using the project.

#### Set Twitter account to follow
Type: `!set twitter username`  
Default: No default value is set

This will search for and assign the Twitter ID of the username you requested. This function does not ask you to verify, so any typos can assign an incorrect account.

Example:
```bash
!set twitter premierleague
```

## Links

Even though this information can be found inside the project on machine-readable
format like in a .json file, it's good to include a summary of most useful
links to humans using your project. You can include links like:

- Repository: https://github.com/tfisher21/personal-discord-bot
- JS Packages and APIs used:
  - Twitter API: https://developer.twitter.com/en/docs.html
  - Twit: https://github.com/ttezel/twit
  - Discord API: https://discordapp.com/developers/docs/intro
  - DiscordJS: https://discord.js.org/#/
  - dotenv: https://github.com/motdotla/dotenv


## Licensing

"The code in this project is licensed under MIT license."
