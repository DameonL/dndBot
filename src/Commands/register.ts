import { Client, REST, RESTEvents, Routes } from "discord.js";
import GuildCommands from "./GuildCommands.js";
import ApplicationCommands from "./ApplicationCommands.js";

export default async function register(client: Client, token: string) {
  if (!client.user) {
    throw new Error("No client user.");
  }

  const restAPI = new REST();
  restAPI.setToken(token);

  const applicationCommands = ApplicationCommands.map(x => x.data.toJSON());
  const guildCommands = GuildCommands.map(x => x.data.toJSON());
  await restAPI.put(Routes.applicationCommands(client.user.id), { body: applicationCommands });

  for (const [guildId, guild] of client.guilds.cache) {
    await restAPI.put(Routes.applicationGuildCommands(client.user.id, guildId), { body: guildCommands });
  }
}
