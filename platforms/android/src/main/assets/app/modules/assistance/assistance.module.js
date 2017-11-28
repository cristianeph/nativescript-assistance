"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
var assistance_routes_1 = require("./assistance.routes");
var shared_module_1 = require("../shared/shared.module");
var pending_component_1 = require("./pending/pending.component");
var assist_component_1 = require("./assist/assist.component");
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
                pending_component_1.PendingComponent,
                assist_component_1.AssistComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AssistanceModule);
    return AssistanceModule;
}());
exports.AssistanceModule = AssistanceModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaXN0YW5jZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhc3Npc3RhbmNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUV6RCxnRkFBNEU7QUFDNUUsb0RBQW1FO0FBQ25FLDZEQUE4RDtBQUU5RCx5REFBcUQ7QUFDckQseURBQXFEO0FBRXJELGlFQUE2RDtBQUM3RCw4REFBMEQ7QUFpQjFEO0lBQUE7SUFDQSxDQUFDO0lBRFksZ0JBQWdCO1FBZjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsK0NBQXdCLENBQUMsUUFBUSxDQUFNLG9DQUFnQixDQUFDO2dCQUN4RCw0QkFBWTthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLG9DQUFnQjtnQkFDaEIsa0NBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGdCQUFnQixDQUM1QjtJQUFELHVCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7TmF0aXZlU2NyaXB0TW9kdWxlfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5cbmltcG9ydCB7QXNzaXN0YW5jZVJvdXRlc30gZnJvbSAnLi9hc3Npc3RhbmNlLnJvdXRlcyc7XG5pbXBvcnQge1NoYXJlZE1vZHVsZX0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5cbmltcG9ydCB7UGVuZGluZ0NvbXBvbmVudH0gZnJvbSBcIi4vcGVuZGluZy9wZW5kaW5nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBc3Npc3RDb21wb25lbnR9IGZyb20gXCIuL2Fzc2lzdC9hc3Npc3QuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoPGFueT5Bc3Npc3RhbmNlUm91dGVzKSxcbiAgICAgICAgU2hhcmVkTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUGVuZGluZ0NvbXBvbmVudCxcbiAgICAgICAgQXNzaXN0Q29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFzc2lzdGFuY2VNb2R1bGUge1xufVxuIl19