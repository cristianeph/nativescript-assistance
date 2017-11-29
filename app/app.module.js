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
                assistance_service_1.AssistanceService,
                bus_service_1.BusService,
                customer_service_1.CustomerService,
                firebase_service_1.FirebaseService,
                login_service_1.LoginService,
                tracking_service_1.TrackingService,
                user_service_1.UserService,
                worker_service_1.WorkerService,
                application_settings_service_1.ApplicationSettingsService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBRTVFLGlEQUE2QztBQUM3QywyREFBc0Q7QUFDdEQsa0RBQWlFO0FBQ2pFLHVFQUFtRTtBQUNuRSxpRUFBNkQ7QUFDN0QsNkRBQXlEO0FBQ3pELDJFQUF1RTtBQUN2RSxtRUFBK0Q7QUFDL0QsdUVBQW1FO0FBQ25FLCtEQUEyRDtBQUMzRCxnRUFBNEQ7QUFDNUQsNkVBQXlFO0FBQ3pFLHNGQUFrRjtBQUNsRixzRkFBa0Y7QUFDbEYsdUVBQW1FO0FBQ25FLCtGQUEwRjtBQUMxRixvREFBbUU7QUFpQ25FO0lBQUE7SUFDQSxDQUFDO0lBRFksU0FBUztRQS9CckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixPQUFPLEVBQUU7Z0JBQ0wscUNBQWdCO2dCQUNoQix3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsbUNBQW1DO2dCQUNuQyw2QkFBc0I7Z0JBQ3RCLDRCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2Qsc0NBQWlCO2dCQUNqQixzQ0FBaUI7YUFDcEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asc0NBQWlCO2dCQUNqQix3QkFBVTtnQkFDVixrQ0FBZTtnQkFDZixrQ0FBZTtnQkFDZiw0QkFBWTtnQkFDWixrQ0FBZTtnQkFDZiwwQkFBVztnQkFDWCw4QkFBYTtnQkFDYix5REFBMEI7YUFDN0I7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FDckI7SUFBRCxnQkFBQztDQUFBLEFBREQsSUFDQztBQURZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0TW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBcHBSb3V0aW5nTW9kdWxlfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0SHR0cE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7VHJhY2tpbmdTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvdHJhY2tpbmcuc2VydmljZVwiO1xuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0J1c1NlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9idXMuc2VydmljZVwiO1xuaW1wb3J0IHtBc3Npc3RhbmNlU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2Fzc2lzdGFuY2Uuc2VydmljZVwiO1xuaW1wb3J0IHtXb3JrZXJTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvd29ya2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7Q3VzdG9tZXJTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvY3VzdG9tZXIuc2VydmljZVwiO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHtTaGFyZWRNb2R1bGV9IGZyb20gXCIuL21vZHVsZXMvc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gXCIuL3NoYXJlZC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSZWdpc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vc2hhcmVkL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge1JlY292ZXJ5Q29tcG9uZW50fSBmcm9tIFwiLi9zaGFyZWQvY29tcG9uZW50cy9yZWNvdmVyeS9yZWNvdmVyeS5jb21wb25lbnRcIjtcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHtBcHBsaWNhdGlvblNldHRpbmdzU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2FwcGxpY2F0aW9uLXNldHRpbmdzLnNlcnZpY2VcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICAvKk5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSwqL1xuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICAgICAgUmVjb3ZlcnlDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBBc3Npc3RhbmNlU2VydmljZSxcbiAgICAgICAgQnVzU2VydmljZSxcbiAgICAgICAgQ3VzdG9tZXJTZXJ2aWNlLFxuICAgICAgICBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgIExvZ2luU2VydmljZSxcbiAgICAgICAgVHJhY2tpbmdTZXJ2aWNlLFxuICAgICAgICBVc2VyU2VydmljZSxcbiAgICAgICAgV29ya2VyU2VydmljZSxcbiAgICAgICAgQXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG4iXX0=