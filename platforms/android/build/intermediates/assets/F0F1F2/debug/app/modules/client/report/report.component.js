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
    ReportComponent.prototype.pageLoaded = function () {
        this.getCustomerInfo();
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
                _this.registryAssistance(type);
            }
        });
    };
    ReportComponent.prototype.registryAssistance = function (type) {
        var _this = this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsMENBQXVDO0FBQ3ZDLHdFQUFvRTtBQUNwRSxrRkFBOEU7QUFDOUUsNkVBQW9FO0FBQ3BFLDBFQUFzRTtBQUN0RSw4RUFBMEU7QUFFMUUsdUZBQTZFO0FBQzdFLHNDQUFtQztBQVFuQztJQUlJLHlCQUFvQixNQUFjLEVBQ2QsWUFBMEIsRUFDMUIsaUJBQW9DLEVBQ3BDLGFBQTRCLEVBQzVCLGVBQWdDO1FBSmhDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoRCxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDO0lBQ3ZDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELHlDQUFlLEdBQWY7UUFBQSxpQkFnQkM7UUFmRyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUM3QyxVQUFBLElBQUk7WUFDQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJ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L2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7QXNzaXN0YW5jZVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXNzaXN0YW5jZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0Fzc2lzdGFuY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy9hc3Npc3RhbmNlLmNsYXNzXCI7XG5pbXBvcnQge1dvcmtlclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvd29ya2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7Q3VzdG9tZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2N1c3RvbWVyLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL3VzZXIuY2xhc3NcIjtcbmltcG9ydCB7QXNzaXN0YW5jZVR5cGV9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy9hc3Npc3RhbmNlLXR5cGUuY2xhc3NcIjtcbmltcG9ydCB7Y29uZmlybX0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC1yZXBvcnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZXBvcnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3JlcG9ydC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVwb3J0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB1c2VyOiBVc2VyO1xuICAgIHRpdGxlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhc3Npc3RhbmNlU2VydmljZTogQXNzaXN0YW5jZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB3b3JrZXJTZXJ2aWNlOiBXb3JrZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgY3VzdG9tZXJTZXJ2aWNlOiBDdXN0b21lclNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9ICdTb2xpY2l0ZSBhc2lzdGVuY2lhJztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBnZXRDdXN0b21lckluZm8oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdZb3UgYXJlIGFscmVhZHkgbG9nZWQgPT4gJywgSlNPTi5zdHJpbmdpZnkodGhpcy5sb2dpblNlcnZpY2UuZ2V0VXNlcigpKSk7XG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMubG9naW5TZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2UuZmluZCh0aGlzLnVzZXIuaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDdXN0b21lciBpbmZvID0+ICcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2Uuc2V0Q3VzdG9tZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9ycyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMuc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwYWdlTG9hZGVkKCkge1xuICAgICAgICB0aGlzLmdldEN1c3RvbWVySW5mbygpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBc3NpdGFuY2UodHlwZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogXCJFc3RhIHNlZ3VybyBxdWUgZGVzZWEgaGFjZXIgbGEgc29saWNpdHVkP1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwiTmVjZXNpdGEgYXl1ZGE/XCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiU2lcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm9cIixcbiAgICAgICAgICAgIG5ldXRyYWxCdXR0b25UZXh0OiBcIkNhbmNlbGFyXCJcbiAgICAgICAgfTtcbiAgICAgICAgY29uZmlybShvcHRpb25zKS50aGVuKChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdHJ5QXNzaXN0YW5jZSh0eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0cnlBc3Npc3RhbmNlKHR5cGU6IG51bWJlcikge1xuICAgICAgICBjb25zdCBhc3Npc3RhbmNlID0gbmV3IEFzc2lzdGFuY2UoXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICd0ZXN0IGFkZHJlc3MnLFxuICAgICAgICAgICAgJ3Rlc3QgYWRkcmVzcyByZWZlcmVuY2UnLFxuICAgICAgICAgICAgbmV3IEFzc2lzdGFuY2VUeXBlKHR5cGUsIG51bGwpLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEN1c3RvbWVyKCksXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgJydcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1BhcnNlZCBkYXRhID0+ICcsIEpTT04uc3RyaW5naWZ5KGFzc2lzdGFuY2UpKTtcbiAgICAgICAgdGhpcy5hc3Npc3RhbmNlU2VydmljZS5yZWdpc3Rlcihhc3Npc3RhbmNlKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXNzaXN0YW5jZSBoYXMgYmVlbiBjcmVhdGVkID0+ICcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2lzdGFuY2VTZXJ2aWNlLnNldEFzc2lzdGFuY2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY2xpZW50L3dhaXRpbmcnLCB0eXBlXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9ycy5zdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxufVxuIl19