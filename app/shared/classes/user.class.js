"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(id, email, password, from, until, firstnames, lastnames, userType) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.from = from;
        this.until = until;
        this.firstnames = firstnames;
        this.lastnames = lastnames;
        this.userType = userType;
    }
    return User;
}());
exports.User = User;
