"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
var client_routes_1 = require("./client.routes");
var report_component_1 = require("./report/report.component");
var waiting_component_1 = require("./waiting/waiting.component");
var ClientModule = (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(client_routes_1.ClientRoutes)
            ],
            declarations: [
                report_component_1.ReportComponent,
                waiting_component_1.WaitingComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ClientModule);
    return ClientModule;
}());
exports.ClientModule = ClientModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsaWVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFFekQsZ0ZBQTRFO0FBQzVFLG9EQUFtRTtBQUNuRSw2REFBOEQ7QUFFOUQsaURBQTZDO0FBQzdDLDhEQUEwRDtBQUMxRCxpRUFBNkQ7QUFnQjdEO0lBQUE7SUFDQSxDQUFDO0lBRFksWUFBWTtRQWR4QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLCtDQUF3QixDQUFDLFFBQVEsQ0FBTSw0QkFBWSxDQUFDO2FBQ3ZEO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGtDQUFlO2dCQUNmLG9DQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csWUFBWSxDQUN4QjtJQUFELG1CQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtOYXRpdmVTY3JpcHRNb2R1bGV9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGV9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcblxuaW1wb3J0IHtDbGllbnRSb3V0ZXN9IGZyb20gJy4vY2xpZW50LnJvdXRlcyc7XG5pbXBvcnQge1JlcG9ydENvbXBvbmVudH0gZnJvbSBcIi4vcmVwb3J0L3JlcG9ydC5jb21wb25lbnRcIjtcbmltcG9ydCB7V2FpdGluZ0NvbXBvbmVudH0gZnJvbSBcIi4vd2FpdGluZy93YWl0aW5nLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKDxhbnk+Q2xpZW50Um91dGVzKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFJlcG9ydENvbXBvbmVudCxcbiAgICAgICAgV2FpdGluZ0NvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDbGllbnRNb2R1bGUge1xufVxuIl19