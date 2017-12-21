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
