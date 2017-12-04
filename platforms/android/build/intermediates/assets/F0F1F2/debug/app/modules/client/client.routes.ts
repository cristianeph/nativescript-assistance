import { Routes } from '@angular/router';

import {ReportComponent} from "./report/report.component";
import {WaitingComponent} from "./waiting/waiting.component";
import {TrackingComponent} from "./tracking/tracking.component";

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
    },
    {
        path: 'tracking/:assistanceid',
        component: TrackingComponent
    }
];
