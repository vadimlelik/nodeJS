<<<<<<< HEAD
import { App } from "./app";
import { ExaptionFilter } from "./errors/exetpionFilter";
import { LoggerService } from "./logger/logger.service";
import { UserController } from "./users/users.controler";
import {Container} from "inversify";
import {ILogger} from "./logger/logger.interface";
import {TYPES} from "./types";
import {IExaptionFilter} from "./errors/exepation.filter.interface";
//
// async function bootstrap() {

  const appContainer = new Container()
  appContainer.bind<ILogger>(TYPES.ILogger).to(LoggerService)
  appContainer.bind<IExaptionFilter>(TYPES.ExaptionFilter).to(ExaptionFilter)
  appContainer.bind<UserController>(TYPES.UserController).to(UserController)
  appContainer.bind<App>(TYPES.Application).to(App)

  const  app  = appContainer.get<App>(TYPES.Application)

   app.init();
// }


export {app,appContainer}
=======
import {App} from "./app";
import {ExaptionFilter} from "./errors/exetpionFilter";
import {LoggerService} from "./logger/logger.service";
import {UserController} from "./users/users.controler";
import {Container} from "inversify";
import {Ilogger} from "./logger/logger.interface";
import {TYPES} from "./types";
import {IExaptionFilter} from "./errors/exepation.filter.interface";

const appContainer = new Container();
appContainer.bind<Ilogger>(TYPES.ILogger).to(LoggerService)
appContainer.bind<IExaptionFilter>(TYPES.ExeptionFilter).to(ExaptionFilter)
appContainer.bind<UserController>(TYPES.UserController).to(UserController)
appContainer.bind<App>(TYPES.Application).to(App)
const app = appContainer.get<App>(TYPES.Application)


app.init();

export {
    app,appContainer
}
>>>>>>> 4fc1f2f (inversify)
