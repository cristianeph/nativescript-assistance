"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
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
var firebase_service_1 = require("./shared/services/firebase.service");
var application_settings_service_1 = require("./shared/services/application-settings.service");
var forms_1 = require("nativescript-angular/forms");
var authorization_guard_service_1 = require("./shared/services/authorization-guard.service");
var google_maps_service_1 = require("./shared/services/google-maps.service");
var nativescript_angular_1 = require("nativescript-angular");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                app_routing_module_1.AppRoutingModule,
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule,
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
                assistance_service_1.AssistanceService,
                bus_service_1.BusService,
                customer_service_1.CustomerService,
                firebase_service_1.FirebaseService,
                login_service_1.LoginService,
                tracking_service_1.TrackingService,
                user_service_1.UserService,
                worker_service_1.WorkerService,
                application_settings_service_1.ApplicationSettingsService,
                authorization_guard_service_1.AuthorizationGuardService,
                google_maps_service_1.GoogleMapsService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBRTVFLGlEQUE2QztBQUM3QywyREFBc0Q7QUFDdEQsa0RBQWlFO0FBQ2pFLHVFQUFtRTtBQUNuRSxpRUFBNkQ7QUFDN0QsNkRBQXlEO0FBQ3pELDJFQUF1RTtBQUN2RSxtRUFBK0Q7QUFDL0QsdUVBQW1FO0FBQ25FLCtEQUEyRDtBQUMzRCxnRUFBNEQ7QUFDNUQsNkVBQXlFO0FBQ3pFLHNGQUFrRjtBQUNsRixzRkFBa0Y7QUFDbEYsdUVBQW1FO0FBQ25FLCtGQUEwRjtBQUMxRixvREFBbUU7QUFDbkUsNkZBQXdGO0FBQ3hGLDZFQUF3RTtBQUN4RSw2REFBOEQ7QUFtQzlEO0lBQUE7SUFDQSxDQUFDO0lBRFksU0FBUztRQWpDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixPQUFPLEVBQUU7Z0JBQ0wscUNBQWdCO2dCQUNoQix3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsK0NBQXdCO2dCQUN4Qiw2QkFBc0I7Z0JBQ3RCLDRCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2Qsc0NBQWlCO2dCQUNqQixzQ0FBaUI7YUFDcEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asc0NBQWlCO2dCQUNqQix3QkFBVTtnQkFDVixrQ0FBZTtnQkFDZixrQ0FBZTtnQkFDZiw0QkFBWTtnQkFDWixrQ0FBZTtnQkFDZiwwQkFBVztnQkFDWCw4QkFBYTtnQkFDYix5REFBMEI7Z0JBQzFCLHVEQUF5QjtnQkFDekIsdUNBQWlCO2FBQ3BCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxTQUFTLENBQ3JCO0lBQUQsZ0JBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7QXBwUm91dGluZ01vZHVsZX0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEh0dHBNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge1RyYWNraW5nU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL3RyYWNraW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHtCdXNTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvYnVzLnNlcnZpY2VcIjtcbmltcG9ydCB7QXNzaXN0YW5jZVNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9hc3Npc3RhbmNlLnNlcnZpY2VcIjtcbmltcG9ydCB7V29ya2VyU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL3dvcmtlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0N1c3RvbWVyU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2N1c3RvbWVyLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7U2hhcmVkTW9kdWxlfSBmcm9tIFwiLi9tb2R1bGVzL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9zaGFyZWQvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7UmVnaXN0ZXJDb21wb25lbnR9IGZyb20gXCIuL3NoYXJlZC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSZWNvdmVyeUNvbXBvbmVudH0gZnJvbSBcIi4vc2hhcmVkL2NvbXBvbmVudHMvcmVjb3ZlcnkvcmVjb3ZlcnkuY29tcG9uZW50XCI7XG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7QXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncy5zZXJ2aWNlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7QXV0aG9yaXphdGlvbkd1YXJkU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2F1dGhvcml6YXRpb24tZ3VhcmQuc2VydmljZVwiO1xuaW1wb3J0IHtHb29nbGVNYXBzU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2dvb2dsZS1tYXBzLnNlcnZpY2VcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICAgICAgUmVjb3ZlcnlDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBBc3Npc3RhbmNlU2VydmljZSxcbiAgICAgICAgQnVzU2VydmljZSxcbiAgICAgICAgQ3VzdG9tZXJTZXJ2aWNlLFxuICAgICAgICBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgIExvZ2luU2VydmljZSxcbiAgICAgICAgVHJhY2tpbmdTZXJ2aWNlLFxuICAgICAgICBVc2VyU2VydmljZSxcbiAgICAgICAgV29ya2VyU2VydmljZSxcbiAgICAgICAgQXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2UsXG4gICAgICAgIEF1dGhvcml6YXRpb25HdWFyZFNlcnZpY2UsXG4gICAgICAgIEdvb2dsZU1hcHNTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIl19