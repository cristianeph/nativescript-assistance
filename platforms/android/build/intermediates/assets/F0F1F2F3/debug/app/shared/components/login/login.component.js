"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_class_1 = require("../../classes/user.class");
var router_1 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page");
var login_service_1 = require("../../services/login.service");
var bus_service_1 = require("../../services/bus.service");
var application_settings_service_1 = require("../../services/application-settings.service");
var LoginComponent = (function () {
    function LoginComponent(router, page, busService, loginService, appSettingsService) {
        this.router = router;
        this.page = page;
        this.busService = busService;
        this.loginService = loginService;
        this.appSettingsService = appSettingsService;
        this.loginErrors = false;
        this.user = new user_class_1.User(null, '', '', '', null, null, '', '', null);
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
        var _this = this;
        console.log('requesting login ...');
        if (this.user.email && this.user.password) {
            this.loginService.login(this.user).subscribe(function (data) {
                if (data) {
                    console.log('Login successfull user id => ', data.id);
                    console.log('Login successfull user fullnames => ', data.firstnames, data.lastnames);
                    _this.user = data;
                    _this.appSettingsService.setLogged(true);
                    _this.appSettingsService.setUser(data);
                    _this.loginService.setUser(_this.user);
                    _this.redirectSuccess(_this.user);
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
    LoginComponent.prototype.redirectSuccess = function (user) {
        var _this = this;
        if (user.userType.id === 1) {
            this.router.navigate(["/admin/validate"]).then(function () {
                _this.page.actionBarHidden = false;
            });
        }
        else if (user.userType.id === 2) {
            this.router.navigate(["/assistance/pending"]).then(function () {
                _this.page.actionBarHidden = false;
            });
        }
        else if (user.userType.id === 3) {
            this.router.navigate(["/client/report"]).then(function () {
                _this.page.actionBarHidden = false;
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
            bus_service_1.BusService,
            login_service_1.LoginService,
            application_settings_service_1.ApplicationSettingsService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLHVEQUE4QztBQUM5QywwQ0FBdUM7QUFDdkMsaURBQThDO0FBQzlDLDhEQUEwRDtBQUMxRCwwREFBc0Q7QUFJdEQsNEZBQXVGO0FBU3ZGO0lBUUksd0JBQW9CLE1BQWMsRUFDZCxJQUFVLEVBQ1YsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsa0JBQThDO1FBSjlDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTRCO1FBQzlELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7SUFDOUIsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZDOzthQUVLO1FBQ0wsOEJBQThCO0lBQ2xDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUVILDhCQUFLLEdBQUw7UUFBQSxpQkF3QkM7UUF2QkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJ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O1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDO3lDQVM4QixlQUFNO1lBQ1IsV0FBSTtZQUNFLHdCQUFVO1lBQ1IsNEJBQVk7WUFDTix5REFBMEI7T0FaekQsY0FBYyxDQW9GMUI7SUFBRCxxQkFBQztDQUFBLEFBcEZELElBb0ZDO0FBcEZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy91c2VyLmNsYXNzXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7QnVzU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2J1cy5zZXJ2aWNlXCI7XG5pbXBvcnQge0N1c3RvbWVyfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9jdXN0b21lci5jbGFzc1wiO1xuaW1wb3J0IHtXb3JrZXJ9IGZyb20gXCIuLi8uLi9jbGFzc2VzL3dvcmtlci5jbGFzc1wiO1xuXG5pbXBvcnQge0FwcGxpY2F0aW9uU2V0dGluZ3NTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBwbGljYXRpb24tc2V0dGluZ3Muc2VydmljZVwiO1xuaW1wb3J0IHtGaXJlYmFzZVBvc3R9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2ZpcmViYXNlLXBvc3QuY2xhc3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC1sb2dpbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuICAgIHVzZXI6IFVzZXI7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICB3b3JrZXI6IFdvcmtlcjtcbiAgICBjdXN0b21lcjogQ3VzdG9tZXI7XG4gICAgbG9naW5FcnJvcnM6IGJvb2xlYW47XG4gICAgZmlyZWJhc2VUb2tlbjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBidXNTZXJ2aWNlOiBCdXNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhcHBTZXR0aW5nc1NlcnZpY2U6IEFwcGxpY2F0aW9uU2V0dGluZ3NTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMubG9naW5FcnJvcnMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIobnVsbCwgJycsICcnLCAnJywgbnVsbCwgbnVsbCwgJycsICcnLCBudWxsKTtcbiAgICAgICAgdGhpcy50aXRsZSA9ICdCaWVudmVuaWRvJztcbiAgICB9XG5cbiAgICBwYWdlTG9hZGVkKCkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hcHBTZXR0aW5nc1NlcnZpY2UuaW5pdFNldHRpbmdzKCk7XG4gICAgICAgIC8qdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NsaWVudC90cmFja2luZ1wiLCAxXSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH0pOyovXG4gICAgICAgIC8qdGhpcy5jaGVja1ByZXZpb3VzTG9naW4oKTsqL1xuICAgIH1cblxuICAgIC8qY2hlY2tQcmV2aW91c0xvZ2luKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2luID0+IENoZWNraW5nID0+IHByZXZpb3VzID0+IFwiLCB0aGlzLmFwcFNldHRpbmdzU2VydmljZS5nZXRMb2dnZWQoKSk7XG4gICAgICAgIGlmICh0aGlzLmFwcFNldHRpbmdzU2VydmljZS5nZXRMb2dnZWQoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFN1Y2Nlc3ModGhpcy51c2VyKTtcbiAgICAgICAgfVxuICAgIH0qL1xuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0aW5nIGxvZ2luIC4uLicpO1xuICAgICAgICBpZiAodGhpcy51c2VyLmVtYWlsICYmIHRoaXMudXNlci5wYXNzd29yZCkge1xuICAgICAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UubG9naW4odGhpcy51c2VyKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTG9naW4gc3VjY2Vzc2Z1bGwgdXNlciBpZCA9PiAnLCBkYXRhLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBzdWNjZXNzZnVsbCB1c2VyIGZ1bGxuYW1lcyA9PiAnLCBkYXRhLmZpcnN0bmFtZXMsIGRhdGEubGFzdG5hbWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFNldHRpbmdzU2VydmljZS5zZXRMb2dnZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFNldHRpbmdzU2VydmljZS5zZXRVc2VyKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpblNlcnZpY2Uuc2V0VXNlcih0aGlzLnVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFN1Y2Nlc3ModGhpcy51c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3JzLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcnMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5FcnJvcnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yZXMgPT4gJywgdGhpcy5sb2dpbkVycm9ycylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWRpcmVjdFN1Y2Nlc3ModXNlcjogVXNlcikge1xuICAgICAgICBpZiAodXNlci51c2VyVHlwZS5pZCA9PT0gMSkgeyAvL0FETUlOXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYWRtaW4vdmFsaWRhdGVcIl0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHVzZXIudXNlclR5cGUuaWQgPT09IDIpIHsgLy9XT1JLRVJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9hc3Npc3RhbmNlL3BlbmRpbmdcIl0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHVzZXIudXNlclR5cGUuaWQgPT09IDMpIHsgLy9DTElFTlRcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jbGllbnQvcmVwb3J0XCJdKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcmVnaXN0ZXJcIl0pO1xuICAgIH1cblxuICAgIGZvcmdvdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3JlZ2lzdGVyXCJdKTtcbiAgICB9XG5cbn1cbiJdfQ==