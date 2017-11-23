import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {NativeScriptFormsModule} from "nativescript-angular";
import {NativeScriptUISideDrawerModule} from "nativescript-pro-ui/sidedrawer/angular";
import {SharedModule} from "./modules/shared/shared.module";
import {BusService} from "./shared/services/bus.service";

import {RegisterComponent} from "./shared/components/register/register.component";
import {RecoveryComponent} from "./shared/components/recovery/recovery.component";
import {NativeScriptHttpModule} from "nativescript-angular/http";

import {LoginComponent} from "./shared/components/login/login.component";

import {AssistanceService} from "./shared/services/assistance.service";
import {CustomerService} from "./shared/services/customer.service";
import {LoginService} from "./shared/services/login.service";
import {TrackingService} from "./shared/services/tracking.service";
import {WorkerService} from "./shared/services/worker.service";
import {UserService} from "./shared/services/user.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule,
        NativeScriptHttpModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        RecoveryComponent
    ],
    providers: [
        TrackingService,
        LoginService,
        BusService,
        AssistanceService,
        WorkerService,
        CustomerService,
        LoginService,
        UserService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
