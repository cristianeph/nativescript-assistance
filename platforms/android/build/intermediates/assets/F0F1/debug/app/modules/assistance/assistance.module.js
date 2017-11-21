"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
var assistance_routes_1 = require("./assistance.routes");
var pending_component_1 = require("./pending/pending.component");
var shared_module_1 = require("../shared/shared.module");
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
                pending_component_1.PendingComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AssistanceModule);
    return AssistanceModule;
}());
exports.AssistanceModule = AssistanceModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaXN0YW5jZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhc3Npc3RhbmNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUV6RCxnRkFBNEU7QUFDNUUsb0RBQW1FO0FBQ25FLDZEQUE4RDtBQUU5RCx5REFBcUQ7QUFDckQsaUVBQTZEO0FBQzdELHlEQUFxRDtBQWdCckQ7SUFBQTtJQUNBLENBQUM7SUFEWSxnQkFBZ0I7UUFkNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2QiwrQ0FBd0IsQ0FBQyxRQUFRLENBQU0sb0NBQWdCLENBQUM7Z0JBQ3hELDRCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysb0NBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxnQkFBZ0IsQ0FDNUI7SUFBRCx1QkFBQztDQUFBLEFBREQsSUFDQztBQURZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge05hdGl2ZVNjcmlwdE1vZHVsZX0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZX0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuXG5pbXBvcnQge0Fzc2lzdGFuY2VSb3V0ZXN9IGZyb20gJy4vYXNzaXN0YW5jZS5yb3V0ZXMnO1xuaW1wb3J0IHtQZW5kaW5nQ29tcG9uZW50fSBmcm9tIFwiLi9wZW5kaW5nL3BlbmRpbmcuY29tcG9uZW50XCI7XG5pbXBvcnQge1NoYXJlZE1vZHVsZX0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoPGFueT5Bc3Npc3RhbmNlUm91dGVzKSxcbiAgICAgICAgU2hhcmVkTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUGVuZGluZ0NvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBc3Npc3RhbmNlTW9kdWxlIHtcbn1cbiJdfQ==