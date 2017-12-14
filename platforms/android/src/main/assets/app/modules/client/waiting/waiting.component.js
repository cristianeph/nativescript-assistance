"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var bus_service_1 = require("../../../shared/services/bus.service");
var application_settings_service_1 = require("../../../shared/services/application-settings.service");
var nativescript_angular_1 = require("nativescript-angular");
var WaitingComponent = (function () {
    function WaitingComponent(route, router, busService, appSettingServices, routerExtension) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.busService = busService;
        this.appSettingServices = appSettingServices;
        this.routerExtension = routerExtension;
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
        /*applicationOn(resumeEvent, (args: ApplicationEventData) => {
            console.log("Resume => Event")
            if (args.android) {*/
        /*this.routerExtensions.navigate(['/pin'], { clearHistory: true, animated: false });*/
        /*console.log("Push notification => ", JSON.stringify(this.appSettingServices.getPushNotification()));*/
        /*this.router.navigate(["/client/tracking", this.appSettingServices.getPushNotification().data.assistance]);*/
        /*this.router.navigate(["/client/waiting"]);*/
        /*this.router.navigate(["/client/tracking", 122]);*/
        /*this.routerExtension.navigate(["/client/tracking", 122], {clearHistory: true, animated: false});*/
        /*} else if (args.ios) {
        }
    });*/
    };
    WaitingComponent.prototype.getNotifications = function () {
        var _this = this;
        this.busService.subscribe("central-notification", function (data) {
            console.log("Notification recieved => Waiting view => ", JSON.stringify(data));
            var recievedData = data.data;
            if (recievedData) {
                if (recievedData.state === "ATENDIENDO") {
                    console.log("Redirectioning result => Assistance => ", recievedData.assistance);
                    _this.recievedData = recievedData;
                    _this.routerExtension.navigate(["/client/tracking", _this.appSettingServices.getPushNotification().data.assistance]);
                }
            }
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
            application_settings_service_1.ApplicationSettingsService,
            nativescript_angular_1.RouterExtensions])
    ], WaitingComponent);
    return WaitingComponent;
}());
exports.WaitingComponent = WaitingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FpdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWl0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3QztBQUN4QywwQ0FBdUQ7QUFFdkQsb0VBQWdFO0FBRWhFLHNHQUFpRztBQUNqRyw2REFBc0Q7QUFVdEQ7SUFLSSwwQkFBb0IsS0FBcUIsRUFDckIsTUFBYyxFQUNkLFVBQXNCLEVBQ3RCLGtCQUE4QyxFQUM5QyxlQUFpQztRQUpyRCxpQkFhQztRQWJtQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTRCO1FBQzlDLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLHNCQUFzQixDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDOUIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDVCxLQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckQsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELHdDQUFhLEdBQWI7UUFDSTs7aUNBRXlCO1FBQ2pCLHNGQUFzRjtRQUN0Rix3R0FBd0c7UUFDeEcsOEdBQThHO1FBQzlHLDhDQUE4QztRQUM5QyxvREFBb0Q7UUFDcEQsb0dBQW9HO1FBQ3hHOztTQUVDO0lBQ1QsQ0FBQztJQUVELDJDQUFnQixHQUFoQjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsVUFBQyxJQUFJO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQy9FLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDL0IsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDZixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUM7b0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNoRixLQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztvQkFDakMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxLQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDdkgsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFuRFEsZ0JBQWdCO1FBUDVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDO3lDQU82Qix1QkFBYztZQUNiLGVBQU07WUFDRix3QkFBVTtZQUNGLHlEQUEwQjtZQUM3Qix1Q0FBZ0I7T0FUNUMsZ0JBQWdCLENBcUQ1QjtJQUFELHVCQUFDO0NBQUEsQUFyREQsSUFxREM7QUFyRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7QnVzU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9idXMuc2VydmljZVwiO1xuaW1wb3J0IHtvbiBhcyBhcHBsaWNhdGlvbk9uLCByZXN1bWVFdmVudCwgQXBwbGljYXRpb25FdmVudERhdGF9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHtBcHBsaWNhdGlvblNldHRpbmdzU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncy5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhcHAtd2FpdGluZycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3dhaXRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3dhaXRpbmcuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgV2FpdGluZ0NvbXBvbmVudCB7XG4gICAgdHlwZTogbnVtYmVyO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgcmVjaWV2ZWREYXRhOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYnVzU2VydmljZTogQnVzU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFwcFNldHRpbmdTZXJ2aWNlczogQXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb246IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9ICdFc3BlcmUgdW4gbW9tZW50by4uLic7XG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9ICtwYXJhbXNbJ2lkJ107XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQYXJhbSBpbmNvbWluZyA9PiBcIiwgK3BhcmFtc1snaWQnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdldE5vdGlmaWNhdGlvbnMoKTtcbiAgICB9XG5cbiAgICBwYWdlTG9hZGVkKCkge1xuICAgICAgICB0aGlzLmFwcExpZmVFdmVudHMoKTtcbiAgICB9XG5cbiAgICBhcHBMaWZlRXZlbnRzKCkge1xuICAgICAgICAvKmFwcGxpY2F0aW9uT24ocmVzdW1lRXZlbnQsIChhcmdzOiBBcHBsaWNhdGlvbkV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bWUgPT4gRXZlbnRcIilcbiAgICAgICAgICAgIGlmIChhcmdzLmFuZHJvaWQpIHsqL1xuICAgICAgICAgICAgICAgIC8qdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3BpbiddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSwgYW5pbWF0ZWQ6IGZhbHNlIH0pOyovXG4gICAgICAgICAgICAgICAgLypjb25zb2xlLmxvZyhcIlB1c2ggbm90aWZpY2F0aW9uID0+IFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmFwcFNldHRpbmdTZXJ2aWNlcy5nZXRQdXNoTm90aWZpY2F0aW9uKCkpKTsqL1xuICAgICAgICAgICAgICAgIC8qdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NsaWVudC90cmFja2luZ1wiLCB0aGlzLmFwcFNldHRpbmdTZXJ2aWNlcy5nZXRQdXNoTm90aWZpY2F0aW9uKCkuZGF0YS5hc3Npc3RhbmNlXSk7Ki9cbiAgICAgICAgICAgICAgICAvKnRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jbGllbnQvd2FpdGluZ1wiXSk7Ki9cbiAgICAgICAgICAgICAgICAvKnRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jbGllbnQvdHJhY2tpbmdcIiwgMTIyXSk7Ki9cbiAgICAgICAgICAgICAgICAvKnRoaXMucm91dGVyRXh0ZW5zaW9uLm5hdmlnYXRlKFtcIi9jbGllbnQvdHJhY2tpbmdcIiwgMTIyXSwge2NsZWFySGlzdG9yeTogdHJ1ZSwgYW5pbWF0ZWQ6IGZhbHNlfSk7Ki9cbiAgICAgICAgICAgIC8qfSBlbHNlIGlmIChhcmdzLmlvcykge1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTsqL1xuICAgIH1cblxuICAgIGdldE5vdGlmaWNhdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuYnVzU2VydmljZS5zdWJzY3JpYmUoXCJjZW50cmFsLW5vdGlmaWNhdGlvblwiLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gcmVjaWV2ZWQgPT4gV2FpdGluZyB2aWV3ID0+IFwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICBjb25zdCByZWNpZXZlZERhdGEgPSBkYXRhLmRhdGE7XG4gICAgICAgICAgICBpZiAocmVjaWV2ZWREYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlY2lldmVkRGF0YS5zdGF0ZSA9PT0gXCJBVEVORElFTkRPXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWRpcmVjdGlvbmluZyByZXN1bHQgPT4gQXNzaXN0YW5jZSA9PiBcIiwgcmVjaWV2ZWREYXRhLmFzc2lzdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2lldmVkRGF0YSA9IHJlY2lldmVkRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb24ubmF2aWdhdGUoW1wiL2NsaWVudC90cmFja2luZ1wiLCB0aGlzLmFwcFNldHRpbmdTZXJ2aWNlcy5nZXRQdXNoTm90aWZpY2F0aW9uKCkuZGF0YS5hc3Npc3RhbmNlXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxufVxuIl19