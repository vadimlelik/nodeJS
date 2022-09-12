"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
function Component(target) {
    console.log(target);
}
class User {
    update(newId) {
        this.id = newId;
        return this.id;
    }
}
exports.User = User;
console.log(new User().id);
