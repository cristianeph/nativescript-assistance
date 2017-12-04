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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhY2tpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELDhFQUEwRTtBQUUxRSxrREFBb0Q7QUFDcEQsMENBQXVEO0FBRXZELGlFQUF3RDtBQUN4RCxrRkFBOEU7QUFDOUUsc0VBQWtFO0FBUWxFO0lBT0ksMkJBQW9CLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxpQkFBb0MsRUFDcEMsV0FBd0IsRUFDeEIsTUFBYztRQUxsQyxpQkFZQztRQVptQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLDZCQUE2QixDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDOUIsS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQ0ksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZCxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JGLENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGlCQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFDSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNkLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEYsQ0FBQztJQUNMLENBQUM7SUFFRCx5Q0FBYSxHQUFiLFVBQWMsRUFBVTtRQUF4QixpQkFhQztRQVpHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUNyQyxVQUFBLElBQUk7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsRSxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQzVELFVBQUEsSUFBSTtnQkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDOUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQ0osQ0FBQTtRQUNMLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxVQUFnQjtRQUE1QixpQkFPQztRQU5HLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ1osS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQztZQUNuRCxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0NBQVUsR0FBVixVQUFXLElBQUk7UUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBL0RRLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDMUMsQ0FBQzt5Q0FRNkIsdUJBQWM7WUFDYixlQUFNO1lBQ0csa0NBQWU7WUFDYixzQ0FBaUI7WUFDdkIsMEJBQVc7WUFDaEIsYUFBTTtPQVp6QixpQkFBaUIsQ0FnRTdCO0lBQUQsd0JBQUM7Q0FBQSxBQWhFRCxJQWdFQztBQWhFWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHJhY2tpbmdTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvdHJhY2tpbmcuc2VydmljZSc7XG5pbXBvcnQge1RyYWNraW5nfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy90cmFja2luZy5jbGFzcyc7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0Fzc2lzdGFuY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL2Fzc2lzdGFuY2UuY2xhc3MnO1xuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy91c2VyLmNsYXNzJztcbmltcG9ydCB7QXNzaXN0YW5jZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hc3Npc3RhbmNlLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhcHAtdHJhY2tpbmcnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90cmFja2luZy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdHJhY2tpbmcuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRyYWNraW5nQ29tcG9uZW50IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGxpc3Q6IEFycmF5PFRyYWNraW5nPjtcbiAgICBhc3Npc3RhbmNlOiBBc3Npc3RhbmNlO1xuICAgIHVzZXJXb3JrZXI6IFVzZXI7XG4gICAgaWQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0cmFja2luZ1NlcnZpY2U6IFRyYWNraW5nU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFzc2lzdGFuY2VTZXJ2aWNlOiBBc3Npc3RhbmNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSAnTGlzdG8sIGVzcGVyZSB1biBtb21lbnRvLi4uJztcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmlkID0gK3BhcmFtc1snYXNzaXN0YW5jZWlkJ107XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0QXNzaXN0YW5jZSh0aGlzLmlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGFnZUxvYWRlZCgpIHtcbiAgICAgICAgaWYgKGFwcC5hbmRyb2lkKSB7XG4gICAgICAgICAgICBhcHAuYW5kcm9pZC5vbihhcHAuQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgdGhpcy5yZWZ1c2VCYWNrKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLnRyYWNraW5nU2VydmljZS5nZXRJdGVtcygpXG4gICAgICAgIHRoaXMudXNlcldvcmtlciA9IG5ldyBVc2VyKDAsICcnLCAnJywgJycsICcnLCAnJywgJycsIG51bGwpO1xuICAgICAgICB0aGlzLnVzZXJXb3JrZXIuZmlyc3RuYW1lcyA9ICcnO1xuICAgICAgICB0aGlzLnVzZXJXb3JrZXIubGFzdG5hbWVzID0gJyc7XG4gICAgfVxuXG4gICAgcGFnZVVubG9hZGVkKCkge1xuICAgICAgICBpZiAoYXBwLmFuZHJvaWQpIHtcbiAgICAgICAgICAgIGFwcC5hbmRyb2lkLm9mZihhcHAuQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgdGhpcy5yZWZ1c2VCYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFzc2lzdGFuY2UoaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFzc2lzdGFuY2VTZXJ2aWNlLmZpbmQoaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3Npc3RhbmNlIGRhdGEgcmVjZWl2ZWQgPT4gJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXNzaXN0YW5jZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5pbmZvV29ya2VyKHRoaXMuYXNzaXN0YW5jZS53b3JrZXIuaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29ya2VyIGRhdGEgcmVjZWl2ZWQgPT4gJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRVc2VyRGF0YShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHNldFVzZXJEYXRhKHVzZXJXb3JrZXI6IFVzZXIpIHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlcldvcmtlci5maXJzdG5hbWVzID0gdXNlcldvcmtlci5maXJzdG5hbWVzO1xuICAgICAgICAgICAgdGhpcy51c2VyV29ya2VyLmxhc3RuYW1lcyA9IHVzZXJXb3JrZXIubGFzdG5hbWVzO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyV29ya2VyLmZpcnN0bmFtZXMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyV29ya2VyLmxhc3RuYW1lcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZnVzZUJhY2soYXJncykge1xuICAgICAgICBhcmdzLmNhbmNlbCA9IHRydWU7XG4gICAgfVxufVxuIl19