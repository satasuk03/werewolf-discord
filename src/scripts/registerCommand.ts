// const { SlashCommandBuilder } = require('@discordjs/builders');
// const { REST } = require('@discordjs/rest');
// const { Routes } = require('discord-api-types/v9');
// const { clientId, guildId, token } = require('./config.json');

// const commands = [
// 	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
// 	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
// 	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
// ]
// 	.map(command => command.toJSON());

// const rest = new REST({ version: '9' }).setToken(token);

// rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
// 	.then(() => console.log('Successfully registered application commands.'))
// 	.catch(console.error);
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import config from 'config';
import { activeCommands } from 'command/commands';

const rest = new REST({ version: '10' }).setToken(config.DISCORD_BOT_TOKEN);
console.log(config.DISCORD_CLIENT_ID, config.DISCORD_BOT_TOKEN);
console.log(activeCommands.map((command) => command.data.toJSON()));

(async () => {
  try {
    await rest.put(Routes.applicationCommands(config.DISCORD_CLIENT_ID), {
      body: activeCommands.map((command) => command.data.toJSON()),
    });
    console.log('Successfully reloaded application (/) commands.');
  } catch (e) {
    console.error(e);
  }
})();
