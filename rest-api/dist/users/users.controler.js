"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const base_controller_1 = require("../common/base.controller");
const http_error_class_1 = require("../errors/http-error.class");
class UserController extends base_controller_1.BaseController {
    constructor(logger) {
        super(logger);
        this.bondRouter([
            { path: "/register", method: "post", func: this.register },
            { path: "/login", method: "post", func: this.login },
        ]);
    }
    login(req, res, next) {
        next(new http_error_class_1.HttpError(401, "Ошибка авторизации"));
    }
    register(req, res, next) {
        next(new http_error_class_1.HttpError(401, "Ошибка регистрации"));
    }
}
exports.UserController = UserController;
