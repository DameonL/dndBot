import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder().setName("import").setDescription("Import a character"),
  async execute(interaction: CommandInteraction) {},
};
