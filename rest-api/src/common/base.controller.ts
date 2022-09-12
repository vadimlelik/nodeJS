import {Response, Router} from "express";
import {IControllerRoute} from "./route.interface";
<<<<<<< HEAD
import {ILogger} from "../logger/logger.interface";
import {injectable} from "inversify";


// @ts-ignore
=======
import {Ilogger} from "../logger/logger.interface";
import {injectable} from "inversify";
import 'reflect-metadata'

export {Router} from "express";

>>>>>>> 4fc1f2f (inversify)
@injectable()
export abstract class BaseController {
    private readonly _router: Router;

<<<<<<< HEAD
    protected constructor(private logger: ILogger) {
=======
    constructor(private logger: Ilogger) {
>>>>>>> 4fc1f2f (inversify)
        this._router = Router();
    }

    get router() {
        return this._router;
    }

    public send<T>(res: Response, code: number, message: T) {
        res.type("application/json");
        return res.status(code).json(message);
    }

    public ok<T>(res: Response, message: T) {
        return this.send<T>(res, 200, message);
    }

    public created(res: Response) {
        return res.sendStatus(201);
    }

    protected bondRouter(routes: IControllerRoute[]) {
        for (const route of routes) {
            this.logger.log(`[${route.method}] ${route.path}`);
            const handler = route.func.bind(this);
            this.router[route.method](route.path, handler);
        }
    }
}
