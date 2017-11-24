"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_service_1 = require("../../../shared/services/login.service");
var assistance_service_1 = require("../../../shared/services/assistance.service");
var assistance_class_1 = require("../../../shared/classes/assistance.class");
var worker_service_1 = require("../../../shared/services/worker.service");
var customer_service_1 = require("../../../shared/services/customer.service");
var assistance_type_class_1 = require("../../../shared/classes/assistance-type.class");
var dialogs_1 = require("ui/dialogs");
/*import {
    isEnabled,
    enableLocationRequest,
    getCurrentLocation,
} from "nativescript-geolocation";*/
var ReportComponent = (function () {
    function ReportComponent(router, loginService, assistanceService, workerService, customerService) {
        this.router = router;
        this.loginService = loginService;
        this.assistanceService = assistanceService;
        this.workerService = workerService;
        this.customerService = customerService;
        this.title = 'Solicite asistencia';
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent.prototype.pageLoaded = function () {
        this.getCustomerInfo();
    };
    ReportComponent.prototype.getCustomerInfo = function () {
        var _this = this;
        console.log('You are already loged => ', JSON.stringify(this.loginService.getUser()));
        this.user = this.loginService.getUser();
        this.customerService.find(this.user.id).subscribe(function (data) {
            if (data) {
                console.log('Customer info => ', JSON.stringify(data));
                _this.customerService.setCustomer(data);
            }
        }, function (errors) {
            console.log('Error');
            console.log(errors);
            console.log(errors.status);
        });
    };
    ReportComponent.prototype.requestAssitance = function (type) {
        var _this = this;
        var options = {
            message: "Esta seguro que desea hacer la solicitud?",
            title: "Necesita ayuda?",
            okButtonText: "Si",
            cancelButtonText: "No",
            neutralButtonText: "Cancelar"
        };
        dialogs_1.confirm(options).then(function (result) {
            if (result === true) {
                _this.getCurrentLocation();
                _this.registryAssistance(type);
            }
        });
    };
    ReportComponent.prototype.registryAssistance = function (type) {
        var _this = this;
        console.log('El cliente que registrara la incidencia es => ', JSON.stringify(this.customerService.getCustomer()));
        var assistance = new assistance_class_1.Assistance(null, null, 'test address', 'test address reference', new assistance_type_class_1.AssistanceType(type, null), null, this.customerService.getCustomer(), null, '');
        console.log('Parsed data => ', JSON.stringify(assistance));
        this.assistanceService.register(assistance).subscribe(function (data) {
            console.log('Assistance has been created => ', JSON.stringify(data));
            _this.assistanceService.setAssistance(data);
            _this.router.navigate(['/client/waiting', type]);
        }, function (errors) {
            console.log('Error');
            console.log(errors);
            console.log(errors.status);
        });
    };
    ReportComponent.prototype.getCurrentLocation = function () {
        /*var location = getCurrentLocation({
            desiredAccuracy: 3,
            updateDistance: 10,
            maximumAge: 20000,
            timeout: 20000
        }).then(function (loc) {
            if (loc) {
                console.log("Current location is: " + JSON.stringify(loc));
            }
        }, function (e) {
            console.log("Error: " + e.message);
        });*/
    };
    ReportComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-report',
            templateUrl: './report.component.html',
            styleUrls: ['./report.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            login_service_1.LoginService,
            assistance_service_1.AssistanceService,
            worker_service_1.WorkerService,
            customer_service_1.CustomerService])
    ], ReportComponent);
    return ReportComponent;
}());
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsMENBQXVDO0FBQ3ZDLHdFQUFvRTtBQUNwRSxrRkFBOEU7QUFDOUUsNkVBQW9FO0FBQ3BFLDBFQUFzRTtBQUN0RSw4RUFBMEU7QUFFMUUsdUZBQTZFO0FBQzdFLHNDQUFtQztBQUNuQzs7OztvQ0FJb0M7QUFRcEM7SUFJSSx5QkFBb0IsTUFBYyxFQUNkLFlBQTBCLEVBQzFCLGlCQUFvQyxFQUNwQyxhQUE0QixFQUM1QixlQUFnQztRQUpoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQztJQUN2QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxvQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQUEsaUJBZ0JDO1FBZkcsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDN0MsVUFBQSxJQUFJO1lBQ0EsRUFBRSxDQUFDLENBQUMsSUFBSSxD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LHdCQUF3QixDQUFDO1NBQ3hDLENBQUM7eUNBSzhCLGVBQU07WUFDQSw0QkFBWTtZQUNQLHNDQUFpQjtZQUNyQiw4QkFBYTtZQUNYLGtDQUFlO09BUjNDLGVBQWUsQ0FpRzNCO0lBQUQsc0JBQUM7Q0FBQSxBQWpHRCxJQWlHQztBQWpHWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7QXNzaXN0YW5jZVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXNzaXN0YW5jZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0Fzc2lzdGFuY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy9hc3Npc3RhbmNlLmNsYXNzXCI7XG5pbXBvcnQge1dvcmtlclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvd29ya2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7Q3VzdG9tZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2N1c3RvbWVyLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL3VzZXIuY2xhc3NcIjtcbmltcG9ydCB7QXNzaXN0YW5jZVR5cGV9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy9hc3Npc3RhbmNlLXR5cGUuY2xhc3NcIjtcbmltcG9ydCB7Y29uZmlybX0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcbi8qaW1wb3J0IHtcbiAgICBpc0VuYWJsZWQsXG4gICAgZW5hYmxlTG9jYXRpb25SZXF1ZXN0LFxuICAgIGdldEN1cnJlbnRMb2NhdGlvbixcbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiOyovXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhcHAtcmVwb3J0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmVwb3J0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9yZXBvcnQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlcG9ydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgdXNlcjogVXNlcjtcbiAgICB0aXRsZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXNzaXN0YW5jZVNlcnZpY2U6IEFzc2lzdGFuY2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgd29ya2VyU2VydmljZTogV29ya2VyU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGN1c3RvbWVyU2VydmljZTogQ3VzdG9tZXJTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSAnU29saWNpdGUgYXNpc3RlbmNpYSc7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgcGFnZUxvYWRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXRDdXN0b21lckluZm8oKTtcbiAgICB9XG5cbiAgICBnZXRDdXN0b21lckluZm8oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdZb3UgYXJlIGFscmVhZHkgbG9nZWQgPT4gJywgSlNPTi5zdHJpbmdpZnkodGhpcy5sb2dpblNlcnZpY2UuZ2V0VXNlcigpKSk7XG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMubG9naW5TZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2UuZmluZCh0aGlzLnVzZXIuaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDdXN0b21lciBpbmZvID0+ICcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2Uuc2V0Q3VzdG9tZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9ycyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMuc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QXNzaXRhbmNlKHR5cGU6IG51bWJlcikge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRXN0YSBzZWd1cm8gcXVlIGRlc2VhIGhhY2VyIGxhIHNvbGljaXR1ZD9cIixcbiAgICAgICAgICAgIHRpdGxlOiBcIk5lY2VzaXRhIGF5dWRhP1wiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlNpXCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCIsXG4gICAgICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiXG4gICAgICAgIH07XG4gICAgICAgIGNvbmZpcm0ob3B0aW9ucykudGhlbigocmVzdWx0OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDdXJyZW50TG9jYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdHJ5QXNzaXN0YW5jZSh0eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0cnlBc3Npc3RhbmNlKHR5cGU6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZygnRWwgY2xpZW50ZSBxdWUgcmVnaXN0cmFyYSBsYSBpbmNpZGVuY2lhIGVzID0+ICcsIEpTT04uc3RyaW5naWZ5KHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEN1c3RvbWVyKCkpKTtcbiAgICAgICAgY29uc3QgYXNzaXN0YW5jZSA9IG5ldyBBc3Npc3RhbmNlKFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAndGVzdCBhZGRyZXNzJyxcbiAgICAgICAgICAgICd0ZXN0IGFkZHJlc3MgcmVmZXJlbmNlJyxcbiAgICAgICAgICAgIG5ldyBBc3Npc3RhbmNlVHlwZSh0eXBlLCBudWxsKSxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5nZXRDdXN0b21lcigpLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICcnXG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXJzZWQgZGF0YSA9PiAnLCBKU09OLnN0cmluZ2lmeShhc3Npc3RhbmNlKSk7XG4gICAgICAgIHRoaXMuYXNzaXN0YW5jZVNlcnZpY2UucmVnaXN0ZXIoYXNzaXN0YW5jZSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Fzc2lzdGFuY2UgaGFzIGJlZW4gY3JlYXRlZCA9PiAnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hc3Npc3RhbmNlU2VydmljZS5zZXRBc3Npc3RhbmNlKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NsaWVudC93YWl0aW5nJywgdHlwZV0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9ycyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMuc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50TG9jYXRpb24oKSB7XG4gICAgICAgIC8qdmFyIGxvY2F0aW9uID0gZ2V0Q3VycmVudExvY2F0aW9uKHtcbiAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogMyxcbiAgICAgICAgICAgIHVwZGF0ZURpc3RhbmNlOiAxMCxcbiAgICAgICAgICAgIG1heGltdW1BZ2U6IDIwMDAwLFxuICAgICAgICAgICAgdGltZW91dDogMjAwMDBcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAobG9jKSB7XG4gICAgICAgICAgICBpZiAobG9jKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IGxvY2F0aW9uIGlzOiBcIiArIEpTT04uc3RyaW5naWZ5KGxvYykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlLm1lc3NhZ2UpO1xuICAgICAgICB9KTsqL1xuXG4gICAgfVxuXG59XG4iXX0=