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
        /*this.checkNotification();*/
    }
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
                    that.appSettingsService.setPushNotification(message);
                    that.busService.broadcast("central-notification", message);
                    /*that.router.navigate(["/client/tracking", 122]);*/
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsNkRBQXlEO0FBQ3pELCtGQUEwRjtBQUMxRixpRUFBNkQ7QUFDN0QsMENBQXVDO0FBVXZDO0lBQ0ksc0JBQW9CLE1BQWMsRUFDZCxVQUFzQixFQUN0QixZQUEwQixFQUMxQixrQkFBOEM7UUFIOUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUE0QjtRQUM5RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsNkJBQTZCO0lBQ2pDLENBQUM7SUFFRCxtQ0FBWSxHQUFaO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFVBQVUsQ0FBQztZQUNQLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ3ZELFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ1YsMkJBQTJCLEVBQUUsVUFBUyxLQUFLO29CQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUNELHlCQUF5QixFQUFFLFVBQVMsT0FBTztvQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ2hFLHdDQUF3QztvQkFDeEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDM0Qsb0RBQW9EO2dCQUN4RCxDQUFDO2dCQUNELE9BQU8sRUFBRSxLQUFLO2dCQUNkLGtCQUFrQixFQUFFLFVBQUMsSUFBUztvQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7Z0JBQzlELENBQUM7YUFDSixDQUFDLENBQUMsSUFBSSxDQUNILFVBQVUsUUFBUTtnQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQixDQUFDLEVBQ0QsVUFBVSxLQUFLO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDdEQsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDdkQsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBYTtZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBL0NRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FFcEMsQ0FBQzt5Q0FFOEIsZUFBTTtZQUNGLHdCQUFVO1lBQ1IsNEJBQVk7WUFDTix5REFBMEI7T0FKekQsWUFBWSxDQXlFeEI7SUFBRCxtQkFBQztDQUFBLEFBekVELElBeUVDO0FBekVZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0J1c1NlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9idXMuc2VydmljZVwiO1xuaW1wb3J0IHtBcHBsaWNhdGlvblNldHRpbmdzU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2FwcGxpY2F0aW9uLXNldHRpbmdzLnNlcnZpY2VcIjtcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7RmlyZWJhc2VEYXRhfSBmcm9tIFwiLi9zaGFyZWQvY2xhc3Nlcy9maXJlYmFzZS1kYXRhLmNsYXNzXCI7XG5pbXBvcnQge0ZpcmViYXNlTm90aWZpY2F0aW9ufSBmcm9tIFwiLi9zaGFyZWQvY2xhc3Nlcy9maXJlYmFzZS1ub3RpZmljYXRpb24uY2xhc3NcIjtcbmltcG9ydCB7RmlyZWJhc2VQb3N0fSBmcm9tIFwiLi9zaGFyZWQvY2xhc3Nlcy9maXJlYmFzZS1wb3N0LmNsYXNzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXG5cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYnVzU2VydmljZTogQnVzU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXBwU2V0dGluZ3NTZXJ2aWNlOiBBcHBsaWNhdGlvblNldHRpbmdzU2VydmljZSkge1xuICAgICAgICB0aGlzLmZpcmViYXNlSW5pdCgpO1xuICAgICAgICAvKnRoaXMuY2hlY2tOb3RpZmljYXRpb24oKTsqL1xuICAgIH1cblxuICAgIGZpcmViYXNlSW5pdCgpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG4gICAgICAgICAgICBmaXJlYmFzZS5pbml0KHtcbiAgICAgICAgICAgICAgICBvblB1c2hUb2tlblJlY2VpdmVkQ2FsbGJhY2s6IGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRklSRUJBU0UgPT4gVG9rZW4gPT4gXCIgKyB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuYXBwU2V0dGluZ3NTZXJ2aWNlLnNldFRva2VuKHRva2VuKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGSVJFQkFTRSA9PiBNZXNzYWdlID0+IFwiLCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XG4gICAgICAgICAgICAgICAgICAgIC8qdGhhdC52YWxpZGF0ZVByZXZpb3VzTG9naW4obWVzc2FnZSk7Ki9cbiAgICAgICAgICAgICAgICAgICAgdGhhdC5hcHBTZXR0aW5nc1NlcnZpY2Uuc2V0UHVzaE5vdGlmaWNhdGlvbihtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5idXNTZXJ2aWNlLmJyb2FkY2FzdChcImNlbnRyYWwtbm90aWZpY2F0aW9uXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAvKnRoYXQucm91dGVyLm5hdmlnYXRlKFtcIi9jbGllbnQvdHJhY2tpbmdcIiwgMTIyXSk7Ki9cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBlcnNpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZJUkVCQVNFID0+IFN0YXRlID0+IFwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZJUkVCQVNFID0+IGluaXQgZG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5nZXRUb2tlbigpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRklSRUJBU0UgPT4gaW5pdCBlcnJvciA9PiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICBnZXRUb2tlbigpIHtcbiAgICAgICAgbGV0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG4gICAgICAgIGZpcmViYXNlLmdldEN1cnJlbnRQdXNoVG9rZW4oKS50aGVuKCh0b2tlbjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZJUkVCQVNFID0+IEN1cnJlbnQgcHVzaCB0b2tlbjogXCIgKyB0b2tlbik7XG4gICAgICAgICAgICB0aGlzLmFwcFNldHRpbmdzU2VydmljZS5zZXRUb2tlbih0b2tlbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qY2hlY2tOb3RpZmljYXRpb24oKSB7XG4gICAgICAgIHRoaXMuYnVzU2VydmljZS5zdWJzY3JpYmUoXCJjZW50cmFsLW5vdGlmaWNhdGlvblwiLCAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gcmVjaWV2ZWQgPT4gbWVzc2FnZSA9PiBcIiwgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICAgICAgICAgICAgLy90aGlzLnZhbGlkYXRlUHJldmlvdXNMb2dpbihtZXNzYWdlKTtcbiAgICAgICAgICAgIHRoaXMuYXBwU2V0dGluZ3NTZXJ2aWNlLnNldFB1c2hOb3RpZmljYXRpb24obWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH0qL1xuXG4gICAgLyp2YWxpZGF0ZVByZXZpb3VzTG9naW4obWVzc2FnZTogRmlyZWJhc2VQb3N0KSB7XG4gICAgICAgIGlmICh0aGlzLmFwcFNldHRpbmdzU2VydmljZS5pc0xvZ2dlZCgpKSB7XG4gICAgICAgICAgICBsZXQgdXNlciA9IHRoaXMuYXBwU2V0dGluZ3NTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgICAgICAgIGxldCBhc3Npc3RhbmNlID0gdGhpcy5hcHBTZXR0aW5nc1NlcnZpY2UuZ2V0QXNzaXN0YW5jZSgpO1xuICAgICAgICAgICAgdGhpcy5sb2dpblNlcnZpY2Uuc2V0VXNlcih1c2VyKTtcbiAgICAgICAgICAgIGlmIChhc3Npc3RhbmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5kYXRhLnN0YXRlID09PSBcIkFURU5ESUVORE9cIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlZGlyZWN0aW5nIHRvIHRyYWNraW5nIHdpdGggaWQgPT4gXCIsIG1lc3NhZ2UuZGF0YS5hc3Npc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2xpZW50L3RyYWNraW5nXCIsIG1lc3NhZ2UuZGF0YS5hc3Npc3RhbmNlXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RoaW5nIGhhcHBlbnMganVzdCBzaW1wbGUgbm90aWZpY2F0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jbGllbnQvcmVwb3J0XCJdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9Ki9cbn1cbiJdfQ==