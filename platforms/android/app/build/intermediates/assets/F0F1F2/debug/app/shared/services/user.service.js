"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.urlResource = 'https://app.fastlinkperu.com:8443/services/api/v1/user';
    }
    UserService.prototype.info = function (id) {
        return this.http.get(this.urlResource + "/" + id).map(function (res) { return res.json(); });
    };
    UserService.prototype.infoCustomer = function (id) {
        return this.http.get(this.urlResource + "/customer/" + id).map(function (res) { return res.json(); });
    };
    UserService.prototype.infoWorker = function (id) {
        return this.http.get(this.urlResource + "/worker/" + id).map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNDQUFtQztBQUNuQyxpQ0FBK0I7QUFHL0I7SUFHSSxxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyx3REFBd0QsQ0FBQztJQUNoRixDQUFDO0lBRUQsMEJBQUksR0FBSixVQUFLLEVBQVU7UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLFdBQVcsU0FBSSxFQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxFQUFVO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsV0FBVyxrQkFBYSxFQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsV0FBVyxnQkFBVyxFQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQWpCUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBSWlCLFdBQUk7T0FIckIsV0FBVyxDQW1CdkI7SUFBRCxrQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICAgIHByaXZhdGUgdXJsUmVzb3VyY2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuICAgICAgICB0aGlzLnVybFJlc291cmNlID0gJ2h0dHBzOi8vYXBwLmZhc3RsaW5rcGVydS5jb206ODQ0My9zZXJ2aWNlcy9hcGkvdjEvdXNlcic7XG4gICAgfVxuXG4gICAgaW5mbyhpZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsUmVzb3VyY2V9LyR7aWR9YCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICBpbmZvQ3VzdG9tZXIoaWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVybFJlc291cmNlfS9jdXN0b21lci8ke2lkfWApLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgaW5mb1dvcmtlcihpZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsUmVzb3VyY2V9L3dvcmtlci8ke2lkfWApLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG59XG4iXX0=