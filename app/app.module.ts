import {NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NSModuleFactoryLoader} from "nativescript-angular/router";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {NativeScriptFormsModule} from "nativescript-angular";
import {NativeScriptUISideDrawerModule} from "nativescript-pro-ui/sidedrawer/angular";
import {SharedModule} from "./modules/shared/shared.module";
import {LoginService} from "./objects/services/login.service";
import {BusService} from "./objects/services/bus.service";

import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {RecoveryComponent} from "./recovery/recovery.component";
import {TrackingService} from "./objects/services/tracking.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule,
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
        BusService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
