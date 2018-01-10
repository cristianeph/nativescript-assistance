"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var GoogleMapsService = (function () {
    //Google maps api => AIzaSyCAp-fEg_H-fBuI45No1MsBcp8KCvYr_BY
    function GoogleMapsService(http) {
        this.http = http;
        this.apiKey = "key=AIzaSyCAp-fEg_H-fBuI45No1MsBcp8KCvYr_BY";
        this.urlResource = "https://maps.googleapis.com/maps/api/geocode/json";
    }
    GoogleMapsService.prototype.getReverseGeocoding = function (latitude, longitude, altitude) {
        return this.http.get(this.urlResource + "?latlng=" + latitude + "," + longitude + "&" + this.apiKey).map(function (res) { return res.json(); });
    };
    GoogleMapsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], GoogleMapsService);
    return GoogleMapsService;
}());
exports.GoogleMapsService = GoogleMapsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdvb2dsZS1tYXBzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsc0NBQW1DO0FBR25DO0lBSUksNERBQTREO0lBRTVELDJCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLDZDQUE2QyxDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsbURBQW1ELENBQUM7SUFDM0UsQ0FBQztJQUVELCtDQUFtQixHQUFuQixVQUFvQixRQUFnQixFQUFFLFNBQWlCLEVBQUUsUUFBZ0I7UUFDckUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxXQUFXLGdCQUFXLFFBQVEsU0FBSSxTQUFTLFNBQUksSUFBSSxDQUFDLE1BQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUN0SCxDQUFDO0lBYlEsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBT2lCLFdBQUk7T0FOckIsaUJBQWlCLENBZTdCO0lBQUQsd0JBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwc1NlcnZpY2Uge1xuICAgIGFwaUtleTogc3RyaW5nO1xuICAgIHVybFJlc291cmNlOiBzdHJpbmc7XG5cbiAgICAvL0dvb2dsZSBtYXBzIGFwaSA9PiBBSXphU3lDQXAtZkVnX0gtZkJ1STQ1Tm8xTXNCY3A4S0N2WXJfQllcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuICAgICAgICB0aGlzLmFwaUtleSA9IFwia2V5PUFJemFTeUNBcC1mRWdfSC1mQnVJNDVObzFNc0JjcDhLQ3ZZcl9CWVwiO1xuICAgICAgICB0aGlzLnVybFJlc291cmNlID0gXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uXCI7XG4gICAgfVxuXG4gICAgZ2V0UmV2ZXJzZUdlb2NvZGluZyhsYXRpdHVkZTogbnVtYmVyLCBsb25naXR1ZGU6IG51bWJlciwgYWx0aXR1ZGU6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVybFJlc291cmNlfT9sYXRsbmc9JHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9JiR7dGhpcy5hcGlLZXl9YCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbn1cbiJdfQ==