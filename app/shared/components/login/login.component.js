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
        this.user = new user_class_1.User(null, '', '', null, null, '', '', null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLHVEQUE4QztBQUM5QywwQ0FBdUM7QUFDdkMsaURBQThDO0FBQzlDLDhEQUEwRDtBQUMxRCwwREFBc0Q7QUFJdEQsNEZBQXVGO0FBU3ZGO0lBUUksd0JBQW9CLE1BQWMsRUFDZCxJQUFVLEVBQ1YsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsa0JBQThDO1FBSjlDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTRCO1FBQzlELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztJQUM5QixDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkM7O2FBRUs7UUFDTCw4QkFBOEI7SUFDbEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBRUgsOEJBQUssR0FBTDtRQUFBLGlCQXdCQztRQXZCRyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxD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QVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7eUNBUzhCLGVBQU07WUFDUixXQUFJO1lBQ0Usd0JBQVU7WUFDUiw0QkFBWTtZQUNOLHlEQUEwQjtPQVp6RCxjQUFjLENBb0YxQjtJQUFELHFCQUFDO0NBQUEsQUFwRkQsSUFvRkM7QUFwRlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi8uLi9jbGFzc2VzL3VzZXIuY2xhc3NcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHtCdXNTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYnVzLnNlcnZpY2VcIjtcbmltcG9ydCB7Q3VzdG9tZXJ9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2N1c3RvbWVyLmNsYXNzXCI7XG5pbXBvcnQge1dvcmtlcn0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvd29ya2VyLmNsYXNzXCI7XG5cbmltcG9ydCB7QXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncy5zZXJ2aWNlXCI7XG5pbXBvcnQge0ZpcmViYXNlUG9zdH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvZmlyZWJhc2UtcG9zdC5jbGFzc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXBwLWxvZ2luJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gICAgdXNlcjogVXNlcjtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHdvcmtlcjogV29ya2VyO1xuICAgIGN1c3RvbWVyOiBDdXN0b21lcjtcbiAgICBsb2dpbkVycm9yczogYm9vbGVhbjtcbiAgICBmaXJlYmFzZVRva2VuOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJ1c1NlcnZpY2U6IEJ1c1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFwcFNldHRpbmdzU2VydmljZTogQXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5sb2dpbkVycm9ycyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcihudWxsLCAnJywgJycsIG51bGwsIG51bGwsICcnLCAnJywgbnVsbCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSAnQmllbnZlbmlkbyc7XG4gICAgfVxuXG4gICAgcGFnZUxvYWRlZCgpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuYXBwU2V0dGluZ3NTZXJ2aWNlLmluaXRTZXR0aW5ncygpO1xuICAgICAgICAvKnRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jbGllbnQvdHJhY2tpbmdcIiwgMV0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9KTsqL1xuICAgICAgICAvKnRoaXMuY2hlY2tQcmV2aW91c0xvZ2luKCk7Ki9cbiAgICB9XG5cbiAgICAvKmNoZWNrUHJldmlvdXNMb2dpbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiA9PiBDaGVja2luZyA9PiBwcmV2aW91cyA9PiBcIiwgdGhpcy5hcHBTZXR0aW5nc1NlcnZpY2UuZ2V0TG9nZ2VkKCkpO1xuICAgICAgICBpZiAodGhpcy5hcHBTZXR0aW5nc1NlcnZpY2UuZ2V0TG9nZ2VkKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3RTdWNjZXNzKHRoaXMudXNlcik7XG4gICAgICAgIH1cbiAgICB9Ki9cblxuICAgIGxvZ2luKCkge1xuICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdGluZyBsb2dpbiAuLi4nKTtcbiAgICAgICAgaWYgKHRoaXMudXNlci5lbWFpbCAmJiB0aGlzLnVzZXIucGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luIHN1Y2Nlc3NmdWxsIHVzZXIgaWQgPT4gJywgZGF0YS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTG9naW4gc3VjY2Vzc2Z1bGwgdXNlciBmdWxsbmFtZXMgPT4gJywgZGF0YS5maXJzdG5hbWVzLCBkYXRhLmxhc3RuYW1lcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBTZXR0aW5nc1NlcnZpY2Uuc2V0TG9nZ2VkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBTZXR0aW5nc1NlcnZpY2Uuc2V0VXNlcihkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLnNldFVzZXIodGhpcy51c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RTdWNjZXNzKHRoaXMudXNlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9ycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9ycy5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRXJyb3JzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcmVzID0+ICcsIHRoaXMubG9naW5FcnJvcnMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVkaXJlY3RTdWNjZXNzKHVzZXI6IFVzZXIpIHtcbiAgICAgICAgaWYgKHVzZXIudXNlclR5cGUuaWQgPT09IDEpIHsgLy9BRE1JTlxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2FkbWluL3ZhbGlkYXRlXCJdKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyLnVzZXJUeXBlLmlkID09PSAyKSB7IC8vV09SS0VSXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYXNzaXN0YW5jZS9wZW5kaW5nXCJdKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyLnVzZXJUeXBlLmlkID09PSAzKSB7IC8vQ0xJRU5UXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2xpZW50L3JlcG9ydFwiXSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlcigpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3JlZ2lzdGVyXCJdKTtcbiAgICB9XG5cbiAgICBmb3Jnb3QoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9yZWdpc3RlclwiXSk7XG4gICAgfVxuXG59XG4iXX0=