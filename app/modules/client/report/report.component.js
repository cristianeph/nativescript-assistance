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
