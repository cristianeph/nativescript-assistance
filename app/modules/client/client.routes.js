"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var report_component_1 = require("./report/report.component");
var waiting_component_1 = require("./waiting/waiting.component");
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
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsaWVudC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw4REFBMEQ7QUFDMUQsaUVBQTZEO0FBRWhELFFBQUEsWUFBWSxHQUFXO0lBQ2hDO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsa0NBQWU7S0FDN0I7SUFDRDtRQUNJLElBQUksRUFBRSxRQUFRO1FBQ2QsU0FBUyxFQUFFLGtDQUFlO0tBQzdCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsYUFBYTtRQUNuQixTQUFTLEVBQUUsb0NBQWdCO0tBQzlCO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7UmVwb3J0Q29tcG9uZW50fSBmcm9tIFwiLi9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtXYWl0aW5nQ29tcG9uZW50fSBmcm9tIFwiLi93YWl0aW5nL3dhaXRpbmcuY29tcG9uZW50XCI7XG5cbmV4cG9ydCBjb25zdCBDbGllbnRSb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBjb21wb25lbnQ6IFJlcG9ydENvbXBvbmVudFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAncmVwb3J0JyxcbiAgICAgICAgY29tcG9uZW50OiBSZXBvcnRDb21wb25lbnRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJ3dhaXRpbmcvOmlkJyxcbiAgICAgICAgY29tcG9uZW50OiBXYWl0aW5nQ29tcG9uZW50XG4gICAgfVxuXTtcbiJdfQ==