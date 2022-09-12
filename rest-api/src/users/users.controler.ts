import {NextFunction, Request, Response} from "express";
import {BaseController} from "../common/base.controller";
import {HttpError} from "../errors/http-error.class";
import {inject, injectable} from "inversify";
import {ILogger} from "../logger/logger.interface";
import {TYPES} from "../types";


@injectable()
export class UserController extends BaseController {
    constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
        super(loggerService);
        this.bondRouter([
            {path: "/register", method: "post", func: this.register},
            {path: "/login", method: "post", func: this.login},
        ]);
    }

    login(req: Request, res: Response, next: NextFunction) {
        next(new HttpError(401, "Ошибка авторизации"));
    }

    register(req: Request, res: Response, next: NextFunction) {
        next(new HttpError(401, "Ошибка регистрации"));
    }
}
