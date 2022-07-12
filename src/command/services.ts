import { Client, Interaction } from 'discord.js';
import { activeCommands } from './commands';

const getCommand = (commandName: string) =>
  activeCommands.find((command) => command.data.name === commandName);

export const handleCommand = async (
  client: Client,
  interaction: Interaction,
) => {
  if (!interaction.isCommand()) return;
  const command = getCommand(interaction.commandName);

  if (!command) return;

  try {
    await command.commandInteraction(client, interaction);
  } catch (e) {
    console.error(e);
  }
};
