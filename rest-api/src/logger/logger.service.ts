import {Logger} from 'tslog'
import {ILogger} from "./logger.interface";
import {injectable} from "inversify";

@injectable()
export class LoggerService implements ILogger{
    public logger: Logger

    constructor() {
        this.logger = new Logger({
            displayLoggerName: false,
            displayInstanceName: false,
            displayFilePath: 'hidden',
            displayFunctionName: false
        })
    }

    log(...args: unknown[]) {
        this.logger.info(...args)
    }

    error(...args: unknown[]) {
        this.logger.error(...args)
    }

    warn(...args: unknown[]) {
        this.logger.warn(...args)
    }

}