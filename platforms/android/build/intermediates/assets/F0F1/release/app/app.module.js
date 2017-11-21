"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var nativescript_angular_1 = require("nativescript-angular");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var shared_module_1 = require("./modules/shared/shared.module");
var bus_service_1 = require("./shared/services/bus.service");
var register_component_1 = require("./shared/components/register/register.component");
var recovery_component_1 = require("./shared/components/recovery/recovery.component");
var http_1 = require("nativescript-angular/http");
var login_component_1 = require("./shared/components/login/login.component");
var assistance_service_1 = require("./shared/services/assistance.service");
var customer_service_1 = require("./shared/services/customer.service");
var login_service_1 = require("./shared/services/login.service");
var tracking_service_1 = require("./shared/services/tracking.service");
var worker_service_1 = require("./shared/services/worker.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                app_routing_module_1.AppRoutingModule,
                nativescript_module_1.NativeScriptModule,
                nativescript_angular_1.NativeScriptFormsModule,
                angular_1.NativeScriptUISideDrawerModule,
                http_1.NativeScriptHttpModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                recovery_component_1.RecoveryComponent
            ],
            providers: [
                tracking_service_1.TrackingService,
                login_service_1.LoginService,
                bus_service_1.BusService,
                assistance_service_1.AssistanceService,
                worker_service_1.WorkerService,
                customer_service_1.CustomerService,
                login_service_1.LoginService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
