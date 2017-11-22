"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
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
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwR0FBMEc7QUFDMUcsMERBQTRFO0FBRTVFLDJDQUF5QztBQUN6Qzs7Ozs7Ozs7Ozs7O0lBWUk7QUFFSixzQ0FBMkIsRUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xuLyppbXBvcnQgKiBhcyBhcHAgZnJvbSAnYXBwbGljYXRpb24nO1xuXG5hcHAub24oYXBwLmxhdW5jaEV2ZW50LCAoYXJnczogYXBwLkFwcGxpY2F0aW9uRXZlbnREYXRhKSA9PiB7XG4gICAgaWYgKGFyZ3MuYW5kcm9pZCkge1xuICAgICAgICBjb25zdCBwdXNoUGx1Z2luID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wdXNoLW5vdGlmaWNhdGlvbnNcIik7XG4gICAgICAgIHB1c2hQbHVnaW4ucmVnaXN0ZXIoeyBzZW5kZXJJRDogJzc1NDQzOTE5Nzg2MicgfSwgZnVuY3Rpb24gKHRva2VuKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZXZpY2UgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHkgPT4gJywgdG9rZW4pO1xuICAgICAgICB9LCBmdW5jdGlvbigpIHsgfSk7XG4gICAgICAgIHB1c2hQbHVnaW4ub25NZXNzYWdlUmVjZWl2ZWQoZnVuY3Rpb24gY2FsbGJhY2soZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ01lc3NhZ2UgcmVjZWl2ZWQgPT4gJywgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pKi9cblxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iXX0=