import { Routes } from '@angular/router';
import {PendingComponent} from "./pending/pending.component";

export const AssistanceRoutes: Routes = [
    {
        path: '',
        component: PendingComponent
    },
    {
        path: 'pending',
        component: PendingComponent
    }
];
