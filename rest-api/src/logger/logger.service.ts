<<<<<<< HEAD
import {Logger} from 'tslog'
import {ILogger} from "./logger.interface";
import {injectable} from "inversify";

@injectable()
export class LoggerService implements ILogger{
    public logger: Logger
=======
import { Logger } from "tslog";
import { Ilogger } from "./logger.interface";
import {injectable} from "inversify";
import 'reflect-metadata'

@injectable()
export class LoggerService implements Ilogger {
  public logger: Logger;
>>>>>>> 4fc1f2f (inversify)

  constructor() {
    this.logger = new Logger({
      displayLoggerName: false,
      displayInstanceName: false,
      displayFilePath: "hidden",
      displayFunctionName: false,
    });
  }

  log(...args: unknown[]) {
    this.logger.info(...args);
  }

  error(...args: unknown[]) {
    this.logger.error(...args);
  }

  warn(...args: unknown[]) {
    this.logger.warn(...args);
  }
}
