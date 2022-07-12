interface Command {
  data: import('@discordjs/builders').SlashCommandBuilder;
  commandInteraction: (
    client: import('discord.js').Client,
    interaction: import('discord.js').CommandInteraction,
  ) => Promise<void>;
}
