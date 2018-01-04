import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from "nativescript-angular";
import {NativeScriptHttpModule} from "nativescript-angular/http";

import {LoginComponent} from "./shared/components/login/login.component";
import {RegisterComponent} from "./shared/components/register/register.component";
import {RecoveryComponent} from "./shared/components/recovery/recovery.component";
import {AuthorizationGuardService} from "./shared/services/authorization-guard.service";

const routes: Routes = [
    {path: "", redirectTo: 'login', pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "forgot", component: RecoveryComponent},
    {path: "client", canActivate: [AuthorizationGuardService], loadChildren: () => require("./modules/client/client.module")["ClientModule"]},
    {path: "admin", canActivate: [AuthorizationGuardService], loadChildren: () => require("./modules/admin/admin.module")["AdminModule"]},
    {path: "assistance", canActivate: [AuthorizationGuardService], loadChildren: () => require("./modules/assistance/assistance.module")["AssistanceModule"]}

];

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
