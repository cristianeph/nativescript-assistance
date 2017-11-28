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
        return this.http.post(this.urlResource + "/fcm", customer).map(function (res) { return res.json(); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1c3RvbWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0NBQW1DO0FBQ25DLGlDQUErQjtBQUcvQjtJQUlJLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLDREQUE0RCxDQUFDO0lBQ3BGLENBQUM7SUFFRCw4QkFBSSxHQUFKLFVBQUssRUFBVTtRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsV0FBVyxjQUFTLEVBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLFFBQWtCO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsV0FBVyxTQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQVksUUFBa0I7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUNELHFDQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBckJRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FLaUIsV0FBSTtPQUpyQixlQUFlLENBdUIzQjtJQUFELHNCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDdXN0b21lcn0gZnJvbSBcIi4uL2NsYXNzZXMvY3VzdG9tZXIuY2xhc3NcIjtcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGN1c3RvbWVyOiBDdXN0b21lcjtcbiAgICBwcml2YXRlIHVybFJlc291cmNlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICAgICAgdGhpcy51cmxSZXNvdXJjZSA9ICdodHRwczovL2FwcC5mYXN0bGlua3BlcnUuY29tOjg0NDMvc2VydmljZXMvYXBpL3YxL2N1c3RvbWVyJztcbiAgICB9XG5cbiAgICBmaW5kKGlkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmxSZXNvdXJjZX0vdXNlci8ke2lkfWApLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVG9rZW4oY3VzdG9tZXI6IEN1c3RvbWVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybFJlc291cmNlfS9mY21gLCBjdXN0b21lcikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICBzZXRDdXN0b21lcihjdXN0b21lcjogQ3VzdG9tZXIpIHtcbiAgICAgICAgdGhpcy5jdXN0b21lciA9IGN1c3RvbWVyO1xuICAgIH1cbiAgICBnZXRDdXN0b21lcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tZXI7XG4gICAgfVxuXG59XG4iXX0=