"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var FirebaseService = (function () {
    function FirebaseService(http) {
        this.http = http;
        this.urlResource = 'https://app.fastlinkperu.com:8443/services/api/v1/firebase';
    }
    FirebaseService.prototype.sendNotification = function (notification) {
        return this.http.post("" + this.urlResource, notification).map(function (res) { return res.json(); });
    };
    FirebaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsc0NBQW1DO0FBSW5DO0lBSUkseUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsNERBQTRELENBQUM7SUFDcEYsQ0FBQztJQUVELDBDQUFnQixHQUFoQixVQUFpQixZQUEwQjtRQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBRyxJQUFJLENBQUMsV0FBYSxFQUFFLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBVlEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUtpQixXQUFJO09BSnJCLGVBQWUsQ0FZM0I7SUFBRCxzQkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7RmlyZWJhc2VQb3N0fSBmcm9tIFwiLi4vY2xhc3Nlcy9maXJlYmFzZS1wb3N0LmNsYXNzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSB1cmxSZXNvdXJjZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgICAgIHRoaXMudXJsUmVzb3VyY2UgPSAnaHR0cHM6Ly9hcHAuZmFzdGxpbmtwZXJ1LmNvbTo4NDQzL3NlcnZpY2VzL2FwaS92MS9maXJlYmFzZSc7XG4gICAgfVxuXG4gICAgc2VuZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IEZpcmViYXNlUG9zdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cmxSZXNvdXJjZX1gLCBub3RpZmljYXRpb24pLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG59XG4iXX0=