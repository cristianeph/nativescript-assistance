"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var bus_service_1 = require("../../../shared/services/bus.service");
var application_1 = require("application");
var application_settings_service_1 = require("../../../shared/services/application-settings.service");
var WaitingComponent = (function () {
    function WaitingComponent(route, router, busService, appSettingServices) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.busService = busService;
        this.appSettingServices = appSettingServices;
        this.title = 'Espere un momento...';
        this.route.params.subscribe(function (params) {
            if (params) {
                _this.type = +params['id'];
                console.log("Param incoming => ", +params['id']);
            }
        });
        this.getNotifications();
    }
    WaitingComponent.prototype.pageLoaded = function () {
        this.appLifeEvents();
    };
    WaitingComponent.prototype.appLifeEvents = function () {
        var _this = this;
        application_1.on(application_1.resumeEvent, function (args) {
            console.log("Resume => Event");
            if (args.android) {
                /*this.routerExtensions.navigate(['/pin'], { clearHistory: true, animated: false });*/
                /*console.log("Push notification => ", JSON.stringify(this.appSettingServices.getPushNotification()));*/
                /*this.router.navigate(["/client/tracking", this.appSettingServices.getPushNotification().data.assistance]);*/
                /*this.router.navigate(["/client/waiting"]);*/
                _this.router.navigate(["/client/tracking", 122]);
            }
            else if (args.ios) {
            }
        });
    };
    WaitingComponent.prototype.getNotifications = function () {
        this.busService.subscribe("central-notification", function (data) {
            console.log("Notification recieved => Waiting view => ", JSON.stringify(data));
            //this.router.navigate(["/client/tracking", this.appSettingServices.getPushNotification().data.assistance]);
            /*const recievedData = data.data;
            if (recievedData) {
                if (recievedData.state === "ATENDIENDO") {
                    console.log("Redirectioning result => Assistance => ", recievedData.assistance);
                    this.recievedData = recievedData;

                }
            }*/
        });
    };
    WaitingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-waiting',
            templateUrl: './waiting.component.html',
            styleUrls: ['./waiting.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            bus_service_1.BusService,
            application_settings_service_1.ApplicationSettingsService])
    ], WaitingComponent);
    return WaitingComponent;
}());
exports.WaitingComponent = WaitingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FpdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWl0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3QztBQUN4QywwQ0FBdUQ7QUFFdkQsb0VBQWdFO0FBQ2hFLDJDQUFtRjtBQUNuRixzR0FBaUc7QUFXakc7SUFLSSwwQkFBb0IsS0FBcUIsRUFDckIsTUFBYyxFQUNkLFVBQXNCLEVBQ3RCLGtCQUE4QztRQUhsRSxpQkFZQztRQVptQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTRCO1FBQzlELElBQUksQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUM5QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNULEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyRCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQscUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUFBLGlCQVlDO1FBWEcsZ0JBQWEsQ0FBQyx5QkFBVyxFQUFFLFVBQUMsSUFBMEI7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNmLHNGQUFzRjtnQkFDdEYsd0dBQXdHO2dCQUN4Ryw4R0FBOEc7Z0JBQzlHLDhDQUE4QztnQkFDOUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBRyxDQUFDO1lBQ3RELENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDJDQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLFVBQUMsSUFBSTtZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMvRSw0R0FBNEc7WUFDNUc7Ozs7Ozs7ZUFPRztRQUNQLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQWxEUSxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3pDLENBQUM7eUNBTzZCLHVCQUFjO1lBQ2IsZUFBTTtZQUNGLHdCQUFVO1lBQ0YseURBQTBCO09BUnpELGdCQUFnQixDQW9ENUI7SUFBRCx1QkFBQztDQUFBLEFBcERELElBb0RDO0FBcERZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge0J1c1NlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYnVzLnNlcnZpY2VcIjtcbmltcG9ydCB7b24gYXMgYXBwbGljYXRpb25PbiwgcmVzdW1lRXZlbnQsIEFwcGxpY2F0aW9uRXZlbnREYXRhfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7QXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXBwbGljYXRpb24tc2V0dGluZ3Muc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXBwLXdhaXRpbmcnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi93YWl0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi93YWl0aW5nLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFdhaXRpbmdDb21wb25lbnQge1xuICAgIHR5cGU6IG51bWJlcjtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHJlY2lldmVkRGF0YTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJ1c1NlcnZpY2U6IEJ1c1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhcHBTZXR0aW5nU2VydmljZXM6IEFwcGxpY2F0aW9uU2V0dGluZ3NTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSAnRXNwZXJlIHVuIG1vbWVudG8uLi4nO1xuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSArcGFyYW1zWydpZCddO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFyYW0gaW5jb21pbmcgPT4gXCIsICtwYXJhbXNbJ2lkJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb25zKCk7XG4gICAgfVxuXG4gICAgcGFnZUxvYWRlZCgpIHtcbiAgICAgICAgdGhpcy5hcHBMaWZlRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgYXBwTGlmZUV2ZW50cygpIHtcbiAgICAgICAgYXBwbGljYXRpb25PbihyZXN1bWVFdmVudCwgKGFyZ3M6IEFwcGxpY2F0aW9uRXZlbnREYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3VtZSA9PiBFdmVudFwiKVxuICAgICAgICAgICAgaWYgKGFyZ3MuYW5kcm9pZCkge1xuICAgICAgICAgICAgICAgIC8qdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3BpbiddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSwgYW5pbWF0ZWQ6IGZhbHNlIH0pOyovXG4gICAgICAgICAgICAgICAgLypjb25zb2xlLmxvZyhcIlB1c2ggbm90aWZpY2F0aW9uID0+IFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmFwcFNldHRpbmdTZXJ2aWNlcy5nZXRQdXNoTm90aWZpY2F0aW9uKCkpKTsqL1xuICAgICAgICAgICAgICAgIC8qdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NsaWVudC90cmFja2luZ1wiLCB0aGlzLmFwcFNldHRpbmdTZXJ2aWNlcy5nZXRQdXNoTm90aWZpY2F0aW9uKCkuZGF0YS5hc3Npc3RhbmNlXSk7Ki9cbiAgICAgICAgICAgICAgICAvKnRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jbGllbnQvd2FpdGluZ1wiXSk7Ki9cbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2xpZW50L3RyYWNraW5nXCIsIDEyMl0sICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MuaW9zKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldE5vdGlmaWNhdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuYnVzU2VydmljZS5zdWJzY3JpYmUoXCJjZW50cmFsLW5vdGlmaWNhdGlvblwiLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gcmVjaWV2ZWQgPT4gV2FpdGluZyB2aWV3ID0+IFwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jbGllbnQvdHJhY2tpbmdcIiwgdGhpcy5hcHBTZXR0aW5nU2VydmljZXMuZ2V0UHVzaE5vdGlmaWNhdGlvbigpLmRhdGEuYXNzaXN0YW5jZV0pO1xuICAgICAgICAgICAgLypjb25zdCByZWNpZXZlZERhdGEgPSBkYXRhLmRhdGE7XG4gICAgICAgICAgICBpZiAocmVjaWV2ZWREYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlY2lldmVkRGF0YS5zdGF0ZSA9PT0gXCJBVEVORElFTkRPXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWRpcmVjdGlvbmluZyByZXN1bHQgPT4gQXNzaXN0YW5jZSA9PiBcIiwgcmVjaWV2ZWREYXRhLmFzc2lzdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2lldmVkRGF0YSA9IHJlY2lldmVkRGF0YTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0qL1xuICAgICAgICB9KVxuICAgIH1cblxufVxuIl19