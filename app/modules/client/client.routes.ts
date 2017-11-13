import { Routes } from '@angular/router';

import {ReportComponent} from "./report/report.component";
import {WaitingComponent} from "./waiting/waiting.component";

export const ClientRoutes: Routes = [
    {
        path: '',
        component: ReportComponent
    },
    {
        path: 'report',
        component: ReportComponent
    },
    {
        path: 'waiting/:id',
        component: WaitingComponent
    }
];
