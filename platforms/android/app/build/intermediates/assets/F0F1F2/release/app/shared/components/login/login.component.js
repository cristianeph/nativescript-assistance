"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_class_1 = require("../../classes/user.class");
var page_1 = require("tns-core-modules/ui/page");
var login_service_1 = require("../../services/login.service");
var bus_service_1 = require("../../services/bus.service");
var application_settings_service_1 = require("../../services/application-settings.service");
var nativescript_angular_1 = require("nativescript-angular");
var LoginComponent = (function () {
    function LoginComponent(router, page, busService, loginService, appSettingsService) {
        this.router = router;
        this.page = page;
        this.busService = busService;
        this.loginService = loginService;
        this.appSettingsService = appSettingsService;
        this.adminMode = false;
        this.loginErrors = false;
        this.user = new user_class_1.User(null, '', '', '', null, null, '', '', null);
        this.userCustomer = new user_class_1.UserEasy('', '');
        this.title = 'Bienvenido';
    }
    LoginComponent.prototype.pageLoaded = function () {
        this.page.actionBarHidden = true;
        this.appSettingsService.initSettings();
        /*this.router.navigate(["/client/tracking", 1]).then(() => {
            this.page.actionBarHidden = false;
        });*/
        /*this.checkPreviousLogin();*/
    };
    /*checkPreviousLogin() {
        console.log("Login => Checking => previous => ", this.appSettingsService.getLogged());
        if (this.appSettingsService.getLogged() === true) {
            this.redirectSuccess(this.user);
        }
    }*/
    LoginComponent.prototype.login = function () {
        console.log('requesting login ...');
        if (this.adminMode) {
            this.adminLogin();
        }
        else {
            this.customerLogin();
        }
    };
    LoginComponent.prototype.setAdminMode = function () {
        this.adminMode = !this.adminMode;
        console.log(this.adminMode);
    };
    LoginComponent.prototype.customerLogin = function () {
        var _this = this;
        if (this.userCustomer.plate && this.userCustomer.cellphone) {
            this.loginService.customerLogin(this.userCustomer).subscribe(function (data) {
                if (data) {
                    console.log('Login successfull user id => ', data.id, ", user fullnames => ", data.firstnames, data.lastnames);
                    _this.user = data;
                    _this.appSettingsService.setLogged(true);
                    _this.appSettingsService.setUser(data);
                    _this.loginService.setUser(_this.user);
                    /* Redirigiendo a reportar asistencia*/
                    _this.router.navigate(["/client/report"]).then(function () {
                        _this.page.actionBarHidden = false;
                    });
                }
            }, function (errors) {
                console.log('Error', errors.status);
                if (errors.status === 404) {
                    _this.loginErrors = true;
                    console.log('Errores => ', _this.loginErrors);
                }
            });
        }
    };
    LoginComponent.prototype.adminLogin = function () {
        var _this = this;
        if (this.user.email && this.user.password) {
            this.loginService.adminLogin(this.user).subscribe(function (data) {
                if (data) {
                    console.log('Login successfull user id => ', data.id, ", user fullnames => ", data.firstnames, data.lastnames);
                    _this.user = data;
                    _this.appSettingsService.setLogged(true);
                    _this.appSettingsService.setUser(data);
                    _this.loginService.setUser(_this.user);
                    /* Redirigiendo a lista de pendientes*/
                    _this.router.navigate(["/assistance/pending"]).then(function () {
                        _this.page.actionBarHidden = false;
                    });
                }
            }, function (errors) {
                console.log('Error', errors.status);
                if (errors.status === 404) {
                    _this.loginErrors = true;
                    console.log('Errores => ', _this.loginErrors);
                }
            });
        }
    };
    /*redirectSuccess(user: User) {
        console.log('User type => ', user.userType.id);
        if (user.userType.id === 1) { //ADMIN
            this.router.navigate(["/admin/validate"]).then(() => {
                this.page.actionBarHidden = false;
            });
        } else if (user.userType.id === 2) { //WORKER

        } else if (user.userType.id === 3) { //CLIENT

        }
    }*/
    LoginComponent.prototype.register = function () {
        this.router.navigate(["/register"]);
    };
    LoginComponent.prototype.forgot = function () {
        this.router.navigate(["/register"]);
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions,
            page_1.Page,
            bus_service_1.BusService,
            login_service_1.LoginService,
            application_settings_service_1.ApplicationSettingsService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
