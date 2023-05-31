import { SlashCommandBuilder, CommandInteraction } from 'discord.js';
export default interface BotCommand {
  data: SlashCommandBuilder;
  execute: (interaction: CommandInteraction) => Promise<void>;
}