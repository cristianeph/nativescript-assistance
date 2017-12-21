"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var assistance_service_1 = require("../../../shared/services/assistance.service");
var platform_1 = require("tns-core-modules/platform");
var page_1 = require("tns-core-modules/ui/page");
var router_1 = require("@angular/router");
var dialogs = require("ui/dialogs");
var worker_service_1 = require("../../../shared/services/worker.service");
var login_service_1 = require("../../../shared/services/login.service");
var firebase_post_class_1 = require("../../../shared/classes/firebase-post.class");
var firebase_data_class_1 = require("../../../shared/classes/firebase-data.class");
var firebase_service_1 = require("../../../shared/services/firebase.service");
var firebase_notification_class_1 = require("../../../shared/classes/firebase-notification.class");
var PendingComponent = (function () {
    function PendingComponent(router, page, loginService, firebaseService, workerService, assistanceService) {
        this.router = router;
        this.page = page;
        this.loginService = loginService;
        this.firebaseService = firebaseService;
        this.workerService = workerService;
        this.assistanceService = assistanceService;
        this.title = 'Trabajos pendientes de aceptar';
    }
    PendingComponent.prototype.pageLoaded = function () {
        var _this = this;
        this.user = this.loginService.getUser();
        this.workerService.find(this.user.id).subscribe(function (data) {
            console.log('Worker object by user => ', JSON.stringify(data));
            _this.userWorker = data;
            _this.getAssistances();
        });
    };
    PendingComponent.prototype.updateAssistances = function () {
        this.getAssistances();
    };
    PendingComponent.prototype.getAssistances = function () {
        var _this = this;
        this.assistanceService.all(1, 20).subscribe(function (data) {
            if (data.content) {
                console.log(JSON.stringify(data.content));
                console.log(data.content.length);
                _this.list = data.content;
            }
        }, function (errors) {
            console.log('Error');
            console.log(errors);
            console.log(errors.status);
        });
    };
    PendingComponent.prototype.clearSearchBar = function () {
        this.setSearchBarOff();
        this.getAssistances();
    };
    PendingComponent.prototype.loadSearchBar = function () {
        this.setSearchBarOff();
    };
    PendingComponent.prototype.onSubmit = function (args) {
        this.setSearchBarOff();
        var resultList;
        var searchBar = args.object;
        console.log('Search', searchBar.text);
        resultList = this.list.filter(function (item) {
            return ((item.address.indexOf(searchBar.text) !== -1) ||
                (item.addressreference.indexOf(searchBar.text) !== -1));
        });
        this.list = resultList;
    };
    PendingComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        console.log('Changed');
    };
    PendingComponent.prototype.setSearchBarOff = function () {
        this.searchBar = this.page.getViewById("main-search-bar");
        if (platform_1.isAndroid) {
            this.searchBar.android.clearFocus();
        }
    };
    PendingComponent.prototype.getAssist = function (assistance) {
        var _this = this;
        console.log('Assistance passed as parameter => ', JSON.stringify(assistance));
        var options = {
            message: "Esta seguro que desea atender la solicitud?",
            title: "Procede?",
            okButtonText: "Si",
            cancelButtonText: "No",
            neutralButtonText: "Cancelar"
        };
        dialogs.confirm(options).then(function (result) {
            if (result === true) {
                _this.updateAssist(assistance);
            }
        });
    };
    PendingComponent.prototype.sendConfirmation = function (assistance) {
        var firebaseConfirmation = new firebase_post_class_1.FirebasePost(assistance.customer.fcm, new firebase_notification_class_1.FirebaseNotification("Listo, tu solicitud esta siendo atendida", this.loginService.getUser().lastnames + ", " + this.loginService.getUser().firstnames + "será el que lo ayudará"), new firebase_data_class_1.FirebaseData(assistance.customer.id, assistance.id, "ATENDIENDO"));
        this.firebaseService.sendNotification(firebaseConfirmation).subscribe(function (data) {
            if (data.success === 1) {
                console.log("Assistance send notification => SUCCESS => ", JSON.stringify(data));
            }
            else {
                console.log("Assistance send notification => ERROR => ", JSON.stringify(data));
            }
        });
    };
    PendingComponent.prototype.updateAssist = function (assistance) {
        var _this = this;
        console.log('Assistance passed as parameter (2 time) => ', JSON.stringify(assistance));
        assistance.worker = this.userWorker;
        this.assistanceService.register(assistance).subscribe(function (data) {
            console.log('Assistance updated object => ', JSON.stringify(data));
            _this.router.navigate(["/assistance/assist", assistance.id]).then(function () {
                _this.page.actionBarHidden = false;
            });
        });
    };
    PendingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-pending',
            templateUrl: './pending.component.html',
            styleUrls: ['./pending.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            page_1.Page,
            login_service_1.LoginService,
            firebase_service_1.FirebaseService,
            worker_service_1.WorkerService,
            assistance_service_1.AssistanceService])
    ], PendingComponent);
    return PendingComponent;
}());
exports.PendingComponent = PendingComponent;
