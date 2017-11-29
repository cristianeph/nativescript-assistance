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
        this.firebaseInit();
    }
    AppComponent.prototype.setFirebaseToken = function (token) {
        this.busService.broadcast("firebase-token", token);
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
                    /*that.validatePreviousLogin(message);*/
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsNkRBQXlEO0FBQ3pELCtGQUEwRjtBQUMxRixpRUFBNkQ7QUFDN0QsMENBQXVDO0FBVXZDO0lBQ0ksc0JBQW9CLE1BQWMsRUFDZCxVQUFzQixFQUN0QixZQUEwQixFQUMxQixrQkFBOEM7UUFIOUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUE0QjtRQUM5RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixLQUFhO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxtQ0FBWSxHQUFaO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFVBQVUsQ0FBQztZQUNQLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ3ZELFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ1YsMkJBQTJCLEVBQUUsVUFBUyxLQUFLO29CQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUNELHlCQUF5QixFQUFFLFVBQVMsT0FBTztvQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ2hFLHdDQUF3QztvQkFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQy9ELENBQUM7Z0JBQ0QsT0FBTyxFQUFFLEtBQUs7Z0JBQ2Qsa0JBQWtCLEVBQUUsVUFBQyxJQUFTO29CQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtnQkFDOUQsQ0FBQzthQUNKLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBVSxRQUFRO2dCQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLENBQUMsRUFDRCxVQUFVLEtBQUs7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQ0osQ0FBQztRQUNOLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUN2RCxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFhO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDeEQsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFoRFEsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUVwQyxDQUFDO3lDQUU4QixlQUFNO1lBQ0Ysd0JBQVU7WUFDUiw0QkFBWTtZQUNOLHlEQUEwQjtPQUp6RCxZQUFZLENBaUR4QjtJQUFELG1CQUFDO0NBQUEsQUFqREQsSUFpREM7QUFqRFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QnVzU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2J1cy5zZXJ2aWNlXCI7XG5pbXBvcnQge0FwcGxpY2F0aW9uU2V0dGluZ3NTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvYXBwbGljYXRpb24tc2V0dGluZ3Muc2VydmljZVwiO1xuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtGaXJlYmFzZURhdGF9IGZyb20gXCIuL3NoYXJlZC9jbGFzc2VzL2ZpcmViYXNlLWRhdGEuY2xhc3NcIjtcbmltcG9ydCB7RmlyZWJhc2VOb3RpZmljYXRpb259IGZyb20gXCIuL3NoYXJlZC9jbGFzc2VzL2ZpcmViYXNlLW5vdGlmaWNhdGlvbi5jbGFzc1wiO1xuaW1wb3J0IHtGaXJlYmFzZVBvc3R9IGZyb20gXCIuL3NoYXJlZC9jbGFzc2VzL2ZpcmViYXNlLXBvc3QuY2xhc3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcblxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBidXNTZXJ2aWNlOiBCdXNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhcHBTZXR0aW5nc1NlcnZpY2U6IEFwcGxpY2F0aW9uU2V0dGluZ3NTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VJbml0KCk7XG4gICAgfVxuXG4gICAgc2V0RmlyZWJhc2VUb2tlbih0b2tlbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYnVzU2VydmljZS5icm9hZGNhc3QoXCJmaXJlYmFzZS10b2tlblwiLCB0b2tlbik7XG4gICAgfVxuXG4gICAgZmlyZWJhc2VJbml0KCkge1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbiAgICAgICAgICAgIGZpcmViYXNlLmluaXQoe1xuICAgICAgICAgICAgICAgIG9uUHVzaFRva2VuUmVjZWl2ZWRDYWxsYmFjazogZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGSVJFQkFTRSA9PiBUb2tlbiA9PiBcIiArIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5hcHBTZXR0aW5nc1NlcnZpY2Uuc2V0VG9rZW4odG9rZW4pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZJUkVCQVNFID0+IE1lc3NhZ2UgPT4gXCIsIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcbiAgICAgICAgICAgICAgICAgICAgLyp0aGF0LnZhbGlkYXRlUHJldmlvdXNMb2dpbihtZXNzYWdlKTsqL1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmJ1c1NlcnZpY2UuYnJvYWRjYXN0KFwiY2VudHJhbC1ub3RpZmljYXRpb25cIiwgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwZXJzaXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbkF1dGhTdGF0ZUNoYW5nZWQ6IChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGSVJFQkFTRSA9PiBTdGF0ZSA9PiBcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGSVJFQkFTRSA9PiBpbml0IGRvbmVcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0VG9rZW4oKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZJUkVCQVNFID0+IGluaXQgZXJyb3IgPT4gXCIgKyBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgZ2V0VG9rZW4oKSB7XG4gICAgICAgIGxldCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuICAgICAgICBmaXJlYmFzZS5nZXRDdXJyZW50UHVzaFRva2VuKCkudGhlbigodG9rZW46IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGSVJFQkFTRSA9PiBDdXJyZW50IHB1c2ggdG9rZW46IFwiICsgdG9rZW4pO1xuICAgICAgICAgICAgdGhpcy5hcHBTZXR0aW5nc1NlcnZpY2Uuc2V0VG9rZW4odG9rZW4pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=