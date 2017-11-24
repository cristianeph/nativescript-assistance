import { Routes } from '@angular/router';
import {PendingComponent} from "./pending/pending.component";
import {AssistComponent} from "./assist/assist.component";

export const AssistanceRoutes: Routes = [
    {
        path: '',
        component: PendingComponent
    },
    {
        path: 'pending',
        component: PendingComponent
    },
    {
        path: 'assist/:clientid',
        component: AssistComponent
    }
];
