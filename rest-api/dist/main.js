"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appContainer = exports.app = void 0;
const app_1 = require("./app");
const exetpionFilter_1 = require("./errors/exetpionFilter");
const logger_service_1 = require("./logger/logger.service");
const users_controler_1 = require("./users/users.controler");
const inversify_1 = require("inversify");
const types_1 = require("./types");
const appContainer = new inversify_1.Container();
exports.appContainer = appContainer;
appContainer.bind(types_1.TYPES.ILogger).to(logger_service_1.LoggerService);
<<<<<<< HEAD
appContainer.bind(types_1.TYPES.ExaptionFilter).to(exetpionFilter_1.ExaptionFilter);
=======
appContainer.bind(types_1.TYPES.ExeptionFilter).to(exetpionFilter_1.ExaptionFilter);
>>>>>>> 4fc1f2f (inversify)
appContainer.bind(types_1.TYPES.UserController).to(users_controler_1.UserController);
appContainer.bind(types_1.TYPES.Application).to(app_1.App);
const app = appContainer.get(types_1.TYPES.Application);
exports.app = app;
app.init();
