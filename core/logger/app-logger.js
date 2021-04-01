import winston from 'winston';
// eslint-disable-next-line
import rotate from 'winston-daily-rotate-file'; // do not delete
import fs from 'fs';

// project imports
import config from '../../core/config/index.js';

const dir = config.logger.path;

if(!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const logger = new winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'DD-MM-YYYY hh:mm:ss' }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      colorize: true
    }),
    new winston.transports.DailyRotateFile({
      filename: config.logger.fileName,
      dirname: config.logger.path,
      maxsize: 20971520, // 20MB
      maxFiles: 25,
      datePattern: '.DD-MM-yyyy'
    })
  ]
});

export default logger;
