"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pending_component_1 = require("./pending/pending.component");
var assist_component_1 = require("./assist/assist.component");
exports.AssistanceRoutes = [
    {
        path: '',
        component: pending_component_1.PendingComponent
    },
    {
        path: 'pending',
        component: pending_component_1.PendingComponent
    },
    {
        path: 'assist/:assistid',
        component: assist_component_1.AssistComponent
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaXN0YW5jZS5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhc3Npc3RhbmNlLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGlFQUE2RDtBQUM3RCw4REFBMEQ7QUFFN0MsUUFBQSxnQkFBZ0IsR0FBVztJQUNwQztRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLG9DQUFnQjtLQUM5QjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFNBQVM7UUFDZixTQUFTLEVBQUUsb0NBQWdCO0tBQzlCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLFNBQVMsRUFBRSxrQ0FBZTtLQUM3QjtDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtQZW5kaW5nQ29tcG9uZW50fSBmcm9tIFwiLi9wZW5kaW5nL3BlbmRpbmcuY29tcG9uZW50XCI7XG5pbXBvcnQge0Fzc2lzdENvbXBvbmVudH0gZnJvbSBcIi4vYXNzaXN0L2Fzc2lzdC5jb21wb25lbnRcIjtcblxuZXhwb3J0IGNvbnN0IEFzc2lzdGFuY2VSb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBjb21wb25lbnQ6IFBlbmRpbmdDb21wb25lbnRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJ3BlbmRpbmcnLFxuICAgICAgICBjb21wb25lbnQ6IFBlbmRpbmdDb21wb25lbnRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJ2Fzc2lzdC86YXNzaXN0aWQnLFxuICAgICAgICBjb21wb25lbnQ6IEFzc2lzdENvbXBvbmVudFxuICAgIH1cbl07XG4iXX0=