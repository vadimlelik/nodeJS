import { IExaptionFilter } from "./exepation.filter.interface";
import { LoggerService } from "./../logger/logger.service";
import { NextFunction, Request, Response } from "express";
import { HttpError } from "./http-error.class";

export class ExaptionFilter implements IExaptionFilter {
  logger: LoggerService;
  constructor(logger: LoggerService) {
    this.logger = logger;
  }
  catch(
    err: Error | HttpError,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    if (err instanceof HttpError) {
      this.logger.error(
        `[${err.context}] Ошибка${err.statusCode}:${err.message}`
      );
      res.status(err.statusCode).send({ err: err.message });
    } else {
      this.logger.error(`${err.message}`);
      res.status(500).send({ err: err.message });
    }
  }
}
