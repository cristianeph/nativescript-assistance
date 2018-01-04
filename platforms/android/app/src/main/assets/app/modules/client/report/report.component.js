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
/*import {
    isEnabled,
    enableLocationRequest,
    getCurrentLocation,
} from "nativescript-geolocation";*/
var ReportComponent = (function () {
    function ReportComponent(router, page, loginService, customerService, assistanceService, appSettingService) {
        this.router = router;
        this.page = page;
        this.loginService = loginService;
        this.customerService = customerService;
        this.assistanceService = assistanceService;
        this.appSettingService = appSettingService;
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
            page_1.Page,
            login_service_1.LoginService,
            customer_service_1.CustomerService,
            assistance_service_1.AssistanceService,
            application_settings_service_1.ApplicationSettingsService])
    ], ReportComponent);
    return ReportComponent;
}());
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsMENBQXVDO0FBRXZDLDZFQUFvRTtBQUNwRSx3RUFBb0U7QUFDcEUsdUZBQTZFO0FBQzdFLDhFQUEwRTtBQUMxRSxrRkFBOEU7QUFDOUUsc0dBQWlHO0FBQ2pHLGtDQUFrQztBQUNsQyxvQ0FBc0M7QUFDdEMsc0RBQXdEO0FBQ3hELGlEQUE4QztBQUU5Qzs7OztvQ0FJb0M7QUFRcEM7SUFJSSx5QkFBb0IsTUFBYyxFQUNkLElBQVUsRUFDVixZQUEwQixFQUMxQixlQUFnQyxFQUNoQyxpQkFBb0MsRUFDcEMsaUJBQTZDO1FBTDdDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE0QjtRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDO0lBQ3ZDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELHlDQUFlLEdBQWY7UUFBQSxpQkFzQkM7UUFyQkcsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENB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LENBQUM7SUFDUCxDQUFDO0lBbklRLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3hDLENBQUM7eUNBSzhCLGVBQU07WUFDUixXQUFJO1lBQ0ksNEJBQVk7WUFDVCxrQ0FBZTtZQUNiLHNDQUFpQjtZQUNqQix5REFBMEI7T0FUeEQsZUFBZSxDQXFJM0I7SUFBRCxzQkFBQztDQUFBLEFBcklELElBcUlDO0FBcklZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NsYXNzZXMvdXNlci5jbGFzc1wiO1xuaW1wb3J0IHtBc3Npc3RhbmNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NsYXNzZXMvYXNzaXN0YW5jZS5jbGFzc1wiO1xuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHtBc3Npc3RhbmNlVHlwZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL2Fzc2lzdGFuY2UtdHlwZS5jbGFzc1wiO1xuaW1wb3J0IHtDdXN0b21lclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvY3VzdG9tZXIuc2VydmljZVwiO1xuaW1wb3J0IHtBc3Npc3RhbmNlU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hc3Npc3RhbmNlLnNlcnZpY2VcIjtcbmltcG9ydCB7QXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXBwbGljYXRpb24tc2V0dGluZ3Muc2VydmljZVwiO1xuaW1wb3J0IHtBY2N1cmFjeX0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcblxuLyppbXBvcnQge1xuICAgIGlzRW5hYmxlZCxcbiAgICBlbmFibGVMb2NhdGlvblJlcXVlc3QsXG4gICAgZ2V0Q3VycmVudExvY2F0aW9uLFxufSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7Ki9cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC1yZXBvcnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZXBvcnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3JlcG9ydC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVwb3J0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB1c2VyOiBVc2VyO1xuICAgIHRpdGxlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgY3VzdG9tZXJTZXJ2aWNlOiBDdXN0b21lclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhc3Npc3RhbmNlU2VydmljZTogQXNzaXN0YW5jZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhcHBTZXR0aW5nU2VydmljZTogQXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9ICdTb2xpY2l0ZSBhc2lzdGVuY2lhJztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBwYWdlTG9hZGVkKCkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nZXRDdXN0b21lckluZm8oKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiA9PiBTdGF0dXMgPT4gXCIsIHRoaXMuYXBwU2V0dGluZ1NlcnZpY2UuZ2V0TG9nZ2VkKCkpO1xuICAgIH1cblxuICAgIGdldEN1c3RvbWVySW5mbygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBhcmUgYWxyZWFkeSBsb2dlZCA9PiAnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxvZ2luU2VydmljZS5nZXRVc2VyKCkpKTtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5sb2dpblNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgICBjb25zb2xlLmxvZygnVXNlciBwcmV2aW91c2x5IHJlY2VpdmVkID0+ICcsIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlcikpO1xuICAgICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5maW5kKHRoaXMudXNlci5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1c3RvbWVyID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXIuZmNtID0gdGhpcy5hcHBTZXR0aW5nU2VydmljZS5nZXRUb2tlbigpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ3VzdG9tZXIgaW5mbyA9PiAnLCBKU09OLnN0cmluZ2lmeShjdXN0b21lcikpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyU2VydmljZS5zZXRDdXN0b21lcihjdXN0b21lcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLnVwZGF0ZVRva2VuKGN1c3RvbWVyKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ3VzdG9tZXIgdG9rZW4gdXBkYXRlZCA9PiAnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9ycyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0N1c3RvbWVyIGluZm8gZXJyb3IgPT4gJywgZXJyb3JzLCBlcnJvcnMuc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QXNzaXRhbmNlKHR5cGU6IG51bWJlcikge1xuICAgICAgICBsZXQgZGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRXN0YSBzZWd1cm8gcXVlIGRlc2VhIGhhY2VyIGxhIHNvbGljaXR1ZD9cIixcbiAgICAgICAgICAgIHRpdGxlOiBcIk5lY2VzaXRhIGF5dWRhP1wiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlNpXCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCIsXG4gICAgICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiXG4gICAgICAgIH07XG4gICAgICAgIGxldCBwcm9tcHRPcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6IFwiSW5ncmVzZSB1bmEgcmVmZXJlbmNpYSBkZSBzdSBkaXJlY2Npw7NuXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkRldGFsbGUgbGEgcmVmZXJlbmNpYTpcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsYXJcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICAgICAgaW5wdXRUeXBlOiBkaWFsb2dzLmlucHV0VHlwZS50ZXh0XG4gICAgICAgIH07XG4gICAgICAgIGRpYWxvZ3MuY29uZmlybShkaWFsb2dPcHRpb25zKS50aGVuKChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBkaWFsb2dzLnByb21wdChwcm9tcHRPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocHJvbXB0UmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvbXB0UmVzdWx0LnJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vUmVxdWVzdGluZyBnZWxvY2F0aW9uIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEN1cnJlbnRMb2NhdGlvbigpLnRoZW4obG9jYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0dlb2xvY2F0aW9uIFN1Y2Nlc3NmdWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXF1ZXN0ZWRMb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uID0+IGRhdGEgPT4gXCIsIEpTT04uc3RyaW5naWZ5KHJlcXVlc3RlZExvY2F0aW9uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXN0b21lciA9IHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEN1c3RvbWVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyLmxhdGl0dWRlID0gcmVxdWVzdGVkTG9jYXRpb24ubGF0aXR1ZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyLmxvbmdpdHVkZSA9IHJlcXVlc3RlZExvY2F0aW9uLmxvbmdpdHVkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXIuYWx0aXR1ZGUgPSByZXF1ZXN0ZWRMb2NhdGlvbi5hbHRpdHVkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdXN0b21lciA9PiBiZWZvcmUgPT4gZGF0YSA9PiBcIiwgSlNPTi5zdHJpbmdpZnkoY3VzdG9tZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2UudXBkYXRlTG9jYXRpb24oY3VzdG9tZXIpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3VzdG9tZXIgPT4gZGF0YSA9PiB1cGRhdGVkID0+IFwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RyeUFzc2lzdGFuY2UodHlwZSwgcHJvbXB0UmVzdWx0LnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9HZW9sb2NhdGlvbiBFcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2F0aW9uID0+IGVycm9yID0+IFwiLCBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlIGNhbmNlbG8gbGEgb3BlcmFjaW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RyeUFzc2lzdGFuY2UodHlwZTogbnVtYmVyLCByZWZlcmVuY2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBhc3Npc3RhbmNlID0gbmV3IEFzc2lzdGFuY2UoXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICd0ZXN0IGFkZHJlc3MnLFxuICAgICAgICAgICAgcmVmZXJlbmNlLFxuICAgICAgICAgICAgbmV3IEFzc2lzdGFuY2VUeXBlKHR5cGUsIG51bGwpLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJTZXJ2aWNlLmdldEN1c3RvbWVyKCksXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgJydcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0VsIHRpcG8gZGUgYXNpc3RlbmNpYSBlcyA9PiAgJywgdHlwZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFbCBjbGllbnRlIHF1ZSByZWdpc3RyYXJhIGxhIGluY2lkZW5jaWEgZXMgPT4gJywgSlNPTi5zdHJpbmdpZnkodGhpcy5jdXN0b21lclNlcnZpY2UuZ2V0Q3VzdG9tZXIoKSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnUGFyc2VkIGRhdGEgPT4gJywgSlNPTi5zdHJpbmdpZnkoYXNzaXN0YW5jZSkpO1xuICAgICAgICB0aGlzLmFzc2lzdGFuY2VTZXJ2aWNlLnJlZ2lzdGVyKGFzc2lzdGFuY2UpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3Npc3RhbmNlIGhhcyBiZWVuIGNyZWF0ZWQgPT4gJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXNzaXN0YW5jZVNlcnZpY2Uuc2V0QXNzaXN0YW5jZShkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcFNldHRpbmdTZXJ2aWNlLnNldEFzc2lzdGFuY2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY2xpZW50L3dhaXRpbmcnLCB0eXBlXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9ycy5zdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRMb2NhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7XG4gICAgICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLCBtYXhpbXVtQWdlOiA1MDAwLCB0aW1lb3V0OiAyMDAwMFxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==