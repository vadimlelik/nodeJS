"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
class HttpError extends Error {
    constructor(stasusCode, message, context) {
        super(message);
        this.statusCode = stasusCode;
        this.message = message;
        this.context = context;
    }
}
exports.HttpError = HttpError;
