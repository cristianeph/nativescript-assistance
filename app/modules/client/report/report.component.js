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
        console.log("Login => Status => ", this.appSettingService.getLogged());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsMENBQXVDO0FBQ3ZDLHdFQUFvRTtBQUNwRSxrRkFBOEU7QUFDOUUsNkVBQW9FO0FBQ3BFLDhFQUEwRTtBQUUxRSx1RkFBNkU7QUFDN0Usb0NBQXNDO0FBUXRDLHNHQUFpRztBQUVqRzs7OztvQ0FJb0M7QUFRcEM7SUFJSSx5QkFBb0IsTUFBYyxFQUNkLFlBQTBCLEVBQzFCLGVBQWdDLEVBQ2hDLGlCQUFvQyxFQUNwQyxpQkFBNkM7UUFKN0MsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNEI7UUFDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQztJQUN2QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxvQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELHlDQUFlLEdBQWY7UUFBQSxpQkFxQkM7UUFwQkcsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUks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QztDQUFBLEFBckhELElBcUhDO0FBckhZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHtBc3Npc3RhbmNlU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hc3Npc3RhbmNlLnNlcnZpY2VcIjtcbmltcG9ydCB7QXNzaXN0YW5jZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL2Fzc2lzdGFuY2UuY2xhc3NcIjtcbmltcG9ydCB7Q3VzdG9tZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2N1c3RvbWVyLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL3VzZXIuY2xhc3NcIjtcbmltcG9ydCB7QXNzaXN0YW5jZVR5cGV9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy9hc3Npc3RhbmNlLXR5cGUuY2xhc3NcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7XG4gICAgZ2V0U3RyaW5nLFxuICAgIHNldFN0cmluZyxcbiAgICBoYXNLZXksXG4gICAgcmVtb3ZlLFxuICAgIGNsZWFyXG59IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHtBcHBsaWNhdGlvblNldHRpbmdzU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncy5zZXJ2aWNlXCI7XG5cbi8qaW1wb3J0IHtcbiAgICBpc0VuYWJsZWQsXG4gICAgZW5hYmxlTG9jYXRpb25SZXF1ZXN0LFxuICAgIGdldEN1cnJlbnRMb2NhdGlvbixcbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiOyovXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhcHAtcmVwb3J0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmVwb3J0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9yZXBvcnQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlcG9ydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgdXNlcjogVXNlcjtcbiAgICB0aXRsZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgY3VzdG9tZXJTZXJ2aWNlOiBDdXN0b21lclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhc3Npc3RhbmNlU2VydmljZTogQXNzaXN0YW5jZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhcHBTZXR0aW5nU2VydmljZTogQXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9ICdTb2xpY2l0ZSBhc2lzdGVuY2lhJztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBwYWdlTG9hZGVkKCkge1xuICAgICAgICB0aGlzLmdldEN1c3RvbWVySW5mbygpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2luID0+IFN0YXR1cyA9PiBcIiwgdGhpcy5hcHBTZXR0aW5nU2VydmljZS5nZXRMb2dnZWQoKSk7XG4gICAgfVxuXG4gICAgZ2V0Q3VzdG9tZXJJbmZvKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnWW91IGFyZSBhbHJlYWR5IGxvZ2VkID0+ICcsIEpTT04uc3RyaW5naWZ5KHRoaXMubG9naW5TZXJ2aWNlLmdldFVzZXIoKSkpO1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLmxvZ2luU2VydmljZS5nZXRVc2VyKCk7XG4gICAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmZpbmQodGhpcy51c2VyLmlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXIgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lci5mY20gPSB0aGlzLmFwcFNldHRpbmdTZXJ2aWNlLmdldFRva2VuKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDdXN0b21lciBpbmZvID0+ICcsIEpTT04uc3RyaW5naWZ5KGN1c3RvbWVyKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLnNldEN1c3RvbWVyKGN1c3RvbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2UudXBkYXRlVG9rZW4oY3VzdG9tZXIpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDdXN0b21lciB0b2tlbiB1cGRhdGVkID0+ICcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvcnMsIGVycm9ycy5zdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlcXVlc3RBc3NpdGFuY2UodHlwZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBkaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogXCJFc3RhIHNlZ3VybyBxdWUgZGVzZWEgaGFjZXIgbGEgc29saWNpdHVkP1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwiTmVjZXNpdGEgYXl1ZGE/XCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiU2lcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm9cIixcbiAgICAgICAgICAgIG5ldXRyYWxCdXR0b25UZXh0OiBcIkNhbmNlbGFyXCJcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHByb21wdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJJbmdyZXNlIHVuYSByZWZlcmVuY2lhIGRlIHN1IGRpcmVjY2nDs25cIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRGV0YWxsZSBsYSByZWZlcmVuY2lhOlwiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcbiAgICAgICAgfTtcbiAgICAgICAgZGlhbG9ncy5jb25maXJtKGRpYWxvZ09wdGlvbnMpLnRoZW4oKHJlc3VsdDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGRpYWxvZ3MucHJvbXB0KHByb21wdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChwcm9tcHRSZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9tcHRSZXN1bHQucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RyeUFzc2lzdGFuY2UodHlwZSwgcHJvbXB0UmVzdWx0LnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlIGNhbmNlbG8gbGEgb3BlcmFjaW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RyeUFzc2lzdGFuY2UodHlwZTogbnVtYmVyLCByZWZlcmVuY2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBhc3Npc3RhbmNlID0gbmV3IEFzc2lzdGFuY2UoXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICd0ZXN0IGFkZHJlc3MnLFxuICAgICAgICAgICAgcmVmZXJlbmNlLFxuICAgICAgICAgICAgbmV3IEFzc2lzdGFuY2VUeXBlKHR5cGUsIG51bGwpLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEN1c3RvbWVyKCksXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgJydcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0VsIHRpcG8gZGUgYXNpc3RlbmNpYSBlcyA9PiAgJywgdHlwZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFbCBjbGllbnRlIHF1ZSByZWdpc3RyYXJhIGxhIGluY2lkZW5jaWEgZXMgPT4gJywgSlNPTi5zdHJpbmdpZnkodGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0Q3VzdG9tZXIoKSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnUGFyc2VkIGRhdGEgPT4gJywgSlNPTi5zdHJpbmdpZnkoYXNzaXN0YW5jZSkpO1xuICAgICAgICB0aGlzLmFzc2lzdGFuY2VTZXJ2aWNlLnJlZ2lzdGVyKGFzc2lzdGFuY2UpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3Npc3RhbmNlIGhhcyBiZWVuIGNyZWF0ZWQgPT4gJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXNzaXN0YW5jZVNlcnZpY2Uuc2V0QXNzaXN0YW5jZShkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcFNldHRpbmdTZXJ2aWNlLnNldEFzc2lzdGFuY2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY2xpZW50L3dhaXRpbmcnLCB0eXBlXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9ycy5zdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRMb2NhdGlvbigpIHtcbiAgICAgICAgLyp2YXIgbG9jYXRpb24gPSBnZXRDdXJyZW50TG9jYXRpb24oe1xuICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiAzLFxuICAgICAgICAgICAgdXBkYXRlRGlzdGFuY2U6IDEwLFxuICAgICAgICAgICAgbWF4aW11bUFnZTogMjAwMDAsXG4gICAgICAgICAgICB0aW1lb3V0OiAyMDAwMFxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChsb2MpIHtcbiAgICAgICAgICAgIGlmIChsb2MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgbG9jYXRpb24gaXM6IFwiICsgSlNPTi5zdHJpbmdpZnkobG9jKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUubWVzc2FnZSk7XG4gICAgICAgIH0pOyovXG4gICAgfVxuXG59XG4iXX0=