"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bus_service_1 = require("./shared/services/bus.service");
var application_settings_1 = require("application-settings");
var AppComponent = (function () {
    function AppComponent(busService) {
        this.busService = busService;
        this.firebaseInit();
    }
    AppComponent.prototype.setFirebaseToken = function (token) {
        this.busService.broadcast("firebase-token", token);
    };
    AppComponent.prototype.firebaseInit = function () {
        var that = this;
        setTimeout(function () {
            var firebase = require("nativescript-plugin-firebase");
            firebase.init({
                onPushTokenReceivedCallback: function (token) {
                    console.log("FIREBASE => Token => " + token);
                    application_settings_1.setString("user-token", token);
                },
                onMessageReceivedCallback: function (message) {
                    console.log("FIREBASE => Message => ", JSON.stringify(message));
                },
                persist: false,
                onAuthStateChanged: function (data) {
                    console.log("FIREBASE => State => ", JSON.stringify(data));
                    /*if (data.loggedIn) { BackendService.token = data.user.uid;
                    } else {BackendService.token = "";}*/
                }
            }).then(function (instance) {
                console.log("FIREBASE => init done");
                that.getToken();
            }, function (error) {
                console.log("FIREBASE => init error => " + error);
            });
        }, 3000);
    };
    AppComponent.prototype.getToken = function () {
        var firebase = require("nativescript-plugin-firebase");
        firebase.getCurrentPushToken().then(function (token) {
            console.log("FIREBASE => Current push token: " + token);
            application_settings_1.setString("user-token", token);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [bus_service_1.BusService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
