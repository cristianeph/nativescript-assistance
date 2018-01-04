"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_angular_1 = require("nativescript-angular");
var http_1 = require("nativescript-angular/http");
var login_component_1 = require("./shared/components/login/login.component");
var register_component_1 = require("./shared/components/register/register.component");
var recovery_component_1 = require("./shared/components/recovery/recovery.component");
var authorization_guard_service_1 = require("./shared/services/authorization-guard.service");
var routes = [
    { path: "", redirectTo: 'login', pathMatch: 'full' },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "register", component: register_component_1.RegisterComponent },
    { path: "forgot", component: recovery_component_1.RecoveryComponent },
    { path: "client", canActivate: [authorization_guard_service_1.AuthorizationGuardService], loadChildren: function () { return require("./modules/client/client.module")["ClientModule"]; } },
    { path: "admin", canActivate: [authorization_guard_service_1.AuthorizationGuardService], loadChildren: function () { return require("./modules/admin/admin.module")["AdminModule"]; } },
    { path: "assistance", canActivate: [authorization_guard_service_1.AuthorizationGuardService], loadChildren: function () { return require("./modules/assistance/assistance.module")["AssistanceModule"]; } }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                nativescript_angular_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(routes)
            ],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVDO0FBRXZDLHNEQUFxRTtBQUNyRSxnRkFBNEU7QUFDNUUsNkRBQTZEO0FBQzdELGtEQUFpRTtBQUVqRSw2RUFBeUU7QUFDekUsc0ZBQWtGO0FBQ2xGLHNGQUFrRjtBQUNsRiw2RkFBd0Y7QUFFeEYsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQztJQUNsRCxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7SUFDMUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBQztJQUNoRCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFDO0lBQzlDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQyx1REFBeUIsQ0FBQyxFQUFFLFlBQVksRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQXpELENBQXlELEVBQUM7SUFDekksRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDLHVEQUF5QixDQUFDLEVBQUUsWUFBWSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBdEQsQ0FBc0QsRUFBQztJQUNySSxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLENBQUMsdURBQXlCLENBQUMsRUFBRSxZQUFZLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEVBQXJFLENBQXFFLEVBQUM7Q0FFNUosQ0FBQztBQVlGO0lBQUE7SUFDQSxDQUFDO0lBRFksZ0JBQWdCO1FBVjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLDhDQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QixpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDM0M7WUFDRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRIdHRwTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9zaGFyZWQvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7UmVnaXN0ZXJDb21wb25lbnR9IGZyb20gXCIuL3NoYXJlZC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSZWNvdmVyeUNvbXBvbmVudH0gZnJvbSBcIi4vc2hhcmVkL2NvbXBvbmVudHMvcmVjb3ZlcnkvcmVjb3ZlcnkuY29tcG9uZW50XCI7XG5pbXBvcnQge0F1dGhvcml6YXRpb25HdWFyZFNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9hdXRob3JpemF0aW9uLWd1YXJkLnNlcnZpY2VcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge3BhdGg6IFwiXCIsIHJlZGlyZWN0VG86ICdsb2dpbicsIHBhdGhNYXRjaDogJ2Z1bGwnfSxcbiAgICB7cGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50fSxcbiAgICB7cGF0aDogXCJyZWdpc3RlclwiLCBjb21wb25lbnQ6IFJlZ2lzdGVyQ29tcG9uZW50fSxcbiAgICB7cGF0aDogXCJmb3Jnb3RcIiwgY29tcG9uZW50OiBSZWNvdmVyeUNvbXBvbmVudH0sXG4gICAge3BhdGg6IFwiY2xpZW50XCIsIGNhbkFjdGl2YXRlOiBbQXV0aG9yaXphdGlvbkd1YXJkU2VydmljZV0sIGxvYWRDaGlsZHJlbjogKCkgPT4gcmVxdWlyZShcIi4vbW9kdWxlcy9jbGllbnQvY2xpZW50Lm1vZHVsZVwiKVtcIkNsaWVudE1vZHVsZVwiXX0sXG4gICAge3BhdGg6IFwiYWRtaW5cIiwgY2FuQWN0aXZhdGU6IFtBdXRob3JpemF0aW9uR3VhcmRTZXJ2aWNlXSwgbG9hZENoaWxkcmVuOiAoKSA9PiByZXF1aXJlKFwiLi9tb2R1bGVzL2FkbWluL2FkbWluLm1vZHVsZVwiKVtcIkFkbWluTW9kdWxlXCJdfSxcbiAgICB7cGF0aDogXCJhc3Npc3RhbmNlXCIsIGNhbkFjdGl2YXRlOiBbQXV0aG9yaXphdGlvbkd1YXJkU2VydmljZV0sIGxvYWRDaGlsZHJlbjogKCkgPT4gcmVxdWlyZShcIi4vbW9kdWxlcy9hc3Npc3RhbmNlL2Fzc2lzdGFuY2UubW9kdWxlXCIpW1wiQXNzaXN0YW5jZU1vZHVsZVwiXX1cblxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxuICAgIF0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7XG59XG4iXX0=