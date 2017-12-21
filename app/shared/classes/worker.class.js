"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Worker = (function () {
    function Worker(id, stars, active, user, earn, plate, license) {
        this.id = id;
        this.stars = stars;
        this.active = active;
        this.user = user;
        this.earn = earn;
        this.plate = plate;
        this.license = license;
    }
    return Worker;
}());
exports.Worker = Worker;
