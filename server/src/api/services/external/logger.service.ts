import winston from 'winston';

class Logger {
  private errorLogger: winston.Logger;
  private debugLogger: winston.Logger;
  private infoLogger: winston.Logger;

  constructor() {
    this.errorLogger = winston.createLogger({
      level: 'error',
      format: winston.format.json(),
      transports: [new winston.transports.File({ filename: 'error.log', level: 'error' })]
    });

    this.debugLogger = winston.createLogger({
      level: 'debug',
      format: winston.format.json(),
      transports: [new winston.transports.File({ filename: 'debug.log', level: 'debug' })]
    });

    this.infoLogger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      transports: [new winston.transports.File({ filename: 'info.log', level: 'info' })]
    });
  }

  error(message, data) {
    this.errorLogger.error(message, { ...data, date: new Date() });
  }

  debug(message, data) {
    this.debugLogger.debug(message, { ...data, date: new Date() });
  }

  info(message, data) {
    this.infoLogger.info(message, { ...data, date: new Date() });
  }
}

export default new Logger();
