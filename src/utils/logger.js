const winston = require('winston');

const { printf, combine, label, timestamp } = winston.format;

const consoleFormat = printf(({ level, message, label, timestamp }) => {
  return `[${label} ${timestamp}] ${level}: ${message}`;
});

const options = (winston.LoggerOptions = {
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
      format: combine(
        label({ label: 'App' }),
        timestamp({ format: '[on] MM-DD-YYYY [at] HH:mm:ss' }),
        consoleFormat
      ),
    }),
    new winston.transports.File({ filename: 'logs/debug.log', level: 'debug' }),
  ],
});

const logger = winston.createLogger(options);

if (process.env.NODE_ENV !== 'production') {
  logger.debug('Logging initialized at debug level');
}

module.exports = logger;
