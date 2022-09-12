<<<<<<< HEAD
import { Logger } from 'tslog';

export interface ILogger {
    logger: unknown;
    log: (...args: unknown[]) => void;
    error: (...args: unknown[]) => void;
    warn: (...args: unknown[]) => void;
}
=======
import { Logger } from "tslog";

export interface Ilogger {
  logger: Logger;
  log: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
}
>>>>>>> 4fc1f2f (inversify)
