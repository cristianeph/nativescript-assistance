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
                application_settings_service_1.ApplicationSettingsService,
                authorization_guard_service_1.AuthorizationGuardService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBRTVFLGlEQUE2QztBQUM3QywyREFBc0Q7QUFDdEQsa0RBQWlFO0FBQ2pFLHVFQUFtRTtBQUNuRSxpRUFBNkQ7QUFDN0QsNkRBQXlEO0FBQ3pELDJFQUF1RTtBQUN2RSxtRUFBK0Q7QUFDL0QsdUVBQW1FO0FBQ25FLCtEQUEyRDtBQUMzRCxnRUFBNEQ7QUFDNUQsNkVBQXlFO0FBQ3pFLHNGQUFrRjtBQUNsRixzRkFBa0Y7QUFDbEYsdUVBQW1FO0FBQ25FLCtGQUEwRjtBQUMxRixvREFBbUU7QUFDbkUsNkZBQXdGO0FBa0N4RjtJQUFBO0lBQ0EsQ0FBQztJQURZLFNBQVM7UUFoQ3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFO2dCQUNMLHFDQUFnQjtnQkFDaEIsd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLG1DQUFtQztnQkFDbkMsNkJBQXNCO2dCQUN0Qiw0QkFBWTthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLHNDQUFpQjtnQkFDakIsc0NBQWlCO2FBQ3BCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLHNDQUFpQjtnQkFDakIsd0JBQVU7Z0JBQ1Ysa0NBQWU7Z0JBQ2Ysa0NBQWU7Z0JBQ2YsNEJBQVk7Z0JBQ1osa0NBQWU7Z0JBQ2YsMEJBQVc7Z0JBQ1gsOEJBQWE7Z0JBQ2IseURBQTBCO2dCQUMxQix1REFBeUI7YUFDNUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FDckI7SUFBRCxnQkFBQztDQUFBLEFBREQsSUFDQztBQURZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0TW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBcHBSb3V0aW5nTW9kdWxlfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0SHR0cE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7VHJhY2tpbmdTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvdHJhY2tpbmcuc2VydmljZVwiO1xuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0J1c1NlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9idXMuc2VydmljZVwiO1xuaW1wb3J0IHtBc3Npc3RhbmNlU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2Fzc2lzdGFuY2Uuc2VydmljZVwiO1xuaW1wb3J0IHtXb3JrZXJTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvd29ya2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7Q3VzdG9tZXJTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvY3VzdG9tZXIuc2VydmljZVwiO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHtTaGFyZWRNb2R1bGV9IGZyb20gXCIuL21vZHVsZXMvc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gXCIuL3NoYXJlZC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSZWdpc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vc2hhcmVkL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge1JlY292ZXJ5Q29tcG9uZW50fSBmcm9tIFwiLi9zaGFyZWQvY29tcG9uZW50cy9yZWNvdmVyeS9yZWNvdmVyeS5jb21wb25lbnRcIjtcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHtBcHBsaWNhdGlvblNldHRpbmdzU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2FwcGxpY2F0aW9uLXNldHRpbmdzLnNlcnZpY2VcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtBdXRob3JpemF0aW9uR3VhcmRTZXJ2aWNlfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZXMvYXV0aG9yaXphdGlvbi1ndWFyZC5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIC8qTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLCovXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgICAgICBSZWNvdmVyeUNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEFzc2lzdGFuY2VTZXJ2aWNlLFxuICAgICAgICBCdXNTZXJ2aWNlLFxuICAgICAgICBDdXN0b21lclNlcnZpY2UsXG4gICAgICAgIEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgTG9naW5TZXJ2aWNlLFxuICAgICAgICBUcmFja2luZ1NlcnZpY2UsXG4gICAgICAgIFVzZXJTZXJ2aWNlLFxuICAgICAgICBXb3JrZXJTZXJ2aWNlLFxuICAgICAgICBBcHBsaWNhdGlvblNldHRpbmdzU2VydmljZSxcbiAgICAgICAgQXV0aG9yaXphdGlvbkd1YXJkU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cbiJdfQ==