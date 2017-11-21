"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
var assistance_routes_1 = require("./assistance.routes");
var pending_component_1 = require("./pending/pending.component");
var shared_module_1 = require("../shared/shared.module");
var AssistanceModule = (function () {
    function AssistanceModule() {
    }
    AssistanceModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(assistance_routes_1.AssistanceRoutes),
                shared_module_1.SharedModule
            ],
            declarations: [
                pending_component_1.PendingComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AssistanceModule);
    return AssistanceModule;
}());
exports.AssistanceModule = AssistanceModule;
