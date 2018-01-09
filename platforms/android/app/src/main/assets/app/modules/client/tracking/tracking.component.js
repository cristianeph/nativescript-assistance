"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tracking_service_1 = require("../../../shared/services/tracking.service");
var app = require("tns-core-modules/application");
var router_1 = require("@angular/router");
var user_class_1 = require("../../../shared/classes/user.class");
var assistance_service_1 = require("../../../shared/services/assistance.service");
var user_service_1 = require("../../../shared/services/user.service");
var TrackingComponent = (function () {
    function TrackingComponent(route, router, trackingService, assistanceService, userService, ngZone) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.trackingService = trackingService;
        this.assistanceService = assistanceService;
        this.userService = userService;
        this.ngZone = ngZone;
        this.title = 'Listo, espere un momento...';
        this.route.params.subscribe(function (params) {
            _this.id = +params['assistanceid'];
            console.log(_this.id);
            _this.getAssistance(_this.id);
        });
    }
    TrackingComponent.prototype.pageLoaded = function () {
        if (app.android) {
            app.android.on(app.AndroidApplication.activityBackPressedEvent, this.refuseBack);
        }
        this.list = this.trackingService.getItems();
        this.userWorker = new user_class_1.User(0, '', '', '', '', '', '', '', null);
        this.userWorker.firstnames = '';
        this.userWorker.lastnames = '';
    };
    TrackingComponent.prototype.pageUnloaded = function () {
        if (app.android) {
            app.android.off(app.AndroidApplication.activityBackPressedEvent, this.refuseBack);
        }
    };
    TrackingComponent.prototype.getAssistance = function (id) {
        var _this = this;
        this.assistanceService.find(id).subscribe(function (data) {
            console.log('Assistance data received => ', JSON.stringify(data));
            _this.assistance = data;
            _this.userService.infoWorker(_this.assistance.worker.id).subscribe(function (data) {
                console.log('Worker data received => ', JSON.stringify(data));
                _this.setUserData(data);
            });
        });
    };
    TrackingComponent.prototype.setUserData = function (userWorker) {
        var _this = this;
        this.ngZone.run(function () {
            _this.userWorker.firstnames = userWorker.firstnames;
            _this.userWorker.lastnames = userWorker.lastnames;
            console.log(_this.userWorker.firstnames);
            console.log(_this.userWorker.lastnames);
        });
    };
    TrackingComponent.prototype.refuseBack = function (args) {
        args.cancel = true;
    };
    TrackingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-tracking',
            templateUrl: './tracking.component.html',
            styleUrls: ['./tracking.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            tracking_service_1.TrackingService,
            assistance_service_1.AssistanceService,
            user_service_1.UserService,
            core_1.NgZone])
    ], TrackingComponent);
    return TrackingComponent;
}());
exports.TrackingComponent = TrackingComponent;
