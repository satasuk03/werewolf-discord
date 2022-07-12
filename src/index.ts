import DiscordJS, { Intents, TextChannel } from 'discord.js';
import config from 'config';
import express from 'express';
import handleInteraction from 'listeners/handleInteraction';
import handleMessage from 'listeners/handleMessage';

const app = express();
const { DISCORD_BOT_TOKEN } = config;

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
  ],
});

client.once('ready', async () => {
  // Start
  handleMessage(client);
  handleInteraction(client);

  console.log('Bot is started');
});

client.login(DISCORD_BOT_TOKEN);
