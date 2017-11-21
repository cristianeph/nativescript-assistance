"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tracking_service_1 = require("../../../objects/services/tracking.service");
var app = require("tns-core-modules/application");
var TrackingComponent = (function () {
    function TrackingComponent(trackingService) {
        this.trackingService = trackingService;
        this.title = 'Listo, espere un momento...';
    }
    TrackingComponent.prototype.ngOnInit = function () {
        this.list = this.trackingService.getItems();
    };
    TrackingComponent.prototype.pageLoaded = function () {
        console.log('Page loadeeeed!!');
        if (app.android) {
            app.android.on(app.AndroidApplication.activityBackPressedEvent, this.refuseBack);
        }
    };
    TrackingComponent.prototype.pageUnloaded = function () {
        console.log('Page Unloadeeeed!!');
        if (app.android) {
            app.android.off(app.AndroidApplication.activityBackPressedEvent, this.refuseBack);
        }
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
        __metadata("design:paramtypes", [tracking_service_1.TrackingService])
    ], TrackingComponent);
    return TrackingComponent;
}());
exports.TrackingComponent = TrackingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhY2tpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELCtFQUEyRTtBQUUzRSxrREFBb0Q7QUFTcEQ7SUFJSSwyQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hELElBQUksQ0FBQyxLQUFLLEdBQUcsNkJBQTZCLENBQUE7SUFDOUMsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDL0MsQ0FBQztJQUVELHNDQUFVLEdBQVY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZCxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JGLENBQUM7SUFDTCxDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNkLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEYsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUE1QlEsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUMxQyxDQUFDO3lDQUt1QyxrQ0FBZTtPQUozQyxpQkFBaUIsQ0E2QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHJhY2tpbmdTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vb2JqZWN0cy9zZXJ2aWNlcy90cmFja2luZy5zZXJ2aWNlXCI7XG5pbXBvcnQge1RyYWNraW5nfSBmcm9tIFwiLi4vLi4vLi4vb2JqZWN0cy9jbGFzc2VzL3RyYWNraW5nLmNsYXNzXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCAqIGFzIHBsYXRmb3JtIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhcHAtdHJhY2tpbmcnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90cmFja2luZy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdHJhY2tpbmcuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRyYWNraW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGxpc3Q6IEFycmF5PFRyYWNraW5nPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhY2tpbmdTZXJ2aWNlOiBUcmFja2luZ1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9ICdMaXN0bywgZXNwZXJlIHVuIG1vbWVudG8uLi4nXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubGlzdCA9IHRoaXMudHJhY2tpbmdTZXJ2aWNlLmdldEl0ZW1zKClcbiAgICB9XG5cbiAgICBwYWdlTG9hZGVkKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnUGFnZSBsb2FkZWVlZWQhIScpO1xuICAgICAgICBpZiAoYXBwLmFuZHJvaWQpIHtcbiAgICAgICAgICAgIGFwcC5hbmRyb2lkLm9uKGFwcC5BbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCB0aGlzLnJlZnVzZUJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFnZVVubG9hZGVkKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnUGFnZSBVbmxvYWRlZWVlZCEhJyk7XG4gICAgICAgIGlmIChhcHAuYW5kcm9pZCkge1xuICAgICAgICAgICAgYXBwLmFuZHJvaWQub2ZmKGFwcC5BbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCB0aGlzLnJlZnVzZUJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVmdXNlQmFjayhhcmdzKSB7XG4gICAgICAgIGFyZ3MuY2FuY2VsID0gdHJ1ZTtcbiAgICB9XG59XG4iXX0=