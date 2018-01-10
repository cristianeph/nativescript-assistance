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
        var assistance = new assistance_class_1.Assistance(null, null, '-', reference, new assistance_type_class_1.AssistanceType(type, null), null, this.customerService.getCustomer(), null, '', '');
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
            console.log("Google Maps => Reverse => ", JSON.stringify(data.results[0].address_components[0].long_name));
            assistance.address = data.results[0].address_components[0].long_name;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsMENBQXVDO0FBRXZDLDZFQUFvRTtBQUNwRSx3RUFBb0U7QUFDcEUsdUZBQTZFO0FBQzdFLDhFQUEwRTtBQUMxRSxrRkFBOEU7QUFDOUUsc0dBQWlHO0FBQ2pHLGtDQUFrQztBQUNsQyxvQ0FBc0M7QUFDdEMsc0RBQXdEO0FBQ3hELGlEQUE4QztBQUM5QyxvRkFBK0U7QUFFL0U7Ozs7b0NBSW9DO0FBUXBDO0lBSUkseUJBQW9CLE1BQWMsRUFDZCxJQUFVLEVBQ1YsWUFBMEIsRUFDMUIsZUFBZ0MsRUFDaEMsaUJBQW9DLEVBQ3BDLGlCQUE2QyxFQUM3QyxpQkFBb0M7UUFOcEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTRCO1FBQzdDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQztJQUN2QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxvQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQUEsaUJBc0JDO1FBckJHLE9BQU8sQ0FBQyxH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QUM7SUFFRCw0Q0FBa0IsR0FBbEI7UUFDSSxNQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDO1lBQzlCLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLO1NBQ3ZFLENBQUMsQ0FBQztJQUNQLENBQUM7SUE3SlEsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDeEMsQ0FBQzt5Q0FLOEIsZUFBTTtZQUNSLFdBQUk7WUFDSSw0QkFBWTtZQUNULGtDQUFlO1lBQ2Isc0NBQWlCO1lBQ2pCLHlEQUEwQjtZQUMxQix1Q0FBaUI7T0FWL0MsZUFBZSxDQStKM0I7SUFBRCxzQkFBQztDQUFBLEFBL0pELElBK0pDO0FBL0pZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NsYXNzZXMvdXNlci5jbGFzc1wiO1xuaW1wb3J0IHtBc3Npc3RhbmNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NsYXNzZXMvYXNzaXN0YW5jZS5jbGFzc1wiO1xuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHtBc3Npc3RhbmNlVHlwZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL2Fzc2lzdGFuY2UtdHlwZS5jbGFzc1wiO1xuaW1wb3J0IHtDdXN0b21lclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvY3VzdG9tZXIuc2VydmljZVwiO1xuaW1wb3J0IHtBc3Npc3RhbmNlU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hc3Npc3RhbmNlLnNlcnZpY2VcIjtcbmltcG9ydCB7QXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXBwbGljYXRpb24tc2V0dGluZ3Muc2VydmljZVwiO1xuaW1wb3J0IHtBY2N1cmFjeX0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7R29vZ2xlTWFwc1NlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZ29vZ2xlLW1hcHMuc2VydmljZVwiO1xuXG4vKmltcG9ydCB7XG4gICAgaXNFbmFibGVkLFxuICAgIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCxcbiAgICBnZXRDdXJyZW50TG9jYXRpb24sXG59IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjsqL1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXBwLXJlcG9ydCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlcG9ydC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcmVwb3J0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXBvcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHVzZXI6IFVzZXI7XG4gICAgdGl0bGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjdXN0b21lclNlcnZpY2U6IEN1c3RvbWVyU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFzc2lzdGFuY2VTZXJ2aWNlOiBBc3Npc3RhbmNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFwcFNldHRpbmdTZXJ2aWNlOiBBcHBsaWNhdGlvblNldHRpbmdzU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGdvb2dsZU1hcHNTZXJ2aWNlOiBHb29nbGVNYXBzU2VydmljZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gJ1NvbGljaXRlIGFzaXN0ZW5jaWEnO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIHBhZ2VMb2FkZWQoKSB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmdldEN1c3RvbWVySW5mbygpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2luID0+IFN0YXR1cyA9PiBcIiwgdGhpcy5hcHBTZXR0aW5nU2VydmljZS5nZXRMb2dnZWQoKSk7XG4gICAgfVxuXG4gICAgZ2V0Q3VzdG9tZXJJbmZvKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnWW91IGFyZSBhbHJlYWR5IGxvZ2VkID0+ICcsIEpTT04uc3RyaW5naWZ5KHRoaXMubG9naW5TZXJ2aWNlLmdldFVzZXIoKSkpO1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLmxvZ2luU2VydmljZS5nZXRVc2VyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIHByZXZpb3VzbHkgcmVjZWl2ZWQgPT4gJywgSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyKSk7XG4gICAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmZpbmQodGhpcy51c2VyLmlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VzdG9tZXIgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lci5mY20gPSB0aGlzLmFwcFNldHRpbmdTZXJ2aWNlLmdldFRva2VuKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDdXN0b21lciBpbmZvID0+ICcsIEpTT04uc3RyaW5naWZ5KGN1c3RvbWVyKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLnNldEN1c3RvbWVyKGN1c3RvbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2UudXBkYXRlVG9rZW4oY3VzdG9tZXIpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDdXN0b21lciB0b2tlbiB1cGRhdGVkID0+ICcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ3VzdG9tZXIgaW5mbyBlcnJvciA9PiAnLCBlcnJvcnMsIGVycm9ycy5zdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlcXVlc3RBc3NpdGFuY2UodHlwZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBkaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogXCJFc3RhIHNlZ3VybyBxdWUgZGVzZWEgaGFjZXIgbGEgc29saWNpdHVkP1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwiTmVjZXNpdGEgYXl1ZGE/XCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiU2lcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm9cIixcbiAgICAgICAgICAgIG5ldXRyYWxCdXR0b25UZXh0OiBcIkNhbmNlbGFyXCJcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHByb21wdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJJbmdyZXNlIHVuYSByZWZlcmVuY2lhIGRlIHN1IGRpcmVjY2nDs25cIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRGV0YWxsZSBsYSByZWZlcmVuY2lhOlwiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcbiAgICAgICAgfTtcbiAgICAgICAgZGlhbG9ncy5jb25maXJtKGRpYWxvZ09wdGlvbnMpLnRoZW4oKHJlc3VsdDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGRpYWxvZ3MucHJvbXB0KHByb21wdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChwcm9tcHRSZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9tcHRSZXN1bHQucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9SZXF1ZXN0aW5nIGdlbG9jYXRpb24gZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudExvY2F0aW9uKCkudGhlbihsb2NhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vR2VvbG9jYXRpb24gU3VjY2Vzc2Z1bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcXVlc3RlZExvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9jYXRpb24gPT4gZGF0YSA9PiBcIiwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdGVkTG9jYXRpb24pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyID0gdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0Q3VzdG9tZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXIubGF0aXR1ZGUgPSByZXF1ZXN0ZWRMb2NhdGlvbi5sYXRpdHVkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXIubG9uZ2l0dWRlID0gcmVxdWVzdGVkTG9jYXRpb24ubG9uZ2l0dWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lci5hbHRpdHVkZSA9IHJlcXVlc3RlZExvY2F0aW9uLmFsdGl0dWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5zZXRDdXN0b21lcihjdXN0b21lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3VzdG9tZXIgPT4gYmVmb3JlID0+IGRhdGEgPT4gXCIsIEpTT04uc3RyaW5naWZ5KGN1c3RvbWVyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLnVwZGF0ZUxvY2F0aW9uKGN1c3RvbWVyKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1c3RvbWVyID0+IGRhdGEgPT4gdXBkYXRlZCA9PiBcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0cnlBc3Npc3RhbmNlKHR5cGUsIHByb21wdFJlc3VsdC50ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciA9PiBcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2NhdGlvbiA9PiBlcnJvciA9PiBcIiwgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZSBjYW5jZWxvIGxhIG9wZXJhY2lvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdHJ5QXNzaXN0YW5jZSh0eXBlOiBudW1iZXIsIHJlZmVyZW5jZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGFzc2lzdGFuY2UgPSBuZXcgQXNzaXN0YW5jZShcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgJy0nLFxuICAgICAgICAgICAgcmVmZXJlbmNlLFxuICAgICAgICAgICAgbmV3IEFzc2lzdGFuY2VUeXBlKHR5cGUsIG51bGwpLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEN1c3RvbWVyKCksXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAnJ1xuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZygnRWwgdGlwbyBkZSBhc2lzdGVuY2lhIGVzID0+ICAnLCB0eXBlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0VsIGNsaWVudGUgcXVlIHJlZ2lzdHJhcmEgbGEgaW5jaWRlbmNpYSBlcyA9PiAnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmN1c3RvbWVyU2VydmljZS5nZXRDdXN0b21lcigpKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXJzZWQgZGF0YSA9PiAnLCBKU09OLnN0cmluZ2lmeShhc3Npc3RhbmNlKSk7XG4gICAgICAgIHRoaXMuYXNzaXN0YW5jZVNlcnZpY2UucmVnaXN0ZXIoYXNzaXN0YW5jZSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXNzaXN0YW5jZSBoYXMgYmVlbiBjcmVhdGVkID0+ICcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2lzdGFuY2VTZXJ2aWNlLnNldEFzc2lzdGFuY2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBTZXR0aW5nU2VydmljZS5zZXRBc3Npc3RhbmNlKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmV2ZXJzZUxvY2F0aW9uKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NsaWVudC93YWl0aW5nJywgdHlwZV0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvcnMsIGVycm9ycy5zdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHVwZGF0ZVJldmVyc2VMb2NhdGlvbihhc3Npc3RhbmNlOiBBc3Npc3RhbmNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWJvdXQgdG8gdXBkYXRlIGxvY2F0aW9uLi4uXCIpO1xuICAgICAgICB0aGlzLmdvb2dsZU1hcHNTZXJ2aWNlLmdldFJldmVyc2VHZW9jb2RpbmcoXG4gICAgICAgICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5nZXRDdXN0b21lcigpLmxhdGl0dWRlLFxuICAgICAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0Q3VzdG9tZXIoKS5sb25naXR1ZGUsXG4gICAgICAgICAgICAwXG4gICAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdvb2dsZSBNYXBzID0+IFJldmVyc2UgPT4gXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEucmVzdWx0c1swXS5hZGRyZXNzX2NvbXBvbmVudHNbMF0ubG9uZ19uYW1lKSk7XG4gICAgICAgICAgICAgICAgYXNzaXN0YW5jZS5hZGRyZXNzID0gZGF0YS5yZXN1bHRzWzBdLmFkZHJlc3NfY29tcG9uZW50c1swXS5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5hc3Npc3RhbmNlU2VydmljZS51cGRhdGVMb2NhdGlvbihhc3Npc3RhbmNlKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0ZSBMb2NhdGlvbiA9PiBTdWNjZXNzID0+IFwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRlIExvY2F0aW9uID0+IEVycm9yID0+IFwiLCBKU09OLnN0cmluZ2lmeShlcnJvcnMpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2V0dGluZyBMb2NhdGlvbiA9PiBFcnJvciA9PiBcIiwgSlNPTi5zdHJpbmdpZnkoZXJyb3JzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudExvY2F0aW9uKCkge1xuICAgICAgICByZXR1cm4gZ2VvbG9jYXRpb24uZ2V0Q3VycmVudExvY2F0aW9uKHtcbiAgICAgICAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsIG1heGltdW1BZ2U6IDUwMDAsIHRpbWVvdXQ6IDIwMDAwXG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19