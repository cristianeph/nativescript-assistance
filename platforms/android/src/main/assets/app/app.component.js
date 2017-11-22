"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PushNotifications = require("nativescript-push-notifications");
var app = require("application");
var AppComponent = (function () {
    function AppComponent() {
        var settings = {
            senderID: "754439197862",
            badge: true,
            sound: true,
            alert: true,
            interactiveSettings: {
                actions: [{
                        identifier: 'READ_IDENTIFIER',
                        title: 'Read',
                        activationMode: "foreground",
                        destructive: false,
                        authenticationRequired: true
                    }, {
                        identifier: 'CANCEL_IDENTIFIER',
                        title: 'Cancel',
                        activationMode: "foreground",
                        destructive: true,
                        authenticationRequired: true
                    }],
                categories: [{
                        identifier: 'READ_CATEGORY',
                        actionsForDefaultContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER'],
                        actionsForMinimalContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER']
                    }]
            },
            notificationCallbackIOS: function (data) {
                console.log("DATA: " + JSON.stringify(data));
            },
            notificationCallbackAndroid: function (message, data, notification) {
                console.log("MESSAGE: " + JSON.stringify(message));
                console.log("DATA: " + JSON.stringify(data));
                console.log("NOTIFICATION: " + JSON.stringify(notification));
            }
        };
        PushNotifications.register(settings, function (data) {
            console.log("REGISTRATION ID: " + JSON.stringify(data));
            PushNotifications.onMessageReceived(settings.notificationCallbackAndroid);
        }, function (error) {
            console.log(error);
        });
        app.on(app.resumeEvent, function (args) {
            if (args.android) {
                var intent = (args.android).getIntent();
                var extras = intent.getExtras();
                console.log('TEST =>', JSON.stringify(extras));
                console.log('TEST =>', extras.get("test"));
                console.log('TEST =>', extras.get("testdata"));
            }
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
