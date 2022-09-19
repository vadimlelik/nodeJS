import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'Не верно указан Email' })
	email: string;
	@IsString({ message: 'не указан пароль ' })
	password: string;
}
