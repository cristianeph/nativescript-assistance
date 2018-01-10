"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var bus_service_1 = require("../../../shared/services/bus.service");
var application_1 = require("application");
var application_settings_service_1 = require("../../../shared/services/application-settings.service");
var nativescript_angular_1 = require("nativescript-angular");
var page_1 = require("tns-core-modules/ui/page");
var WaitingComponent = (function () {
    function WaitingComponent(route, router, page, busService, appSettingServices, routerExtension) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.page = page;
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
        this.page.actionBarHidden = true;
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
            page_1.Page,
            bus_service_1.BusService,
            application_settings_service_1.ApplicationSettingsService,
            nativescript_angular_1.RouterExtensions])
    ], WaitingComponent);
    return WaitingComponent;
}());
exports.WaitingComponent = WaitingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FpdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWl0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3QztBQUN4QywwQ0FBdUQ7QUFFdkQsb0VBQWdFO0FBQ2hFLDJDQUFtRjtBQUNuRixzR0FBaUc7QUFDakcsNkRBQXNEO0FBQ3RELGlEQUE4QztBQVU5QztJQUtJLDBCQUFvQixLQUFxQixFQUNyQixNQUFjLEVBQ2QsSUFBVSxFQUNWLFVBQXNCLEVBQ3RCLGtCQUE4QyxFQUM5QyxlQUFpQztRQUxyRCxpQkFjQztRQWRtQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUE0QjtRQUM5QyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxzQkFBc0IsQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JELENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxxQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUNJLGdCQUFhLENBQUMseUJBQVcsRUFBRSxVQUFDLElBQTBCO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtZQUM5QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDZixzRkFBc0Y7Z0JBQ3RGLHdHQUF3RztnQkFDeEcsOEdBQThHO2dCQUM5Ryw4Q0FBOEM7Z0JBQzlDLG9EQUFvRDtnQkFDcEQsb0dBQW9HO1lBQ3hHLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDJDQUFnQixHQUFoQjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsVUFBQyxJQUFJO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQy9FLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDL0IsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDZixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUM7b0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNoRixLQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztvQkFDakMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxLQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDdkgsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFyRFEsZ0JBQWdCO1FBUDVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDO3lDQU82Qix1QkFBYztZQUNiLGVBQU07WUFDUixXQUFJO1lBQ0Usd0JBQVU7WUFDRix5REFBMEI7WUFDN0IsdUNBQWdCO09BVjVDLGdCQUFnQixDQXVENUI7SUFBRCx1QkFBQztDQUFBLEFBdkRELElBdURDO0FBdkRZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge0J1c1NlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYnVzLnNlcnZpY2VcIjtcbmltcG9ydCB7b24gYXMgYXBwbGljYXRpb25PbiwgcmVzdW1lRXZlbnQsIEFwcGxpY2F0aW9uRXZlbnREYXRhfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7QXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXBwbGljYXRpb24tc2V0dGluZ3Muc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhcHAtd2FpdGluZycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3dhaXRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3dhaXRpbmcuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgV2FpdGluZ0NvbXBvbmVudCB7XG4gICAgdHlwZTogbnVtYmVyO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgcmVjaWV2ZWREYXRhOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJ1c1NlcnZpY2U6IEJ1c1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhcHBTZXR0aW5nU2VydmljZXM6IEFwcGxpY2F0aW9uU2V0dGluZ3NTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSAnRXNwZXJlIHVuIG1vbWVudG8uLi4nO1xuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSArcGFyYW1zWydpZCddO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFyYW0gaW5jb21pbmcgPT4gXCIsICtwYXJhbXNbJ2lkJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb25zKCk7XG4gICAgfVxuXG4gICAgcGFnZUxvYWRlZCgpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuYXBwTGlmZUV2ZW50cygpO1xuICAgIH1cblxuICAgIGFwcExpZmVFdmVudHMoKSB7XG4gICAgICAgIGFwcGxpY2F0aW9uT24ocmVzdW1lRXZlbnQsIChhcmdzOiBBcHBsaWNhdGlvbkV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bWUgPT4gRXZlbnRcIilcbiAgICAgICAgICAgIGlmIChhcmdzLmFuZHJvaWQpIHtcbiAgICAgICAgICAgICAgICAvKnRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9waW4nXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUsIGFuaW1hdGVkOiBmYWxzZSB9KTsqL1xuICAgICAgICAgICAgICAgIC8qY29uc29sZS5sb2coXCJQdXNoIG5vdGlmaWNhdGlvbiA9PiBcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5hcHBTZXR0aW5nU2VydmljZXMuZ2V0UHVzaE5vdGlmaWNhdGlvbigpKSk7Ki9cbiAgICAgICAgICAgICAgICAvKnRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jbGllbnQvdHJhY2tpbmdcIiwgdGhpcy5hcHBTZXR0aW5nU2VydmljZXMuZ2V0UHVzaE5vdGlmaWNhdGlvbigpLmRhdGEuYXNzaXN0YW5jZV0pOyovXG4gICAgICAgICAgICAgICAgLyp0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2xpZW50L3dhaXRpbmdcIl0pOyovXG4gICAgICAgICAgICAgICAgLyp0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2xpZW50L3RyYWNraW5nXCIsIDEyMl0pOyovXG4gICAgICAgICAgICAgICAgLyp0aGlzLnJvdXRlckV4dGVuc2lvbi5uYXZpZ2F0ZShbXCIvY2xpZW50L3RyYWNraW5nXCIsIDEyMl0sIHtjbGVhckhpc3Rvcnk6IHRydWUsIGFuaW1hdGVkOiBmYWxzZX0pOyovXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MuaW9zKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldE5vdGlmaWNhdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuYnVzU2VydmljZS5zdWJzY3JpYmUoXCJjZW50cmFsLW5vdGlmaWNhdGlvblwiLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gcmVjaWV2ZWQgPT4gV2FpdGluZyB2aWV3ID0+IFwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICBjb25zdCByZWNpZXZlZERhdGEgPSBkYXRhLmRhdGE7XG4gICAgICAgICAgICBpZiAocmVjaWV2ZWREYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlY2lldmVkRGF0YS5zdGF0ZSA9PT0gXCJBVEVORElFTkRPXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWRpcmVjdGlvbmluZyByZXN1bHQgPT4gQXNzaXN0YW5jZSA9PiBcIiwgcmVjaWV2ZWREYXRhLmFzc2lzdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2lldmVkRGF0YSA9IHJlY2lldmVkRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb24ubmF2aWdhdGUoW1wiL2NsaWVudC90cmFja2luZ1wiLCB0aGlzLmFwcFNldHRpbmdTZXJ2aWNlcy5nZXRQdXNoTm90aWZpY2F0aW9uKCkuZGF0YS5hc3Npc3RhbmNlXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxufVxuIl19