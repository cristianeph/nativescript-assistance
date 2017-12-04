"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_settings_1 = require("application-settings");
var ApplicationSettingsService = (function () {
    function ApplicationSettingsService() {
    }
    ApplicationSettingsService.prototype.initSettings = function () {
        if (application_settings_1.hasKey("user-login")) {
            application_settings_1.setBoolean("user-login", null);
        }
        if (application_settings_1.hasKey("user-data")) {
            application_settings_1.setString("user-data", null);
        }
        if (application_settings_1.hasKey("user-token")) {
            application_settings_1.setString("user-token", null);
        }
        if (application_settings_1.hasKey("user-assistance")) {
            application_settings_1.setString("user-assistance", null);
        }
        if (application_settings_1.hasKey("user-notification")) {
            application_settings_1.setString("user-notification", null);
        }
    };
    ApplicationSettingsService.prototype.destroyLogin = function () {
        this.setUser(null);
        this.setLogged(false);
        this.setAssistance(null);
        this.setPushNotification(null);
    };
    ApplicationSettingsService.prototype.isLogged = function () {
        return (this.getLogged() === true && this.getUser() !== null);
    };
    ApplicationSettingsService.prototype.getPushNotification = function () {
        return JSON.parse(application_settings_1.getString("user-notification"));
    };
    ApplicationSettingsService.prototype.setPushNotification = function (notification) {
        application_settings_1.setString("user-notification", JSON.stringify(notification));
    };
    ApplicationSettingsService.prototype.getLogged = function () {
        return application_settings_1.getBoolean("user-login");
    };
    ApplicationSettingsService.prototype.setLogged = function (logged) {
        application_settings_1.setBoolean("user-login", logged);
    };
    ApplicationSettingsService.prototype.getToken = function () {
        return application_settings_1.getString("user-token");
    };
    ApplicationSettingsService.prototype.setToken = function (token) {
        application_settings_1.setString("user-token", token);
    };
    ApplicationSettingsService.prototype.getUser = function () {
        return JSON.parse(application_settings_1.getString("user-data"));
    };
    ApplicationSettingsService.prototype.setUser = function (user) {
        application_settings_1.setString("user-data", JSON.stringify(user));
    };
    ApplicationSettingsService.prototype.getAssistance = function () {
        return JSON.parse(application_settings_1.getString("user-assistance"));
    };
    ApplicationSettingsService.prototype.setAssistance = function (assistance) {
        application_settings_1.setString("user-assistance", JSON.stringify(assistance));
    };
    ApplicationSettingsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ApplicationSettingsService);
    return ApplicationSettingsService;
}());
exports.ApplicationSettingsService = ApplicationSettingsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tc2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcGxpY2F0aW9uLXNldHRpbmdzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsNkRBUThCO0FBSzlCO0lBRUk7SUFDQSxDQUFDO0lBRUQsaURBQVksR0FBWjtRQUNJLEVBQUUsQ0FBQyxDQUFDLDZCQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLGlDQUFVLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyw2QkFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixnQ0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsNkJBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsZ0NBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLDZCQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsZ0NBQVMsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsNkJBQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixnQ0FBUyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLENBQUM7SUFDTCxDQUFDO0lBRUQsaURBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsNkNBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCx3REFBbUIsR0FBbkI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsd0RBQW1CLEdBQW5CLFVBQW9CLFlBQWlCO1FBQ2pDLGdDQUFTLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO0lBQ2hFLENBQUM7SUFFRCw4Q0FBUyxHQUFUO1FBQ0ksTUFBTSxDQUFDLGlDQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDhDQUFTLEdBQVQsVUFBVSxNQUFlO1FBQ3JCLGlDQUFVLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLGdDQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDZDQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ2xCLGdDQUFTLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCw0Q0FBTyxHQUFQO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCw0Q0FBTyxHQUFQLFVBQVEsSUFBVTtRQUNkLGdDQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsa0RBQWEsR0FBYjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxrREFBYSxHQUFiLFVBQWMsVUFBc0I7UUFDaEMsZ0NBQVMsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQXhFUSwwQkFBMEI7UUFEdEMsaUJBQVUsRUFBRTs7T0FDQSwwQkFBMEIsQ0EwRXRDO0lBQUQsaUNBQUM7Q0FBQSxBQTFFRCxJQTBFQztBQTFFWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBnZXRCb29sZWFuLFxuICAgIHNldEJvb2xlYW4sXG4gICAgZ2V0U3RyaW5nLFxuICAgIHNldFN0cmluZyxcbiAgICBoYXNLZXksXG4gICAgcmVtb3ZlLFxuICAgIGNsZWFyXG59IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vY2xhc3Nlcy91c2VyLmNsYXNzXCI7XG5pbXBvcnQge0Fzc2lzdGFuY2V9IGZyb20gXCIuLi9jbGFzc2VzL2Fzc2lzdGFuY2UuY2xhc3NcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uU2V0dGluZ3NTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIGluaXRTZXR0aW5ncygpIHtcbiAgICAgICAgaWYgKGhhc0tleShcInVzZXItbG9naW5cIikpIHtcbiAgICAgICAgICAgIHNldEJvb2xlYW4oXCJ1c2VyLWxvZ2luXCIsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNLZXkoXCJ1c2VyLWRhdGFcIikpIHtcbiAgICAgICAgICAgIHNldFN0cmluZyhcInVzZXItZGF0YVwiLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzS2V5KFwidXNlci10b2tlblwiKSkge1xuICAgICAgICAgICAgc2V0U3RyaW5nKFwidXNlci10b2tlblwiLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzS2V5KFwidXNlci1hc3Npc3RhbmNlXCIpKSB7XG4gICAgICAgICAgICBzZXRTdHJpbmcoXCJ1c2VyLWFzc2lzdGFuY2VcIiwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc0tleShcInVzZXItbm90aWZpY2F0aW9uXCIpKSB7XG4gICAgICAgICAgICBzZXRTdHJpbmcoXCJ1c2VyLW5vdGlmaWNhdGlvblwiLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3lMb2dpbigpIHtcbiAgICAgICAgdGhpcy5zZXRVc2VyKG51bGwpO1xuICAgICAgICB0aGlzLnNldExvZ2dlZChmYWxzZSk7XG4gICAgICAgIHRoaXMuc2V0QXNzaXN0YW5jZShudWxsKTtcbiAgICAgICAgdGhpcy5zZXRQdXNoTm90aWZpY2F0aW9uKG51bGwpO1xuICAgIH1cblxuICAgIGlzTG9nZ2VkKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0TG9nZ2VkKCkgPT09IHRydWUgJiYgdGhpcy5nZXRVc2VyKCkgIT09IG51bGwpO1xuICAgIH1cblxuICAgIGdldFB1c2hOb3RpZmljYXRpb24oKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGdldFN0cmluZyhcInVzZXItbm90aWZpY2F0aW9uXCIpKTtcbiAgICB9XG5cbiAgICBzZXRQdXNoTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogYW55KSB7XG4gICAgICAgIHNldFN0cmluZyhcInVzZXItbm90aWZpY2F0aW9uXCIsIEpTT04uc3RyaW5naWZ5KG5vdGlmaWNhdGlvbikpXG4gICAgfVxuXG4gICAgZ2V0TG9nZ2VkKCkge1xuICAgICAgICByZXR1cm4gZ2V0Qm9vbGVhbihcInVzZXItbG9naW5cIik7XG4gICAgfVxuXG4gICAgc2V0TG9nZ2VkKGxvZ2dlZDogYm9vbGVhbikge1xuICAgICAgICBzZXRCb29sZWFuKFwidXNlci1sb2dpblwiLCBsb2dnZWQpO1xuICAgIH1cblxuICAgIGdldFRva2VuKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJ1c2VyLXRva2VuXCIpO1xuICAgIH1cblxuICAgIHNldFRva2VuKHRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgc2V0U3RyaW5nKFwidXNlci10b2tlblwiLCB0b2tlbik7XG4gICAgfVxuXG4gICAgZ2V0VXNlcigpOiBVc2VyIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZ2V0U3RyaW5nKFwidXNlci1kYXRhXCIpKTtcbiAgICB9XG5cbiAgICBzZXRVc2VyKHVzZXI6IFVzZXIpIHtcbiAgICAgICAgc2V0U3RyaW5nKFwidXNlci1kYXRhXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICB9XG5cbiAgICBnZXRBc3Npc3RhbmNlKCk6IEFzc2lzdGFuY2Uge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJ1c2VyLWFzc2lzdGFuY2VcIikpO1xuICAgIH1cblxuICAgIHNldEFzc2lzdGFuY2UoYXNzaXN0YW5jZTogQXNzaXN0YW5jZSkge1xuICAgICAgICBzZXRTdHJpbmcoXCJ1c2VyLWFzc2lzdGFuY2VcIiwgSlNPTi5zdHJpbmdpZnkoYXNzaXN0YW5jZSkpO1xuICAgIH1cblxufVxuIl19