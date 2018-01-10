"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_settings_1 = require("application-settings");
var file_system_1 = require("file-system");
var app_settings_class_1 = require("../classes/app-settings.class");
var ApplicationSettingsService = (function () {
    function ApplicationSettingsService() {
        this.folderName = "userdata";
        this.fileName = "userdata";
        this.fileExtension = ".txt";
    }
    ApplicationSettingsService.prototype.initSettings = function () {
        var tempSettings = new app_settings_class_1.ApplicationSettings();
        tempSettings.assistance = null;
        tempSettings.logged = false;
        tempSettings.token = "";
        tempSettings.pushNotification = null;
        tempSettings.user = null;
        /*
        this.createWrite(JSON.stringify(settings));*/
        if (application_settings_1.hasKey("user-settings")) {
            console.log("Settings => Status => Was created");
            this.settings = JSON.parse(application_settings_1.getString("user-settings"));
        }
        else {
            console.log("Settings => Status => Was NOT created");
            application_settings_1.setString("user-settings", JSON.stringify(tempSettings));
            this.settings = JSON.parse(application_settings_1.getString("user-settings"));
        }
    };
    ApplicationSettingsService.prototype.destroyLogin = function () {
        this.initSettings();
    };
    ApplicationSettingsService.prototype.isLogged = function () {
        return (this.settings.logged === true && this.settings.user !== null);
    };
    ApplicationSettingsService.prototype.getPushNotification = function () {
        return this.settings.pushNotification;
    };
    ApplicationSettingsService.prototype.setPushNotification = function (notification) {
        this.settings.pushNotification = notification;
        //this.createWrite(JSON.stringify(this.settings));
    };
    ApplicationSettingsService.prototype.getLogged = function () {
        return this.settings.logged;
    };
    ApplicationSettingsService.prototype.setLogged = function (logged) {
        this.settings.logged = logged;
        //this.createWrite(JSON.stringify(this.settings))
    };
    ApplicationSettingsService.prototype.getToken = function () {
        return this.settings.token;
    };
    ApplicationSettingsService.prototype.setToken = function (token) {
        this.settings.token = token;
        //this.createWrite(JSON.stringify(this.settings));
    };
    ApplicationSettingsService.prototype.getUser = function () {
        return this.settings.user;
    };
    ApplicationSettingsService.prototype.setUser = function (user) {
        this.settings.user = user;
        //this.createWrite(JSON.stringify(this.settings));
    };
    ApplicationSettingsService.prototype.getAssistance = function () {
        return this.settings.assistance;
    };
    ApplicationSettingsService.prototype.setAssistance = function (assistance) {
        this.settings.assistance = assistance;
        //this.createWrite(JSON.stringify(this.settings));
    };
    //METHODS FOR FILE MANAGEMENT
    ApplicationSettingsService.prototype.set = function (settings) {
        if (this.check() === true) {
            console.log("File => State => It was created");
            this.createWrite(JSON.stringify(settings));
        }
        else {
            console.log("File => State => It was NOT created");
            this.createWrite(JSON.stringify(settings));
        }
    };
    ApplicationSettingsService.prototype.createWrite = function (content) {
        var _this = this;
        var documents = file_system_1.knownFolders.documents();
        this.folder = documents.getFolder(this.folderName);
        this.file = this.folder.getFile(this.fileName + ".txt");
        this.file.writeText(content)
            .then(function (result) {
            _this.read().then(function (content) {
                console.log("File => Created => ", content);
            });
        })
            .catch(function (error) {
            console.log("File => Created => Error => ", JSON.stringify(error));
        });
    };
    ApplicationSettingsService.prototype.read = function () {
        return this.file.readText();
    };
    ApplicationSettingsService.prototype.check = function () {
        var documents = file_system_1.knownFolders.documents();
        var file = file_system_1.path.join(documents.path, (this.fileName + this.fileExtension));
        var fileState = file_system_1.File.exists(file);
        return fileState;
    };
    ApplicationSettingsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ApplicationSettingsService);
    return ApplicationSettingsService;
}());
exports.ApplicationSettingsService = ApplicationSettingsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tc2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcGxpY2F0aW9uLXNldHRpbmdzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsNkRBTThCO0FBRzlCLDJDQUE2RDtBQUM3RCxvRUFBa0U7QUFHbEU7SUFTSTtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpREFBWSxHQUFaO1FBQ0ksSUFBSSxZQUFZLEdBQUcsSUFBSSx3Q0FBbUIsRUFBRSxDQUFDO1FBQzdDLFlBQVksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQy9CLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzVCLFlBQVksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLFlBQVksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDckMsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDekI7cURBQzZDO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLDZCQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztZQUNyRCxnQ0FBUyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7WUFDeEQsSUFB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LElBQUksQ0FBQyxVQUFBLE1BQU07WUFDUixLQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztnQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQ0osQ0FBQztJQUNWLENBQUM7SUFFRCx5Q0FBSSxHQUFKO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELDBDQUFLLEdBQUw7UUFDSSxJQUFJLFNBQVMsR0FBRywwQkFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pDLElBQUksSUFBSSxHQUFHLGtCQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksU0FBUyxHQUFHLGtCQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxTQUFTLENBQUE7SUFDcEIsQ0FBQztJQTVIUSwwQkFBMEI7UUFEdEMsaUJBQVUsRUFBRTs7T0FDQSwwQkFBMEIsQ0E4SHRDO0lBQUQsaUNBQUM7Q0FBQSxBQTlIRCxJQThIQztBQTlIWSxnRUFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBnZXRCb29sZWFuLFxuICAgIHNldEJvb2xlYW4sXG4gICAgZ2V0U3RyaW5nLFxuICAgIHNldFN0cmluZyxcbiAgICBoYXNLZXlcbn0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9jbGFzc2VzL3VzZXIuY2xhc3NcIjtcbmltcG9ydCB7QXNzaXN0YW5jZX0gZnJvbSBcIi4uL2NsYXNzZXMvYXNzaXN0YW5jZS5jbGFzc1wiO1xuaW1wb3J0IHtrbm93bkZvbGRlcnMsIEZpbGUsIEZvbGRlciwgcGF0aH0gZnJvbSBcImZpbGUtc3lzdGVtXCI7XG5pbXBvcnQge0FwcGxpY2F0aW9uU2V0dGluZ3N9IGZyb20gXCIuLi9jbGFzc2VzL2FwcC1zZXR0aW5ncy5jbGFzc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25TZXR0aW5nc1NlcnZpY2Uge1xuICAgIGZvbGRlcjogRm9sZGVyO1xuICAgIGZvbGRlck5hbWU6IHN0cmluZztcbiAgICBmaWxlOiBGaWxlO1xuICAgIGZpbGVOYW1lOiBzdHJpbmc7XG4gICAgZmlsZUV4dGVuc2lvbjogc3RyaW5nO1xuICAgIC8vQUNUVUFMIE9CSkVDVFxuICAgIHNldHRpbmdzOiBBcHBsaWNhdGlvblNldHRpbmdzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZm9sZGVyTmFtZSA9IFwidXNlcmRhdGFcIjtcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9IFwidXNlcmRhdGFcIjtcbiAgICAgICAgdGhpcy5maWxlRXh0ZW5zaW9uID0gXCIudHh0XCI7XG4gICAgfVxuXG4gICAgaW5pdFNldHRpbmdzKCkge1xuICAgICAgICBsZXQgdGVtcFNldHRpbmdzID0gbmV3IEFwcGxpY2F0aW9uU2V0dGluZ3MoKTtcbiAgICAgICAgdGVtcFNldHRpbmdzLmFzc2lzdGFuY2UgPSBudWxsO1xuICAgICAgICB0ZW1wU2V0dGluZ3MubG9nZ2VkID0gZmFsc2U7XG4gICAgICAgIHRlbXBTZXR0aW5ncy50b2tlbiA9IFwiXCI7XG4gICAgICAgIHRlbXBTZXR0aW5ncy5wdXNoTm90aWZpY2F0aW9uID0gbnVsbDtcbiAgICAgICAgdGVtcFNldHRpbmdzLnVzZXIgPSBudWxsO1xuICAgICAgICAvKlxuICAgICAgICB0aGlzLmNyZWF0ZVdyaXRlKEpTT04uc3RyaW5naWZ5KHNldHRpbmdzKSk7Ki9cbiAgICAgICAgaWYgKGhhc0tleShcInVzZXItc2V0dGluZ3NcIikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2V0dGluZ3MgPT4gU3RhdHVzID0+IFdhcyBjcmVhdGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IEpTT04ucGFyc2UoZ2V0U3RyaW5nKFwidXNlci1zZXR0aW5nc1wiKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNldHRpbmdzID0+IFN0YXR1cyA9PiBXYXMgTk9UIGNyZWF0ZWRcIik7XG4gICAgICAgICAgICBzZXRTdHJpbmcoXCJ1c2VyLXNldHRpbmdzXCIsIEpTT04uc3RyaW5naWZ5KHRlbXBTZXR0aW5ncykpXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gSlNPTi5wYXJzZShnZXRTdHJpbmcoXCJ1c2VyLXNldHRpbmdzXCIpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3lMb2dpbigpIHtcbiAgICAgICAgdGhpcy5pbml0U2V0dGluZ3MoKTtcbiAgICB9XG5cbiAgICBpc0xvZ2dlZCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnNldHRpbmdzLmxvZ2dlZCA9PT0gdHJ1ZSAmJiB0aGlzLnNldHRpbmdzLnVzZXIgIT09IG51bGwpO1xuICAgIH1cblxuICAgIGdldFB1c2hOb3RpZmljYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnB1c2hOb3RpZmljYXRpb247XG4gICAgfVxuXG4gICAgc2V0UHVzaE5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IGFueSkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLnB1c2hOb3RpZmljYXRpb24gPSBub3RpZmljYXRpb247XG4gICAgICAgIC8vdGhpcy5jcmVhdGVXcml0ZShKU09OLnN0cmluZ2lmeSh0aGlzLnNldHRpbmdzKSk7XG4gICAgfVxuXG4gICAgZ2V0TG9nZ2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5sb2dnZWQ7XG4gICAgfVxuXG4gICAgc2V0TG9nZ2VkKGxvZ2dlZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmxvZ2dlZCA9IGxvZ2dlZDtcbiAgICAgICAgLy90aGlzLmNyZWF0ZVdyaXRlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2V0dGluZ3MpKVxuICAgIH1cblxuICAgIGdldFRva2VuKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnRva2VuO1xuICAgIH1cblxuICAgIHNldFRva2VuKHRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50b2tlbiA9IHRva2VuO1xuICAgICAgICAvL3RoaXMuY3JlYXRlV3JpdGUoSlNPTi5zdHJpbmdpZnkodGhpcy5zZXR0aW5ncykpO1xuICAgIH1cblxuICAgIGdldFVzZXIoKTogVXNlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnVzZXI7XG4gICAgfVxuXG4gICAgc2V0VXNlcih1c2VyOiBVc2VyKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudXNlciA9IHVzZXI7XG4gICAgICAgIC8vdGhpcy5jcmVhdGVXcml0ZShKU09OLnN0cmluZ2lmeSh0aGlzLnNldHRpbmdzKSk7XG4gICAgfVxuXG4gICAgZ2V0QXNzaXN0YW5jZSgpOiBBc3Npc3RhbmNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuYXNzaXN0YW5jZTtcbiAgICB9XG5cbiAgICBzZXRBc3Npc3RhbmNlKGFzc2lzdGFuY2U6IEFzc2lzdGFuY2UpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hc3Npc3RhbmNlID0gYXNzaXN0YW5jZTtcbiAgICAgICAgLy90aGlzLmNyZWF0ZVdyaXRlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2V0dGluZ3MpKTtcbiAgICB9XG5cbiAgICAvL01FVEhPRFMgRk9SIEZJTEUgTUFOQUdFTUVOVFxuXG4gICAgc2V0KHNldHRpbmdzOiBBcHBsaWNhdGlvblNldHRpbmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSA9PiBTdGF0ZSA9PiBJdCB3YXMgY3JlYXRlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlV3JpdGUoSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSA9PiBTdGF0ZSA9PiBJdCB3YXMgTk9UIGNyZWF0ZWRcIik7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVdyaXRlKEpTT04uc3RyaW5naWZ5KHNldHRpbmdzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVXcml0ZShjb250ZW50OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGRvY3VtZW50cyA9IGtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICAgICAgdGhpcy5mb2xkZXIgPSBkb2N1bWVudHMuZ2V0Rm9sZGVyKHRoaXMuZm9sZGVyTmFtZSk7XG4gICAgICAgIHRoaXMuZmlsZSA9IHRoaXMuZm9sZGVyLmdldEZpbGUodGhpcy5maWxlTmFtZSArIFwiLnR4dFwiKTtcbiAgICAgICAgdGhpcy5maWxlLndyaXRlVGV4dChjb250ZW50KVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWQoKS50aGVuKGNvbnRlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgPT4gQ3JlYXRlZCA9PiBcIiwgY29udGVudCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlID0+IENyZWF0ZWQgPT4gRXJyb3IgPT4gXCIsIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZWFkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWxlLnJlYWRUZXh0KCk7XG4gICAgfVxuXG4gICAgY2hlY2soKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBkb2N1bWVudHMgPSBrbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgICAgIGxldCBmaWxlID0gcGF0aC5qb2luKGRvY3VtZW50cy5wYXRoLCAodGhpcy5maWxlTmFtZSArIHRoaXMuZmlsZUV4dGVuc2lvbikpO1xuICAgICAgICBsZXQgZmlsZVN0YXRlID0gRmlsZS5leGlzdHMoZmlsZSk7XG4gICAgICAgIHJldHVybiBmaWxlU3RhdGVcbiAgICB9XG5cbn1cbiJdfQ==