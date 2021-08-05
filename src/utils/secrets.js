const logger = require('./logger');
const dotenv = require('dotenv');
const fs = require('fs');

if (fs.existsSync('.env')) {
  logger.debug('Using .env file to supply config environment variables');
  dotenv.config({ path: '.env' });
}

var ENVIRONMENT = process.env.NODE_ENV;

var MONGODB_URI = process.env['MONGODB_URI'].toString();

if (!MONGODB_URI) {
  logger.error(
    'No mongo connection string. Set MONGODB_URI environment variable.'
  );
  process.exit(1);
}

exports.ENVIRONMENT = ENVIRONMENT;
exports.MONGODB_URI = MONGODB_URI;
