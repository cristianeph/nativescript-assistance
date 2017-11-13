import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {NativeScriptModule} from 'nativescript-angular/nativescript.module';
import {NativeScriptFormsModule} from 'nativescript-angular/forms';
import {NativeScriptRouterModule} from 'nativescript-angular';

import {ClientRoutes} from './client.routes';
import {ReportComponent} from "./report/report.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild(<any>ClientRoutes)
    ],
    declarations: [
        ReportComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ClientModule {
}
