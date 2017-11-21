"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
var client_routes_1 = require("./client.routes");
var report_component_1 = require("./report/report.component");
var waiting_component_1 = require("./waiting/waiting.component");
var shared_module_1 = require("../shared/shared.module");
var tracking_component_1 = require("./tracking/tracking.component");
var ClientModule = (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(client_routes_1.ClientRoutes),
                shared_module_1.SharedModule
            ],
            declarations: [
                report_component_1.ReportComponent,
                waiting_component_1.WaitingComponent,
                tracking_component_1.TrackingComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ClientModule);
    return ClientModule;
}());
exports.ClientModule = ClientModule;
