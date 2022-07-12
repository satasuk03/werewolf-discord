import dotenv from 'dotenv';

dotenv.config();
const { DISCORD_BOT_TOKEN, DISCORD_CLIENT_ID } = process.env;

if (!DISCORD_BOT_TOKEN || !DISCORD_CLIENT_ID) {
  throw new Error('Missing env variables');
}

const config: Record<string, string> = {
  DISCORD_BOT_TOKEN,
  DISCORD_CLIENT_ID,
};

export default config;
