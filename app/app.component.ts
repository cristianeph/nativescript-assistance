import {Component} from "@angular/core";
import * as PushNotifications from "nativescript-push-notifications";
import * as app from 'application';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    constructor() {
        let settings = {
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
            notificationCallbackIOS: data => {
                console.log("DATA: " + JSON.stringify(data));
            },
            notificationCallbackAndroid: (message, data, notification) => {
                /*console.log("MESSAGE: " + JSON.stringify(message));*/
                console.log("DATA: " + JSON.stringify(data));
                console.log("NOTIFICATION: " + JSON.stringify(notification));
            }
        };
        PushNotifications.register(settings, data => {
            console.log("REGISTRATION ID: " + JSON.stringify(data));
            PushNotifications.onMessageReceived(settings.notificationCallbackAndroid);
        }, error => {
            console.log("ERROR")
            console.log(error);
        });
        app.on(app.resumeEvent, args => {
            console.log("Saltando desde background");
            if(args.android) {
                let intent = (args.android).getIntent();
                let extras = intent.getExtras();
                /*console.log('TEST =>', JSON.stringify(extras));*/
                console.log('TEST =>', extras.get("test"));
                console.log('TEST =>', extras.get("testdata"));
            }
        });
    }

}
