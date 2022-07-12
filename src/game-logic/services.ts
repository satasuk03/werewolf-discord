import { Client, CommandInteraction, Interaction } from 'discord.js';
import { joinEmbed } from 'embeds/joinEmbed';

export const joinHandle = async (
  client: Client,
  interaction: Interaction,
) => {};

export const playGame = async (
  client: Client,
  interaction: CommandInteraction,
) => {
  await interaction.reply({ embeds: [joinEmbed] });
};
