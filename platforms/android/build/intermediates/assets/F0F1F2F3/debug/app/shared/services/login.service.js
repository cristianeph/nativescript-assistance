"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.urlResource = 'https://app.fastlinkperu.com:8443/services/api/v1/user';
    }
    LoginService.prototype.setUser = function (user) {
        this.user = user;
    };
    LoginService.prototype.getUser = function () {
        return this.user;
    };
    LoginService.prototype.login = function (user) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0NBQW1DO0FBQ25DLGlDQUErQjtBQUcvQjtJQUlJLHNCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLHdEQUF3RCxDQUFDO0lBQ2hGLENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVEsSUFBVTtRQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCw4QkFBTyxHQUFQO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELDRCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxXQUFXLFdBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELDZCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsMkJBQUksR0FBSixVQUFLLEVBQVU7UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLFdBQVcsU0FBSSxFQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELCtCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxXQUFXLE1BQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQS9CUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBS2lCLFdBQUk7T0FKckIsWUFBWSxDQWtDeEI7SUFBRCxtQkFBQztDQUFBLEFBbENELElBa0NDO0FBbENZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL2NsYXNzZXMvdXNlci5jbGFzc1wiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xuICAgIHByaXZhdGUgdXNlcjogVXNlcjtcbiAgICBwcml2YXRlIHVybFJlc291cmNlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICAgICAgdGhpcy51cmxSZXNvdXJjZSA9ICdodHRwczovL2FwcC5mYXN0bGlua3BlcnUuY29tOjg0NDMvc2VydmljZXMvYXBpL3YxL3VzZXInO1xuICAgIH1cblxuICAgIHNldFVzZXIodXNlcjogVXNlcikge1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgIH1cblxuICAgIGdldFVzZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXI7XG4gICAgfVxuXG4gICAgbG9naW4odXNlcjogVXNlcikge1xuICAgICAgICBjb25zb2xlLmxvZygncmVjaWV2ZWQgdXNlciA9PiAnLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybFJlc291cmNlfS92YWxpZGAsIHVzZXIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuXG4gICAgfVxuXG4gICAgaW5mbyhpZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsUmVzb3VyY2V9LyR7aWR9YCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybFJlc291cmNlfS9gLCB1c2VyKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuXG59XG4iXX0=