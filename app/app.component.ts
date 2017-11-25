import {Component} from "@angular/core";
import {BusService} from "./shared/services/bus.service";
import {
    getString,
    setString,
    hasKey,
    remove,
    clear
} from "application-settings";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html"

})
export class AppComponent {
    constructor(private busService: BusService) {
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
                    setString("user-token", token);
                },
                onMessageReceivedCallback: function(message) {
                    console.log("FIREBASE => Message => ", JSON.stringify(message));
                },
                persist: false,
                onAuthStateChanged: (data: any) => {
                    console.log("FIREBASE => State => ", JSON.stringify(data))
                    /*if (data.loggedIn) { BackendService.token = data.user.uid;
                    } else {BackendService.token = "";}*/
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
            setString("user-token", token);
        });
    }
}
