
import {App} from "./app";
import {ExaptionFilter} from "./errors/exetpionFilter";
import {LoggerService} from "./logger/logger.service";
import {UserController} from "./users/users.controler";
import {Container, ContainerModule, interfaces} from "inversify";
import {ILogger} from "./logger/logger.interface";
import {TYPES} from "./types";
import {IExaptionFilter} from "./errors/exepation.filter.interface";


const appBindings = new ContainerModule((bind:interfaces.Bind)=>{

    bind<ILogger>(TYPES.ILogger).to(LoggerService)
    bind<IExaptionFilter>(TYPES.ExeptionFilter).to(ExaptionFilter)
    bind<UserController>(TYPES.UserController).to(UserController)
    bind<App>(TYPES.Application).to(App)
})


function bootstrap (){
    const appContainer = new Container();
    appContainer.load(appBindings)
    const app = appContainer.get<App>(TYPES.Application)
    app.init()

    return{app,appContainer}
}


export  const { app,appContainer} = bootstrap()
