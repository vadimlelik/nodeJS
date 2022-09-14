import { IUserController } from './users/users.controller.interfece';
import { IUserService } from './users/users.service.interface';
import { App } from './app';
import { ExaptionFilter } from './errors/exetpionFilter';
import { LoggerService } from './logger/logger.service';
import { UserController } from './users/users.controler';
import { Container, ContainerModule, interfaces } from 'inversify';
import { ILogger } from './logger/logger.interface';
import { TYPES } from './types';
import { IExaptionFilter } from './errors/exepation.filter.interface';
import { UserService } from './users/users.service';

export interface IBootstrapReturn {
	appContainer: Container;
	app: App;
}

const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<ILogger>(TYPES.ILogger).to(LoggerService);
	bind<IExaptionFilter>(TYPES.ExeptionFilter).to(ExaptionFilter);
	bind<IUserController>(TYPES.UserController).to(UserController);
	bind<IUserService>(TYPES.UserService).to(UserService);
	bind<App>(TYPES.Application).to(App);
});

function bootstrap(): IBootstrapReturn {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	app.init();

	return { app, appContainer };
}

export const { app, appContainer } = bootstrap();
