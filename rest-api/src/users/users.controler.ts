import { NextFunction, Request, Response } from "express";
import { BaseController } from "../common/base.controller";
import { HttpError } from "../errors/http-error.class";
import { LoggerService } from "../logger/logger.service";

export class UserController extends BaseController {
  constructor(logger: LoggerService) {
    super(logger);
    this.bondRouter([
      { path: "/register", method: "post", func: this.register },
      { path: "/login", method: "post", func: this.login },
    ]);
  }

  login(req: Request, res: Response, next: NextFunction) {
    next(new HttpError(401, "Ошибка авторизации"));
  }

  register(req: Request, res: Response, next: NextFunction) {
    next(new HttpError(401, "Ошибка регистрации"));
  }
}
