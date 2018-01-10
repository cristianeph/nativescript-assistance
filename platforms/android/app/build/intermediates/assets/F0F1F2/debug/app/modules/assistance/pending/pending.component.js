"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var assistance_service_1 = require("../../../shared/services/assistance.service");
var platform_1 = require("tns-core-modules/platform");
var page_1 = require("tns-core-modules/ui/page");
var router_1 = require("@angular/router");
var dialogs = require("ui/dialogs");
var login_service_1 = require("../../../shared/services/login.service");
var firebase_post_class_1 = require("../../../shared/classes/firebase-post.class");
var firebase_data_class_1 = require("../../../shared/classes/firebase-data.class");
var firebase_service_1 = require("../../../shared/services/firebase.service");
var firebase_notification_class_1 = require("../../../shared/classes/firebase-notification.class");
var PendingComponent = (function () {
    function PendingComponent(router, page, loginService, firebaseService, 
        /*private workerService: WorkerService,*/
        assistanceService) {
        this.router = router;
        this.page = page;
        this.loginService = loginService;
        this.firebaseService = firebaseService;
        this.assistanceService = assistanceService;
        this.title = 'Trabajos pendientes de aceptar';
        this.intervalTiming = 5500;
        this.listedItems = [];
    }
    PendingComponent.prototype.pageLoaded = function () {
        this.user = this.loginService.getUser();
        clearInterval(this.interval);
        this.getAssistances();
        this.getAssistancesDelayed();
    };
    PendingComponent.prototype.updateAssistances = function () {
        this.getAssistances();
        this.getAssistancesDelayed();
    };
    PendingComponent.prototype.getAssistancesDelayed = function () {
        var _this = this;
        clearInterval(this.interval);
        this.interval = setInterval(function () {
            _this.getAssistances();
        }, this.intervalTiming);
    };
    PendingComponent.prototype.getAssistances = function () {
        var _this = this;
        this.assistanceService.all(1, 20).subscribe(function (data) {
            /*console.log('Assistance => Response => ', JSON.stringify(data));*/
            console.log('Assistance => Response => ', data);
            if (data.content) {
                _this.list = data.content;
                _this.listedItems = [];
                _this.list.forEach(function (item) {
                    _this.listedItems.push(item.id);
                });
                /*this.clearNewbies();*/
            }
        }, function (errors) {
            console.log('Error');
            console.log(errors);
            console.log(errors.status);
        });
    };
    PendingComponent.prototype.isNewbie = function (id) {
        return (this.listedItems.indexOf(id) >= 0) ? 'old' : 'new';
    };
    PendingComponent.prototype.setNewbies = function () {
        this.listedItems = [];
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
    PendingComponent.prototype.clearSearchBar = function () {
        this.setSearchBarOff();
        this.getAssistances();
        this.getAssistancesDelayed();
    };
    PendingComponent.prototype.loadSearchBar = function () {
        this.setSearchBarOff();
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
        /*assistance.worker = this.userWorker;*/
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
            assistance_service_1.AssistanceService])
    ], PendingComponent);
    return PendingComponent;
}());
exports.PendingComponent = PendingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVuZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZW5kaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUVoRCxrRkFBOEU7QUFDOUUsc0RBQW9EO0FBRXBELGlEQUE4QztBQUM5QywwQ0FBdUM7QUFDdkMsb0NBQXNDO0FBSXRDLHdFQUFvRTtBQUVwRSxtRkFBeUU7QUFDekUsbUZBQXlFO0FBQ3pFLDhFQUEwRTtBQUMxRSxtR0FBeUY7QUFRekY7SUFVSSwwQkFBb0IsTUFBYyxFQUNkLElBQVUsRUFDVixZQUEwQixFQUMxQixlQUFnQztRQUN4Qyx5Q0FBeUM7UUFDakMsaUJBQW9DO1FBTHBDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRWhDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxnQ0FBZ0MsQ0FBQztRQUM5QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQscUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsNENBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxnREFBcUIsR0FB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QUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3pDLENBQUM7eUNBVzhCLGVBQU07WUFDUixXQUFJO1lBQ0ksNEJBQVk7WUFDVCxrQ0FBZTtZQUViLHNDQUFpQjtPQWYvQyxnQkFBZ0IsQ0FzSjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXRKRCxJQXNKQztBQXRKWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXNzaXN0YW5jZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL2Fzc2lzdGFuY2UuY2xhc3NcIjtcbmltcG9ydCB7QXNzaXN0YW5jZVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXNzaXN0YW5jZS5zZXJ2aWNlXCI7XG5pbXBvcnQge2lzQW5kcm9pZH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7U2VhcmNoQmFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQge1dvcmtlclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvd29ya2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy91c2VyLmNsYXNzXCI7XG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1dvcmtlcn0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL3dvcmtlci5jbGFzc1wiO1xuaW1wb3J0IHtGaXJlYmFzZVBvc3R9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy9maXJlYmFzZS1wb3N0LmNsYXNzXCI7XG5pbXBvcnQge0ZpcmViYXNlRGF0YX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL2ZpcmViYXNlLWRhdGEuY2xhc3NcIjtcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7RmlyZWJhc2VOb3RpZmljYXRpb259IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy9maXJlYmFzZS1ub3RpZmljYXRpb24uY2xhc3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC1wZW5kaW5nJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGVuZGluZy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcGVuZGluZy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGVuZGluZ0NvbXBvbmVudCB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBsaXN0OiBBcnJheTxBc3Npc3RhbmNlPjtcbiAgICBzZWFyY2hCYXI6IFNlYXJjaEJhcjtcbiAgICB1c2VyOiBVc2VyO1xuICAgIC8qdXNlcldvcmtlcjogV29ya2VyOyovXG4gICAgaW50ZXJ2YWw6IGFueTtcbiAgICBpbnRlcnZhbFRpbWluZzogbnVtYmVyO1xuICAgIGxpc3RlZEl0ZW1zOiBudW1iZXJbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgICAgICAgICAvKnByaXZhdGUgd29ya2VyU2VydmljZTogV29ya2VyU2VydmljZSwqL1xuICAgICAgICAgICAgICAgIHByaXZhdGUgYXNzaXN0YW5jZVNlcnZpY2U6IEFzc2lzdGFuY2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSAnVHJhYmFqb3MgcGVuZGllbnRlcyBkZSBhY2VwdGFyJztcbiAgICAgICAgdGhpcy5pbnRlcnZhbFRpbWluZyA9IDU1MDA7XG4gICAgICAgIHRoaXMubGlzdGVkSXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBwYWdlTG9hZGVkKCkge1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLmxvZ2luU2VydmljZS5nZXRVc2VyKCk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuZ2V0QXNzaXN0YW5jZXMoKTtcbiAgICAgICAgdGhpcy5nZXRBc3Npc3RhbmNlc0RlbGF5ZWQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVBc3Npc3RhbmNlcygpIHtcbiAgICAgICAgdGhpcy5nZXRBc3Npc3RhbmNlcygpO1xuICAgICAgICB0aGlzLmdldEFzc2lzdGFuY2VzRGVsYXllZCgpO1xuICAgIH1cblxuICAgIGdldEFzc2lzdGFuY2VzRGVsYXllZCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0QXNzaXN0YW5jZXMoKTtcbiAgICAgICAgfSwgdGhpcy5pbnRlcnZhbFRpbWluZyk7XG4gICAgfVxuXG4gICAgZ2V0QXNzaXN0YW5jZXMoKSB7XG4gICAgICAgIHRoaXMuYXNzaXN0YW5jZVNlcnZpY2UuYWxsKDEsIDIwKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAvKmNvbnNvbGUubG9nKCdBc3Npc3RhbmNlID0+IFJlc3BvbnNlID0+ICcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTsqL1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3Npc3RhbmNlID0+IFJlc3BvbnNlID0+ICcsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gZGF0YS5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RlZEl0ZW1zID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ZWRJdGVtcy5wdXNoKGl0ZW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLyp0aGlzLmNsZWFyTmV3YmllcygpOyovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9ycyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMuc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpc05ld2JpZShpZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5saXN0ZWRJdGVtcy5pbmRleE9mKGlkKSA+PSAwKSA/ICdvbGQnIDogJ25ldyc7XG4gICAgfVxuXG4gICAgc2V0TmV3YmllcygpIHtcbiAgICAgICAgdGhpcy5saXN0ZWRJdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIG9uU3VibWl0KGFyZ3MpIHtcbiAgICAgICAgdGhpcy5zZXRTZWFyY2hCYXJPZmYoKTtcbiAgICAgICAgbGV0IHJlc3VsdExpc3Q6IEFycmF5PEFzc2lzdGFuY2U+O1xuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcbiAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaCcsIHNlYXJjaEJhci50ZXh0KTtcbiAgICAgICAgcmVzdWx0TGlzdCA9IHRoaXMubGlzdC5maWx0ZXIoaXRlbSA9PlxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIChpdGVtLmFkZHJlc3MuaW5kZXhPZihzZWFyY2hCYXIudGV4dCkgIT09IC0xKSB8fFxuICAgICAgICAgICAgICAgIChpdGVtLmFkZHJlc3NyZWZlcmVuY2UuaW5kZXhPZihzZWFyY2hCYXIudGV4dCkgIT09IC0xKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIHRoaXMubGlzdCA9IHJlc3VsdExpc3Q7XG4gICAgfVxuXG4gICAgY2xlYXJTZWFyY2hCYXIoKSB7XG4gICAgICAgIHRoaXMuc2V0U2VhcmNoQmFyT2ZmKCk7XG4gICAgICAgIHRoaXMuZ2V0QXNzaXN0YW5jZXMoKTtcbiAgICAgICAgdGhpcy5nZXRBc3Npc3RhbmNlc0RlbGF5ZWQoKTtcbiAgICB9XG5cbiAgICBsb2FkU2VhcmNoQmFyKCkge1xuICAgICAgICB0aGlzLnNldFNlYXJjaEJhck9mZigpO1xuICAgIH1cblxuICAgIHNldFNlYXJjaEJhck9mZigpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hCYXIgPSA8U2VhcmNoQmFyPnRoaXMucGFnZS5nZXRWaWV3QnlJZChcIm1haW4tc2VhcmNoLWJhclwiKTtcbiAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hCYXIuYW5kcm9pZC5jbGVhckZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBc3Npc3QoYXNzaXN0YW5jZTogQXNzaXN0YW5jZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnQXNzaXN0YW5jZSBwYXNzZWQgYXMgcGFyYW1ldGVyID0+ICcsIEpTT04uc3RyaW5naWZ5KGFzc2lzdGFuY2UpKTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIkVzdGEgc2VndXJvIHF1ZSBkZXNlYSBhdGVuZGVyIGxhIHNvbGljaXR1ZD9cIixcbiAgICAgICAgICAgIHRpdGxlOiBcIlByb2NlZGU/XCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiU2lcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm9cIixcbiAgICAgICAgICAgIG5ldXRyYWxCdXR0b25UZXh0OiBcIkNhbmNlbGFyXCJcbiAgICAgICAgfTtcbiAgICAgICAgZGlhbG9ncy5jb25maXJtKG9wdGlvbnMpLnRoZW4oKHJlc3VsdDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQXNzaXN0KGFzc2lzdGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZW5kQ29uZmlybWF0aW9uKGFzc2lzdGFuY2U6IEFzc2lzdGFuY2UpIHtcbiAgICAgICAgY29uc3QgZmlyZWJhc2VDb25maXJtYXRpb24gPSBuZXcgRmlyZWJhc2VQb3N0KFxuICAgICAgICAgICAgYXNzaXN0YW5jZS5jdXN0b21lci5mY20sXG4gICAgICAgICAgICBuZXcgRmlyZWJhc2VOb3RpZmljYXRpb24oXG4gICAgICAgICAgICAgICAgXCJMaXN0bywgdHUgc29saWNpdHVkIGVzdGEgc2llbmRvIGF0ZW5kaWRhXCIsXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UuZ2V0VXNlcigpLmxhc3RuYW1lcyArIFwiLCBcIiArIHRoaXMubG9naW5TZXJ2aWNlLmdldFVzZXIoKS5maXJzdG5hbWVzICsgXCJzZXLDoSBlbCBxdWUgbG8gYXl1ZGFyw6FcIlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG5ldyBGaXJlYmFzZURhdGEoYXNzaXN0YW5jZS5jdXN0b21lci5pZCwgYXNzaXN0YW5jZS5pZCwgXCJBVEVORElFTkRPXCIpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnNlbmROb3RpZmljYXRpb24oZmlyZWJhc2VDb25maXJtYXRpb24pLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3Npc3RhbmNlIHNlbmQgbm90aWZpY2F0aW9uID0+IFNVQ0NFU1MgPT4gXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2lzdGFuY2Ugc2VuZCBub3RpZmljYXRpb24gPT4gRVJST1IgPT4gXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICB1cGRhdGVBc3Npc3QoYXNzaXN0YW5jZTogQXNzaXN0YW5jZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnQXNzaXN0YW5jZSBwYXNzZWQgYXMgcGFyYW1ldGVyICgyIHRpbWUpID0+ICcsIEpTT04uc3RyaW5naWZ5KGFzc2lzdGFuY2UpKTtcbiAgICAgICAgLyphc3Npc3RhbmNlLndvcmtlciA9IHRoaXMudXNlcldvcmtlcjsqL1xuICAgICAgICB0aGlzLmFzc2lzdGFuY2VTZXJ2aWNlLnJlZ2lzdGVyKGFzc2lzdGFuY2UpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3Npc3RhbmNlIHVwZGF0ZWQgb2JqZWN0ID0+ICcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYXNzaXN0YW5jZS9hc3Npc3RcIiwgYXNzaXN0YW5jZS5pZF0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG59XG4iXX0=