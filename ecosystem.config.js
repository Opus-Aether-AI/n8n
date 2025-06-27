// ecosystem.config.js
module.exports = {
  apps : [{
    name   : "n8n", // The name PM2 will use
    script : "npx",   // The command to run
    args   : "n8n",   // Arguments to the command (npx will execute n8n)
                    // If you need n8n subcommands like 'start --tunnel', add them here: "n8n start --tunnel"
    cwd    : "/opus/nig8nig/n8n", // Optional: set the current working directory
    env: {
      NODE_ENV: "production", // Good practice
      N8N_SECURE_COOKIE: "false", // Note: env vars are often strings
      N8N_USER_FOLDER: "/opus/misc/n8n_store",
      // Add any other n8n environment variables here
      // N8N_ENCRYPTION_KEY: "your_very_secret_key_here_if_not_set_elsewhere",
      // GENERIC_TIMEZONE: "Your/Timezone",
    }
  }]
};
