import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {NativeScriptModule} from 'nativescript-angular/nativescript.module';
import {NativeScriptFormsModule} from 'nativescript-angular/forms';
import {NativeScriptRouterModule} from 'nativescript-angular';

import {ClientRoutes} from './client.routes';
import {ReportComponent} from "./report/report.component";
import {WaitingComponent} from "./waiting/waiting.component";
import {SharedModule} from "../shared/shared.module";
import {TrackingComponent} from "./tracking/tracking.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild(<any>ClientRoutes),
        SharedModule
    ],
    declarations: [
        ReportComponent,
        WaitingComponent,
        TrackingComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ClientModule {
}
