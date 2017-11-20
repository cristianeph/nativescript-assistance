"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var report_component_1 = require("./report/report.component");
var waiting_component_1 = require("./waiting/waiting.component");
var tracking_component_1 = require("./tracking/tracking.component");
exports.ClientRoutes = [
    {
        path: '',
        component: report_component_1.ReportComponent
    },
    {
        path: 'report',
        component: report_component_1.ReportComponent
    },
    {
        path: 'waiting/:id',
        component: waiting_component_1.WaitingComponent
    },
    {
        path: 'tracking/:workerid',
        component: tracking_component_1.TrackingComponent
    }
];
