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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXphdGlvbi1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aG9yaXphdGlvbi1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLGlEQUE2QztBQUM3QywrRUFBMEU7QUFDMUUsNkRBQXNEO0FBR3REO0lBRUksbUNBQW9CLFlBQTBCLEVBQzFCLGtCQUE4QyxFQUM5QyxNQUF3QjtRQUZ4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTRCO1FBQzlDLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzVDLENBQUM7SUFDRCwrQ0FBVyxHQUFYO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDL0Msa0NBQWtDO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztJQUNMLENBQUM7SUFkUSx5QkFBeUI7UUFEckMsaUJBQVUsRUFBRTt5Q0FHeUIsNEJBQVk7WUFDTix5REFBMEI7WUFDdEMsdUNBQWdCO09BSm5DLHlCQUF5QixDQWdCckM7SUFBRCxnQ0FBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NhbkFjdGl2YXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSBcIi4vbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHtBcHBsaWNhdGlvblNldHRpbmdzU2VydmljZX0gZnJvbSBcIi4vYXBwbGljYXRpb24tc2V0dGluZ3Muc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhvcml6YXRpb25HdWFyZFNlcnZpY2UgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXBwU2V0dGluZ3NTZXJ2aWNlOiBBcHBsaWNhdGlvblNldHRpbmdzU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIH1cbiAgICBjYW5BY3RpdmF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXBwU2V0dGluZ3NTZXJ2aWNlLmdldExvZ2dlZCgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19