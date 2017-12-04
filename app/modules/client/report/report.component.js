"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var assistance_class_1 = require("../../../shared/classes/assistance.class");
var login_service_1 = require("../../../shared/services/login.service");
var assistance_type_class_1 = require("../../../shared/classes/assistance-type.class");
var customer_service_1 = require("../../../shared/services/customer.service");
var assistance_service_1 = require("../../../shared/services/assistance.service");
var application_settings_service_1 = require("../../../shared/services/application-settings.service");
var enums_1 = require("ui/enums");
var dialogs = require("ui/dialogs");
var geolocation = require("nativescript-geolocation");
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
                        //Requesting gelocation data
                        _this.getCurrentLocation().then(function (location) {
                            //Geolocation Successfull
                            console.log("Location => data => ", JSON.stringify(location));
                            var customer = _this.customerService.getCustomer();
                            customer.latitude = location.latitude;
                            customer.longitude = location.longitude;
                            customer.altitude = location.altitude;
                            console.log("Customer => before => data => ", JSON.stringify(customer));
                            _this.customerService.updateLocation(customer).subscribe(function (data) {
                                console.log("Customer => data => updated => ", JSON.stringify(data));
                                _this.registryAssistance(type, promptResult.text);
                            }, function (error) {
                            });
                        }).catch(function (error) {
                            //Geolocation Error
                            console.log("Location => error => ", JSON.stringify(error));
                        });
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
        return geolocation.getCurrentLocation({
            desiredAccuracy: enums_1.Accuracy.high, maximumAge: 5000, timeout: 20000
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
            customer_service_1.CustomerService,
            assistance_service_1.AssistanceService,
            application_settings_service_1.ApplicationSettingsService])
    ], ReportComponent);
    return ReportComponent;
}());
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsMENBQXVDO0FBRXZDLDZFQUFvRTtBQUNwRSx3RUFBb0U7QUFDcEUsdUZBQTZFO0FBQzdFLDhFQUEwRTtBQUMxRSxrRkFBOEU7QUFDOUUsc0dBQWlHO0FBQ2pHLGtDQUFrQztBQUNsQyxvQ0FBc0M7QUFDdEMsc0RBQXdEO0FBRXhEOzs7O29DQUlvQztBQVFwQztJQUlJLHlCQUFvQixNQUFjLEVBQ2QsWUFBMEIsRUFDMUIsZUFBZ0MsRUFDaEMsaUJBQW9DLEVBQ3BDLGlCQUE2QztRQUo3QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE0QjtRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDO0lBQ3ZDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQseUNBQWUsR0FBZjtRQUFBLGlCQXFCQztRQXBCRyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hD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LGVBQWUsQ0FpSTNCO0lBQUQsc0JBQUM7Q0FBQSxBQWpJRCxJQWlJQztBQWpJWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL3VzZXIuY2xhc3NcIjtcbmltcG9ydCB7QXNzaXN0YW5jZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL2Fzc2lzdGFuY2UuY2xhc3NcIjtcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7QXNzaXN0YW5jZVR5cGV9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy9hc3Npc3RhbmNlLXR5cGUuY2xhc3NcIjtcbmltcG9ydCB7Q3VzdG9tZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2N1c3RvbWVyLnNlcnZpY2VcIjtcbmltcG9ydCB7QXNzaXN0YW5jZVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXNzaXN0YW5jZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0FwcGxpY2F0aW9uU2V0dGluZ3NTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwcGxpY2F0aW9uLXNldHRpbmdzLnNlcnZpY2VcIjtcbmltcG9ydCB7QWNjdXJhY3l9IGZyb20gXCJ1aS9lbnVtc1wiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuXG4vKmltcG9ydCB7XG4gICAgaXNFbmFibGVkLFxuICAgIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCxcbiAgICBnZXRDdXJyZW50TG9jYXRpb24sXG59IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjsqL1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXBwLXJlcG9ydCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlcG9ydC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcmVwb3J0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXBvcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHVzZXI6IFVzZXI7XG4gICAgdGl0bGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGN1c3RvbWVyU2VydmljZTogQ3VzdG9tZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXNzaXN0YW5jZVNlcnZpY2U6IEFzc2lzdGFuY2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXBwU2V0dGluZ1NlcnZpY2U6IEFwcGxpY2F0aW9uU2V0dGluZ3NTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSAnU29saWNpdGUgYXNpc3RlbmNpYSc7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgcGFnZUxvYWRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXRDdXN0b21lckluZm8oKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiA9PiBTdGF0dXMgPT4gXCIsIHRoaXMuYXBwU2V0dGluZ1NlcnZpY2UuZ2V0TG9nZ2VkKCkpO1xuICAgIH1cblxuICAgIGdldEN1c3RvbWVySW5mbygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBhcmUgYWxyZWFkeSBsb2dlZCA9PiAnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxvZ2luU2VydmljZS5nZXRVc2VyKCkpKTtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5sb2dpblNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5maW5kKHRoaXMudXNlci5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXIuZmNtID0gdGhpcy5hcHBTZXR0aW5nU2VydmljZS5nZXRUb2tlbigpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ3VzdG9tZXIgaW5mbyA9PiAnLCBKU09OLnN0cmluZ2lmeShjdXN0b21lcikpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5zZXRDdXN0b21lcihjdXN0b21lcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLnVwZGF0ZVRva2VuKGN1c3RvbWVyKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ3VzdG9tZXIgdG9rZW4gdXBkYXRlZCA9PiAnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9ycyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3JzLCBlcnJvcnMuc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QXNzaXRhbmNlKHR5cGU6IG51bWJlcikge1xuICAgICAgICBsZXQgZGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRXN0YSBzZWd1cm8gcXVlIGRlc2VhIGhhY2VyIGxhIHNvbGljaXR1ZD9cIixcbiAgICAgICAgICAgIHRpdGxlOiBcIk5lY2VzaXRhIGF5dWRhP1wiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlNpXCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCIsXG4gICAgICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiXG4gICAgICAgIH07XG4gICAgICAgIGxldCBwcm9tcHRPcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6IFwiSW5ncmVzZSB1bmEgcmVmZXJlbmNpYSBkZSBzdSBkaXJlY2Npw7NuXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkRldGFsbGUgbGEgcmVmZXJlbmNpYTpcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsYXJcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICAgICAgaW5wdXRUeXBlOiBkaWFsb2dzLmlucHV0VHlwZS50ZXh0XG4gICAgICAgIH07XG4gICAgICAgIGRpYWxvZ3MuY29uZmlybShkaWFsb2dPcHRpb25zKS50aGVuKChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBkaWFsb2dzLnByb21wdChwcm9tcHRPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocHJvbXB0UmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvbXB0UmVzdWx0LnJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vUmVxdWVzdGluZyBnZWxvY2F0aW9uIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEN1cnJlbnRMb2NhdGlvbigpLnRoZW4obG9jYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0dlb2xvY2F0aW9uIFN1Y2Nlc3NmdWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9jYXRpb24gPT4gZGF0YSA9PiBcIiwgSlNPTi5zdHJpbmdpZnkobG9jYXRpb24pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyID0gdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0Q3VzdG9tZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXIubGF0aXR1ZGUgPSBsb2NhdGlvbi5sYXRpdHVkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXIubG9uZ2l0dWRlID0gbG9jYXRpb24ubG9uZ2l0dWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lci5hbHRpdHVkZSA9IGxvY2F0aW9uLmFsdGl0dWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1c3RvbWVyID0+IGJlZm9yZSA9PiBkYXRhID0+IFwiLCBKU09OLnN0cmluZ2lmeShjdXN0b21lcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS51cGRhdGVMb2NhdGlvbihjdXN0b21lcikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdXN0b21lciA9PiBkYXRhID0+IHVwZGF0ZWQgPT4gXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdHJ5QXNzaXN0YW5jZSh0eXBlLCBwcm9tcHRSZXN1bHQudGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0dlb2xvY2F0aW9uIEVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9jYXRpb24gPT4gZXJyb3IgPT4gXCIsIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2UgY2FuY2VsbyBsYSBvcGVyYWNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdHJ5QXNzaXN0YW5jZSh0eXBlOiBudW1iZXIsIHJlZmVyZW5jZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGFzc2lzdGFuY2UgPSBuZXcgQXNzaXN0YW5jZShcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgJ3Rlc3QgYWRkcmVzcycsXG4gICAgICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgICAgICBuZXcgQXNzaXN0YW5jZVR5cGUodHlwZSwgbnVsbCksXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0Q3VzdG9tZXIoKSxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAnJ1xuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZygnRWwgdGlwbyBkZSBhc2lzdGVuY2lhIGVzID0+ICAnLCB0eXBlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0VsIGNsaWVudGUgcXVlIHJlZ2lzdHJhcmEgbGEgaW5jaWRlbmNpYSBlcyA9PiAnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmN1c3RvbWVyU2VydmljZS5nZXRDdXN0b21lcigpKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXJzZWQgZGF0YSA9PiAnLCBKU09OLnN0cmluZ2lmeShhc3Npc3RhbmNlKSk7XG4gICAgICAgIHRoaXMuYXNzaXN0YW5jZVNlcnZpY2UucmVnaXN0ZXIoYXNzaXN0YW5jZSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Fzc2lzdGFuY2UgaGFzIGJlZW4gY3JlYXRlZCA9PiAnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hc3Npc3RhbmNlU2VydmljZS5zZXRBc3Npc3RhbmNlKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwU2V0dGluZ1NlcnZpY2Uuc2V0QXNzaXN0YW5jZShkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jbGllbnQvd2FpdGluZycsIHR5cGVdKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcnMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9ycyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzLnN0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudExvY2F0aW9uKCkge1xuICAgICAgICByZXR1cm4gZ2VvbG9jYXRpb24uZ2V0Q3VycmVudExvY2F0aW9uKHtcbiAgICAgICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsIG1heGltdW1BZ2U6IDUwMDAsIHRpbWVvdXQ6IDIwMDAwXG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19