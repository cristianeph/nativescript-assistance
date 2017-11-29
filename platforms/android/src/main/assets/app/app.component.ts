import {Component} from "@angular/core";
import {BusService} from "./shared/services/bus.service";
import {ApplicationSettingsService} from "./shared/services/application-settings.service";
import {LoginService} from "./shared/services/login.service";
import {Router} from "@angular/router";
import {FirebaseData} from "./shared/classes/firebase-data.class";
import {FirebaseNotification} from "./shared/classes/firebase-notification.class";
import {FirebasePost} from "./shared/classes/firebase-post.class";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html"

})
export class AppComponent {
    constructor(private router: Router,
                private busService: BusService,
                private loginService: LoginService,
                private appSettingsService: ApplicationSettingsService) {
        this.firebaseInit();
    }

    setFirebaseToken(token: string) {
        this.busService.broadcast("firebase-token", token);
    }

    firebaseInit() {
        let that = this;
        setTimeout(function() {
            let firebase = require("nativescript-plugin-firebase");
            firebase.init({
                onPushTokenReceivedCallback: function(token) {
                    console.log("FIREBASE => Token => " + token);
                    that.appSettingsService.setToken(token);
                },
                onMessageReceivedCallback: function(message) {
                    console.log("FIREBASE => Message => ", JSON.stringify(message));
                    /*that.validatePreviousLogin(message);*/
                    that.busService.broadcast("central-notification", message);
                },
                persist: false,
                onAuthStateChanged: (data: any) => {
                    console.log("FIREBASE => State => ", JSON.stringify(data))
                }
            }).then(
                function (instance) {
                    console.log("FIREBASE => init done");
                    that.getToken();
                },
                function (error) {
                    console.log("FIREBASE => init error => " + error);
                }
            );
        }, 3000);
    }

    getToken() {
        let firebase = require("nativescript-plugin-firebase");
        firebase.getCurrentPushToken().then((token: string) => {
            console.log("FIREBASE => Current push token: " + token);
            this.appSettingsService.setToken(token);
        });
    }
}
