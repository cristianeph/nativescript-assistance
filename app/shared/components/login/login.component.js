"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_class_1 = require("../../classes/user.class");
var router_1 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page");
var login_service_1 = require("../../services/login.service");
var LoginComponent = (function () {
    function LoginComponent(router, page, loginService) {
        this.router = router;
        this.page = page;
        this.loginService = loginService;
        this.user = new user_class_1.User(null, '', '', null, null, '', '', null);
        this.title = 'Bienvenido';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.user.email && this.user.password) {
            console.log('requesting login ...');
            this.loginService.login(new user_class_1.User(null, this.user.email, this.user.password, null, null, '', '', null)).subscribe(function (data) {
                if (data) {
                    console.log('Login successfull user id => ', data.id);
                    console.log('Login successfull user fullnames => ', data.firstnames, data.lastnames);
                    _this.loginService.setUser(new user_class_1.User(data.id, data.email, '', data.from, data.until, data.firstnames, data.lastnames, data.userType));
                    if (data.userType.id === 1) {
                        _this.router.navigate(["/admin/validate"]).then(function () {
                            _this.page.actionBarHidden = false;
                        });
                    }
                    else if (data.userType.id === 2) {
                        _this.router.navigate(["/assistance/pending"]).then(function () {
                            _this.page.actionBarHidden = false;
                        });
                    }
                    else if (data.userType.id === 3) {
                        _this.router.navigate(["/client/report"]).then(function () {
                            _this.page.actionBarHidden = false;
                        });
                    }
                }
            }, function (errors) {
                console.log('Error');
                console.log(errors);
                console.log(errors.status);
            });
        }
    };
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
        __metadata("design:paramtypes", [router_1.Router,
            page_1.Page,
            login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
