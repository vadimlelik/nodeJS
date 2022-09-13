"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.appContainer = exports.app = void 0;
const app_1 = require("./app");
const exetpionFilter_1 = require("./errors/exetpionFilter");
const logger_service_1 = require("./logger/logger.service");
const users_controler_1 = require("./users/users.controler");
const inversify_1 = require("inversify");
const types_1 = require("./types");
const appBindings = new inversify_1.ContainerModule((bind) => {
    bind(types_1.TYPES.ILogger).to(logger_service_1.LoggerService);
    bind(types_1.TYPES.ExeptionFilter).to(exetpionFilter_1.ExaptionFilter);
    bind(types_1.TYPES.UserController).to(users_controler_1.UserController);
    bind(types_1.TYPES.Application).to(app_1.App);
});
function bootstrap() {
    const appContainer = new inversify_1.Container();
    appContainer.load(appBindings);
    const app = appContainer.get(types_1.TYPES.Application);
    app.init();
    return { app, appContainer };
}
_a = bootstrap(), exports.app = _a.app, exports.appContainer = _a.appContainer;
