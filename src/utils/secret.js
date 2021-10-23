import logger from './logger.js';
import dotenv from 'dotenv';
import fs from 'fs';

if (fs.existsSync('.env')) {
  logger.debug('Using .env file to supply config environment variables');
  dotenv.config({ path: '.env' });
}

export const ENVIRONMENT = process.env.NODE_ENV;

export const MONGODB_URI = process.env['MONGODB_URI'];

if (!MONGODB_URI) {
  logger.error(
    'No mongo connection string. Set MONGODB_URI environment variable.'
  );
  process.exit(1);
}
