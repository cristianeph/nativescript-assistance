import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html"

})
export class AppComponent {
    constructor() {
        setTimeout(function() {
            let firebase = require("nativescript-plugin-firebase");
            firebase.init({
                onPushTokenReceivedCallback: function(token) {
                    console.log("FIREBASE => Token => " + token);
                },
                onMessageReceivedCallback: function(message) {
                    console.log("FIREBASE => Message => ", JSON.stringify(message));
                    /*dialogs.alert({
                        title: "Push message: " + (message.title !== undefined ? message.title : ""),
                        message: JSON.stringify(message),
                        okButtonText: "W00t!"
                    });*/
                },
                persist: false,
                onAuthStateChanged: (data: any) => {
                    console.log(JSON.stringify(data))
                    /*if (data.loggedIn) {
                        BackendService.token = data.user.uid;
                    }
                    else {
                        BackendService.token = "";
                    }*/
                }
            }).then(
                function (instance) {
                    console.log("FIREBASE => init done");
                },
                function (error) {
                    console.log("FIREBASE => init error => " + error);
                }
            );
        }, 3000);
    }
}
