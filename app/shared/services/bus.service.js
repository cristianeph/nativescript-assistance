"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/map");
var BusService = (function () {
    function BusService() {
        this.handler = new Subject_1.Subject();
    }
    BusService.prototype.broadcast = function (type, payload) {
        this.handler.next({ type: type, payload: payload });
    };
    BusService.prototype.subscribe = function (type, callback) {
        return this.handler
            .filter(function (message) { return message.type === type; })
            .map(function (message) { return message.payload; })
            .subscribe(callback);
    };
    BusService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], BusService);
    return BusService;
}());
exports.BusService = BusService;
