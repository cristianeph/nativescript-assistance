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
    AssistanceService.prototype.updateLocation = function (assistance) {
        return this.http.post(this.urlResource + "/location", assistance).map(function (res) { return res.json(); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaXN0YW5jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNzaXN0YW5jZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNDQUFtQztBQUNuQyxpQ0FBK0I7QUFHL0I7SUFJSSwyQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyw4REFBOEQsQ0FBQztRQUNsRixzRUFBc0U7SUFDMUUsQ0FBQztJQUVELG9DQUFRLEdBQVIsVUFBUyxVQUFzQjtRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBRyxJQUFJLENBQUMsV0FBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsa0NBQU0sR0FBTixVQUFPLFVBQXNCO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFHLElBQUksQ0FBQyxXQUFhLEVBQUUsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFRCwwQ0FBYyxHQUFkLFVBQWUsVUFBc0I7UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxXQUFXLGNBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVELGdDQUFJLEdBQUosVUFBSyxFQUFVO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxXQUFXLFNBQUksRUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCwrQkFBRyxHQUFILFVBQUksSUFBWSxFQUFFLElBQVk7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxXQUFXLGNBQVMsSUFBSSxjQUFTLElBQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRUQseUNBQWEsR0FBYixVQUFjLFVBQXNCO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN0QyxDQUFDO0lBRUQseUNBQWEsR0FBYjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFuQ1EsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBS2lCLFdBQUk7T0FKckIsaUJBQWlCLENBcUM3QjtJQUFELHdCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXNzaXN0YW5jZX0gZnJvbSBcIi4uL2NsYXNzZXMvYXNzaXN0YW5jZS5jbGFzc1wiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBc3Npc3RhbmNlU2VydmljZSB7XG4gICAgcHJpdmF0ZSBhc3Npc3RhbmNlOiBBc3Npc3RhbmNlO1xuICAgIHByaXZhdGUgdXJsUmVzb3VyY2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuICAgICAgICB0aGlzLnVybFJlc291cmNlID0gJ2h0dHBzOi8vYXBwLmZhc3RsaW5rcGVydS5jb206ODQ0My9zZXJ2aWNlcy9hcGkvdjEvYXNzaXN0YW5jZSc7XG4gICAgICAgIC8qdGhpcy51cmxSZXNvdXJjZSA9ICdodHRwOi8vMTkyLjE2OC4zMS4xMjA6ODA4MC9hcGkvdjEvYXNzaXN0YW5jZSc7Ki9cbiAgICB9XG5cbiAgICByZWdpc3Rlcihhc3Npc3RhbmNlOiBBc3Npc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybFJlc291cmNlfWAsIGFzc2lzdGFuY2UpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGFzc2lzdGFuY2U6IEFzc2lzdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMudXJsUmVzb3VyY2V9YCwgYXNzaXN0YW5jZSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICB1cGRhdGVMb2NhdGlvbihhc3Npc3RhbmNlOiBBc3Npc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybFJlc291cmNlfS9sb2NhdGlvbmAsIGFzc2lzdGFuY2UpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgZmluZChpZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsUmVzb3VyY2V9LyR7aWR9YCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICBhbGwocGFnZTogbnVtYmVyLCBzaXplOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmxSZXNvdXJjZX0/cGFnZT0ke3BhZ2V9JnNpemU9JHtzaXplfWApLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgc2V0QXNzaXN0YW5jZShhc3Npc3RhbmNlOiBBc3Npc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuYXNzaXN0YW5jZSA9IHRoaXMuYXNzaXN0YW5jZTtcbiAgICB9XG5cbiAgICBnZXRBc3Npc3RhbmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc3Npc3RhbmNlO1xuICAgIH1cblxufVxuIl19