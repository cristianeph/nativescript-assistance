"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tracking_class_1 = require("../classes/tracking.class");
var TrackingService = (function () {
    function TrackingService() {
        this.items = new Array(new tracking_class_1.Tracking(10001, '2017-11-19 15:00:10', '', '', '', 'Av San Roque 123', 45), new tracking_class_1.Tracking(10002, '2017-11-19 15:00:10', '', '', '', 'Av Caminos del Inca 456', 40), new tracking_class_1.Tracking(10003, '2017-11-19 15:00:10', '', '', '', 'Av Benavides 1020', 35), new tracking_class_1.Tracking(10004, '2017-11-19 15:00:10', '', '', '', 'Av Angamos 3042', 30), new tracking_class_1.Tracking(10005, '2017-11-19 15:00:10', '', '', '', 'Av Tomas Marsano 123', 15), new tracking_class_1.Tracking(10006, '2017-11-19 15:00:10', '', '', '', 'Ovalo Higuereta', 5));
    }
    TrackingService.prototype.getItems = function () {
        return this.items;
    };
    TrackingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], TrackingService);
    return TrackingService;
}());
exports.TrackingService = TrackingService;
