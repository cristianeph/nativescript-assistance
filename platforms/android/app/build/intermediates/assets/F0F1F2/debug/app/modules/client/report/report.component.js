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
var page_1 = require("tns-core-modules/ui/page");
var google_maps_service_1 = require("../../../shared/services/google-maps.service");
/*import {
    isEnabled,
    enableLocationRequest,
    getCurrentLocation,
} from "nativescript-geolocation";*/
var ReportComponent = (function () {
    function ReportComponent(router, page, loginService, customerService, assistanceService, appSettingService, googleMapsService) {
        this.router = router;
        this.page = page;
        this.loginService = loginService;
        this.customerService = customerService;
        this.assistanceService = assistanceService;
        this.appSettingService = appSettingService;
        this.googleMapsService = googleMapsService;
        this.title = 'Solicite asistencia';
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent.prototype.pageLoaded = function () {
        this.page.actionBarHidden = true;
        this.getCustomerInfo();
        console.log("Login => Status => ", this.appSettingService.getLogged());
    };
    ReportComponent.prototype.getCustomerInfo = function () {
        var _this = this;
        console.log('You are already loged => ', JSON.stringify(this.loginService.getUser()));
        this.user = this.loginService.getUser();
        console.log('User previously received => ', JSON.stringify(this.user));
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
            console.log('Customer info error => ', errors, errors.status);
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
                            var requestedLocation = location;
                            console.log("Location => data => ", JSON.stringify(requestedLocation));
                            var customer = _this.customerService.getCustomer();
                            customer.latitude = requestedLocation.latitude;
                            customer.longitude = requestedLocation.longitude;
                            customer.altitude = requestedLocation.altitude;
                            _this.customerService.setCustomer(customer);
                            console.log("Customer => before => data => ", JSON.stringify(customer));
                            _this.customerService.updateLocation(customer).subscribe(function (data) {
                                console.log("Customer => data => updated => ", JSON.stringify(data));
                                _this.registryAssistance(type, promptResult.text);
                            }, function (error) {
                                console.log("Error => ", error);
                            });
                        }).catch(function (error) {
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
        var assistance = new assistance_class_1.Assistance(null, null, '-', reference, new assistance_type_class_1.AssistanceType(type, null), null, this.customerService.getCustomer(), null, '', 'PENDIENTE');
        console.log('El tipo de asistencia es =>  ', type);
        console.log('El cliente que registrara la incidencia es => ', JSON.stringify(this.customerService.getCustomer()));
        console.log('Parsed data => ', JSON.stringify(assistance));
        this.assistanceService.register(assistance).subscribe(function (data) {
            console.log('Assistance has been created => ', JSON.stringify(data));
            _this.assistanceService.setAssistance(data);
            _this.appSettingService.setAssistance(data);
            _this.updateReverseLocation(data);
            _this.router.navigate(['/client/waiting', type]);
        }, function (errors) {
            console.log('Error', errors, errors.status);
        });
    };
    ReportComponent.prototype.updateReverseLocation = function (assistance) {
        var _this = this;
        console.log("About to update location...");
        this.googleMapsService.getReverseGeocoding(this.customerService.getCustomer().latitude, this.customerService.getCustomer().longitude, 0).subscribe(function (data) {
            var addressName = "";
            data.results[0].address_components.forEach(function (item) {
                addressName = (addressName === "") ? item.long_name : addressName + " " + item.long_name;
            });
            assistance.address = addressName.substr(0, 49);
            console.log("Google Maps => Reverse => ", assistance.address, assistance.address.length);
            console.log("Google Maps => Assistance => ", JSON.stringify(assistance));
            _this.assistanceService.updateLocation(assistance).subscribe(function (data) {
                console.log("Update Location => Success => ", JSON.stringify(data));
            }, function (errors) {
                console.log("Update Location => Error => ", JSON.stringify(errors));
            });
        }, function (errors) {
            console.log("Getting Location => Error => ", JSON.stringify(errors));
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
            page_1.Page,
            login_service_1.LoginService,
            customer_service_1.CustomerService,
            assistance_service_1.AssistanceService,
            application_settings_service_1.ApplicationSettingsService,
            google_maps_service_1.GoogleMapsService])
    ], ReportComponent);
    return ReportComponent;
}());
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsMENBQXVDO0FBRXZDLDZFQUFvRTtBQUNwRSx3RUFBb0U7QUFDcEUsdUZBQTZFO0FBQzdFLDhFQUEwRTtBQUMxRSxrRkFBOEU7QUFDOUUsc0dBQWlHO0FBQ2pHLGtDQUFrQztBQUNsQyxvQ0FBc0M7QUFDdEMsc0RBQXdEO0FBQ3hELGlEQUE4QztBQUM5QyxvRkFBK0U7QUFFL0U7Ozs7b0NBSW9DO0FBUXBDO0lBSUkseUJBQW9CLE1BQWMsRUFDZCxJQUFVLEVBQ1YsWUFBMEIsRUFDMUIsZUFBZ0MsRUFDaEMsaUJBQW9DLEVBQ3BDLGlCQUE2QyxFQUM3QyxpQkFBb0M7UUFOcEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTRCO1FBQzdDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQztJQUN2QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxvQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQUEsaUJBc0JDO1FBckJHLE9BQU8sQ0FBQyxH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LE1BQU07Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEUsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDLEVBQ0QsVUFBQyxNQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsNENBQWtCLEdBQWxCO1FBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztZQUM5QixlQUFlLEVBQUUsZ0JBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSztTQUN2RSxDQUFDLENBQUM7SUFDUCxDQUFDO0lBbEtRLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3hDLENBQUM7eUNBSzhCLGVBQU07WUFDUixXQUFJO1lBQ0ksNEJBQVk7WUFDVCxrQ0FBZTtZQUNiLHNDQUFpQjtZQUNqQix5REFBMEI7WUFDMUIsdUNBQWlCO09BVi9DLGVBQWUsQ0FvSzNCO0lBQUQsc0JBQUM7Q0FBQSxBQXBLRCxJQW9LQztBQXBLWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL3VzZXIuY2xhc3NcIjtcbmltcG9ydCB7QXNzaXN0YW5jZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL2Fzc2lzdGFuY2UuY2xhc3NcIjtcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7QXNzaXN0YW5jZVR5cGV9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy9hc3Npc3RhbmNlLXR5cGUuY2xhc3NcIjtcbmltcG9ydCB7Q3VzdG9tZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2N1c3RvbWVyLnNlcnZpY2VcIjtcbmltcG9ydCB7QXNzaXN0YW5jZVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXNzaXN0YW5jZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0FwcGxpY2F0aW9uU2V0dGluZ3NTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwcGxpY2F0aW9uLXNldHRpbmdzLnNlcnZpY2VcIjtcbmltcG9ydCB7QWNjdXJhY3l9IGZyb20gXCJ1aS9lbnVtc1wiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQge0dvb2dsZU1hcHNTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2dvb2dsZS1tYXBzLnNlcnZpY2VcIjtcblxuLyppbXBvcnQge1xuICAgIGlzRW5hYmxlZCxcbiAgICBlbmFibGVMb2NhdGlvblJlcXVlc3QsXG4gICAgZ2V0Q3VycmVudExvY2F0aW9uLFxufSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7Ki9cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC1yZXBvcnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZXBvcnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3JlcG9ydC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVwb3J0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB1c2VyOiBVc2VyO1xuICAgIHRpdGxlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgY3VzdG9tZXJTZXJ2aWNlOiBDdXN0b21lclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhc3Npc3RhbmNlU2VydmljZTogQXNzaXN0YW5jZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhcHBTZXR0aW5nU2VydmljZTogQXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBnb29nbGVNYXBzU2VydmljZTogR29vZ2xlTWFwc1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9ICdTb2xpY2l0ZSBhc2lzdGVuY2lhJztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBwYWdlTG9hZGVkKCkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nZXRDdXN0b21lckluZm8oKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiA9PiBTdGF0dXMgPT4gXCIsIHRoaXMuYXBwU2V0dGluZ1NlcnZpY2UuZ2V0TG9nZ2VkKCkpO1xuICAgIH1cblxuICAgIGdldEN1c3RvbWVySW5mbygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBhcmUgYWxyZWFkeSBsb2dlZCA9PiAnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxvZ2luU2VydmljZS5nZXRVc2VyKCkpKTtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5sb2dpblNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgICBjb25zb2xlLmxvZygnVXNlciBwcmV2aW91c2x5IHJlY2VpdmVkID0+ICcsIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlcikpO1xuICAgICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5maW5kKHRoaXMudXNlci5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXIuZmNtID0gdGhpcy5hcHBTZXR0aW5nU2VydmljZS5nZXRUb2tlbigpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ3VzdG9tZXIgaW5mbyA9PiAnLCBKU09OLnN0cmluZ2lmeShjdXN0b21lcikpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5zZXRDdXN0b21lcihjdXN0b21lcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLnVwZGF0ZVRva2VuKGN1c3RvbWVyKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ3VzdG9tZXIgdG9rZW4gdXBkYXRlZCA9PiAnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9ycyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0N1c3RvbWVyIGluZm8gZXJyb3IgPT4gJywgZXJyb3JzLCBlcnJvcnMuc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QXNzaXRhbmNlKHR5cGU6IG51bWJlcikge1xuICAgICAgICBsZXQgZGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRXN0YSBzZWd1cm8gcXVlIGRlc2VhIGhhY2VyIGxhIHNvbGljaXR1ZD9cIixcbiAgICAgICAgICAgIHRpdGxlOiBcIk5lY2VzaXRhIGF5dWRhP1wiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlNpXCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCIsXG4gICAgICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiXG4gICAgICAgIH07XG4gICAgICAgIGxldCBwcm9tcHRPcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6IFwiSW5ncmVzZSB1bmEgcmVmZXJlbmNpYSBkZSBzdSBkaXJlY2Npw7NuXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkRldGFsbGUgbGEgcmVmZXJlbmNpYTpcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsYXJcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICAgICAgaW5wdXRUeXBlOiBkaWFsb2dzLmlucHV0VHlwZS50ZXh0XG4gICAgICAgIH07XG4gICAgICAgIGRpYWxvZ3MuY29uZmlybShkaWFsb2dPcHRpb25zKS50aGVuKChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBkaWFsb2dzLnByb21wdChwcm9tcHRPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocHJvbXB0UmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvbXB0UmVzdWx0LnJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vUmVxdWVzdGluZyBnZWxvY2F0aW9uIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEN1cnJlbnRMb2NhdGlvbigpLnRoZW4obG9jYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0dlb2xvY2F0aW9uIFN1Y2Nlc3NmdWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXF1ZXN0ZWRMb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uID0+IGRhdGEgPT4gXCIsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RlZExvY2F0aW9uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXN0b21lciA9IHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEN1c3RvbWVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyLmxhdGl0dWRlID0gcmVxdWVzdGVkTG9jYXRpb24ubGF0aXR1ZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyLmxvbmdpdHVkZSA9IHJlcXVlc3RlZExvY2F0aW9uLmxvbmdpdHVkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXIuYWx0aXR1ZGUgPSByZXF1ZXN0ZWRMb2NhdGlvbi5hbHRpdHVkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2Uuc2V0Q3VzdG9tZXIoY3VzdG9tZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1c3RvbWVyID0+IGJlZm9yZSA9PiBkYXRhID0+IFwiLCBKU09OLnN0cmluZ2lmeShjdXN0b21lcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS51cGRhdGVMb2NhdGlvbihjdXN0b21lcikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdXN0b21lciA9PiBkYXRhID0+IHVwZGF0ZWQgPT4gXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdHJ5QXNzaXN0YW5jZSh0eXBlLCBwcm9tcHRSZXN1bHQudGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgPT4gXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9jYXRpb24gPT4gZXJyb3IgPT4gXCIsIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2UgY2FuY2VsbyBsYSBvcGVyYWNpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RyeUFzc2lzdGFuY2UodHlwZTogbnVtYmVyLCByZWZlcmVuY2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBhc3Npc3RhbmNlID0gbmV3IEFzc2lzdGFuY2UoXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICctJyxcbiAgICAgICAgICAgIHJlZmVyZW5jZSxcbiAgICAgICAgICAgIG5ldyBBc3Npc3RhbmNlVHlwZSh0eXBlLCBudWxsKSxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5nZXRDdXN0b21lcigpLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgJ1BFTkRJRU5URSdcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0VsIHRpcG8gZGUgYXNpc3RlbmNpYSBlcyA9PiAgJywgdHlwZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFbCBjbGllbnRlIHF1ZSByZWdpc3RyYXJhIGxhIGluY2lkZW5jaWEgZXMgPT4gJywgSlNPTi5zdHJpbmdpZnkodGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0Q3VzdG9tZXIoKSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnUGFyc2VkIGRhdGEgPT4gJywgSlNPTi5zdHJpbmdpZnkoYXNzaXN0YW5jZSkpO1xuICAgICAgICB0aGlzLmFzc2lzdGFuY2VTZXJ2aWNlLnJlZ2lzdGVyKGFzc2lzdGFuY2UpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Fzc2lzdGFuY2UgaGFzIGJlZW4gY3JlYXRlZCA9PiAnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hc3Npc3RhbmNlU2VydmljZS5zZXRBc3Npc3RhbmNlKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwU2V0dGluZ1NlcnZpY2Uuc2V0QXNzaXN0YW5jZShkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJldmVyc2VMb2NhdGlvbihkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jbGllbnQvd2FpdGluZycsIHR5cGVdKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3JzLCBlcnJvcnMuc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB1cGRhdGVSZXZlcnNlTG9jYXRpb24oYXNzaXN0YW5jZTogQXNzaXN0YW5jZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFib3V0IHRvIHVwZGF0ZSBsb2NhdGlvbi4uLlwiKTtcbiAgICAgICAgdGhpcy5nb29nbGVNYXBzU2VydmljZS5nZXRSZXZlcnNlR2VvY29kaW5nKFxuICAgICAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0Q3VzdG9tZXIoKS5sYXRpdHVkZSxcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEN1c3RvbWVyKCkubG9uZ2l0dWRlLFxuICAgICAgICAgICAgMFxuICAgICAgICApLnN1YnNjcmliZShcbiAgICAgICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGFkZHJlc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgICBkYXRhLnJlc3VsdHNbMF0uYWRkcmVzc19jb21wb25lbnRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NOYW1lID0gKGFkZHJlc3NOYW1lID09PSBcIlwiKSA/IGl0ZW0ubG9uZ19uYW1lIDogYWRkcmVzc05hbWUgKyBcIiBcIiArIGl0ZW0ubG9uZ19uYW1lO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFzc2lzdGFuY2UuYWRkcmVzcyA9IGFkZHJlc3NOYW1lLnN1YnN0cigwLCA0OSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHb29nbGUgTWFwcyA9PiBSZXZlcnNlID0+IFwiLCBhc3Npc3RhbmNlLmFkZHJlc3MsIGFzc2lzdGFuY2UuYWRkcmVzcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR29vZ2xlIE1hcHMgPT4gQXNzaXN0YW5jZSA9PiBcIiwgSlNPTi5zdHJpbmdpZnkoYXNzaXN0YW5jZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXNzaXN0YW5jZVNlcnZpY2UudXBkYXRlTG9jYXRpb24oYXNzaXN0YW5jZSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVcGRhdGUgTG9jYXRpb24gPT4gU3VjY2VzcyA9PiBcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0ZSBMb2NhdGlvbiA9PiBFcnJvciA9PiBcIiwgSlNPTi5zdHJpbmdpZnkoZXJyb3JzKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdldHRpbmcgTG9jYXRpb24gPT4gRXJyb3IgPT4gXCIsIEpTT04uc3RyaW5naWZ5KGVycm9ycykpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRMb2NhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7XG4gICAgICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLCBtYXhpbXVtQWdlOiA1MDAwLCB0aW1lb3V0OiAyMDAwMFxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==