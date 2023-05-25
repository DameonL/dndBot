import { Client, Events, GatewayIntentBits } from "discord.js";
import * as dotenv from "dotenv";
import Logger from "./Logger.js";

dotenv.config();
const discordClient = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildPresences,
  ],
});

discordClient.once(Events.ClientReady, onClientReady);
Logger.log("Logging in to Discord...");
discordClient.login(process.env.discordClientToken);

async function onClientReady() {
  Logger.log("Client logged in.");
  Logger.log("Connected guilds:");
  discordClient.guilds.cache.forEach(guild => {
    Logger.log(guild.name);
  })
  Logger.log("End of list.");
}