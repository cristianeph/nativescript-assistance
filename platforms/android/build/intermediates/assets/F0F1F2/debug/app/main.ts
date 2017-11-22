// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
/*import * as app from 'application';

app.on(app.launchEvent, (args: app.ApplicationEventData) => {
    if (args.android) {
        const pushPlugin = require("nativescript-push-notifications");
        pushPlugin.register({ senderID: '754439197862' }, function (token){
            console.log('Device registered successfully => ', token);
        }, function() { });
        pushPlugin.onMessageReceived(function callback(data) {
            console.log('Message received => ', data);
        });
    }
})*/

platformNativeScriptDynamic().bootstrapModule(AppModule);
