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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBRTVFLDJEQUFzRDtBQUN0RCxpREFBNkM7QUFDN0MsNkRBQTZEO0FBQzdELGtFQUFzRjtBQUN0RixnRUFBNEQ7QUFDNUQsNkRBQXlEO0FBRXpELHNGQUFrRjtBQUNsRixzRkFBa0Y7QUFDbEYsa0RBQWlFO0FBRWpFLDZFQUF5RTtBQUV6RSwyRUFBdUU7QUFDdkUsdUVBQW1FO0FBQ25FLGlFQUE2RDtBQUM3RCx1RUFBbUU7QUFDbkUsbUVBQStEO0FBaUMvRDtJQUFBO0lBQ0EsQ0FBQztJQURZLFNBQVM7UUEvQnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHFDQUFnQjtnQkFDaEIsd0NBQWtCO2dCQUNsQiw4Q0FBdUI7Z0JBQ3ZCLHdDQUE4QjtnQkFDOUIsNkJBQXNCO2dCQUN0Qiw0QkFBWTthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLHNDQUFpQjtnQkFDakIsc0NBQWlCO2FBQ3BCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLGtDQUFlO2dCQUNmLDRCQUFZO2dCQUNaLHdCQUFVO2dCQUNWLHNDQUFpQjtnQkFDakIsOEJBQWE7Z0JBQ2Isa0NBQWU7Z0JBQ2YsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUNyQjtJQUFELGdCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7QXBwUm91dGluZ01vZHVsZX0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQge1NoYXJlZE1vZHVsZX0gZnJvbSBcIi4vbW9kdWxlcy9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHtCdXNTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvYnVzLnNlcnZpY2VcIjtcblxuaW1wb3J0IHtSZWdpc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vc2hhcmVkL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge1JlY292ZXJ5Q29tcG9uZW50fSBmcm9tIFwiLi9zaGFyZWQvY29tcG9uZW50cy9yZWNvdmVyeS9yZWNvdmVyeS5jb21wb25lbnRcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0SHR0cE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSBcIi4vc2hhcmVkL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5cbmltcG9ydCB7QXNzaXN0YW5jZVNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9hc3Npc3RhbmNlLnNlcnZpY2VcIjtcbmltcG9ydCB7Q3VzdG9tZXJTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvY3VzdG9tZXIuc2VydmljZVwiO1xuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1RyYWNraW5nU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL3RyYWNraW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7V29ya2VyU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL3dvcmtlci5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgICAgICBSZWNvdmVyeUNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFRyYWNraW5nU2VydmljZSxcbiAgICAgICAgTG9naW5TZXJ2aWNlLFxuICAgICAgICBCdXNTZXJ2aWNlLFxuICAgICAgICBBc3Npc3RhbmNlU2VydmljZSxcbiAgICAgICAgV29ya2VyU2VydmljZSxcbiAgICAgICAgQ3VzdG9tZXJTZXJ2aWNlLFxuICAgICAgICBMb2dpblNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cbiJdfQ==