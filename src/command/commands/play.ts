import { SlashCommandBuilder } from '@discordjs/builders';
import { ApplicationCommandType } from 'discord-api-types/v10';

export const playCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('start werewolf game'),
  async commandInteraction(client, interaction) {
    await interaction.reply({ content: 'Game Started!' });
  },
};
