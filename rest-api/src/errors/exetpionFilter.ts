import { NextFunction, Request, Response } from 'express';
import { HttpError } from './http-error.class';
import { inject, injectable } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';
import 'reflect-metadata';
import { IExaptionFilter } from './exepation.filter.interface';

@injectable()
export class ExaptionFilter implements IExaptionFilter {
	constructor(@inject(TYPES.ILogger) private logger: ILogger) {}
	catch(err: Error | HttpError, req: Request, res: Response, next: NextFunction): void {
		if (err instanceof HttpError) {
			this.logger.error(`[${err.context}] Ошибка${err.statusCode}:${err.message}`);
			res.status(err.statusCode).send({ err: err.message });
		} else {
			this.logger.error(`${err.message}`);
			res.status(500).send({ err: err.message });
		}
	}
}
