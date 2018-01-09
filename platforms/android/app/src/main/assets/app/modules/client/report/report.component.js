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
