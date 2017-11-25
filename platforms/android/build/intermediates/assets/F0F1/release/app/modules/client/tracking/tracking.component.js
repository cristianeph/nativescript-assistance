"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tracking_service_1 = require("../../../shared/services/tracking.service");
var app = require("tns-core-modules/application");
var TrackingComponent = (function () {
    function TrackingComponent(trackingService) {
        this.trackingService = trackingService;
        this.title = 'Listo, espere un momento...';
    }
    TrackingComponent.prototype.ngOnInit = function () {
        this.list = this.trackingService.getItems();
    };
    TrackingComponent.prototype.pageLoaded = function () {
        if (app.android) {
            app.android.on(app.AndroidApplication.activityBackPressedEvent, this.refuseBack);
        }
    };
    TrackingComponent.prototype.pageUnloaded = function () {
        if (app.android) {
            app.android.off(app.AndroidApplication.activityBackPressedEvent, this.refuseBack);
        }
    };
    TrackingComponent.prototype.refuseBack = function (args) {
        args.cancel = true;
    };
    TrackingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-tracking',
            templateUrl: './tracking.component.html',
            styleUrls: ['./tracking.component.css']
        }),
        __metadata("design:paramtypes", [tracking_service_1.TrackingService])
    ], TrackingComponent);
    return TrackingComponent;
}());
exports.TrackingComponent = TrackingComponent;
