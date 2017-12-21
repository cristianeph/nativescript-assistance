"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var bus_service_1 = require("../../../shared/services/bus.service");
var application_1 = require("application");
var application_settings_service_1 = require("../../../shared/services/application-settings.service");
var nativescript_angular_1 = require("nativescript-angular");
var WaitingComponent = (function () {
    function WaitingComponent(route, router, busService, appSettingServices, routerExtension) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.busService = busService;
        this.appSettingServices = appSettingServices;
        this.routerExtension = routerExtension;
        this.title = 'Espere un momento...';
        this.route.params.subscribe(function (params) {
            if (params) {
                _this.type = +params['id'];
                console.log("Param incoming => ", +params['id']);
            }
        });
        this.getNotifications();
    }
    WaitingComponent.prototype.pageLoaded = function () {
        this.appLifeEvents();
    };
    WaitingComponent.prototype.appLifeEvents = function () {
        application_1.on(application_1.resumeEvent, function (args) {
            console.log("Resume => Event");
            if (args.android) {
                /*this.routerExtensions.navigate(['/pin'], { clearHistory: true, animated: false });*/
                /*console.log("Push notification => ", JSON.stringify(this.appSettingServices.getPushNotification()));*/
                /*this.router.navigate(["/client/tracking", this.appSettingServices.getPushNotification().data.assistance]);*/
                /*this.router.navigate(["/client/waiting"]);*/
                /*this.router.navigate(["/client/tracking", 122]);*/
                /*this.routerExtension.navigate(["/client/tracking", 122], {clearHistory: true, animated: false});*/
            }
            else if (args.ios) {
            }
        });
    };
    WaitingComponent.prototype.getNotifications = function () {
        var _this = this;
        this.busService.subscribe("central-notification", function (data) {
            console.log("Notification recieved => Waiting view => ", JSON.stringify(data));
            var recievedData = data.data;
            if (recievedData) {
                if (recievedData.state === "ATENDIENDO") {
                    console.log("Redirectioning result => Assistance => ", recievedData.assistance);
                    _this.recievedData = recievedData;
                    _this.routerExtension.navigate(["/client/tracking", _this.appSettingServices.getPushNotification().data.assistance]);
                }
            }
        });
    };
    WaitingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-waiting',
            templateUrl: './waiting.component.html',
            styleUrls: ['./waiting.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            bus_service_1.BusService,
            application_settings_service_1.ApplicationSettingsService,
            nativescript_angular_1.RouterExtensions])
    ], WaitingComponent);
    return WaitingComponent;
}());
exports.WaitingComponent = WaitingComponent;
