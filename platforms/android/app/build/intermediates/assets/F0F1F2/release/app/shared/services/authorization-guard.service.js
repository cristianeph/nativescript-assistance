"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var login_service_1 = require("./login.service");
var application_settings_service_1 = require("./application-settings.service");
var nativescript_angular_1 = require("nativescript-angular");
var AuthorizationGuardService = (function () {
    function AuthorizationGuardService(loginService, appSettingsService, router) {
        this.loginService = loginService;
        this.appSettingsService = appSettingsService;
        this.router = router;
    }
    AuthorizationGuardService.prototype.canActivate = function () {
        if (this.appSettingsService.getLogged() === true) {
            //this.router.navigate(["/login"])
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            return false;
        }
    };
    AuthorizationGuardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [login_service_1.LoginService,
            application_settings_service_1.ApplicationSettingsService,
            nativescript_angular_1.RouterExtensions])
    ], AuthorizationGuardService);
    return AuthorizationGuardService;
}());
exports.AuthorizationGuardService = AuthorizationGuardService;
