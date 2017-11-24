"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var nativescript_angular_1 = require("nativescript-angular");
var http_1 = require("nativescript-angular/http");
var tracking_service_1 = require("./shared/services/tracking.service");
var login_service_1 = require("./shared/services/login.service");
var bus_service_1 = require("./shared/services/bus.service");
var assistance_service_1 = require("./shared/services/assistance.service");
var worker_service_1 = require("./shared/services/worker.service");
var customer_service_1 = require("./shared/services/customer.service");
var user_service_1 = require("./shared/services/user.service");
var shared_module_1 = require("./modules/shared/shared.module");
var login_component_1 = require("./shared/components/login/login.component");
var register_component_1 = require("./shared/components/register/register.component");
var recovery_component_1 = require("./shared/components/recovery/recovery.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                nativescript_angular_1.NativeScriptFormsModule,
                /*NativeScriptUISideDrawerModule,*/
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
                login_service_1.LoginService,
                user_service_1.UserService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBRTVFLGlEQUE2QztBQUM3QywyREFBc0Q7QUFDdEQsNkRBQTZEO0FBQzdELGtEQUFpRTtBQUNqRSx1RUFBbUU7QUFDbkUsaUVBQTZEO0FBQzdELDZEQUF5RDtBQUN6RCwyRUFBdUU7QUFDdkUsbUVBQStEO0FBQy9ELHVFQUFtRTtBQUNuRSwrREFBMkQ7QUFDM0QsZ0VBQTREO0FBQzVELDZFQUF5RTtBQUN6RSxzRkFBa0Y7QUFDbEYsc0ZBQWtGO0FBZ0NsRjtJQUFBO0lBQ0EsQ0FBQztJQURZLFNBQVM7UUE5QnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUNoQiw4Q0FBdUI7Z0JBQ3ZCLG1DQUFtQztnQkFDbkMsNkJBQXNCO2dCQUN0Qiw0QkFBWTthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLHNDQUFpQjtnQkFDakIsc0NBQWlCO2FBQ3BCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLGtDQUFlO2dCQUNmLDRCQUFZO2dCQUNaLHdCQUFVO2dCQUNWLHNDQUFpQjtnQkFDakIsOEJBQWE7Z0JBQ2Isa0NBQWU7Z0JBQ2YsNEJBQVk7Z0JBQ1osMEJBQVc7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUNyQjtJQUFELGdCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge0FwcFJvdXRpbmdNb2R1bGV9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEh0dHBNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge1RyYWNraW5nU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL3RyYWNraW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHtCdXNTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvYnVzLnNlcnZpY2VcIjtcbmltcG9ydCB7QXNzaXN0YW5jZVNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9hc3Npc3RhbmNlLnNlcnZpY2VcIjtcbmltcG9ydCB7V29ya2VyU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL3dvcmtlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0N1c3RvbWVyU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2N1c3RvbWVyLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7U2hhcmVkTW9kdWxlfSBmcm9tIFwiLi9tb2R1bGVzL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9zaGFyZWQvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7UmVnaXN0ZXJDb21wb25lbnR9IGZyb20gXCIuL3NoYXJlZC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSZWNvdmVyeUNvbXBvbmVudH0gZnJvbSBcIi4vc2hhcmVkL2NvbXBvbmVudHMvcmVjb3ZlcnkvcmVjb3ZlcnkuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIC8qTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLCovXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgICAgICBSZWNvdmVyeUNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFRyYWNraW5nU2VydmljZSxcbiAgICAgICAgTG9naW5TZXJ2aWNlLFxuICAgICAgICBCdXNTZXJ2aWNlLFxuICAgICAgICBBc3Npc3RhbmNlU2VydmljZSxcbiAgICAgICAgV29ya2VyU2VydmljZSxcbiAgICAgICAgQ3VzdG9tZXJTZXJ2aWNlLFxuICAgICAgICBMb2dpblNlcnZpY2UsXG4gICAgICAgIFVzZXJTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIl19