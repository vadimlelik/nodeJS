import {UserService} from './users.service';
import {NextFunction, Request, Response} from 'express';
import {BaseController} from '../common/base.controller';
import {HttpError} from '../errors/http-error.class';
import {ILogger} from '../logger/logger.interface';
import {inject, injectable} from 'inversify';
import {TYPES} from '../types';
import 'reflect-metadata';
import {IUserController} from './users.controller.interfece';
import {UserLoginDto} from './dto/user-login.dto';
import {UserRegisterDto} from './dto/user-register.dto';

@injectable()
export class UserController extends BaseController implements IUserController {
    constructor(
        @inject(TYPES.ILogger) private loggerService: ILogger,
        @inject(TYPES.UserService) private userService: UserService,
    ) {
        super(loggerService);
        this.bondRouter([
            {path: '/register', method: 'post', func: this.register,},
            {path: '/login', method: 'post', func: this.login},
        ]);
    }

    login(req: Request<{}, {}, UserLoginDto>, res: Response, next: NextFunction): void {
        console.log(req.body);

        next(new HttpError(401, 'Ошибка авторизации', 'login'));
    }

    async register(
        {body}: Request<{}, {}, UserRegisterDto>,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        const result = await this.userService.createUser(body);
        if (!result) {
            return next(new HttpError(422, 'such user already exists'));
        }
        this.ok(res, {email: result.email});
    }
}
