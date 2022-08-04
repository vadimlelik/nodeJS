"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const base_controller_1 = require("../common/base.controller");
class UserController extends base_controller_1.BaseController {
    constructor(logger) {
        super(logger);
        this.bondRouter([
            { path: "/register", method: "post", func: this.register },
            { path: "/login", method: "get", func: this.login },
        ]);
    }
    login(req, res, next) {
        this.ok(res, "login");
    }
    register(req, res, next) {
        this.ok(res, "register");
    }
}
exports.UserController = UserController;
