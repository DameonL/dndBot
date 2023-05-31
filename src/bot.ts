import { Client, Events, GatewayIntentBits } from "discord.js";
import * as dotenv from "dotenv";
import Logger from "./Logger.js";
import registerCommands from "./Commands/register.js";

dotenv.config();
startBot();

async function startBot() {
  const discordClient = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.GuildPresences,
    ],
  });

  const botToken = process.env.discordClientToken;
  if (!botToken) {
    throw new Error("Bot token not set.");
  }

  Logger.log("Logging in to Discord...");
  await discordClient.login(process.env.discordClientToken);
  Logger.log("Client logged in.");
  Logger.log("Connected guilds:");
  await discordClient.guilds.fetch();
  discordClient.guilds.cache.forEach((guild) => {
    Logger.log(guild.name);
  });
  Logger.log("End of list.");

  Logger.log("Registering commands...");
  await registerCommands(discordClient, botToken);
  Logger.log("Commands registered.");
}
