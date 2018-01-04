import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import {TrackingService} from "./shared/services/tracking.service";
import {LoginService} from "./shared/services/login.service";
import {BusService} from "./shared/services/bus.service";
import {AssistanceService} from "./shared/services/assistance.service";
import {WorkerService} from "./shared/services/worker.service";
import {CustomerService} from "./shared/services/customer.service";
import {UserService} from "./shared/services/user.service";
import {SharedModule} from "./modules/shared/shared.module";
import {LoginComponent} from "./shared/components/login/login.component";
import {RegisterComponent} from "./shared/components/register/register.component";
import {RecoveryComponent} from "./shared/components/recovery/recovery.component";
import {FirebaseService} from "./shared/services/firebase.service";
import {ApplicationSettingsService} from "./shared/services/application-settings.service";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import {AuthorizationGuardService} from "./shared/services/authorization-guard.service";

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        /*NativeScriptUISideDrawerModule,*/
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
        AssistanceService,
        BusService,
        CustomerService,
        FirebaseService,
        LoginService,
        TrackingService,
        UserService,
        WorkerService,
        ApplicationSettingsService,
        AuthorizationGuardService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
})
export class AppModule {
}
