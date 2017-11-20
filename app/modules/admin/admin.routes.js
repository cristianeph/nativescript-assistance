"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validate_component_1 = require("./validate/validate.component");
exports.AdminRoutes = [
    {
        path: '',
        component: validate_component_1.ValidateComponent
    },
    {
        path: 'validate',
        component: validate_component_1.ValidateComponent
    },
];
