import { Routes } from '@angular/router';
import {ValidateComponent} from "./validate/validate.component";

export const AdminRoutes: Routes = [
    {
        path: '',
        component: ValidateComponent
    },
    {
        path: 'validate',
        component: ValidateComponent
    },
];
