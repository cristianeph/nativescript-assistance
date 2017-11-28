"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var WorkerService = (function () {
    function WorkerService(http) {
        this.http = http;
        this.urlResource = 'https://app.fastlinkperu.com:8443/services/api/v1/worker';
    }
    WorkerService.prototype.find = function (id) {
        return this.http.get(this.urlResource + "/user/" + id).map(function (res) { return res.json(); });
    };
    WorkerService.prototype.updateToken = function (worker) {
        return this.http.post(this.urlResource + "/fcm", worker).map(function (res) { return res.json(); });
    };
    WorkerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], WorkerService);
    return WorkerService;
}());
exports.WorkerService = WorkerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3b3JrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzQ0FBbUM7QUFDbkMsaUNBQStCO0FBRy9CO0lBSUksdUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsMERBQTBELENBQUM7SUFDbEYsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxFQUFVO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxXQUFXLGNBQVMsRUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksTUFBYztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLFdBQVcsU0FBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBZFEsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQUtpQixXQUFJO09BSnJCLGFBQWEsQ0FnQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dvcmtlcn0gZnJvbSBcIi4uL2NsYXNzZXMvd29ya2VyLmNsYXNzXCI7XG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdvcmtlclNlcnZpY2Uge1xuICAgIHByaXZhdGUgd29ya2VyOiBXb3JrZXI7XG4gICAgcHJpdmF0ZSB1cmxSZXNvdXJjZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgICAgIHRoaXMudXJsUmVzb3VyY2UgPSAnaHR0cHM6Ly9hcHAuZmFzdGxpbmtwZXJ1LmNvbTo4NDQzL3NlcnZpY2VzL2FwaS92MS93b3JrZXInO1xuICAgIH1cblxuICAgIGZpbmQoaWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVybFJlc291cmNlfS91c2VyLyR7aWR9YCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUb2tlbih3b3JrZXI6IFdvcmtlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cmxSZXNvdXJjZX0vZmNtYCwgd29ya2VyKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxufVxuIl19