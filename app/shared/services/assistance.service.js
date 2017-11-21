"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var AssistanceService = (function () {
    function AssistanceService(http) {
        this.http = http;
        this.urlResource = 'https://app.fastlinkperu.com:8443/services/api/v1/assistance';
    }
    AssistanceService.prototype.register = function (assistance) {
        return this.http.post("" + this.urlResource, assistance).map(function (res) { return res.json(); });
    };
    AssistanceService.prototype.find = function (id) {
        return this.http.get(this.urlResource + "/" + id).map(function (res) { return res.json(); });
    };
    AssistanceService.prototype.all = function (page, size) {
        return this.http.get(this.urlResource + "?page=" + page + "&size=" + size).map(function (res) { return res.json(); });
    };
    AssistanceService.prototype.setAssistance = function (assistance) {
        this.assistance = this.assistance;
    };
    AssistanceService.prototype.getAssistance = function () {
        return this.assistance;
    };
    AssistanceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AssistanceService);
    return AssistanceService;
}());
exports.AssistanceService = AssistanceService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaXN0YW5jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNzaXN0YW5jZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNDQUFtQztBQUNuQyxpQ0FBK0I7QUFHL0I7SUFJSSwyQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyw4REFBOEQsQ0FBQztJQUN0RixDQUFDO0lBRUQsb0NBQVEsR0FBUixVQUFTLFVBQXNCO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFHLElBQUksQ0FBQyxXQUFhLEVBQUUsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFRCxnQ0FBSSxHQUFKLFVBQUssRUFBVTtRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsV0FBVyxTQUFJLEVBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsK0JBQUcsR0FBSCxVQUFJLElBQVksRUFBRSxJQUFZO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsV0FBVyxjQUFTLElBQUksY0FBUyxJQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVELHlDQUFhLEdBQWIsVUFBYyxVQUFzQjtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDdEMsQ0FBQztJQUVELHlDQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBMUJRLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFO3lDQUtpQixXQUFJO09BSnJCLGlCQUFpQixDQTRCN0I7SUFBRCx3QkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Fzc2lzdGFuY2V9IGZyb20gXCIuLi9jbGFzc2VzL2Fzc2lzdGFuY2UuY2xhc3NcIjtcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXNzaXN0YW5jZVNlcnZpY2Uge1xuICAgIHByaXZhdGUgYXNzaXN0YW5jZTogQXNzaXN0YW5jZTtcbiAgICBwcml2YXRlIHVybFJlc291cmNlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICAgICAgdGhpcy51cmxSZXNvdXJjZSA9ICdodHRwczovL2FwcC5mYXN0bGlua3BlcnUuY29tOjg0NDMvc2VydmljZXMvYXBpL3YxL2Fzc2lzdGFuY2UnO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKGFzc2lzdGFuY2U6IEFzc2lzdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJsUmVzb3VyY2V9YCwgYXNzaXN0YW5jZSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICBmaW5kKGlkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmxSZXNvdXJjZX0vJHtpZH1gKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIGFsbChwYWdlOiBudW1iZXIsIHNpemU6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVybFJlc291cmNlfT9wYWdlPSR7cGFnZX0mc2l6ZT0ke3NpemV9YCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICBzZXRBc3Npc3RhbmNlKGFzc2lzdGFuY2U6IEFzc2lzdGFuY2UpIHtcbiAgICAgICAgdGhpcy5hc3Npc3RhbmNlID0gdGhpcy5hc3Npc3RhbmNlO1xuICAgIH1cblxuICAgIGdldEFzc2lzdGFuY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lzdGFuY2U7XG4gICAgfVxuXG59XG4iXX0=