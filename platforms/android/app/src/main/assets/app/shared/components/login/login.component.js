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
                if (errors.status === 404 || errors.status === 500) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLHVEQUF3RDtBQUV4RCxpREFBOEM7QUFDOUMsOERBQTBEO0FBQzFELDBEQUFzRDtBQUl0RCw0RkFBdUY7QUFFdkYsNkRBQXNEO0FBUXREO0lBVUksd0JBQW9CLE1BQXdCLEVBQ3hCLElBQVUsRUFDVixVQUFzQixFQUN0QixZQUEwQixFQUMxQixrQkFBOEM7UUFKOUMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUE0QjtRQUM5RCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxxQkFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztJQUM5QixDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkM7O2FBRUs7UUFDTCw4QkFBOEI7SUFDbEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBRUgsOEJBQUss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QUFXO1lBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzt5Q0FXOEIsdUNBQWdCO1lBQ2xCLFdBQUk7WUFDRSx3QkFBVTtZQUNSLDRCQUFZO1lBQ04seURBQTBCO09BZHpELGNBQWMsQ0ErSDFCO0lBQUQscUJBQUM7Q0FBQSxBQS9IRCxJQStIQztBQS9IWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VXNlciwgVXNlckVhc3l9IGZyb20gXCIuLi8uLi9jbGFzc2VzL3VzZXIuY2xhc3NcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHtCdXNTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYnVzLnNlcnZpY2VcIjtcbmltcG9ydCB7Q3VzdG9tZXJ9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2N1c3RvbWVyLmNsYXNzXCI7XG5pbXBvcnQge1dvcmtlcn0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvd29ya2VyLmNsYXNzXCI7XG5cbmltcG9ydCB7QXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncy5zZXJ2aWNlXCI7XG5pbXBvcnQge0ZpcmViYXNlUG9zdH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvZmlyZWJhc2UtcG9zdC5jbGFzc1wiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC1sb2dpbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgYWRtaW5Nb2RlOiBib29sZWFuO1xuICAgIHVzZXI6IFVzZXI7XG4gICAgdXNlckN1c3RvbWVyOiBVc2VyRWFzeTtcbiAgICB3b3JrZXI6IFdvcmtlcjtcbiAgICBjdXN0b21lcjogQ3VzdG9tZXI7XG4gICAgbG9naW5FcnJvcnM6IGJvb2xlYW47XG4gICAgZmlyZWJhc2VUb2tlbjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYnVzU2VydmljZTogQnVzU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXBwU2V0dGluZ3NTZXJ2aWNlOiBBcHBsaWNhdGlvblNldHRpbmdzU2VydmljZSkge1xuICAgICAgICB0aGlzLmFkbWluTW9kZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvZ2luRXJyb3JzID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKG51bGwsICcnLCAnJywgJycsIG51bGwsIG51bGwsICcnLCAnJywgbnVsbCk7XG4gICAgICAgIHRoaXMudXNlckN1c3RvbWVyID0gbmV3IFVzZXJFYXN5KCcnLCAnJyk7XG4gICAgICAgIHRoaXMudGl0bGUgPSAnQmllbnZlbmlkbyc7XG4gICAgfVxuXG4gICAgcGFnZUxvYWRlZCgpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuYXBwU2V0dGluZ3NTZXJ2aWNlLmluaXRTZXR0aW5ncygpO1xuICAgICAgICAvKnRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jbGllbnQvdHJhY2tpbmdcIiwgMV0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9KTsqL1xuICAgICAgICAvKnRoaXMuY2hlY2tQcmV2aW91c0xvZ2luKCk7Ki9cbiAgICB9XG5cbiAgICAvKmNoZWNrUHJldmlvdXNMb2dpbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiA9PiBDaGVja2luZyA9PiBwcmV2aW91cyA9PiBcIiwgdGhpcy5hcHBTZXR0aW5nc1NlcnZpY2UuZ2V0TG9nZ2VkKCkpO1xuICAgICAgICBpZiAodGhpcy5hcHBTZXR0aW5nc1NlcnZpY2UuZ2V0TG9nZ2VkKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3RTdWNjZXNzKHRoaXMudXNlcik7XG4gICAgICAgIH1cbiAgICB9Ki9cblxuICAgIGxvZ2luKCkge1xuICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdGluZyBsb2dpbiAuLi4nKTtcbiAgICAgICAgaWYgKHRoaXMuYWRtaW5Nb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmFkbWluTG9naW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJMb2dpbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0QWRtaW5Nb2RlKCkge1xuICAgICAgICB0aGlzLmFkbWluTW9kZSA9ICF0aGlzLmFkbWluTW9kZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hZG1pbk1vZGUpO1xuICAgIH1cblxuICAgIGN1c3RvbWVyTG9naW4oKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJDdXN0b21lci5wbGF0ZSAmJiB0aGlzLnVzZXJDdXN0b21lci5jZWxscGhvbmUpIHtcbiAgICAgICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmN1c3RvbWVyTG9naW4odGhpcy51c2VyQ3VzdG9tZXIpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBzdWNjZXNzZnVsbCB1c2VyIGlkID0+ICcsIGRhdGEuaWQsIFwiLCB1c2VyIGZ1bGxuYW1lcyA9PiBcIiwgZGF0YS5maXJzdG5hbWVzLCBkYXRhLmxhc3RuYW1lcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBTZXR0aW5nc1NlcnZpY2Uuc2V0TG9nZ2VkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBTZXR0aW5nc1NlcnZpY2Uuc2V0VXNlcihkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLnNldFVzZXIodGhpcy51c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIFJlZGlyaWdpZW5kbyBhIHJlcG9ydGFyIGFzaXN0ZW5jaWEqL1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NsaWVudC9yZXBvcnRcIl0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcnMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvcnMuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9ycy5zdGF0dXMgPT09IDQwNCB8fCBlcnJvcnMuc3RhdHVzID09PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5FcnJvcnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yZXMgPT4gJywgdGhpcy5sb2dpbkVycm9ycylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkbWluTG9naW4oKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXIuZW1haWwgJiYgdGhpcy51c2VyLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5hZG1pbkxvZ2luKHRoaXMudXNlcikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luIHN1Y2Nlc3NmdWxsIHVzZXIgaWQgPT4gJywgZGF0YS5pZCwgXCIsIHVzZXIgZnVsbG5hbWVzID0+IFwiLCBkYXRhLmZpcnN0bmFtZXMsIGRhdGEubGFzdG5hbWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFNldHRpbmdzU2VydmljZS5zZXRMb2dnZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFNldHRpbmdzU2VydmljZS5zZXRVc2VyKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpblNlcnZpY2Uuc2V0VXNlcih0aGlzLnVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogUmVkaXJpZ2llbmRvIGEgbGlzdGEgZGUgcGVuZGllbnRlcyovXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYXNzaXN0YW5jZS9wZW5kaW5nXCJdKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3JzLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcnMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5FcnJvcnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yZXMgPT4gJywgdGhpcy5sb2dpbkVycm9ycylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKnJlZGlyZWN0U3VjY2Vzcyh1c2VyOiBVc2VyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIHR5cGUgPT4gJywgdXNlci51c2VyVHlwZS5pZCk7XG4gICAgICAgIGlmICh1c2VyLnVzZXJUeXBlLmlkID09PSAxKSB7IC8vQURNSU5cbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9hZG1pbi92YWxpZGF0ZVwiXSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodXNlci51c2VyVHlwZS5pZCA9PT0gMikgeyAvL1dPUktFUlxuXG4gICAgICAgIH0gZWxzZSBpZiAodXNlci51c2VyVHlwZS5pZCA9PT0gMykgeyAvL0NMSUVOVFxuXG4gICAgICAgIH1cbiAgICB9Ki9cblxuICAgIHJlZ2lzdGVyKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcmVnaXN0ZXJcIl0pO1xuICAgIH1cblxuICAgIGZvcmdvdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3JlZ2lzdGVyXCJdKTtcbiAgICB9XG5cbn1cbiJdfQ==