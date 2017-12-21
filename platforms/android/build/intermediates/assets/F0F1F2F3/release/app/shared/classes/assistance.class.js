"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Assistance = (function () {
    function Assistance(id, date, address, addressreference, assistanceType, worker, customer, stars, comments) {
        this.id = id;
        this.date = date;
        this.address = address;
        this.addressreference = addressreference;
        this.assistanceType = assistanceType;
        this.worker = worker;
        this.customer = customer;
        this.stars = stars;
        this.comments = comments;
    }
    return Assistance;
}());
exports.Assistance = Assistance;
