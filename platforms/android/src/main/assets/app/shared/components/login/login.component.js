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
    };
    LoginComponent.prototype.pageLoaded = function () {
        this.page.actionBarHidden = true;
        /*this.router.navigate(["/client/tracking", 1]).then(() => {
            this.page.actionBarHidden = false;
        });*/
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELHVEQUE4QztBQUM5QywwQ0FBdUM7QUFDdkMsaURBQThDO0FBQzlDLDhEQUEwRDtBQVExRDtJQUlJLHdCQUFvQixNQUFjLEVBQ2QsSUFBVSxFQUNWLFlBQTBCO1FBRjFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO0lBQzlCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakM7O2FBRUs7SUFDVCxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQWlDQztRQWhDRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksaUJBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFB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cG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy91c2VyLmNsYXNzXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC1sb2dpbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHVzZXI6IFVzZXI7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBsb2dpbkVycm9yczogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKG51bGwsICcnLCAnJywgbnVsbCwgbnVsbCwgJycsICcnLCBudWxsKTtcbiAgICAgICAgdGhpcy50aXRsZSA9ICdCaWVudmVuaWRvJztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBwYWdlTG9hZGVkKCkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgLyp0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2xpZW50L3RyYWNraW5nXCIsIDFdKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfSk7Ki9cbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlci5lbWFpbCAmJiB0aGlzLnVzZXIucGFzc3dvcmQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0aW5nIGxvZ2luIC4uLicpO1xuICAgICAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UubG9naW4obmV3IFVzZXIobnVsbCwgdGhpcy51c2VyLmVtYWlsLCB0aGlzLnVzZXIucGFzc3dvcmQsIG51bGwsIG51bGwsICcnLCAnJywgbnVsbCkpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBzdWNjZXNzZnVsbCB1c2VyIGlkID0+ICcsIGRhdGEuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luIHN1Y2Nlc3NmdWxsIHVzZXIgZnVsbG5hbWVzID0+ICcsIGRhdGEuZmlyc3RuYW1lcywgZGF0YS5sYXN0bmFtZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpblNlcnZpY2Uuc2V0VXNlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVXNlcihkYXRhLmlkLCBkYXRhLmVtYWlsLCAnJywgZGF0YS5mcm9tLCBkYXRhLnVudGlsLCBkYXRhLmZpcnN0bmFtZXMsIGRhdGEubGFzdG5hbWVzLCBkYXRhLnVzZXJUeXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnVzZXJUeXBlLmlkID09PSAxKSB7IC8vQURNSU5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYWRtaW4vdmFsaWRhdGVcIl0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudXNlclR5cGUuaWQgPT09IDIpIHsgLy9XT1JLRVJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYXNzaXN0YW5jZS9wZW5kaW5nXCJdKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnVzZXJUeXBlLmlkID09PSAzKSB7IC8vQ0xJRU5UXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NsaWVudC9yZXBvcnRcIl0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9ycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9yZWdpc3RlclwiXSk7XG4gICAgfVxuXG4gICAgZm9yZ290KCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcmVnaXN0ZXJcIl0pO1xuICAgIH1cblxufVxuIl19