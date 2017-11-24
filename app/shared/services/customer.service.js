"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var CustomerService = (function () {
    function CustomerService(http) {
        this.http = http;
        this.urlResource = 'https://app.fastlinkperu.com:8443/services/api/v1/customer';
    }
    CustomerService.prototype.find = function (id) {
        return this.http.get(this.urlResource + "/user/" + id).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.updateToken = function (customer) {
        return this.http.post(this.urlResource + "/user/firebase", customer).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.setCustomer = function (customer) {
        this.customer = customer;
    };
    CustomerService.prototype.getCustomer = function () {
        return this.customer;
    };
    CustomerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1c3RvbWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0NBQW1DO0FBQ25DLGlDQUErQjtBQUcvQjtJQUlJLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLDREQUE0RCxDQUFDO0lBQ3BGLENBQUM7SUFFRCw4QkFBSSxHQUFKLFVBQUssRUFBVTtRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsV0FBVyxjQUFTLEVBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLFFBQWtCO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsV0FBVyxtQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxRQUFrQjtRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBQ0QscUNBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFyQlEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUtpQixXQUFJO09BSnJCLGVBQWUsQ0F1QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0N1c3RvbWVyfSBmcm9tIFwiLi4vY2xhc3Nlcy9jdXN0b21lci5jbGFzc1wiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDdXN0b21lclNlcnZpY2Uge1xuICAgIHByaXZhdGUgY3VzdG9tZXI6IEN1c3RvbWVyO1xuICAgIHByaXZhdGUgdXJsUmVzb3VyY2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuICAgICAgICB0aGlzLnVybFJlc291cmNlID0gJ2h0dHBzOi8vYXBwLmZhc3RsaW5rcGVydS5jb206ODQ0My9zZXJ2aWNlcy9hcGkvdjEvY3VzdG9tZXInO1xuICAgIH1cblxuICAgIGZpbmQoaWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVybFJlc291cmNlfS91c2VyLyR7aWR9YCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUb2tlbihjdXN0b21lcjogQ3VzdG9tZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJsUmVzb3VyY2V9L3VzZXIvZmlyZWJhc2VgLCBjdXN0b21lcikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICBzZXRDdXN0b21lcihjdXN0b21lcjogQ3VzdG9tZXIpIHtcbiAgICAgICAgdGhpcy5jdXN0b21lciA9IGN1c3RvbWVyO1xuICAgIH1cbiAgICBnZXRDdXN0b21lcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tZXI7XG4gICAgfVxuXG59XG4iXX0=