import { TYPES } from './../types';
import { UserModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { User } from './user.entity';
import { IUserRepository } from './users.repository.interface';
import { PrismaServive } from '../database/prisma.service';

@injectable()
export class UsersRerpository implements IUserRepository {
	constructor(@inject(TYPES.PrismaServive) private prismaService: PrismaServive) {}
	async create({ email, password, name }: User): Promise<UserModel> {
		return this.prismaService.client.userModel.create({
			data: { email, password, name },
		});
	}

	async find(email: string): Promise<UserModel | null> {
		return this.prismaService.client.userModel.findFirst({
			where: {
				email,
			},
		});
	}
}
