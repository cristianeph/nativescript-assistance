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
        this.checkSettings();
    }

    checkSettings() {
        this.appSettingsService.initSettings();
        this.firebaseInit();
        this.geolocationInit();
        /*console.log("Settings => File => Exist => ", this.appSettingsService.check());
        if (this.appSettingsService.check() === true) {
            this.firebaseInit();
        } else {
            this.appSettingsService.initSettings();
        }*/
    }

    geolocationInit() {
        let geolocation = require("nativescript-geolocation");
        geolocation.enableLocationRequest();
    }

    firebaseInit() {
        let that = this;
        setTimeout(function() {
            let firebase = require("nativescript-plugin-firebase");
            firebase.init({
                iOSEmulatorFlush: true,
                onPushTokenReceivedCallback: function(token) {
                    console.log("FIREBASE => Token => " + token);
                    that.appSettingsService.setToken(token);
                },
                onMessageReceivedCallback: function(message) {
                    console.log("FIREBASE => Message => ", JSON.stringify(message));
                    that.appSettingsService.setPushNotification(message);
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

    /*checkNotification() {
        this.busService.subscribe("central-notification", (message) => {
            console.log("Notification recieved => message => ", JSON.stringify(message));
            //this.validatePreviousLogin(message);
            this.appSettingsService.setPushNotification(message);
        });
    }*/

    /*validatePreviousLogin(message: FirebasePost) {
        if (this.appSettingsService.isLogged()) {
            let user = this.appSettingsService.getUser();
            let assistance = this.appSettingsService.getAssistance();
            this.loginService.setUser(user);
            if (assistance != null) {
                if (message.data.state === "ATENDIENDO") {
                    console.log("Redirecting to tracking with id => ", message.data.assistance);
                    //this.router.navigate(["/client/tracking", message.data.assistance]);
                } else {
                    console.log("Nothing happens just simple notification");
                    //this.router.navigate(["/client/report"]);
                }
            }
        }
    }*/
}
