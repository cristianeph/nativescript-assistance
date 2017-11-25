"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.urlResource = 'https://app.fastlinkperu.com:8443/services/api/v1/user';
    }
    LoginService.prototype.setUser = function (user) {
        this.user = user;
    };
    LoginService.prototype.getUser = function () {
        return this.user;
    };
    LoginService.prototype.login = function (user) {
        console.log('recieved user => ', JSON.stringify(user));
        return this.http.post(this.urlResource + "/valid", user).map(function (res) { return res.json(); });
    };
    LoginService.prototype.logout = function () {
    };
    LoginService.prototype.info = function (id) {
        return this.http.get(this.urlResource + "/" + id).map(function (res) { return res.json(); });
    };
    LoginService.prototype.register = function (user) {
        return this.http.post(this.urlResource + "/", user).map(function (res) { return res.json(); });
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
