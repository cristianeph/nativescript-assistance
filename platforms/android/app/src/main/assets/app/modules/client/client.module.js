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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsaWVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFFekQsZ0ZBQTRFO0FBQzVFLG9EQUFtRTtBQUNuRSw2REFBOEQ7QUFFOUQsaURBQTZDO0FBQzdDLDhEQUEwRDtBQUMxRCxpRUFBNkQ7QUFDN0QseURBQXFEO0FBQ3JELG9FQUFnRTtBQWtCaEU7SUFBQTtJQUNBLENBQUM7SUFEWSxZQUFZO1FBaEJ4QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLCtDQUF3QixDQUFDLFFBQVEsQ0FBTSw0QkFBWSxDQUFDO2dCQUNwRCw0QkFBWTthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGtDQUFlO2dCQUNmLG9DQUFnQjtnQkFDaEIsc0NBQWlCO2FBQ3BCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxZQUFZLENBQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge05hdGl2ZVNjcmlwdE1vZHVsZX0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZX0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuXG5pbXBvcnQge0NsaWVudFJvdXRlc30gZnJvbSAnLi9jbGllbnQucm91dGVzJztcbmltcG9ydCB7UmVwb3J0Q29tcG9uZW50fSBmcm9tIFwiLi9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtXYWl0aW5nQ29tcG9uZW50fSBmcm9tIFwiLi93YWl0aW5nL3dhaXRpbmcuY29tcG9uZW50XCI7XG5pbXBvcnQge1NoYXJlZE1vZHVsZX0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQge1RyYWNraW5nQ29tcG9uZW50fSBmcm9tIFwiLi90cmFja2luZy90cmFja2luZy5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZCg8YW55PkNsaWVudFJvdXRlcyksXG4gICAgICAgIFNoYXJlZE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFJlcG9ydENvbXBvbmVudCxcbiAgICAgICAgV2FpdGluZ0NvbXBvbmVudCxcbiAgICAgICAgVHJhY2tpbmdDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2xpZW50TW9kdWxlIHtcbn1cbiJdfQ==