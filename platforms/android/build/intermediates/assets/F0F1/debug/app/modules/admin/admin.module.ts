import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular';

import { AdminRoutes } from './admin.routes';
import {ValidateComponent} from "./validate/validate.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule.forChild(<any>AdminRoutes)
  ],
  declarations: [
    ValidateComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AdminModule { }
