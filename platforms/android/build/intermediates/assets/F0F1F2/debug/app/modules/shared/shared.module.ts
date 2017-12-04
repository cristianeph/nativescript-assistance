import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {NativeScriptModule} from 'nativescript-angular/nativescript.module';
import {NativeScriptFormsModule} from 'nativescript-angular/forms';

import {HeaderComponent} from "./header/header.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule {
}
