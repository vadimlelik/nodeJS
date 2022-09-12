import {NextFunction, Request, Response} from "express";
import {BaseController} from "../common/base.controller";
import {HttpError} from "../errors/http-error.class";
<<<<<<< HEAD
import {inject, injectable} from "inversify";
import {ILogger} from "../logger/logger.interface";
import {TYPES} from "../types";
=======
import {Ilogger} from "../logger/logger.interface";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";
import 'reflect-metadata'
>>>>>>> 4fc1f2f (inversify)


@injectable()
export class UserController extends BaseController {
<<<<<<< HEAD
    constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
=======
    constructor(
        @inject(TYPES.ILogger) private loggerService: Ilogger) {
>>>>>>> 4fc1f2f (inversify)
        super(loggerService);
        this.bondRouter([
            {path: "/register", method: "post", func: this.register},
            {path: "/login", method: "post", func: this.login},
        ]);
    }

    login(req: Request, res: Response, next: NextFunction) {
<<<<<<< HEAD
        next(new HttpError(401, "Ошибка авторизации"));
=======
        next(new HttpError(401, "Ошибка авторизации", "login"));
>>>>>>> 4fc1f2f (inversify)
    }

    register(req: Request, res: Response, next: NextFunction) {
        next(new HttpError(401, "Ошибка регистрации"));
    }
}
