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
var routes = [
    { path: "", redirectTo: 'login', pathMatch: 'full' },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "register", component: register_component_1.RegisterComponent },
    { path: "forgot", component: recovery_component_1.RecoveryComponent },
    { path: "client", loadChildren: function () { return require("./modules/client/client.module")["ClientModule"]; } },
    { path: "admin", loadChildren: function () { return require("./modules/admin/admin.module")["AdminModule"]; } },
    { path: "assistance", loadChildren: function () { return require("./modules/assistance/assistance.module")["AssistanceModule"]; } }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVDO0FBRXZDLHNEQUFxRTtBQUNyRSxnRkFBNEU7QUFDNUUsNkRBQTZEO0FBQzdELGtEQUFpRTtBQUVqRSw2RUFBeUU7QUFDekUsc0ZBQWtGO0FBQ2xGLHNGQUFrRjtBQUVsRixJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBQ2xELEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBQztJQUMxQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFDO0lBQ2hELEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUM7SUFDOUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQXpELENBQXlELEVBQUM7SUFDL0YsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUMsYUFBYSxDQUFDLEVBQXRELENBQXNELEVBQUM7SUFDM0YsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsa0JBQWtCLENBQUMsRUFBckUsQ0FBcUUsRUFBQztDQUVsSCxDQUFDO0FBWUY7SUFBQTtJQUNBLENBQUM7SUFEWSxnQkFBZ0I7UUFWNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsOENBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzthQUMzQztZQUNELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FDNUI7SUFBRCx1QkFBQztDQUFBLEFBREQsSUFDQztBQURZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0TW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEh0dHBNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5cbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gXCIuL3NoYXJlZC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSZWdpc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vc2hhcmVkL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge1JlY292ZXJ5Q29tcG9uZW50fSBmcm9tIFwiLi9zaGFyZWQvY29tcG9uZW50cy9yZWNvdmVyeS9yZWNvdmVyeS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge3BhdGg6IFwiXCIsIHJlZGlyZWN0VG86ICdsb2dpbicsIHBhdGhNYXRjaDogJ2Z1bGwnfSxcbiAgICB7cGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50fSxcbiAgICB7cGF0aDogXCJyZWdpc3RlclwiLCBjb21wb25lbnQ6IFJlZ2lzdGVyQ29tcG9uZW50fSxcbiAgICB7cGF0aDogXCJmb3Jnb3RcIiwgY29tcG9uZW50OiBSZWNvdmVyeUNvbXBvbmVudH0sXG4gICAge3BhdGg6IFwiY2xpZW50XCIsIGxvYWRDaGlsZHJlbjogKCkgPT4gcmVxdWlyZShcIi4vbW9kdWxlcy9jbGllbnQvY2xpZW50Lm1vZHVsZVwiKVtcIkNsaWVudE1vZHVsZVwiXX0sXG4gICAge3BhdGg6IFwiYWRtaW5cIiwgbG9hZENoaWxkcmVuOiAoKSA9PiByZXF1aXJlKFwiLi9tb2R1bGVzL2FkbWluL2FkbWluLm1vZHVsZVwiKVtcIkFkbWluTW9kdWxlXCJdfSxcbiAgICB7cGF0aDogXCJhc3Npc3RhbmNlXCIsIGxvYWRDaGlsZHJlbjogKCkgPT4gcmVxdWlyZShcIi4vbW9kdWxlcy9hc3Npc3RhbmNlL2Fzc2lzdGFuY2UubW9kdWxlXCIpW1wiQXNzaXN0YW5jZU1vZHVsZVwiXX1cblxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxuICAgIF0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7XG59XG4iXX0=