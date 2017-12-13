"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var bus_service_1 = require("../../../shared/services/bus.service");
var application_1 = require("application");
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
        application_1.on(application_1.resumeEvent, function (args) {
            console.log("Resume => Event");
            if (args.android) {
                /*this.routerExtensions.navigate(['/pin'], { clearHistory: true, animated: false });*/
                /*console.log("Push notification => ", JSON.stringify(this.appSettingServices.getPushNotification()));*/
                /*this.router.navigate(["/client/tracking", this.appSettingServices.getPushNotification().data.assistance]);*/
                /*this.router.navigate(["/client/waiting"]);*/
                /*this.router.navigate(["/client/tracking", 122]);*/
                /*this.routerExtension.navigate(["/client/tracking", 122], {clearHistory: true, animated: false});*/
            }
            else if (args.ios) {
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FpdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWl0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3QztBQUN4QywwQ0FBdUQ7QUFFdkQsb0VBQWdFO0FBQ2hFLDJDQUFtRjtBQUNuRixzR0FBaUc7QUFDakcsNkRBQXNEO0FBVXREO0lBS0ksMEJBQW9CLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxVQUFzQixFQUN0QixrQkFBOEMsRUFDOUMsZUFBaUM7UUFKckQsaUJBYUM7UUFibUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUE0QjtRQUM5QyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxzQkFBc0IsQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JELENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxxQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx3Q0FBYSxHQUFiO1FBQ0ksZ0JBQWEsQ0FBQyx5QkFBVyxFQUFFLFVBQUMsSUFBMEI7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNmLHNGQUFzRjtnQkFDdEYsd0dBQXdHO2dCQUN4Ryw4R0FBOEc7Z0JBQzlHLDhDQUE4QztnQkFDOUMsb0RBQW9EO2dCQUNwRCxvR0FBb0c7WUFDeEcsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMkNBQWdCLEdBQWhCO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxVQUFDLElBQUk7WUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDL0UsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMvQixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNmLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ2hGLEtBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO29CQUNqQyxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUN2SCxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQW5EUSxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3pDLENBQUM7eUNBTzZCLHVCQUFjO1lBQ2IsZUFBTTtZQUNGLHdCQUFVO1lBQ0YseURBQTBCO1lBQzdCLHVDQUFnQjtPQVQ1QyxnQkFBZ0IsQ0FxRDVCO0lBQUQsdUJBQUM7Q0FBQSxBQXJERCxJQXFEQztBQXJEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHtCdXNTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2J1cy5zZXJ2aWNlXCI7XG5pbXBvcnQge29uIGFzIGFwcGxpY2F0aW9uT24sIHJlc3VtZUV2ZW50LCBBcHBsaWNhdGlvbkV2ZW50RGF0YX0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQge0FwcGxpY2F0aW9uU2V0dGluZ3NTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwcGxpY2F0aW9uLXNldHRpbmdzLnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC13YWl0aW5nJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vd2FpdGluZy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vd2FpdGluZy5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBXYWl0aW5nQ29tcG9uZW50IHtcbiAgICB0eXBlOiBudW1iZXI7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICByZWNpZXZlZERhdGE6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBidXNTZXJ2aWNlOiBCdXNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXBwU2V0dGluZ1NlcnZpY2VzOiBBcHBsaWNhdGlvblNldHRpbmdzU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbjogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICB0aGlzLnRpdGxlID0gJ0VzcGVyZSB1biBtb21lbnRvLi4uJztcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID0gK3BhcmFtc1snaWQnXTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhcmFtIGluY29taW5nID0+IFwiLCArcGFyYW1zWydpZCddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9ucygpO1xuICAgIH1cblxuICAgIHBhZ2VMb2FkZWQoKSB7XG4gICAgICAgIHRoaXMuYXBwTGlmZUV2ZW50cygpO1xuICAgIH1cblxuICAgIGFwcExpZmVFdmVudHMoKSB7XG4gICAgICAgIGFwcGxpY2F0aW9uT24ocmVzdW1lRXZlbnQsIChhcmdzOiBBcHBsaWNhdGlvbkV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bWUgPT4gRXZlbnRcIilcbiAgICAgICAgICAgIGlmIChhcmdzLmFuZHJvaWQpIHtcbiAgICAgICAgICAgICAgICAvKnRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9waW4nXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUsIGFuaW1hdGVkOiBmYWxzZSB9KTsqL1xuICAgICAgICAgICAgICAgIC8qY29uc29sZS5sb2coXCJQdXNoIG5vdGlmaWNhdGlvbiA9PiBcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5hcHBTZXR0aW5nU2VydmljZXMuZ2V0UHVzaE5vdGlmaWNhdGlvbigpKSk7Ki9cbiAgICAgICAgICAgICAgICAvKnRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jbGllbnQvdHJhY2tpbmdcIiwgdGhpcy5hcHBTZXR0aW5nU2VydmljZXMuZ2V0UHVzaE5vdGlmaWNhdGlvbigpLmRhdGEuYXNzaXN0YW5jZV0pOyovXG4gICAgICAgICAgICAgICAgLyp0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2xpZW50L3dhaXRpbmdcIl0pOyovXG4gICAgICAgICAgICAgICAgLyp0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2xpZW50L3RyYWNraW5nXCIsIDEyMl0pOyovXG4gICAgICAgICAgICAgICAgLyp0aGlzLnJvdXRlckV4dGVuc2lvbi5uYXZpZ2F0ZShbXCIvY2xpZW50L3RyYWNraW5nXCIsIDEyMl0sIHtjbGVhckhpc3Rvcnk6IHRydWUsIGFuaW1hdGVkOiBmYWxzZX0pOyovXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MuaW9zKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldE5vdGlmaWNhdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuYnVzU2VydmljZS5zdWJzY3JpYmUoXCJjZW50cmFsLW5vdGlmaWNhdGlvblwiLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gcmVjaWV2ZWQgPT4gV2FpdGluZyB2aWV3ID0+IFwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICBjb25zdCByZWNpZXZlZERhdGEgPSBkYXRhLmRhdGE7XG4gICAgICAgICAgICBpZiAocmVjaWV2ZWREYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlY2lldmVkRGF0YS5zdGF0ZSA9PT0gXCJBVEVORElFTkRPXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWRpcmVjdGlvbmluZyByZXN1bHQgPT4gQXNzaXN0YW5jZSA9PiBcIiwgcmVjaWV2ZWREYXRhLmFzc2lzdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2lldmVkRGF0YSA9IHJlY2lldmVkRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb24ubmF2aWdhdGUoW1wiL2NsaWVudC90cmFja2luZ1wiLCB0aGlzLmFwcFNldHRpbmdTZXJ2aWNlcy5nZXRQdXNoTm90aWZpY2F0aW9uKCkuZGF0YS5hc3Npc3RhbmNlXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxufVxuIl19