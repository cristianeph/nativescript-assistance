"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var customer_service_1 = require("../../../shared/services/customer.service");
var user_service_1 = require("../../../shared/services/user.service");
var assistance_service_1 = require("../../../shared/services/assistance.service");
var nativescript_locate_address_1 = require("nativescript-locate-address");
var TNSPhone = require("nativescript-phone");
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
    AssistComponent.prototype.cancelAssistance = function () {
        var _this = this;
        this.assistance.state = "ANULADO";
        this.assistanceService.update(this.assistance).subscribe(function (data) {
            console.log("Assistance => State => Success", JSON.stringify(data));
            _this.router.navigate(["/assistance/pending"]);
        }, function (error) {
            console.log("Assistance => State => Error", JSON.stringify(error));
        });
    };
    AssistComponent.prototype.getPhonecall = function () {
        var selectedCustomerUser = this.customerUser;
        /*Documentation: https://www.npmjs.com/package/nativescript-phone*/
        console.log("cellphone => ", selectedCustomerUser.cellphone);
        TNSPhone.dial(selectedCustomerUser.cellphone, true);
    };
    AssistComponent.prototype.getDirections = function () {
        var selectedCustomer = this.customer;
        /*Documentation: https://www.npmjs.com/package/nativescript-locate-address*/
        console.log("lat => ", selectedCustomer.latitude);
        console.log("lng => ", selectedCustomer.longitude);
        var locator = new nativescript_locate_address_1.LocateAddress();
        locator.locate({
            lat: selectedCustomer.latitude,
            lng: selectedCustomer.longitude
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFzc2lzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsMENBQXVEO0FBRXZELDhFQUEwRTtBQUMxRSxzRUFBa0U7QUFFbEUsa0ZBQThFO0FBRTlFLDJFQUEwRDtBQUMxRCw2Q0FBK0M7QUFRL0M7SUFPSSx5QkFBb0IsS0FBcUIsRUFDckIsTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLGVBQWdDLEVBQ2hDLGlCQUFvQztRQUpwQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxxREFBcUQsQ0FBQztJQUN2RSxDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUM5QixLQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVDQUFhLEdBQWIsVUFBYyxFQUFVO1FBQXhCLGlCQWVDO1FBZEcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3JDLFVBQUEsSUFBSTtZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsSUFB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Q0QsMEJBQVc7WUFDUCxrQ0FBZTtZQUNiLHNDQUFpQjtPQVgvQyxlQUFlLENBNEUzQjtJQUFELHNCQUFDO0NBQUEsQUE1RUQsSUE0RUM7QUE1RVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL3VzZXIuY2xhc3NcIjtcbmltcG9ydCB7Q3VzdG9tZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2N1c3RvbWVyLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0N1c3RvbWVyfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NsYXNzZXMvY3VzdG9tZXIuY2xhc3NcIjtcbmltcG9ydCB7QXNzaXN0YW5jZVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXNzaXN0YW5jZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0Fzc2lzdGFuY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy9hc3Npc3RhbmNlLmNsYXNzXCI7XG5pbXBvcnQge0xvY2F0ZUFkZHJlc3N9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9jYXRlLWFkZHJlc3NcIjtcbmltcG9ydCAqIGFzIFROU1Bob25lIGZyb20gJ25hdGl2ZXNjcmlwdC1waG9uZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhcHAtYXNzaXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXNzaXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hc3Npc3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFzc2lzdENvbXBvbmVudCB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBpZDogbnVtYmVyO1xuICAgIHVzZXI6IFVzZXI7XG4gICAgY3VzdG9tZXI6IEN1c3RvbWVyO1xuICAgIGFzc2lzdGFuY2U6IEFzc2lzdGFuY2U7XG4gICAgY3VzdG9tZXJVc2VyOiBVc2VyO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjdXN0b21lclNlcnZpY2U6IEN1c3RvbWVyU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFzc2lzdGFuY2VTZXJ2aWNlOiBBc3Npc3RhbmNlU2VydmljZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gJ0VzcGVyZSwgZXN0YW1vcyBjYXJnYW5kbyBsYSBpbmZvcm1hY2nDs24gZGVsIGNsaWVudGUnO1xuICAgIH1cblxuICAgIHBhZ2VMb2FkZWQoKSB7XG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5pZCA9ICtwYXJhbXNbJ2Fzc2lzdGlkJ107XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQXNzaXN0YW5jZSBpZCA9PiAnLCB0aGlzLmlkKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0QXNzaXN0YW5jZSh0aGlzLmlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0QXNzaXN0YW5jZShpZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYXNzaXN0YW5jZVNlcnZpY2UuZmluZChpZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Fzc2lzdGFuY2Ugb2JqZWN0ID0+ICcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2lzdGFuY2UgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXIgPSB0aGlzLmFzc2lzdGFuY2UuY3VzdG9tZXI7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5pbmZvQ3VzdG9tZXIodGhpcy5hc3Npc3RhbmNlLmN1c3RvbWVyLmlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgb2JqZWN0IGZyb20gQ3VzdG9tZXIgPT4gJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lclVzZXIgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMuY3VzdG9tZXJVc2VyLmxhc3RuYW1lcyArIFwiLCBcIiArIHRoaXMuY3VzdG9tZXJVc2VyLmZpcnN0bmFtZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNhbmNlbEFzc2lzdGFuY2UoKSB7XG4gICAgICAgIHRoaXMuYXNzaXN0YW5jZS5zdGF0ZSA9IFwiQU5VTEFET1wiO1xuICAgICAgICB0aGlzLmFzc2lzdGFuY2VTZXJ2aWNlLnVwZGF0ZSh0aGlzLmFzc2lzdGFuY2UpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3Npc3RhbmNlID0+IFN0YXRlID0+IFN1Y2Nlc3NcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9hc3Npc3RhbmNlL3BlbmRpbmdcIl0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzaXN0YW5jZSA9PiBTdGF0ZSA9PiBFcnJvclwiLCBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgZ2V0UGhvbmVjYWxsKCkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRDdXN0b21lclVzZXIgPSB0aGlzLmN1c3RvbWVyVXNlcjtcbiAgICAgICAgLypEb2N1bWVudGF0aW9uOiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9uYXRpdmVzY3JpcHQtcGhvbmUqL1xuICAgICAgICBjb25zb2xlLmxvZyhcImNlbGxwaG9uZSA9PiBcIiwgc2VsZWN0ZWRDdXN0b21lclVzZXIuY2VsbHBob25lKTtcbiAgICAgICAgVE5TUGhvbmUuZGlhbChzZWxlY3RlZEN1c3RvbWVyVXNlci5jZWxscGhvbmUsIHRydWUpO1xuICAgIH1cblxuICAgIGdldERpcmVjdGlvbnMoKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZEN1c3RvbWVyID0gdGhpcy5jdXN0b21lcjtcbiAgICAgICAgLypEb2N1bWVudGF0aW9uOiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9uYXRpdmVzY3JpcHQtbG9jYXRlLWFkZHJlc3MqL1xuICAgICAgICBjb25zb2xlLmxvZyhcImxhdCA9PiBcIiwgc2VsZWN0ZWRDdXN0b21lci5sYXRpdHVkZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG5nID0+IFwiLCBzZWxlY3RlZEN1c3RvbWVyLmxvbmdpdHVkZSk7XG4gICAgICAgIGxldCBsb2NhdG9yID0gbmV3IExvY2F0ZUFkZHJlc3MoKTtcbiAgICAgICAgbG9jYXRvci5sb2NhdGUoe1xuICAgICAgICAgICAgbGF0IDogc2VsZWN0ZWRDdXN0b21lci5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxuZyA6IHNlbGVjdGVkQ3VzdG9tZXIubG9uZ2l0dWRlXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNYXBzIGFwcCBsYXVuY2hlZC5cIik7XG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==