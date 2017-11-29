"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var bus_service_1 = require("../../../shared/services/bus.service");
var WaitingComponent = (function () {
    function WaitingComponent(route, router, busService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.busService = busService;
        this.title = 'Espere un momento...';
        this.route.params.subscribe(function (params) {
            _this.type = +params['id'];
            console.log(_this.type);
        });
        this.getNotifications();
    }
    WaitingComponent.prototype.getNotifications = function () {
        var _this = this;
        this.busService.subscribe("central-notification", function (data) {
            console.log("Notification recieved => ", data);
            var recievedData = data.data;
            if (recievedData) {
                if (recievedData.state === "ATENDIENDO") {
                    console.log("Notification redirectioning result => Assistance => ", recievedData.assistance);
                    _this.router.navigate(["/client/tracking", recievedData.assistance]);
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
            bus_service_1.BusService])
    ], WaitingComponent);
    return WaitingComponent;
}());
exports.WaitingComponent = WaitingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FpdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWl0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCwwQ0FBdUQ7QUFFdkQsb0VBQWdFO0FBVWhFO0lBSUksMEJBQW9CLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxVQUFzQjtRQUYxQyxpQkFVQztRQVZtQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUV0QyxJQUFJLENBQUMsS0FBSyxHQUFHLHNCQUFzQixDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDOUIsS0FBSSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCwyQ0FBZ0IsR0FBaEI7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLFVBQUMsSUFBSTtZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9DLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDL0IsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDZixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUM7b0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0RBQXNELEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUM3RixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUN4RSxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQTNCUSxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3pDLENBQUM7eUNBTTZCLHVCQUFjO1lBQ2IsZUFBTTtZQUNGLHdCQUFVO09BTmpDLGdCQUFnQixDQTZCNUI7SUFBRCx1QkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7QnVzU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9idXMuc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhcHAtd2FpdGluZycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3dhaXRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3dhaXRpbmcuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgV2FpdGluZ0NvbXBvbmVudCB7XG4gICAgdHlwZTogbnVtYmVyO1xuICAgIHRpdGxlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYnVzU2VydmljZTogQnVzU2VydmljZSkge1xuXG4gICAgICAgIHRoaXMudGl0bGUgPSAnRXNwZXJlIHVuIG1vbWVudG8uLi4nO1xuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9ICtwYXJhbXNbJ2lkJ107XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnR5cGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb25zKCk7XG4gICAgfVxuXG4gICAgZ2V0Tm90aWZpY2F0aW9ucygpIHtcbiAgICAgICAgdGhpcy5idXNTZXJ2aWNlLnN1YnNjcmliZShcImNlbnRyYWwtbm90aWZpY2F0aW9uXCIsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbiByZWNpZXZlZCA9PiBcIiwgZGF0YSk7XG4gICAgICAgICAgICBjb25zdCByZWNpZXZlZERhdGEgPSBkYXRhLmRhdGE7XG4gICAgICAgICAgICBpZiAocmVjaWV2ZWREYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlY2lldmVkRGF0YS5zdGF0ZSA9PT0gXCJBVEVORElFTkRPXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gcmVkaXJlY3Rpb25pbmcgcmVzdWx0ID0+IEFzc2lzdGFuY2UgPT4gXCIsIHJlY2lldmVkRGF0YS5hc3Npc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NsaWVudC90cmFja2luZ1wiLCByZWNpZXZlZERhdGEuYXNzaXN0YW5jZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbn1cbiJdfQ==