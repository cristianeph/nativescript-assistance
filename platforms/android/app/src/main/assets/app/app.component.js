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
        this.geolocationInit();
        /*console.log("Settings => File => Exist => ", this.appSettingsService.check());
        if (this.appSettingsService.check() === true) {
            this.firebaseInit();
        } else {
            this.appSettingsService.initSettings();
        }*/
    };
    AppComponent.prototype.geolocationInit = function () {
        var geolocation = require("nativescript-geolocation");
        geolocation.enableLocationRequest();
    };
    AppComponent.prototype.firebaseInit = function () {
        var that = this;
        setTimeout(function () {
            var firebase = require("nativescript-plugin-firebase");
            firebase.init({
                iOSEmulatorFlush: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsNkRBQXlEO0FBQ3pELCtGQUEwRjtBQUMxRixpRUFBNkQ7QUFDN0QsMENBQXVDO0FBVXZDO0lBQ0ksc0JBQW9CLE1BQWMsRUFDZCxVQUFzQixFQUN0QixZQUEwQixFQUMxQixrQkFBOEM7UUFIOUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUE0QjtRQUM5RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2Qjs7Ozs7V0FLRztJQUNQLENBQUM7SUFFRCxzQ0FBZSxHQUFmO1FBQ0ksSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDdEQsV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELG1DQUFZLEdBQVo7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsVUFBVSxDQUFDO1lBQ1AsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDdkQsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDVixnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QiwyQkFBMkIsRUFBRSxVQUFTLEtBQUs7b0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUM7b0JBQzdDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBQ0QseUJBQXlCLEVBQUUsVUFBUyxPQUFPO29CQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDaEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDL0QsQ0FBQztnQkFDRCxPQUFPLEVBQUUsS0FBSztnQkFDZCxrQkFBa0IsRUFBRSxVQUFDLElBQVM7b0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO2dCQUM5RCxDQUFDO2FBQ0osQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFVLFFBQVE7Z0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxFQUNELFVBQVUsS0FBSztnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3RELENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQ3ZELFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQWE7WUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTlEUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBRXBDLENBQUM7eUNBRThCLGVBQU07WUFDRix3QkFBVTtZQUNSLDRCQUFZO1lBQ04seURBQTBCO09BSnpELFlBQVksQ0F3RnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXhGRCxJQXdGQztBQXhGWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCdXNTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvYnVzLnNlcnZpY2VcIjtcbmltcG9ydCB7QXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncy5zZXJ2aWNlXCI7XG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0ZpcmViYXNlRGF0YX0gZnJvbSBcIi4vc2hhcmVkL2NsYXNzZXMvZmlyZWJhc2UtZGF0YS5jbGFzc1wiO1xuaW1wb3J0IHtGaXJlYmFzZU5vdGlmaWNhdGlvbn0gZnJvbSBcIi4vc2hhcmVkL2NsYXNzZXMvZmlyZWJhc2Utbm90aWZpY2F0aW9uLmNsYXNzXCI7XG5pbXBvcnQge0ZpcmViYXNlUG9zdH0gZnJvbSBcIi4vc2hhcmVkL2NsYXNzZXMvZmlyZWJhc2UtcG9zdC5jbGFzc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIlxuXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJ1c1NlcnZpY2U6IEJ1c1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFwcFNldHRpbmdzU2VydmljZTogQXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5jaGVja1NldHRpbmdzKCk7XG4gICAgfVxuXG4gICAgY2hlY2tTZXR0aW5ncygpIHtcbiAgICAgICAgdGhpcy5hcHBTZXR0aW5nc1NlcnZpY2UuaW5pdFNldHRpbmdzKCk7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VJbml0KCk7XG4gICAgICAgIHRoaXMuZ2VvbG9jYXRpb25Jbml0KCk7XG4gICAgICAgIC8qY29uc29sZS5sb2coXCJTZXR0aW5ncyA9PiBGaWxlID0+IEV4aXN0ID0+IFwiLCB0aGlzLmFwcFNldHRpbmdzU2VydmljZS5jaGVjaygpKTtcbiAgICAgICAgaWYgKHRoaXMuYXBwU2V0dGluZ3NTZXJ2aWNlLmNoZWNrKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VJbml0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFwcFNldHRpbmdzU2VydmljZS5pbml0U2V0dGluZ3MoKTtcbiAgICAgICAgfSovXG4gICAgfVxuXG4gICAgZ2VvbG9jYXRpb25Jbml0KCkge1xuICAgICAgICBsZXQgZ2VvbG9jYXRpb24gPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCIpO1xuICAgICAgICBnZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QoKTtcbiAgICB9XG5cbiAgICBmaXJlYmFzZUluaXQoKSB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuICAgICAgICAgICAgZmlyZWJhc2UuaW5pdCh7XG4gICAgICAgICAgICAgICAgaU9TRW11bGF0b3JGbHVzaDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvblB1c2hUb2tlblJlY2VpdmVkQ2FsbGJhY2s6IGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRklSRUJBU0UgPT4gVG9rZW4gPT4gXCIgKyB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuYXBwU2V0dGluZ3NTZXJ2aWNlLnNldFRva2VuKHRva2VuKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGSVJFQkFTRSA9PiBNZXNzYWdlID0+IFwiLCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuYXBwU2V0dGluZ3NTZXJ2aWNlLnNldFB1c2hOb3RpZmljYXRpb24obWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuYnVzU2VydmljZS5icm9hZGNhc3QoXCJjZW50cmFsLW5vdGlmaWNhdGlvblwiLCBtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBlcnNpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZJUkVCQVNFID0+IFN0YXRlID0+IFwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZJUkVCQVNFID0+IGluaXQgZG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5nZXRUb2tlbigpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRklSRUJBU0UgPT4gaW5pdCBlcnJvciA9PiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICBnZXRUb2tlbigpIHtcbiAgICAgICAgbGV0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG4gICAgICAgIGZpcmViYXNlLmdldEN1cnJlbnRQdXNoVG9rZW4oKS50aGVuKCh0b2tlbjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZJUkVCQVNFID0+IEN1cnJlbnQgcHVzaCB0b2tlbjogXCIgKyB0b2tlbik7XG4gICAgICAgICAgICB0aGlzLmFwcFNldHRpbmdzU2VydmljZS5zZXRUb2tlbih0b2tlbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qY2hlY2tOb3RpZmljYXRpb24oKSB7XG4gICAgICAgIHRoaXMuYnVzU2VydmljZS5zdWJzY3JpYmUoXCJjZW50cmFsLW5vdGlmaWNhdGlvblwiLCAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gcmVjaWV2ZWQgPT4gbWVzc2FnZSA9PiBcIiwgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICAgICAgICAgICAgLy90aGlzLnZhbGlkYXRlUHJldmlvdXNMb2dpbihtZXNzYWdlKTtcbiAgICAgICAgICAgIHRoaXMuYXBwU2V0dGluZ3NTZXJ2aWNlLnNldFB1c2hOb3RpZmljYXRpb24obWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH0qL1xuXG4gICAgLyp2YWxpZGF0ZVByZXZpb3VzTG9naW4obWVzc2FnZTogRmlyZWJhc2VQb3N0KSB7XG4gICAgICAgIGlmICh0aGlzLmFwcFNldHRpbmdzU2VydmljZS5pc0xvZ2dlZCgpKSB7XG4gICAgICAgICAgICBsZXQgdXNlciA9IHRoaXMuYXBwU2V0dGluZ3NTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgICAgICAgIGxldCBhc3Npc3RhbmNlID0gdGhpcy5hcHBTZXR0aW5nc1NlcnZpY2UuZ2V0QXNzaXN0YW5jZSgpO1xuICAgICAgICAgICAgdGhpcy5sb2dpblNlcnZpY2Uuc2V0VXNlcih1c2VyKTtcbiAgICAgICAgICAgIGlmIChhc3Npc3RhbmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5kYXRhLnN0YXRlID09PSBcIkFURU5ESUVORE9cIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlZGlyZWN0aW5nIHRvIHRyYWNraW5nIHdpdGggaWQgPT4gXCIsIG1lc3NhZ2UuZGF0YS5hc3Npc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2xpZW50L3RyYWNraW5nXCIsIG1lc3NhZ2UuZGF0YS5hc3Npc3RhbmNlXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RoaW5nIGhhcHBlbnMganVzdCBzaW1wbGUgbm90aWZpY2F0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jbGllbnQvcmVwb3J0XCJdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9Ki9cbn1cbiJdfQ==