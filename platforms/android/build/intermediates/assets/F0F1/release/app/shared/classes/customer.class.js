"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = (function () {
    function Customer(id, stars, active, user, spend) {
        this.id = id;
        this.stars = stars;
        this.active = active;
        this.user = user;
        this.spend = spend;
    }
    return Customer;
}());
exports.Customer = Customer;
