"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_service_1 = require("../../../shared/services/login.service");
var assistance_service_1 = require("../../../shared/services/assistance.service");
var assistance_class_1 = require("../../../shared/classes/assistance.class");
var customer_service_1 = require("../../../shared/services/customer.service");
var assistance_type_class_1 = require("../../../shared/classes/assistance-type.class");
var dialogs = require("ui/dialogs");
var application_settings_service_1 = require("../../../shared/services/application-settings.service");
/*import {
    isEnabled,
    enableLocationRequest,
    getCurrentLocation,
} from "nativescript-geolocation";*/
var ReportComponent = (function () {
    function ReportComponent(router, loginService, customerService, assistanceService, appSettingService) {
        this.router = router;
        this.loginService = loginService;
        this.customerService = customerService;
        this.assistanceService = assistanceService;
        this.appSettingService = appSettingService;
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
                var customer = data;
                customer.fcm = _this.appSettingService.getToken();
                console.log('Customer info => ', JSON.stringify(customer));
                _this.customerService.setCustomer(customer);
                _this.customerService.updateToken(customer).subscribe(function (data) {
                    console.log('Customer token updated => ', JSON.stringify(data));
                });
            }
        }, function (errors) {
            console.log('Error', errors, errors.status);
        });
    };
    ReportComponent.prototype.requestAssitance = function (type) {
        var _this = this;
        var dialogOptions = {
            message: "Esta seguro que desea hacer la solicitud?",
            title: "Necesita ayuda?",
            okButtonText: "Si",
            cancelButtonText: "No",
            neutralButtonText: "Cancelar"
        };
        var promptOptions = {
            title: "Ingrese una referencia de su dirección",
            message: "Detalle la referencia:",
            cancelButtonText: "Cancelar",
            okButtonText: "OK",
            inputType: dialogs.inputType.text
        };
        dialogs.confirm(dialogOptions).then(function (result) {
            if (result === true) {
                dialogs.prompt(promptOptions)
                    .then(function (promptResult) {
                    if (promptResult.result) {
                        _this.registryAssistance(type, promptResult.text);
                    }
                    else {
                        console.log("Se cancelo la operacion");
                    }
                });
            }
        });
    };
    ReportComponent.prototype.registryAssistance = function (type, reference) {
        var _this = this;
        var assistance = new assistance_class_1.Assistance(null, null, 'test address', reference, new assistance_type_class_1.AssistanceType(type, null), null, this.customerService.getCustomer(), null, '');
        console.log('El tipo de asistencia es =>  ', type);
        console.log('El cliente que registrara la incidencia es => ', JSON.stringify(this.customerService.getCustomer()));
        console.log('Parsed data => ', JSON.stringify(assistance));
        this.assistanceService.register(assistance).subscribe(function (data) {
            console.log('Assistance has been created => ', JSON.stringify(data));
            _this.assistanceService.setAssistance(data);
            _this.appSettingService.setAssistance(data);
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
            customer_service_1.CustomerService,
            assistance_service_1.AssistanceService,
            application_settings_service_1.ApplicationSettingsService])
    ], ReportComponent);
    return ReportComponent;
}());
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsMENBQXVDO0FBQ3ZDLHdFQUFvRTtBQUNwRSxrRkFBOEU7QUFDOUUsNkVBQW9FO0FBQ3BFLDhFQUEwRTtBQUUxRSx1RkFBNkU7QUFDN0Usb0NBQXNDO0FBUXRDLHNHQUFpRztBQUVqRzs7OztvQ0FJb0M7QUFRcEM7SUFJSSx5QkFBb0IsTUFBYyxFQUNkLFlBQTBCLEVBQzFCLGVBQWdDLEVBQ2hDLGlCQUFvQyxFQUNwQyxpQkFBNkM7UUFKN0MsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNEI7UUFDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQztJQUN2QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxvQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQUEsaUJBcUJDO1FBcEJHLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQzdDLFVBQUEsSUFBSTtZQUNBLEVBQUUsQ0FBQyxDQUFD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b20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7QXNzaXN0YW5jZVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXNzaXN0YW5jZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0Fzc2lzdGFuY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy9hc3Npc3RhbmNlLmNsYXNzXCI7XG5pbXBvcnQge0N1c3RvbWVyU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jdXN0b21lci5zZXJ2aWNlXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy91c2VyLmNsYXNzXCI7XG5pbXBvcnQge0Fzc2lzdGFuY2VUeXBlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NsYXNzZXMvYXNzaXN0YW5jZS10eXBlLmNsYXNzXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQge1xuICAgIGdldFN0cmluZyxcbiAgICBzZXRTdHJpbmcsXG4gICAgaGFzS2V5LFxuICAgIHJlbW92ZSxcbiAgICBjbGVhclxufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7QXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXBwbGljYXRpb24tc2V0dGluZ3Muc2VydmljZVwiO1xuXG4vKmltcG9ydCB7XG4gICAgaXNFbmFibGVkLFxuICAgIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCxcbiAgICBnZXRDdXJyZW50TG9jYXRpb24sXG59IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjsqL1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXBwLXJlcG9ydCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlcG9ydC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcmVwb3J0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXBvcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHVzZXI6IFVzZXI7XG4gICAgdGl0bGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGN1c3RvbWVyU2VydmljZTogQ3VzdG9tZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXNzaXN0YW5jZVNlcnZpY2U6IEFzc2lzdGFuY2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXBwU2V0dGluZ1NlcnZpY2U6IEFwcGxpY2F0aW9uU2V0dGluZ3NTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSAnU29saWNpdGUgYXNpc3RlbmNpYSc7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgcGFnZUxvYWRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXRDdXN0b21lckluZm8oKTtcbiAgICB9XG5cbiAgICBnZXRDdXN0b21lckluZm8oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdZb3UgYXJlIGFscmVhZHkgbG9nZWQgPT4gJywgSlNPTi5zdHJpbmdpZnkodGhpcy5sb2dpblNlcnZpY2UuZ2V0VXNlcigpKSk7XG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMubG9naW5TZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2UuZmluZCh0aGlzLnVzZXIuaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXN0b21lciA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyLmZjbSA9IHRoaXMuYXBwU2V0dGluZ1NlcnZpY2UuZ2V0VG9rZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0N1c3RvbWVyIGluZm8gPT4gJywgSlNPTi5zdHJpbmdpZnkoY3VzdG9tZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2Uuc2V0Q3VzdG9tZXIoY3VzdG9tZXIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS51cGRhdGVUb2tlbihjdXN0b21lcikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0N1c3RvbWVyIHRva2VuIHVwZGF0ZWQgPT4gJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcnMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9ycywgZXJyb3JzLnN0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFzc2l0YW5jZSh0eXBlOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGRpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIkVzdGEgc2VndXJvIHF1ZSBkZXNlYSBoYWNlciBsYSBzb2xpY2l0dWQ/XCIsXG4gICAgICAgICAgICB0aXRsZTogXCJOZWNlc2l0YSBheXVkYT9cIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJTaVwiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOb1wiLFxuICAgICAgICAgICAgbmV1dHJhbEJ1dHRvblRleHQ6IFwiQ2FuY2VsYXJcIlxuICAgICAgICB9O1xuICAgICAgICBsZXQgcHJvbXB0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkluZ3Jlc2UgdW5hIHJlZmVyZW5jaWEgZGUgc3UgZGlyZWNjacOzblwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJEZXRhbGxlIGxhIHJlZmVyZW5jaWE6XCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbGFyXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcbiAgICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxuICAgICAgICB9O1xuICAgICAgICBkaWFsb2dzLmNvbmZpcm0oZGlhbG9nT3B0aW9ucykudGhlbigocmVzdWx0OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZGlhbG9ncy5wcm9tcHQocHJvbXB0T3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHByb21wdFJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb21wdFJlc3VsdC5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdHJ5QXNzaXN0YW5jZSh0eXBlLCBwcm9tcHRSZXN1bHQudGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2UgY2FuY2VsbyBsYSBvcGVyYWNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdHJ5QXNzaXN0YW5jZSh0eXBlOiBudW1iZXIsIHJlZmVyZW5jZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGFzc2lzdGFuY2UgPSBuZXcgQXNzaXN0YW5jZShcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgJ3Rlc3QgYWRkcmVzcycsXG4gICAgICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgICAgICBuZXcgQXNzaXN0YW5jZVR5cGUodHlwZSwgbnVsbCksXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0Q3VzdG9tZXIoKSxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAnJ1xuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZygnRWwgdGlwbyBkZSBhc2lzdGVuY2lhIGVzID0+ICAnLCB0eXBlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0VsIGNsaWVudGUgcXVlIHJlZ2lzdHJhcmEgbGEgaW5jaWRlbmNpYSBlcyA9PiAnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmN1c3RvbWVyU2VydmljZS5nZXRDdXN0b21lcigpKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXJzZWQgZGF0YSA9PiAnLCBKU09OLnN0cmluZ2lmeShhc3Npc3RhbmNlKSk7XG4gICAgICAgIHRoaXMuYXNzaXN0YW5jZVNlcnZpY2UucmVnaXN0ZXIoYXNzaXN0YW5jZSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Fzc2lzdGFuY2UgaGFzIGJlZW4gY3JlYXRlZCA9PiAnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hc3Npc3RhbmNlU2VydmljZS5zZXRBc3Npc3RhbmNlKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwU2V0dGluZ1NlcnZpY2Uuc2V0QXNzaXN0YW5jZShkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jbGllbnQvd2FpdGluZycsIHR5cGVdKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcnMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9ycyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzLnN0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudExvY2F0aW9uKCkge1xuICAgICAgICAvKnZhciBsb2NhdGlvbiA9IGdldEN1cnJlbnRMb2NhdGlvbih7XG4gICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IDMsXG4gICAgICAgICAgICB1cGRhdGVEaXN0YW5jZTogMTAsXG4gICAgICAgICAgICBtYXhpbXVtQWdlOiAyMDAwMCxcbiAgICAgICAgICAgIHRpbWVvdXQ6IDIwMDAwXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGxvYykge1xuICAgICAgICAgICAgaWYgKGxvYykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBsb2NhdGlvbiBpczogXCIgKyBKU09OLnN0cmluZ2lmeShsb2MpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZS5tZXNzYWdlKTtcbiAgICAgICAgfSk7Ki9cbiAgICB9XG5cbn1cbiJdfQ==