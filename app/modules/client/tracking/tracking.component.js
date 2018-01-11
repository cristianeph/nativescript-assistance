"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tracking_service_1 = require("../../../shared/services/tracking.service");
var app = require("tns-core-modules/application");
var router_1 = require("@angular/router");
var user_class_1 = require("../../../shared/classes/user.class");
var assistance_service_1 = require("../../../shared/services/assistance.service");
var user_service_1 = require("../../../shared/services/user.service");
var page_1 = require("tns-core-modules/ui/page");
var nativescript_angular_1 = require("nativescript-angular");
var TrackingComponent = (function () {
    function TrackingComponent(route, router, page, trackingService, assistanceService, userService, routerExtension, ngZone) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.page = page;
        this.trackingService = trackingService;
        this.assistanceService = assistanceService;
        this.userService = userService;
        this.routerExtension = routerExtension;
        this.ngZone = ngZone;
        this.title = 'Listo, espere un momento...';
        this.route.params.subscribe(function (params) {
            _this.id = +params['assistanceid'];
            console.log(_this.id);
            _this.getAssistance(_this.id);
        });
    }
    TrackingComponent.prototype.pageLoaded = function () {
        this.page.actionBarHidden = true;
        if (app.android) {
            app.android.on(app.AndroidApplication.activityBackPressedEvent, this.refuseBack);
        }
        /*this.list = this.trackingService.getItems()*/
        this.userWorker = new user_class_1.User(0, '', '', '', '', '', '', '', null);
        this.userWorker.firstnames = '';
        this.userWorker.lastnames = '';
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
    TrackingComponent.prototype.updateAssistance = function () {
        var _this = this;
        this.assistance.state = "ATENDIDO";
        this.assistanceService.update(this.assistance).subscribe(function (data) {
            console.log("Assistance => Finished => Success =>", JSON.stringify(data));
            _this.routerExtension.navigate(["/client/report"]);
        }, function (error) {
            console.log("Assistance => Finished => Error =>", JSON.stringify(error));
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
            page_1.Page,
            tracking_service_1.TrackingService,
            assistance_service_1.AssistanceService,
            user_service_1.UserService,
            nativescript_angular_1.RouterExtensions,
            core_1.NgZone])
    ], TrackingComponent);
    return TrackingComponent;
}());
exports.TrackingComponent = TrackingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhY2tpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELDhFQUEwRTtBQUUxRSxrREFBb0Q7QUFDcEQsMENBQXVEO0FBRXZELGlFQUF3RDtBQUN4RCxrRkFBOEU7QUFDOUUsc0VBQWtFO0FBQ2xFLGlEQUE4QztBQUM5Qyw2REFBc0Q7QUFRdEQ7SUFPSSwyQkFBb0IsS0FBcUIsRUFDckIsTUFBYyxFQUNkLElBQVUsRUFDVixlQUFnQyxFQUNoQyxpQkFBb0MsRUFDcEMsV0FBd0IsRUFDeEIsZUFBaUMsRUFDakMsTUFBYztRQVBsQyxpQkFjQztRQWRtQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUNqQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsNkJBQTZCLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUM5QixLQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUs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Q0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQS9FUSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQzFDLENBQUM7eUNBUTZCLHVCQUFjO1lBQ2IsZUFBTTtZQUNSLFdBQUk7WUFDTyxrQ0FBZTtZQUNiLHNDQUFpQjtZQUN2QiwwQkFBVztZQUNQLHVDQUFnQjtZQUN6QixhQUFNO09BZHpCLGlCQUFpQixDQWdGN0I7SUFBRCx3QkFBQztDQUFBLEFBaEZELElBZ0ZDO0FBaEZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmFja2luZ1NlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy90cmFja2luZy5zZXJ2aWNlJztcbmltcG9ydCB7VHJhY2tpbmd9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL3RyYWNraW5nLmNsYXNzJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7QXNzaXN0YW5jZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NsYXNzZXMvYXNzaXN0YW5jZS5jbGFzcyc7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL3VzZXIuY2xhc3MnO1xuaW1wb3J0IHtBc3Npc3RhbmNlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2Fzc2lzdGFuY2Uuc2VydmljZSc7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC10cmFja2luZycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RyYWNraW5nLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi90cmFja2luZy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVHJhY2tpbmdDb21wb25lbnQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbGlzdDogQXJyYXk8VHJhY2tpbmc+O1xuICAgIGFzc2lzdGFuY2U6IEFzc2lzdGFuY2U7XG4gICAgdXNlcldvcmtlcjogVXNlcjtcbiAgICBpZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0cmFja2luZ1NlcnZpY2U6IFRyYWNraW5nU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFzc2lzdGFuY2VTZXJ2aWNlOiBBc3Npc3RhbmNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSAnTGlzdG8sIGVzcGVyZSB1biBtb21lbnRvLi4uJztcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmlkID0gK3BhcmFtc1snYXNzaXN0YW5jZWlkJ107XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0QXNzaXN0YW5jZSh0aGlzLmlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGFnZUxvYWRlZCgpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIGlmIChhcHAuYW5kcm9pZCkge1xuICAgICAgICAgICAgYXBwLmFuZHJvaWQub24oYXBwLkFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsIHRoaXMucmVmdXNlQmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgLyp0aGlzLmxpc3QgPSB0aGlzLnRyYWNraW5nU2VydmljZS5nZXRJdGVtcygpKi9cbiAgICAgICAgdGhpcy51c2VyV29ya2VyID0gbmV3IFVzZXIoMCwgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsIG51bGwpO1xuICAgICAgICB0aGlzLnVzZXJXb3JrZXIuZmlyc3RuYW1lcyA9ICcnO1xuICAgICAgICB0aGlzLnVzZXJXb3JrZXIubGFzdG5hbWVzID0gJyc7XG4gICAgfVxuXG4gICAgcGFnZVVubG9hZGVkKCkge1xuICAgICAgICBpZiAoYXBwLmFuZHJvaWQpIHtcbiAgICAgICAgICAgIGFwcC5hbmRyb2lkLm9mZihhcHAuQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgdGhpcy5yZWZ1c2VCYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFzc2lzdGFuY2UoaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFzc2lzdGFuY2VTZXJ2aWNlLmZpbmQoaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3Npc3RhbmNlIGRhdGEgcmVjZWl2ZWQgPT4gJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXNzaXN0YW5jZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5pbmZvV29ya2VyKHRoaXMuYXNzaXN0YW5jZS53b3JrZXIuaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29ya2VyIGRhdGEgcmVjZWl2ZWQgPT4gJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRVc2VyRGF0YShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHVwZGF0ZUFzc2lzdGFuY2UoKSB7XG4gICAgICAgIHRoaXMuYXNzaXN0YW5jZS5zdGF0ZSA9IFwiQVRFTkRJRE9cIjtcbiAgICAgICAgdGhpcy5hc3Npc3RhbmNlU2VydmljZS51cGRhdGUodGhpcy5hc3Npc3RhbmNlKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzaXN0YW5jZSA9PiBGaW5pc2hlZCA9PiBTdWNjZXNzID0+XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbi5uYXZpZ2F0ZShbXCIvY2xpZW50L3JlcG9ydFwiXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3Npc3RhbmNlID0+IEZpbmlzaGVkID0+IEVycm9yID0+XCIsIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBzZXRVc2VyRGF0YSh1c2VyV29ya2VyOiBVc2VyKSB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJXb3JrZXIuZmlyc3RuYW1lcyA9IHVzZXJXb3JrZXIuZmlyc3RuYW1lcztcbiAgICAgICAgICAgIHRoaXMudXNlcldvcmtlci5sYXN0bmFtZXMgPSB1c2VyV29ya2VyLmxhc3RuYW1lcztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlcldvcmtlci5maXJzdG5hbWVzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlcldvcmtlci5sYXN0bmFtZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWZ1c2VCYWNrKGFyZ3MpIHtcbiAgICAgICAgYXJncy5jYW5jZWwgPSB0cnVlO1xuICAgIH1cbn1cbiJdfQ==