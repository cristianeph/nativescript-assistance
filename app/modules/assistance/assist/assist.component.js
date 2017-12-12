"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var customer_service_1 = require("../../../shared/services/customer.service");
var user_service_1 = require("../../../shared/services/user.service");
var assistance_service_1 = require("../../../shared/services/assistance.service");
var nativescript_locate_address_1 = require("nativescript-locate-address");
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
    AssistComponent.prototype.getDirections = function () {
        var customerPosition = this.customer;
        /*Documentation: https://www.npmjs.com/package/nativescript-locate-address*/
        console.log("lat => ", customerPosition.latitude);
        console.log("lng => ", customerPosition.longitude);
        var locator = new nativescript_locate_address_1.LocateAddress();
        locator.locate({
            lat: customerPosition.latitude,
            lng: customerPosition.longitude
        }).then(function () {
            console.log("Maps app launched.");
        }, function (error) {
            console.log(error);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFzc2lzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsMENBQXVEO0FBRXZELDhFQUEwRTtBQUMxRSxzRUFBa0U7QUFFbEUsa0ZBQThFO0FBRzlFLDJFQUEwRDtBQVExRDtJQU9JLHlCQUFvQixLQUFxQixFQUNyQixNQUFjLEVBQ2QsV0FBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsaUJBQW9DO1FBSnBDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLHFEQUFxRCxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxvQ0FBVSxHQUFWO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzlCLEtBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxLQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQWEsR0FBYixVQUFjLEVBQVU7UUFBeEIsaUJBZUM7UUFkRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDckMsVUFBQSxJQUFJO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0QsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUN6QyxLQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ2hFLFVBQUEsSUFBSTtnQkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkUsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO1lBQ25GLENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsdUNBQWEsR0FBYjtRQUNJLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNyQyw0RUFBNEU7UUFDNUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkQsSUFBSSxPQUFPLEdBQUcsSUFBSSwyQ0FBYSxFQUFFLENBQUM7UUFDbEMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNYLEdBQUcsRUFBRyxnQkFBZ0IsQ0FBQyxRQUFRO1lBQy9CLEdBQUcsRUFBRyxnQkFBZ0IsQ0FBQyxTQUFTO1NBQ25DLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFFLFVBQUMsS0FBSztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBdERRLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3hDLENBQUM7eUNBUTZCLHVCQUFjO1lBQ2IsZUFBTTtZQUNELDBCQUFXO1lBQ1Asa0NBQWU7WUFDYixzQ0FBaUI7T0FYL0MsZUFBZSxDQXdEM0I7SUFBRCxzQkFBQztDQUFBLEFBeERELElBd0RDO0FBeERZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy91c2VyLmNsYXNzXCI7XG5pbXBvcnQge0N1c3RvbWVyU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jdXN0b21lci5zZXJ2aWNlXCI7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHtDdXN0b21lcn0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL2N1c3RvbWVyLmNsYXNzXCI7XG5pbXBvcnQge0Fzc2lzdGFuY2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2Fzc2lzdGFuY2Uuc2VydmljZVwiO1xuaW1wb3J0IHtBc3Npc3RhbmNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NsYXNzZXMvYXNzaXN0YW5jZS5jbGFzc1wiO1xuXG5pbXBvcnQge0xvY2F0ZUFkZHJlc3N9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9jYXRlLWFkZHJlc3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC1hc3Npc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hc3Npc3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2Fzc2lzdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXNzaXN0Q29tcG9uZW50IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGlkOiBudW1iZXI7XG4gICAgdXNlcjogVXNlcjtcbiAgICBjdXN0b21lcjogQ3VzdG9tZXI7XG4gICAgYXNzaXN0YW5jZTogQXNzaXN0YW5jZTtcbiAgICBjdXN0b21lclVzZXI6IFVzZXI7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGN1c3RvbWVyU2VydmljZTogQ3VzdG9tZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXNzaXN0YW5jZVNlcnZpY2U6IEFzc2lzdGFuY2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSAnRXNwZXJlLCBlc3RhbW9zIGNhcmdhbmRvIGxhIGluZm9ybWFjacOzbiBkZWwgY2xpZW50ZSc7XG4gICAgfVxuXG4gICAgcGFnZUxvYWRlZCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmlkID0gK3BhcmFtc1snYXNzaXN0aWQnXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3Npc3RhbmNlIGlkID0+ICcsIHRoaXMuaWQpO1xuICAgICAgICAgICAgdGhpcy5nZXRBc3Npc3RhbmNlKHRoaXMuaWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRBc3Npc3RhbmNlKGlkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5hc3Npc3RhbmNlU2VydmljZS5maW5kKGlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXNzaXN0YW5jZSBvYmplY3QgPT4gJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXNzaXN0YW5jZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lciA9IHRoaXMuYXNzaXN0YW5jZS5jdXN0b21lcjtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmluZm9DdXN0b21lcih0aGlzLmFzc2lzdGFuY2UuY3VzdG9tZXIuaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXNlciBvYmplY3QgZnJvbSBDdXN0b21lciA9PiAnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyVXNlciA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gdGhpcy5jdXN0b21lclVzZXIubGFzdG5hbWVzICsgXCIsIFwiICsgdGhpcy5jdXN0b21lclVzZXIuZmlyc3RuYW1lcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aW9ucygpIHtcbiAgICAgICAgbGV0IGN1c3RvbWVyUG9zaXRpb24gPSB0aGlzLmN1c3RvbWVyO1xuICAgICAgICAvKkRvY3VtZW50YXRpb246IGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL25hdGl2ZXNjcmlwdC1sb2NhdGUtYWRkcmVzcyovXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGF0ID0+IFwiLCBjdXN0b21lclBvc2l0aW9uLmxhdGl0dWRlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJsbmcgPT4gXCIsIGN1c3RvbWVyUG9zaXRpb24ubG9uZ2l0dWRlKTtcbiAgICAgICAgbGV0IGxvY2F0b3IgPSBuZXcgTG9jYXRlQWRkcmVzcygpO1xuICAgICAgICBsb2NhdG9yLmxvY2F0ZSh7XG4gICAgICAgICAgICBsYXQgOiBjdXN0b21lclBvc2l0aW9uLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG5nIDogY3VzdG9tZXJQb3NpdGlvbi5sb25naXR1ZGVcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1hcHMgYXBwIGxhdW5jaGVkLlwiKTtcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19