"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var customer_service_1 = require("../../../shared/services/customer.service");
var user_service_1 = require("../../../shared/services/user.service");
var assistance_service_1 = require("../../../shared/services/assistance.service");
var AssistComponent = (function () {
    function AssistComponent(route, router, userService, customerService, assistanceService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.customerService = customerService;
        this.assistanceService = assistanceService;
        this.title = 'Espere, estamos cargando la información del cliente';
    }
    AssistComponent.prototype.pageLoaded = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['assistid'];
            console.log('Assistance id => ', _this.id);
            _this.getAssistance(_this.id);
        });
    };
    AssistComponent.prototype.getAssistance = function (id) {
        var _this = this;
        this.assistanceService.find(id).subscribe(function (data) {
            console.log('Assistance object => ', JSON.stringify(data));
            _this.assistance = data;
            _this.customer = _this.assistance.customer;
            _this.userService.infoCustomer(_this.assistance.customer.id).subscribe(function (data) {
                console.log('User object from Customer => ', JSON.stringify(data));
                _this.customerUser = data;
                _this.title = _this.customerUser.lastnames + ", " + _this.customerUser.firstnames;
            });
        });
    };
    AssistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-assist',
            templateUrl: './assist.component.html',
            styleUrls: ['./assist.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            user_service_1.UserService,
            customer_service_1.CustomerService,
            assistance_service_1.AssistanceService])
    ], AssistComponent);
    return AssistComponent;
}());
exports.AssistComponent = AssistComponent;