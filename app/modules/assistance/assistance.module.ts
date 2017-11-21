import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {NativeScriptModule} from 'nativescript-angular/nativescript.module';
import {NativeScriptFormsModule} from 'nativescript-angular/forms';
import {NativeScriptRouterModule} from 'nativescript-angular';

import {AssistanceRoutes} from './assistance.routes';
import {PendingComponent} from "./pending/pending.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild(<any>AssistanceRoutes),
        SharedModule
    ],
    declarations: [
        PendingComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AssistanceModule {
}
