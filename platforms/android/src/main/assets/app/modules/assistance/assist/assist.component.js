"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var customer_service_1 = require("../../../shared/services/customer.service");
var user_service_1 = require("../../../shared/services/user.service");
var assistance_service_1 = require("../../../shared/services/assistance.service");
var AssistComponent = (function () {
    function AssistComponent(route, router, userService, customerService, assistanceService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.customerService = customerService;
        this.assistanceService = assistanceService;
        this.title = 'Espere, estamos cargando la información del cliente';
    }
    AssistComponent.prototype.pageLoaded = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['assistid'];
            console.log('Assistance id => ', _this.id);
            _this.getAssistance(_this.id);
        });
    };
    AssistComponent.prototype.getAssistance = function (id) {
        var _this = this;
        this.assistanceService.find(id).subscribe(function (data) {
            console.log('Assistance object => ', JSON.stringify(data));
            _this.assistance = data;
            _this.customer = _this.assistance.customer;
            _this.userService.infoCustomer(_this.assistance.customer.id).subscribe(function (data) {
                console.log('User object from Customer => ', JSON.stringify(data));
                _this.customerUser = data;
                _this.title = _this.customerUser.lastnames + ", " + _this.customerUser.firstnames;
            });
        });
    };
    AssistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-assist',
            templateUrl: './assist.component.html',
            styleUrls: ['./assist.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            user_service_1.UserService,
            customer_service_1.CustomerService,
            assistance_service_1.AssistanceService])
    ], AssistComponent);
    return AssistComponent;
}());
exports.AssistComponent = AssistComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFzc2lzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsMENBQXVEO0FBRXZELDhFQUEwRTtBQUMxRSxzRUFBa0U7QUFFbEUsa0ZBQThFO0FBUzlFO0lBT0kseUJBQW9CLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxXQUF3QixFQUN4QixlQUFnQyxFQUNoQyxpQkFBb0M7UUFKcEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcscURBQXFELENBQUM7SUFDdkUsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDOUIsS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxQyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBYSxHQUFiLFVBQWMsRUFBVTtRQUF4QixpQkFlQztRQWRHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUNyQyxVQUFBLElBQUk7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzRCxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDaEUsVUFBQSxJQUFJO2dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNuRSxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7WUFDbkYsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUF0Q1EsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDeEMsQ0FBQzt5Q0FRNkIsdUJBQWM7WUFDYixlQUFNO1lBQ0QsMEJBQVc7WUFDUCxrQ0FBZTtZQUNiLHNDQUFpQjtPQVgvQyxlQUFlLENBd0MzQjtJQUFELHNCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7QUF4Q1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL3VzZXIuY2xhc3NcIjtcbmltcG9ydCB7Q3VzdG9tZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2N1c3RvbWVyLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0N1c3RvbWVyfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NsYXNzZXMvY3VzdG9tZXIuY2xhc3NcIjtcbmltcG9ydCB7QXNzaXN0YW5jZVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXNzaXN0YW5jZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0Fzc2lzdGFuY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy9hc3Npc3RhbmNlLmNsYXNzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhcHAtYXNzaXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXNzaXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hc3Npc3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFzc2lzdENvbXBvbmVudCB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBpZDogbnVtYmVyO1xuICAgIHVzZXI6IFVzZXI7XG4gICAgY3VzdG9tZXI6IEN1c3RvbWVyO1xuICAgIGFzc2lzdGFuY2U6IEFzc2lzdGFuY2U7XG4gICAgY3VzdG9tZXJVc2VyOiBVc2VyO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjdXN0b21lclNlcnZpY2U6IEN1c3RvbWVyU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFzc2lzdGFuY2VTZXJ2aWNlOiBBc3Npc3RhbmNlU2VydmljZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gJ0VzcGVyZSwgZXN0YW1vcyBjYXJnYW5kbyBsYSBpbmZvcm1hY2nDs24gZGVsIGNsaWVudGUnO1xuICAgIH1cblxuICAgIHBhZ2VMb2FkZWQoKSB7XG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5pZCA9ICtwYXJhbXNbJ2Fzc2lzdGlkJ107XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQXNzaXN0YW5jZSBpZCA9PiAnLCB0aGlzLmlkKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0QXNzaXN0YW5jZSh0aGlzLmlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0QXNzaXN0YW5jZShpZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYXNzaXN0YW5jZVNlcnZpY2UuZmluZChpZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Fzc2lzdGFuY2Ugb2JqZWN0ID0+ICcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2lzdGFuY2UgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXIgPSB0aGlzLmFzc2lzdGFuY2UuY3VzdG9tZXI7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5pbmZvQ3VzdG9tZXIodGhpcy5hc3Npc3RhbmNlLmN1c3RvbWVyLmlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgb2JqZWN0IGZyb20gQ3VzdG9tZXIgPT4gJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lclVzZXIgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMuY3VzdG9tZXJVc2VyLmxhc3RuYW1lcyArIFwiLCBcIiArIHRoaXMuY3VzdG9tZXJVc2VyLmZpcnN0bmFtZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxufVxuIl19