"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var CustomerService = (function () {
    function CustomerService(http) {
        this.http = http;
        this.urlResource = 'https://app.fastlinkperu.com:8443/services/api/v1/customer';
        /*this.urlResource = 'http://192.168.31.120:8080/api/v1/customer';*/
    }
    CustomerService.prototype.find = function (id) {
        return this.http.get(this.urlResource + "/user/" + id).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.updateToken = function (customer) {
        return this.http.post(this.urlResource + "/fcm", customer).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.updateLocation = function (customer) {
        return this.http.post(this.urlResource + "/geolocation", customer).map(function (res) { return res.json(); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1c3RvbWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0NBQW1DO0FBQ25DLGlDQUErQjtBQUcvQjtJQUlJLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLDREQUE0RCxDQUFDO1FBQ2hGLG9FQUFvRTtJQUN4RSxDQUFDO0lBRUQsOEJBQUksR0FBSixVQUFLLEVBQVU7UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLFdBQVcsY0FBUyxFQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxRQUFrQjtRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLFdBQVcsU0FBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQsd0NBQWMsR0FBZCxVQUFlLFFBQWtCO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsV0FBVyxpQkFBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLFFBQWtCO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFDRCxxQ0FBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQTFCUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBS2lCLFdBQUk7T0FKckIsZUFBZSxDQTRCM0I7SUFBRCxzQkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q3VzdG9tZXJ9IGZyb20gXCIuLi9jbGFzc2VzL2N1c3RvbWVyLmNsYXNzXCI7XG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyU2VydmljZSB7XG4gICAgcHJpdmF0ZSBjdXN0b21lcjogQ3VzdG9tZXI7XG4gICAgcHJpdmF0ZSB1cmxSZXNvdXJjZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgICAgIHRoaXMudXJsUmVzb3VyY2UgPSAnaHR0cHM6Ly9hcHAuZmFzdGxpbmtwZXJ1LmNvbTo4NDQzL3NlcnZpY2VzL2FwaS92MS9jdXN0b21lcic7XG4gICAgICAgIC8qdGhpcy51cmxSZXNvdXJjZSA9ICdodHRwOi8vMTkyLjE2OC4zMS4xMjA6ODA4MC9hcGkvdjEvY3VzdG9tZXInOyovXG4gICAgfVxuXG4gICAgZmluZChpZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsUmVzb3VyY2V9L3VzZXIvJHtpZH1gKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIHVwZGF0ZVRva2VuKGN1c3RvbWVyOiBDdXN0b21lcikge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cmxSZXNvdXJjZX0vZmNtYCwgY3VzdG9tZXIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTG9jYXRpb24oY3VzdG9tZXI6IEN1c3RvbWVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybFJlc291cmNlfS9nZW9sb2NhdGlvbmAsIGN1c3RvbWVyKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIHNldEN1c3RvbWVyKGN1c3RvbWVyOiBDdXN0b21lcikge1xuICAgICAgICB0aGlzLmN1c3RvbWVyID0gY3VzdG9tZXI7XG4gICAgfVxuICAgIGdldEN1c3RvbWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXN0b21lcjtcbiAgICB9XG5cbn1cbiJdfQ==