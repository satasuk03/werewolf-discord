import { Client } from 'discord.js';

export default (client: Client): void => {
  client.on('messageCreate', async (msg) => {});
};
