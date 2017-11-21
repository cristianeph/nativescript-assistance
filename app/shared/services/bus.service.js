"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var BusService = (function () {
    function BusService() {
        this.handler = new Subject_1.Subject();
    }
    BusService.prototype.broadcast = function (type, payload) {
        this.handler.next({ type: type, payload: payload });
    };
    BusService.prototype.subscribe = function (type, callback) {
        return this.handler
            .filter(function (message) { return message.type === type; })
            .map(function (message) { return message.payload; })
            .subscribe(callback);
    };
    BusService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], BusService);
    return BusService;
}());
exports.BusService = BusService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6Qyx3Q0FBcUM7QUFPckM7SUFJSTtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFXLENBQUE7SUFDekMsQ0FBQztJQUVELDhCQUFTLEdBQVQsVUFBVSxJQUFZLEVBQUUsT0FBWTtRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksTUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsOEJBQVMsR0FBVCxVQUFVLElBQVksRUFBRSxRQUF5QjtRQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU87YUFDZCxNQUFNLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxLQUFLLElBQUksRUFBckIsQ0FBcUIsQ0FBQzthQUN4QyxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFmLENBQWUsQ0FBQzthQUMvQixTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQWpCUSxVQUFVO1FBRHRCLGlCQUFVLEVBQUU7O09BQ0EsVUFBVSxDQW1CdEI7SUFBRCxpQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anMvU3ViamVjdFwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9tZXNzYWdlLmludGVyZmFjZVwiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xuXG50eXBlIE1lc3NhZ2VDYWxsYmFjayA9IChwYXlsb2FkOiBhbnkpID0+IHZvaWQ7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCdXNTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgaGFuZGxlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBuZXcgU3ViamVjdDxNZXNzYWdlPigpXG4gICAgfVxuXG4gICAgYnJvYWRjYXN0KHR5cGU6IHN0cmluZywgcGF5bG9hZDogYW55KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlci5uZXh0KHt0eXBlLCBwYXlsb2FkfSk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlKHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IE1lc3NhZ2VDYWxsYmFjayk6IFN1YnNjcmlwdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZXJcbiAgICAgICAgICAgIC5maWx0ZXIobWVzc2FnZSA9PiBtZXNzYWdlLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICAubWFwKG1lc3NhZ2UgPT4gbWVzc2FnZS5wYXlsb2FkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShjYWxsYmFjayk7XG4gICAgfVxuXG59XG4iXX0=