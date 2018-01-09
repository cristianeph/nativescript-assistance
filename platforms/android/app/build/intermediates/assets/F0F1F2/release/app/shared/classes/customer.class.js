"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = (function () {
    function Customer(id, stars, active, user, spend, plate, latitude, longitude, altitude) {
        this.id = id;
        this.stars = stars;
        this.active = active;
        this.user = user;
        this.spend = spend;
        this.plate = plate;
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
    }
    return Customer;
}());
exports.Customer = Customer;
