"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var assistance_service_1 = require("../../../shared/services/assistance.service");
var PendingComponent = (function () {
    function PendingComponent(assistanceService) {
        this.assistanceService = assistanceService;
        this.title = 'Trabajos pendientes de aceptar';
    }
    PendingComponent.prototype.ngOnInit = function () {
    };
    PendingComponent.prototype.pageLoaded = function () {
        this.getAssistances();
    };
    PendingComponent.prototype.getAssistances = function () {
        var _this = this;
        this.assistanceService.all(1, 20).subscribe(function (data) {
            if (data.content) {
                _this.list = data.content;
            }
        }, function (errors) {
            console.log('Error');
            console.log(errors);
            console.log(errors.status);
        });
    };
    PendingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-pending',
            templateUrl: './pending.component.html',
            styleUrls: ['./pending.component.css']
        }),
        __metadata("design:paramtypes", [assistance_service_1.AssistanceService])
    ], PendingComponent);
    return PendingComponent;
}());
exports.PendingComponent = PendingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVuZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZW5kaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUVoRCxrRkFBOEU7QUFROUU7SUFJSSwwQkFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxnQ0FBZ0MsQ0FBQTtJQUNqRCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxxQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCx5Q0FBYyxHQUFkO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3ZDLFVBQUEsSUFBSTtZQUNBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNmLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3QixDQUFDO1FBQ0wsQ0FBQyxFQUNELFVBQUEsTUFBTTtZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUE1QlEsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDO3lDQUt5QyxzQ0FBaUI7T0FKL0MsZ0JBQWdCLENBOEI1QjtJQUFELHVCQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5QlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Fzc2lzdGFuY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy9hc3Npc3RhbmNlLmNsYXNzXCI7XG5pbXBvcnQge0Fzc2lzdGFuY2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2Fzc2lzdGFuY2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXBwLXBlbmRpbmcnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wZW5kaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9wZW5kaW5nLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQZW5kaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGxpc3Q6IEFycmF5PEFzc2lzdGFuY2U+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhc3Npc3RhbmNlU2VydmljZTogQXNzaXN0YW5jZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9ICdUcmFiYWpvcyBwZW5kaWVudGVzIGRlIGFjZXB0YXInXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgcGFnZUxvYWRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXRBc3Npc3RhbmNlcygpO1xuICAgIH1cblxuICAgIGdldEFzc2lzdGFuY2VzKCkge1xuICAgICAgICB0aGlzLmFzc2lzdGFuY2VTZXJ2aWNlLmFsbCgxLCAyMCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QgPSBkYXRhLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9ycyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMuc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==