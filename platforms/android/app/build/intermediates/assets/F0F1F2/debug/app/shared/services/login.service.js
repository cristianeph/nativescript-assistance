"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var utils_1 = require("../utils");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.urlResource = utils_1.SERVER_PATH + "/services/api/v1/user";
        this.urlResourceAlternate = utils_1.SERVER_PATH + "/services/api/v1/customer";
    }
    LoginService.prototype.setUser = function (user) {
        this.user = user;
    };
    LoginService.prototype.getUser = function () {
        return this.user;
    };
    LoginService.prototype.customerLogin = function (customer) {
        console.log('recieved user => ', JSON.stringify(customer));
        return this.http.post(this.urlResourceAlternate + "/valid", customer).map(function (res) { return res.json(); });
    };
    LoginService.prototype.adminLogin = function (user) {
        console.log('recieved user => ', JSON.stringify(user));
        return this.http.post(this.urlResource + "/valid", user).map(function (res) { return res.json(); });
    };
    LoginService.prototype.logout = function () {
    };
    LoginService.prototype.info = function (id) {
        return this.http.get(this.urlResource + "/" + id).map(function (res) { return res.json(); });
    };
    LoginService.prototype.register = function (user) {
        return this.http.post(this.urlResource + "/", user).map(function (res) { return res.json(); });
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0NBQW1DO0FBQ25DLGlDQUErQjtBQUUvQixrQ0FBcUM7QUFHckM7SUFLSSxzQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBTSxtQkFBVywwQkFBdUIsQ0FBQztRQUN6RCxJQUFJLENBQUMsb0JBQW9CLEdBQU0sbUJBQVcsOEJBQTJCLENBQUM7SUFDMUUsQ0FBQztJQUVELDhCQUFPLEdBQVAsVUFBUSxJQUFVO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELDhCQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLFFBQWtCO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsb0JBQW9CLFdBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVELGlDQUFVLEdBQVYsVUFBVyxJQUFVO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsV0FBVyxXQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFRCw2QkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELDJCQUFJLEdBQUosVUFBSyxFQUFVO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxXQUFXLFNBQUksRUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsSUFBVTtRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsV0FBVyxNQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUF0Q1EsWUFBWTtRQUR4QixpQkFBVSxFQUFFO3lDQU1pQixXQUFJO09BTHJCLFlBQVksQ0F5Q3hCO0lBQUQsbUJBQUM7Q0FBQSxBQXpDRCxJQXlDQztBQXpDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VzZXIsIFVzZXJFYXN5fSBmcm9tIFwiLi4vY2xhc3Nlcy91c2VyLmNsYXNzXCI7XG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCB7Q3VzdG9tZXJ9IGZyb20gXCIuLi9jbGFzc2VzL2N1c3RvbWVyLmNsYXNzXCI7XG5pbXBvcnQge1NFUlZFUl9QQVRIfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XG4gICAgcHJpdmF0ZSB1c2VyOiBVc2VyO1xuICAgIHByaXZhdGUgdXJsUmVzb3VyY2U6IHN0cmluZztcbiAgICBwcml2YXRlIHVybFJlc291cmNlQWx0ZXJuYXRlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICAgICAgdGhpcy51cmxSZXNvdXJjZSA9IGAke1NFUlZFUl9QQVRIfS9zZXJ2aWNlcy9hcGkvdjEvdXNlcmA7XG4gICAgICAgIHRoaXMudXJsUmVzb3VyY2VBbHRlcm5hdGUgPSBgJHtTRVJWRVJfUEFUSH0vc2VydmljZXMvYXBpL3YxL2N1c3RvbWVyYDtcbiAgICB9XG5cbiAgICBzZXRVc2VyKHVzZXI6IFVzZXIpIHtcbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICB9XG5cbiAgICBnZXRVc2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyO1xuICAgIH1cblxuICAgIGN1c3RvbWVyTG9naW4oY3VzdG9tZXI6IFVzZXJFYXN5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWNpZXZlZCB1c2VyID0+ICcsIEpTT04uc3RyaW5naWZ5KGN1c3RvbWVyKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybFJlc291cmNlQWx0ZXJuYXRlfS92YWxpZGAsIGN1c3RvbWVyKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIGFkbWluTG9naW4odXNlcjogVXNlcikge1xuICAgICAgICBjb25zb2xlLmxvZygncmVjaWV2ZWQgdXNlciA9PiAnLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybFJlc291cmNlfS92YWxpZGAsIHVzZXIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuXG4gICAgfVxuXG4gICAgaW5mbyhpZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsUmVzb3VyY2V9LyR7aWR9YCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybFJlc291cmNlfS9gLCB1c2VyKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuXG59XG4iXX0=