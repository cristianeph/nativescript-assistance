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
        path: 'tracking/:assistanceid',
        component: tracking_component_1.TrackingComponent
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsaWVudC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw4REFBMEQ7QUFDMUQsaUVBQTZEO0FBQzdELG9FQUFnRTtBQUVuRCxRQUFBLFlBQVksR0FBVztJQUNoQztRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLGtDQUFlO0tBQzdCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsUUFBUTtRQUNkLFNBQVMsRUFBRSxrQ0FBZTtLQUM3QjtJQUNEO1FBQ0ksSUFBSSxFQUFFLGFBQWE7UUFDbkIsU0FBUyxFQUFFLG9DQUFnQjtLQUM5QjtJQUNEO1FBQ0ksSUFBSSxFQUFFLHdCQUF3QjtRQUM5QixTQUFTLEVBQUUsc0NBQWlCO0tBQy9CO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7UmVwb3J0Q29tcG9uZW50fSBmcm9tIFwiLi9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtXYWl0aW5nQ29tcG9uZW50fSBmcm9tIFwiLi93YWl0aW5nL3dhaXRpbmcuY29tcG9uZW50XCI7XG5pbXBvcnQge1RyYWNraW5nQ29tcG9uZW50fSBmcm9tIFwiLi90cmFja2luZy90cmFja2luZy5jb21wb25lbnRcIjtcblxuZXhwb3J0IGNvbnN0IENsaWVudFJvdXRlczogUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGNvbXBvbmVudDogUmVwb3J0Q29tcG9uZW50XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICdyZXBvcnQnLFxuICAgICAgICBjb21wb25lbnQ6IFJlcG9ydENvbXBvbmVudFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnd2FpdGluZy86aWQnLFxuICAgICAgICBjb21wb25lbnQ6IFdhaXRpbmdDb21wb25lbnRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJ3RyYWNraW5nLzphc3Npc3RhbmNlaWQnLFxuICAgICAgICBjb21wb25lbnQ6IFRyYWNraW5nQ29tcG9uZW50XG4gICAgfVxuXTtcbiJdfQ==