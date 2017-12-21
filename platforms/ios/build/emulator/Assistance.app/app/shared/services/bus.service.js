"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/map");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6Qyx3Q0FBcUM7QUFHckMsb0NBQWtDO0FBQ2xDLGlDQUErQjtBQUsvQjtJQUlJO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQVcsQ0FBQTtJQUN6QyxDQUFDO0lBRUQsOEJBQVMsR0FBVCxVQUFVLElBQVksRUFBRSxPQUFZO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxNQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw4QkFBUyxHQUFULFVBQVUsSUFBWSxFQUFFLFFBQXlCO1FBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTzthQUNkLE1BQU0sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFyQixDQUFxQixDQUFDO2FBQ3hDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQWYsQ0FBZSxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBakJRLFVBQVU7UUFEdEIsaUJBQVUsRUFBRTs7T0FDQSxVQUFVLENBbUJ0QjtJQUFELGlCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuLi9pbnRlcmZhY2VzL21lc3NhZ2UuaW50ZXJmYWNlXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbnR5cGUgTWVzc2FnZUNhbGxiYWNrID0gKHBheWxvYWQ6IGFueSkgPT4gdm9pZDtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJ1c1NlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBoYW5kbGVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IG5ldyBTdWJqZWN0PE1lc3NhZ2U+KClcbiAgICB9XG5cbiAgICBicm9hZGNhc3QodHlwZTogc3RyaW5nLCBwYXlsb2FkOiBhbnkpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVyLm5leHQoe3R5cGUsIHBheWxvYWR9KTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUodHlwZTogc3RyaW5nLCBjYWxsYmFjazogTWVzc2FnZUNhbGxiYWNrKTogU3Vic2NyaXB0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlclxuICAgICAgICAgICAgLmZpbHRlcihtZXNzYWdlID0+IG1lc3NhZ2UudHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIC5tYXAobWVzc2FnZSA9PiBtZXNzYWdlLnBheWxvYWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGNhbGxiYWNrKTtcbiAgICB9XG5cbn1cbiJdfQ==