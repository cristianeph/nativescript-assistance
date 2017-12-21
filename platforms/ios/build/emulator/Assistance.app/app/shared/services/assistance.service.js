"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var AssistanceService = (function () {
    function AssistanceService(http) {
        this.http = http;
        this.urlResource = 'https://app.fastlinkperu.com:8443/services/api/v1/assistance';
        /*this.urlResource = 'http://192.168.31.120:8080/api/v1/assistance';*/
    }
    AssistanceService.prototype.register = function (assistance) {
        return this.http.post("" + this.urlResource, assistance).map(function (res) { return res.json(); });
    };
    AssistanceService.prototype.update = function (assistance) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaXN0YW5jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNzaXN0YW5jZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNDQUFtQztBQUNuQyxpQ0FBK0I7QUFHL0I7SUFJSSwyQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyw4REFBOEQsQ0FBQztRQUNsRixzRUFBc0U7SUFDMUUsQ0FBQztJQUVELG9DQUFRLEdBQVIsVUFBUyxVQUFzQjtRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBRyxJQUFJLENBQUMsV0FBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsa0NBQU0sR0FBTixVQUFPLFVBQXNCO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFHLElBQUksQ0FBQyxXQUFhLEVBQUUsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFRCxnQ0FBSSxHQUFKLFVBQUssRUFBVTtRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsV0FBVyxTQUFJLEVBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsK0JBQUcsR0FBSCxVQUFJLElBQVksRUFBRSxJQUFZO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsV0FBVyxjQUFTLElBQUksY0FBUyxJQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVELHlDQUFhLEdBQWIsVUFBYyxVQUFzQjtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDdEMsQ0FBQztJQUVELHlDQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBL0JRLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFO3lDQUtpQixXQUFJO09BSnJCLGlCQUFpQixDQWlDN0I7SUFBRCx3QkFBQztDQUFBLEFBakNELElBaUNDO0FBakNZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Fzc2lzdGFuY2V9IGZyb20gXCIuLi9jbGFzc2VzL2Fzc2lzdGFuY2UuY2xhc3NcIjtcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXNzaXN0YW5jZVNlcnZpY2Uge1xuICAgIHByaXZhdGUgYXNzaXN0YW5jZTogQXNzaXN0YW5jZTtcbiAgICBwcml2YXRlIHVybFJlc291cmNlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICAgICAgdGhpcy51cmxSZXNvdXJjZSA9ICdodHRwczovL2FwcC5mYXN0bGlua3BlcnUuY29tOjg0NDMvc2VydmljZXMvYXBpL3YxL2Fzc2lzdGFuY2UnO1xuICAgICAgICAvKnRoaXMudXJsUmVzb3VyY2UgPSAnaHR0cDovLzE5Mi4xNjguMzEuMTIwOjgwODAvYXBpL3YxL2Fzc2lzdGFuY2UnOyovXG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoYXNzaXN0YW5jZTogQXNzaXN0YW5jZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cmxSZXNvdXJjZX1gLCBhc3Npc3RhbmNlKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIHVwZGF0ZShhc3Npc3RhbmNlOiBBc3Npc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybFJlc291cmNlfWAsIGFzc2lzdGFuY2UpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgZmluZChpZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsUmVzb3VyY2V9LyR7aWR9YCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICBhbGwocGFnZTogbnVtYmVyLCBzaXplOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmxSZXNvdXJjZX0/cGFnZT0ke3BhZ2V9JnNpemU9JHtzaXplfWApLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgc2V0QXNzaXN0YW5jZShhc3Npc3RhbmNlOiBBc3Npc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuYXNzaXN0YW5jZSA9IHRoaXMuYXNzaXN0YW5jZTtcbiAgICB9XG5cbiAgICBnZXRBc3Npc3RhbmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc3Npc3RhbmNlO1xuICAgIH1cblxufVxuIl19