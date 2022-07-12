import { handleCommand } from 'command/services';
import { Client } from 'discord.js';

export default (client: Client): void => {
  client.on('interactionCreate', async (interaction) => {
    handleCommand(client, interaction);
  });
};
