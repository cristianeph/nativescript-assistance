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
            application_settings_1.setString("user-data", null);
            application_settings_1.setString("user-token", null);
            application_settings_1.setString("user-assistance", null);
        }
    };
    ApplicationSettingsService.prototype.isLogged = function () {
        return (this.getLogged() === true && this.getUser() !== null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tc2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcGxpY2F0aW9uLXNldHRpbmdzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsNkRBUThCO0FBSzlCO0lBRUk7SUFDQSxDQUFDO0lBRUQsaURBQVksR0FBWjtRQUNJLEVBQUUsQ0FBQyxDQUFDLDZCQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLGlDQUFVLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9CLGdDQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdCLGdDQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzlCLGdDQUFTLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQztJQUNMLENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELDhDQUFTLEdBQVQ7UUFDSSxNQUFNLENBQUMsaUNBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsOENBQVMsR0FBVCxVQUFVLE1BQWU7UUFDckIsaUNBQVUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELDZDQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsNkNBQVEsR0FBUixVQUFTLEtBQWE7UUFDbEIsZ0NBQVMsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDRDQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELDRDQUFPLEdBQVAsVUFBUSxJQUFVO1FBQ2QsZ0NBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxrREFBYSxHQUFiO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELGtEQUFhLEdBQWIsVUFBYyxVQUFzQjtRQUNoQyxnQ0FBUyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBaERRLDBCQUEwQjtRQUR0QyxpQkFBVSxFQUFFOztPQUNBLDBCQUEwQixDQWtEdEM7SUFBRCxpQ0FBQztDQUFBLEFBbERELElBa0RDO0FBbERZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIGdldEJvb2xlYW4sXG4gICAgc2V0Qm9vbGVhbixcbiAgICBnZXRTdHJpbmcsXG4gICAgc2V0U3RyaW5nLFxuICAgIGhhc0tleSxcbiAgICByZW1vdmUsXG4gICAgY2xlYXJcbn0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9jbGFzc2VzL3VzZXIuY2xhc3NcIjtcbmltcG9ydCB7QXNzaXN0YW5jZX0gZnJvbSBcIi4uL2NsYXNzZXMvYXNzaXN0YW5jZS5jbGFzc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgaW5pdFNldHRpbmdzKCkge1xuICAgICAgICBpZiAoaGFzS2V5KFwidXNlci1sb2dpblwiKSkge1xuICAgICAgICAgICAgc2V0Qm9vbGVhbihcInVzZXItbG9naW5cIiwgbnVsbCk7XG4gICAgICAgICAgICBzZXRTdHJpbmcoXCJ1c2VyLWRhdGFcIiwgbnVsbCk7XG4gICAgICAgICAgICBzZXRTdHJpbmcoXCJ1c2VyLXRva2VuXCIsIG51bGwpO1xuICAgICAgICAgICAgc2V0U3RyaW5nKFwidXNlci1hc3Npc3RhbmNlXCIsIG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNMb2dnZWQoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5nZXRMb2dnZWQoKSA9PT0gdHJ1ZSAmJiB0aGlzLmdldFVzZXIoKSAhPT0gbnVsbCk7XG4gICAgfVxuXG4gICAgZ2V0TG9nZ2VkKCkge1xuICAgICAgICByZXR1cm4gZ2V0Qm9vbGVhbihcInVzZXItbG9naW5cIik7XG4gICAgfVxuXG4gICAgc2V0TG9nZ2VkKGxvZ2dlZDogYm9vbGVhbikge1xuICAgICAgICBzZXRCb29sZWFuKFwidXNlci1sb2dpblwiLCBsb2dnZWQpO1xuICAgIH1cblxuICAgIGdldFRva2VuKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmcoXCJ1c2VyLXRva2VuXCIpO1xuICAgIH1cblxuICAgIHNldFRva2VuKHRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgc2V0U3RyaW5nKFwidXNlci10b2tlblwiLCB0b2tlbik7XG4gICAgfVxuXG4gICAgZ2V0VXNlcigpOiBVc2VyIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZ2V0U3RyaW5nKFwidXNlci1kYXRhXCIpKTtcbiAgICB9XG5cbiAgICBzZXRVc2VyKHVzZXI6IFVzZXIpIHtcbiAgICAgICAgc2V0U3RyaW5nKFwidXNlci1kYXRhXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICB9XG5cbiAgICBnZXRBc3Npc3RhbmNlKCk6IEFzc2lzdGFuY2Uge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJ1c2VyLWFzc2lzdGFuY2VcIikpO1xuICAgIH1cblxuICAgIHNldEFzc2lzdGFuY2UoYXNzaXN0YW5jZTogQXNzaXN0YW5jZSkge1xuICAgICAgICBzZXRTdHJpbmcoXCJ1c2VyLWFzc2lzdGFuY2VcIiwgSlNPTi5zdHJpbmdpZnkoYXNzaXN0YW5jZSkpO1xuICAgIH1cblxufVxuIl19