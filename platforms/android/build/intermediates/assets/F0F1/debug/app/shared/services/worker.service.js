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
        return this.http.get(this.urlResource + "/" + id).map(function (res) { return res.json(); });
    };
    WorkerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], WorkerService);
    return WorkerService;
}());
exports.WorkerService = WorkerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3b3JrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzQ0FBbUM7QUFDbkMsaUNBQStCO0FBRy9CO0lBSUksdUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsMERBQTBELENBQUM7SUFDbEYsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxFQUFVO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxXQUFXLFNBQUksRUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFWUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBS2lCLFdBQUk7T0FKckIsYUFBYSxDQVl6QjtJQUFELG9CQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXb3JrZXJ9IGZyb20gXCIuLi9jbGFzc2VzL3dvcmtlci5jbGFzc1wiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXb3JrZXJTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHdvcmtlcjogV29ya2VyO1xuICAgIHByaXZhdGUgdXJsUmVzb3VyY2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuICAgICAgICB0aGlzLnVybFJlc291cmNlID0gJ2h0dHBzOi8vYXBwLmZhc3RsaW5rcGVydS5jb206ODQ0My9zZXJ2aWNlcy9hcGkvdjEvd29ya2VyJztcbiAgICB9XG5cbiAgICBmaW5kKGlkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmxSZXNvdXJjZX0vJHtpZH1gKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxufVxuIl19