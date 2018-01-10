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
var TrackingComponent = (function () {
    function TrackingComponent(route, router, page, trackingService, assistanceService, userService, ngZone) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.page = page;
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
        this.assistance.state = "ATENDIENDO";
        /*this.assistanceService.update()*/
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
            core_1.NgZone])
    ], TrackingComponent);
    return TrackingComponent;
}());
exports.TrackingComponent = TrackingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhY2tpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELDhFQUEwRTtBQUUxRSxrREFBb0Q7QUFDcEQsMENBQXVEO0FBRXZELGlFQUF3RDtBQUN4RCxrRkFBOEU7QUFDOUUsc0VBQWtFO0FBQ2xFLGlEQUE4QztBQVE5QztJQU9JLDJCQUFvQixLQUFxQixFQUNyQixNQUFjLEVBQ2QsSUFBVSxFQUNWLGVBQWdDLEVBQ2hDLGlCQUFvQyxFQUNwQyxXQUF3QixFQUN4QixNQUFjO1FBTmxDLGlCQWFDO1FBYm1CLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1Ysb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLDZCQUE2QixDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDOUIsS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENB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QUM7Q0FBQSxBQXZFRCxJQXVFQztBQXZFWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHJhY2tpbmdTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvdHJhY2tpbmcuc2VydmljZSc7XG5pbXBvcnQge1RyYWNraW5nfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy90cmFja2luZy5jbGFzcyc7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0Fzc2lzdGFuY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL2Fzc2lzdGFuY2UuY2xhc3MnO1xuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy91c2VyLmNsYXNzJztcbmltcG9ydCB7QXNzaXN0YW5jZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hc3Npc3RhbmNlLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC10cmFja2luZycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RyYWNraW5nLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi90cmFja2luZy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVHJhY2tpbmdDb21wb25lbnQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbGlzdDogQXJyYXk8VHJhY2tpbmc+O1xuICAgIGFzc2lzdGFuY2U6IEFzc2lzdGFuY2U7XG4gICAgdXNlcldvcmtlcjogVXNlcjtcbiAgICBpZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB0cmFja2luZ1NlcnZpY2U6IFRyYWNraW5nU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFzc2lzdGFuY2VTZXJ2aWNlOiBBc3Npc3RhbmNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSAnTGlzdG8sIGVzcGVyZSB1biBtb21lbnRvLi4uJztcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmlkID0gK3BhcmFtc1snYXNzaXN0YW5jZWlkJ107XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0QXNzaXN0YW5jZSh0aGlzLmlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGFnZUxvYWRlZCgpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIGlmIChhcHAuYW5kcm9pZCkge1xuICAgICAgICAgICAgYXBwLmFuZHJvaWQub24oYXBwLkFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsIHRoaXMucmVmdXNlQmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgLyp0aGlzLmxpc3QgPSB0aGlzLnRyYWNraW5nU2VydmljZS5nZXRJdGVtcygpKi9cbiAgICAgICAgdGhpcy51c2VyV29ya2VyID0gbmV3IFVzZXIoMCwgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsIG51bGwpO1xuICAgICAgICB0aGlzLnVzZXJXb3JrZXIuZmlyc3RuYW1lcyA9ICcnO1xuICAgICAgICB0aGlzLnVzZXJXb3JrZXIubGFzdG5hbWVzID0gJyc7XG4gICAgfVxuXG4gICAgcGFnZVVubG9hZGVkKCkge1xuICAgICAgICBpZiAoYXBwLmFuZHJvaWQpIHtcbiAgICAgICAgICAgIGFwcC5hbmRyb2lkLm9mZihhcHAuQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgdGhpcy5yZWZ1c2VCYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFzc2lzdGFuY2UoaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFzc2lzdGFuY2VTZXJ2aWNlLmZpbmQoaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3Npc3RhbmNlIGRhdGEgcmVjZWl2ZWQgPT4gJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXNzaXN0YW5jZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5pbmZvV29ya2VyKHRoaXMuYXNzaXN0YW5jZS53b3JrZXIuaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV29ya2VyIGRhdGEgcmVjZWl2ZWQgPT4gJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRVc2VyRGF0YShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHVwZGF0ZUFzc2lzdGFuY2UoKSB7XG4gICAgICAgIHRoaXMuYXNzaXN0YW5jZS5zdGF0ZSA9IFwiQVRFTkRJRU5ET1wiO1xuICAgICAgICAvKnRoaXMuYXNzaXN0YW5jZVNlcnZpY2UudXBkYXRlKCkqL1xuICAgIH1cblxuICAgIHNldFVzZXJEYXRhKHVzZXJXb3JrZXI6IFVzZXIpIHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlcldvcmtlci5maXJzdG5hbWVzID0gdXNlcldvcmtlci5maXJzdG5hbWVzO1xuICAgICAgICAgICAgdGhpcy51c2VyV29ya2VyLmxhc3RuYW1lcyA9IHVzZXJXb3JrZXIubGFzdG5hbWVzO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyV29ya2VyLmZpcnN0bmFtZXMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyV29ya2VyLmxhc3RuYW1lcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZnVzZUJhY2soYXJncykge1xuICAgICAgICBhcmdzLmNhbmNlbCA9IHRydWU7XG4gICAgfVxufVxuIl19