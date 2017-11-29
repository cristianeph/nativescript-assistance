"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tracking_service_1 = require("../../../shared/services/tracking.service");
var app = require("tns-core-modules/application");
var router_1 = require("@angular/router");
var user_class_1 = require("../../../shared/classes/user.class");
var assistance_service_1 = require("../../../shared/services/assistance.service");
var user_service_1 = require("../../../shared/services/user.service");
var TrackingComponent = (function () {
    function TrackingComponent(route, router, trackingService, assistanceService, userService, ngZone) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.trackingService = trackingService;
        this.assistanceService = assistanceService;
        this.userService = userService;
        this.ngZone = ngZone;
        this.title = 'Listo, espere un momento...';
        this.route.params.subscribe(function (params) {
            _this.id = +params['assistanceid'];
            console.log(_this.id);
            _this.getAssistance(_this.id);
        });
    }
    TrackingComponent.prototype.pageLoaded = function () {
        if (app.android) {
            app.android.on(app.AndroidApplication.activityBackPressedEvent, this.refuseBack);
        }
        this.list = this.trackingService.getItems();
        this.userWorker = new user_class_1.User(0, '', '', '', '', '', '', null);
        /*this.userWorker.firstnames = '';
        this.userWorker.lastnames = '';*/
    };
    TrackingComponent.prototype.pageUnloaded = function () {
        if (app.android) {
            app.android.off(app.AndroidApplication.activityBackPressedEvent, this.refuseBack);
        }
    };
    TrackingComponent.prototype.getAssistance = function (id) {
        var _this = this;
        this.assistanceService.find(id).subscribe(function (data) {
            console.log('Assistance data received => ', JSON.stringify(data));
            _this.assistance = data;
            _this.userService.infoWorker(_this.assistance.worker.id).subscribe(function (data) {
                console.log('Worker data received => ', JSON.stringify(data));
                _this.setUserData(data);
            });
        });
    };
    TrackingComponent.prototype.setUserData = function (userWorker) {
        var _this = this;
        this.ngZone.run(function () {
            _this.userWorker.firstnames = userWorker.firstnames;
            _this.userWorker.lastnames = userWorker.lastnames;
            console.log(_this.userWorker.firstnames);
            console.log(_this.userWorker.lastnames);
        });
    };
    TrackingComponent.prototype.refuseBack = function (args) {
        args.cancel = true;
    };
    TrackingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-tracking',
            templateUrl: './tracking.component.html',
            styleUrls: ['./tracking.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            tracking_service_1.TrackingService,
            assistance_service_1.AssistanceService,
            user_service_1.UserService,
            core_1.NgZone])
    ], TrackingComponent);
    return TrackingComponent;
}());
exports.TrackingComponent = TrackingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhY2tpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELDhFQUEwRTtBQUUxRSxrREFBb0Q7QUFDcEQsMENBQXVEO0FBRXZELGlFQUF3RDtBQUN4RCxrRkFBOEU7QUFDOUUsc0VBQWtFO0FBUWxFO0lBT0ksMkJBQW9CLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxpQkFBb0MsRUFDcEMsV0FBd0IsRUFDeEIsTUFBYztRQUxsQyxpQkFZQztRQVptQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLDZCQUE2QixDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDOUIsS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQ0ksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZCxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JGLENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGlCQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVEO3lDQUNpQztJQUNyQyxDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUNJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0RixDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFhLEdBQWIsVUFBYyxFQUFVO1FBQXhCLGlCQWFDO1FBWkcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3JDLFVBQUEsSUFBSTtZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDNUQsVUFBQSxJQUFJO2dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM5RCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FDSixDQUFBO1FBQ0wsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLFVBQWdCO1FBQTVCLGlCQU9DO1FBTkcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDWixLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDO1lBQ25ELEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUEvRFEsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUMxQyxDQUFDO3lDQVE2Qix1QkFBYztZQUNiLGVBQU07WUFDRyxrQ0FBZTtZQUNiLHNDQUFpQjtZQUN2QiwwQkFBVztZQUNoQixhQUFNO09BWnpCLGlCQUFpQixDQWdFN0I7SUFBRCx3QkFBQztDQUFBLEFBaEVELElBZ0VDO0FBaEVZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmFja2luZ1NlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy90cmFja2luZy5zZXJ2aWNlJztcbmltcG9ydCB7VHJhY2tpbmd9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL3RyYWNraW5nLmNsYXNzJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7QXNzaXN0YW5jZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NsYXNzZXMvYXNzaXN0YW5jZS5jbGFzcyc7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL3VzZXIuY2xhc3MnO1xuaW1wb3J0IHtBc3Npc3RhbmNlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2Fzc2lzdGFuY2Uuc2VydmljZSc7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvdXNlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC10cmFja2luZycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RyYWNraW5nLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi90cmFja2luZy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVHJhY2tpbmdDb21wb25lbnQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbGlzdDogQXJyYXk8VHJhY2tpbmc+O1xuICAgIGFzc2lzdGFuY2U6IEFzc2lzdGFuY2U7XG4gICAgdXNlcldvcmtlcjogVXNlcjtcbiAgICBpZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRyYWNraW5nU2VydmljZTogVHJhY2tpbmdTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXNzaXN0YW5jZVNlcnZpY2U6IEFzc2lzdGFuY2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9ICdMaXN0bywgZXNwZXJlIHVuIG1vbWVudG8uLi4nO1xuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSArcGFyYW1zWydhc3Npc3RhbmNlaWQnXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaWQpO1xuICAgICAgICAgICAgdGhpcy5nZXRBc3Npc3RhbmNlKHRoaXMuaWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwYWdlTG9hZGVkKCkge1xuICAgICAgICBpZiAoYXBwLmFuZHJvaWQpIHtcbiAgICAgICAgICAgIGFwcC5hbmRyb2lkLm9uKGFwcC5BbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCB0aGlzLnJlZnVzZUJhY2spO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlzdCA9IHRoaXMudHJhY2tpbmdTZXJ2aWNlLmdldEl0ZW1zKClcbiAgICAgICAgdGhpcy51c2VyV29ya2VyID0gbmV3IFVzZXIoMCwgJycsICcnLCAnJywgJycsICcnLCAnJywgbnVsbCk7XG4gICAgICAgIC8qdGhpcy51c2VyV29ya2VyLmZpcnN0bmFtZXMgPSAnJztcbiAgICAgICAgdGhpcy51c2VyV29ya2VyLmxhc3RuYW1lcyA9ICcnOyovXG4gICAgfVxuXG4gICAgcGFnZVVubG9hZGVkKCkge1xuICAgICAgICBpZiAoYXBwLmFuZHJvaWQpIHtcbiAgICAgICAgICAgIGFwcC5hbmRyb2lkLm9mZihhcHAuQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgdGhpcy5yZWZ1c2VCYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFzc2lzdGFuY2UoaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFzc2lzdGFuY2VTZXJ2aWNlLmZpbmQoaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3Npc3RhbmNlIGRhdGEgcmVjZWl2ZWQgPT4gJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXNzaXN0YW5jZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5pbmZvV29ya2VyKHRoaXMuYXNzaXN0YW5jZS53b3JrZXIuaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29ya2VyIGRhdGEgcmVjZWl2ZWQgPT4gJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRVc2VyRGF0YShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHNldFVzZXJEYXRhKHVzZXJXb3JrZXI6IFVzZXIpIHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlcldvcmtlci5maXJzdG5hbWVzID0gdXNlcldvcmtlci5maXJzdG5hbWVzO1xuICAgICAgICAgICAgdGhpcy51c2VyV29ya2VyLmxhc3RuYW1lcyA9IHVzZXJXb3JrZXIubGFzdG5hbWVzO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyV29ya2VyLmZpcnN0bmFtZXMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyV29ya2VyLmxhc3RuYW1lcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZnVzZUJhY2soYXJncykge1xuICAgICAgICBhcmdzLmNhbmNlbCA9IHRydWU7XG4gICAgfVxufVxuIl19