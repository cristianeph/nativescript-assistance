"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bus_service_1 = require("./shared/services/bus.service");
var application_settings_service_1 = require("./shared/services/application-settings.service");
var login_service_1 = require("./shared/services/login.service");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(router, busService, loginService, appSettingsService) {
        this.router = router;
        this.busService = busService;
        this.loginService = loginService;
        this.appSettingsService = appSettingsService;
        this.checkSettings();
    }
    AppComponent.prototype.checkSettings = function () {
        this.appSettingsService.initSettings();
        this.firebaseInit();
        /*console.log("Settings => File => Exist => ", this.appSettingsService.check());
        if (this.appSettingsService.check() === true) {
            this.firebaseInit();
        } else {
            this.appSettingsService.initSettings();
        }*/
    };
    AppComponent.prototype.firebaseInit = function () {
        var that = this;
        setTimeout(function () {
            var firebase = require("nativescript-plugin-firebase");
            firebase.init({
                onPushTokenReceivedCallback: function (token) {
                    console.log("FIREBASE => Token => " + token);
                    that.appSettingsService.setToken(token);
                },
                onMessageReceivedCallback: function (message) {
                    console.log("FIREBASE => Message => ", JSON.stringify(message));
                    that.appSettingsService.setPushNotification(message);
                    that.busService.broadcast("central-notification", message);
                },
                persist: false,
                onAuthStateChanged: function (data) {
                    console.log("FIREBASE => State => ", JSON.stringify(data));
                }
            }).then(function (instance) {
                console.log("FIREBASE => init done");
                that.getToken();
            }, function (error) {
                console.log("FIREBASE => init error => " + error);
            });
        }, 3000);
    };
    AppComponent.prototype.getToken = function () {
        var _this = this;
        var firebase = require("nativescript-plugin-firebase");
        firebase.getCurrentPushToken().then(function (token) {
            console.log("FIREBASE => Current push token: " + token);
            _this.appSettingsService.setToken(token);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router,
            bus_service_1.BusService,
            login_service_1.LoginService,
            application_settings_service_1.ApplicationSettingsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsNkRBQXlEO0FBQ3pELCtGQUEwRjtBQUMxRixpRUFBNkQ7QUFDN0QsMENBQXVDO0FBVXZDO0lBQ0ksc0JBQW9CLE1BQWMsRUFDZCxVQUFzQixFQUN0QixZQUEwQixFQUMxQixrQkFBOEM7UUFIOUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUE0QjtRQUM5RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCOzs7OztXQUtHO0lBQ1AsQ0FBQztJQUVELG1DQUFZLEdBQVo7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsVUFBVSxDQUFDO1lBQ1AsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDdkQsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDViwyQkFBMkIsRUFBRSxVQUFTLEtBQUs7b0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUM7b0JBQzdDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBQ0QseUJBQXlCLEVBQUUsVUFBUyxPQUFPO29CQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDaEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDL0QsQ0FBQztnQkFDRCxPQUFPLEVBQUUsS0FBSztnQkFDZCxrQkFBa0IsRUFBRSxVQUFDLElBQVM7b0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO2dCQUM5RCxDQUFDO2FBQ0osQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFVLFFBQVE7Z0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxFQUNELFVBQVUsS0FBSztnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3RELENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQ3ZELFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQWE7WUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXZEUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBRXBDLENBQUM7eUNBRThCLGVBQU07WUFDRix3QkFBVTtZQUNSLDRCQUFZO1lBQ04seURBQTBCO09BSnpELFlBQVksQ0FpRnhCO0lBQUQsbUJBQUM7Q0FBQSxBQWpGRCxJQWlGQztBQWpGWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCdXNTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvYnVzLnNlcnZpY2VcIjtcbmltcG9ydCB7QXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncy5zZXJ2aWNlXCI7XG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0ZpcmViYXNlRGF0YX0gZnJvbSBcIi4vc2hhcmVkL2NsYXNzZXMvZmlyZWJhc2UtZGF0YS5jbGFzc1wiO1xuaW1wb3J0IHtGaXJlYmFzZU5vdGlmaWNhdGlvbn0gZnJvbSBcIi4vc2hhcmVkL2NsYXNzZXMvZmlyZWJhc2Utbm90aWZpY2F0aW9uLmNsYXNzXCI7XG5pbXBvcnQge0ZpcmViYXNlUG9zdH0gZnJvbSBcIi4vc2hhcmVkL2NsYXNzZXMvZmlyZWJhc2UtcG9zdC5jbGFzc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIlxuXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJ1c1NlcnZpY2U6IEJ1c1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFwcFNldHRpbmdzU2VydmljZTogQXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5jaGVja1NldHRpbmdzKCk7XG4gICAgfVxuXG4gICAgY2hlY2tTZXR0aW5ncygpIHtcbiAgICAgICAgdGhpcy5hcHBTZXR0aW5nc1NlcnZpY2UuaW5pdFNldHRpbmdzKCk7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VJbml0KCk7XG4gICAgICAgIC8qY29uc29sZS5sb2coXCJTZXR0aW5ncyA9PiBGaWxlID0+IEV4aXN0ID0+IFwiLCB0aGlzLmFwcFNldHRpbmdzU2VydmljZS5jaGVjaygpKTtcbiAgICAgICAgaWYgKHRoaXMuYXBwU2V0dGluZ3NTZXJ2aWNlLmNoZWNrKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VJbml0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFwcFNldHRpbmdzU2VydmljZS5pbml0U2V0dGluZ3MoKTtcbiAgICAgICAgfSovXG4gICAgfVxuXG4gICAgZmlyZWJhc2VJbml0KCkge1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbiAgICAgICAgICAgIGZpcmViYXNlLmluaXQoe1xuICAgICAgICAgICAgICAgIG9uUHVzaFRva2VuUmVjZWl2ZWRDYWxsYmFjazogZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGSVJFQkFTRSA9PiBUb2tlbiA9PiBcIiArIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5hcHBTZXR0aW5nc1NlcnZpY2Uuc2V0VG9rZW4odG9rZW4pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZJUkVCQVNFID0+IE1lc3NhZ2UgPT4gXCIsIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5hcHBTZXR0aW5nc1NlcnZpY2Uuc2V0UHVzaE5vdGlmaWNhdGlvbihtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5idXNTZXJ2aWNlLmJyb2FkY2FzdChcImNlbnRyYWwtbm90aWZpY2F0aW9uXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyc2lzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkOiAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRklSRUJBU0UgPT4gU3RhdGUgPT4gXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRklSRUJBU0UgPT4gaW5pdCBkb25lXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmdldFRva2VuKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGSVJFQkFTRSA9PiBpbml0IGVycm9yID0+IFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIGdldFRva2VuKCkge1xuICAgICAgICBsZXQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbiAgICAgICAgZmlyZWJhc2UuZ2V0Q3VycmVudFB1c2hUb2tlbigpLnRoZW4oKHRva2VuOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRklSRUJBU0UgPT4gQ3VycmVudCBwdXNoIHRva2VuOiBcIiArIHRva2VuKTtcbiAgICAgICAgICAgIHRoaXMuYXBwU2V0dGluZ3NTZXJ2aWNlLnNldFRva2VuKHRva2VuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypjaGVja05vdGlmaWNhdGlvbigpIHtcbiAgICAgICAgdGhpcy5idXNTZXJ2aWNlLnN1YnNjcmliZShcImNlbnRyYWwtbm90aWZpY2F0aW9uXCIsIChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbiByZWNpZXZlZCA9PiBtZXNzYWdlID0+IFwiLCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XG4gICAgICAgICAgICAvL3RoaXMudmFsaWRhdGVQcmV2aW91c0xvZ2luKG1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhpcy5hcHBTZXR0aW5nc1NlcnZpY2Uuc2V0UHVzaE5vdGlmaWNhdGlvbihtZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfSovXG5cbiAgICAvKnZhbGlkYXRlUHJldmlvdXNMb2dpbihtZXNzYWdlOiBGaXJlYmFzZVBvc3QpIHtcbiAgICAgICAgaWYgKHRoaXMuYXBwU2V0dGluZ3NTZXJ2aWNlLmlzTG9nZ2VkKCkpIHtcbiAgICAgICAgICAgIGxldCB1c2VyID0gdGhpcy5hcHBTZXR0aW5nc1NlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgICAgICAgbGV0IGFzc2lzdGFuY2UgPSB0aGlzLmFwcFNldHRpbmdzU2VydmljZS5nZXRBc3Npc3RhbmNlKCk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5zZXRVc2VyKHVzZXIpO1xuICAgICAgICAgICAgaWYgKGFzc2lzdGFuY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmRhdGEuc3RhdGUgPT09IFwiQVRFTkRJRU5ET1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVkaXJlY3RpbmcgdG8gdHJhY2tpbmcgd2l0aCBpZCA9PiBcIiwgbWVzc2FnZS5kYXRhLmFzc2lzdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jbGllbnQvdHJhY2tpbmdcIiwgbWVzc2FnZS5kYXRhLmFzc2lzdGFuY2VdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGhpbmcgaGFwcGVucyBqdXN0IHNpbXBsZSBub3RpZmljYXRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NsaWVudC9yZXBvcnRcIl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0qL1xufVxuIl19