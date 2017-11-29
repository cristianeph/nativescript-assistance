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
        /*this.checkNotification();*/
    };
    /*checkNotification() {
        this.busService.subscribe("assistance-confirmation", (notification) => {
            console.log("Notification incoming => ", JSON.stringify(notification));
        })
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
                    /*setBoolean("user-login", true);*/
                    /*setString("user-data", JSON.stringify(data));*/
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
                console.log('Error', errors.status);
                if (errors.status === 404) {
                    _this.loginErrors = true;
                    console.log('Errores => ', _this.loginErrors);
                }
            });
        }
    };
    LoginComponent.prototype.checkNotification = function () {
        var _this = this;
        this.busService.subscribe("central-notification", function (message) {
            console.log("Notifcation recieved => message => ", JSON.stringify(message));
            _this.validatePreviousLogin(message);
        });
    };
    LoginComponent.prototype.validatePreviousLogin = function (message) {
        if (this.appSettingsService.isLogged()) {
            var user = this.appSettingsService.getUser();
            var assistance = this.appSettingsService.getAssistance();
            this.loginService.setUser(user);
            if (assistance != null) {
                this.router.navigate(["/client/tracking", message.data.assistance]);
            }
            else {
                this.router.navigate(["/client/report"]);
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLHVEQUE4QztBQUM5QywwQ0FBdUM7QUFDdkMsaURBQThDO0FBQzlDLDhEQUEwRDtBQUMxRCwwREFBc0Q7QUFJdEQsNEZBQXVGO0FBU3ZGO0lBUUksd0JBQW9CLE1BQWMsRUFDZCxJQUFVLEVBQ1YsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsa0JBQThDO1FBSjlDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTRCO1FBQzlELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztJQUM5QixDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkM7O2FBRUs7UUFDTCw2QkFBNkI7SUFDakMsQ0FBQztJQUVEOzs7O09BSUc7SUFFSCw4QkFBSyxHQUFMO1FBQUEsaUJBc0NDO1FBckNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENB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QUFjLENBcUcxQjtJQUFELHFCQUFDO0NBQUEsQUFyR0QsSUFxR0M7QUFyR1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi8uLi9jbGFzc2VzL3VzZXIuY2xhc3NcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHtCdXNTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYnVzLnNlcnZpY2VcIjtcbmltcG9ydCB7Q3VzdG9tZXJ9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2N1c3RvbWVyLmNsYXNzXCI7XG5pbXBvcnQge1dvcmtlcn0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvd29ya2VyLmNsYXNzXCI7XG5cbmltcG9ydCB7QXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncy5zZXJ2aWNlXCI7XG5pbXBvcnQge0ZpcmViYXNlUG9zdH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvZmlyZWJhc2UtcG9zdC5jbGFzc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXBwLWxvZ2luJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gICAgdXNlcjogVXNlcjtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHdvcmtlcjogV29ya2VyO1xuICAgIGN1c3RvbWVyOiBDdXN0b21lcjtcbiAgICBsb2dpbkVycm9yczogYm9vbGVhbjtcbiAgICBmaXJlYmFzZVRva2VuOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJ1c1NlcnZpY2U6IEJ1c1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFwcFNldHRpbmdzU2VydmljZTogQXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5sb2dpbkVycm9ycyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcihudWxsLCAnJywgJycsIG51bGwsIG51bGwsICcnLCAnJywgbnVsbCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSAnQmllbnZlbmlkbyc7XG4gICAgfVxuXG4gICAgcGFnZUxvYWRlZCgpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuYXBwU2V0dGluZ3NTZXJ2aWNlLmluaXRTZXR0aW5ncygpO1xuICAgICAgICAvKnRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jbGllbnQvdHJhY2tpbmdcIiwgMV0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9KTsqL1xuICAgICAgICAvKnRoaXMuY2hlY2tOb3RpZmljYXRpb24oKTsqL1xuICAgIH1cblxuICAgIC8qY2hlY2tOb3RpZmljYXRpb24oKSB7XG4gICAgICAgIHRoaXMuYnVzU2VydmljZS5zdWJzY3JpYmUoXCJhc3Npc3RhbmNlLWNvbmZpcm1hdGlvblwiLCAobm90aWZpY2F0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbiBpbmNvbWluZyA9PiBcIiwgSlNPTi5zdHJpbmdpZnkobm90aWZpY2F0aW9uKSk7XG4gICAgICAgIH0pXG4gICAgfSovXG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3RpbmcgbG9naW4gLi4uJyk7XG4gICAgICAgIGlmICh0aGlzLnVzZXIuZW1haWwgJiYgdGhpcy51c2VyLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dpbih0aGlzLnVzZXIpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBzdWNjZXNzZnVsbCB1c2VyIGlkID0+ICcsIGRhdGEuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luIHN1Y2Nlc3NmdWxsIHVzZXIgZnVsbG5hbWVzID0+ICcsIGRhdGEuZmlyc3RuYW1lcywgZGF0YS5sYXN0bmFtZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwU2V0dGluZ3NTZXJ2aWNlLnNldExvZ2dlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwU2V0dGluZ3NTZXJ2aWNlLnNldFVzZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5zZXRVc2VyKHRoaXMudXNlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKnNldEJvb2xlYW4oXCJ1c2VyLWxvZ2luXCIsIHRydWUpOyovXG4gICAgICAgICAgICAgICAgICAgICAgICAvKnNldFN0cmluZyhcInVzZXItZGF0YVwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7Ki9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnVzZXJUeXBlLmlkID09PSAxKSB7IC8vQURNSU5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYWRtaW4vdmFsaWRhdGVcIl0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudXNlclR5cGUuaWQgPT09IDIpIHsgLy9XT1JLRVJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYXNzaXN0YW5jZS9wZW5kaW5nXCJdKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnVzZXJUeXBlLmlkID09PSAzKSB7IC8vQ0xJRU5UXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NsaWVudC9yZXBvcnRcIl0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9ycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9ycy5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRXJyb3JzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcmVzID0+ICcsIHRoaXMubG9naW5FcnJvcnMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tOb3RpZmljYXRpb24oKSB7XG4gICAgICAgIHRoaXMuYnVzU2VydmljZS5zdWJzY3JpYmUoXCJjZW50cmFsLW5vdGlmaWNhdGlvblwiLCAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmNhdGlvbiByZWNpZXZlZCA9PiBtZXNzYWdlID0+IFwiLCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlUHJldmlvdXNMb2dpbihtZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVQcmV2aW91c0xvZ2luKG1lc3NhZ2U6IEZpcmViYXNlUG9zdCkge1xuICAgICAgICBpZiAodGhpcy5hcHBTZXR0aW5nc1NlcnZpY2UuaXNMb2dnZWQoKSkge1xuICAgICAgICAgICAgbGV0IHVzZXIgPSB0aGlzLmFwcFNldHRpbmdzU2VydmljZS5nZXRVc2VyKCk7XG4gICAgICAgICAgICBsZXQgYXNzaXN0YW5jZSA9IHRoaXMuYXBwU2V0dGluZ3NTZXJ2aWNlLmdldEFzc2lzdGFuY2UoKTtcbiAgICAgICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLnNldFVzZXIodXNlcik7XG4gICAgICAgICAgICBpZiAoYXNzaXN0YW5jZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NsaWVudC90cmFja2luZ1wiLCBtZXNzYWdlLmRhdGEuYXNzaXN0YW5jZV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2xpZW50L3JlcG9ydFwiXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlcigpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3JlZ2lzdGVyXCJdKTtcbiAgICB9XG5cbiAgICBmb3Jnb3QoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9yZWdpc3RlclwiXSk7XG4gICAgfVxuXG59XG4iXX0=