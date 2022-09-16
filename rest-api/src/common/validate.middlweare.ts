import {IMiddleware} from "./middleware.interface";
import {Response, Request, NextFunction} from "express";
import {ClassConstructor, plainToClass,} from "class-transformer";
import {validate} from "class-validator";

export class ValidateMiddlweare implements IMiddleware {
    constructor(private classToValidate: ClassConstructor<object>) {
    }

    execute({body}: Request, res: Response, next: NextFunction): void {
        const instance = plainToClass(this.classToValidate, body)
        validate(instance).then((erros) => {
            if (erros.length > 0) {
                res.status(422).send(erros)
            } else {
                next()
            }
        })
    }
}