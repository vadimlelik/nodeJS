import { PrismaClient, UserModel } from '@prisma/client';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';

@injectable()
export class PrismaServive {
	client: PrismaClient;
	constructor(@inject(TYPES.ILogger) private logger: ILogger) {
		this.client = new PrismaClient();
	}

	async connect(): Promise<void> {
		try {
			this.client.$connect();
			this.logger.log(' [PrismaService] connect');
		} catch (error) {
			if (error instanceof Error) {
				this.logger.error('[PrismaService] Error ');
			}
		}
	}
	async disconnect(): Promise<void> {
		this.client.$disconnect();
	}
}
