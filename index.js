const { Client, Collection } = require("discord.js");
const { DiscordTogether } = require('discord-together');
const Dashboard = require("./dashboard/dashboard");
const client = new Client({
    intents: 32707,
});
module.exports = client;
Dashboard(client);
// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.js");

client.discordTogether = new DiscordTogether(client, {
     token: client.config.token
 });

// Initializing the project
require("./handler")(client);

client.login(client.config.token);
