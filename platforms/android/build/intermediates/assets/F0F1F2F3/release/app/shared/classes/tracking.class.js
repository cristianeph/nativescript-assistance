"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tracking = (function () {
    function Tracking(id, datetime, alt, lat, long, address, left) {
        this.id = id;
        this.datetime = datetime;
        this.alt = alt;
        this.lat = lat;
        this.long = long;
        this.address = address;
        this.left = left;
    }
    return Tracking;
}());
exports.Tracking = Tracking;
