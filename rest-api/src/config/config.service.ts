import { IConfigService } from './config.service.interfece';
import { config, DotenvConfigOutput, DotenvParseOutput } from 'dotenv';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { ILogger } from '../logger/logger.interface';

@injectable()
export class ConfigService implements IConfigService {
	private config: DotenvParseOutput;

	constructor(@inject(TYPES.ILogger) private logger: ILogger) {
		const result: DotenvConfigOutput = config();
		if (result.error) {
			this.logger.error('failed to read .env or they are missing');
		} else {
			this.config = result.parsed as DotenvParseOutput;
			this.logger.error('all ready to go ');
		}
	}

	get(key: string): string {
		return this.config[key];
	}
}
