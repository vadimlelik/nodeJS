import { IUserController } from './users/users.controller.interfece';
import { IUserService } from './users/users.service.interface';
import { App } from './app';
import { ExaptionFilter } from './errors/exetpionFilter';
import { LoggerService } from './logger/logger.service';
import { UserController } from './users/users.controler';
import { UserService } from './users/users.service';
import { Container, ContainerModule, interfaces } from 'inversify';
import { ILogger } from './logger/logger.interface';
import { TYPES } from './types';
import { IExaptionFilter } from './errors/exepation.filter.interface';
import { IConfigService } from './config/config.service.interfece';
import { ConfigService } from './config/config.service';

export interface IBootstrapReturn {
	appContainer: Container;
	app: App;
}

const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<ILogger>(TYPES.ILogger).to(LoggerService).inSingletonScope();
	bind<IExaptionFilter>(TYPES.ExeptionFilter).to(ExaptionFilter).inSingletonScope();
	bind<IUserController>(TYPES.UserController).to(UserController).inSingletonScope();
	bind<IUserService>(TYPES.UserService).to(UserService).inSingletonScope();
	bind<IConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope();
	bind<App>(TYPES.Application).to(App).inSingletonScope();
});

function bootstrap(): IBootstrapReturn {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	app.init();

	return { app, appContainer };
}

export const { app, appContainer } = bootstrap();
