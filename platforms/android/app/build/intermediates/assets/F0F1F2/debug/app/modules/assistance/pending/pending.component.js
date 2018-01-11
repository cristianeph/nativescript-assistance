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
        this.assistanceService.allPending(1, 20, "PENDING").subscribe(function (data) {
            /*console.log('Assistance => Response => ', JSON.stringify(data));*/
            console.log('Assistance => Response => ', data);
            if (data.content) {
                _this.list = data.content;
                _this.listedItems = [];
                _this.list.forEach(function (item) {
                    _this.listedItems.push(item.id);
                });
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
        console.log('Assistance => Confirming => ', JSON.stringify(assistance));
        var firebaseConfirmation = new firebase_post_class_1.FirebasePost(assistance.customer.fcm, new firebase_notification_class_1.FirebaseNotification("Listo, tu solicitud esta siendo atendida", this.loginService.getUser().lastnames + ", " + this.loginService.getUser().firstnames + "será el que lo ayudará"), new firebase_data_class_1.FirebaseData(assistance.customer.id, assistance.id, "ATENDIENDO"));
        this.firebaseService.sendNotification(firebaseConfirmation).subscribe(function (data) {
            if (data.success === 1) {
                console.log("Assistance => notification => SUCCESS => ", JSON.stringify(data));
            }
            else {
                console.log("Assistance => notification => ERROR => ", JSON.stringify(data));
            }
        });
    };
    PendingComponent.prototype.updateAssist = function (assistance) {
        var _this = this;
        assistance.state = "ATENDIENDO";
        console.log('Assistance => Preparing => ', JSON.stringify(assistance));
        /*assistance.worker = this.userWorker;*/
        this.assistanceService.update(assistance).subscribe(function (data) {
            console.log('Assistance => Received', JSON.stringify(data));
            _this.sendConfirmation(data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVuZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZW5kaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUVoRCxrRkFBOEU7QUFDOUUsc0RBQW9EO0FBRXBELGlEQUE4QztBQUM5QywwQ0FBdUM7QUFDdkMsb0NBQXNDO0FBSXRDLHdFQUFvRTtBQUVwRSxtRkFBeUU7QUFDekUsbUZBQXlFO0FBQ3pFLDhFQUEwRTtBQUMxRSxtR0FBeUY7QUFRekY7SUFVSSwwQkFBb0IsTUFBYyxFQUNkLElBQVUsRUFDVixZQUEwQixFQUMxQixlQUFnQztRQUN4Qyx5Q0FBeUM7UUFDakMsaUJBQW9DO1FBTHBDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRWhDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxnQ0FBZ0MsQ0FBQztRQUM5QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQscUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsNENBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxnREFBcUIsR0FB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QUFHLEtBQUssQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQXRKUSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3pDLENBQUM7eUNBVzhCLGVBQU07WUFDUixXQUFJO1lBQ0ksNEJBQVk7WUFDVCxrQ0FBZTtZQUViLHNDQUFpQjtPQWYvQyxnQkFBZ0IsQ0F3SjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXhKRCxJQXdKQztBQXhKWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXNzaXN0YW5jZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL2Fzc2lzdGFuY2UuY2xhc3NcIjtcbmltcG9ydCB7QXNzaXN0YW5jZVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXNzaXN0YW5jZS5zZXJ2aWNlXCI7XG5pbXBvcnQge2lzQW5kcm9pZH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7U2VhcmNoQmFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQge1dvcmtlclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvd29ya2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy91c2VyLmNsYXNzXCI7XG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1dvcmtlcn0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL3dvcmtlci5jbGFzc1wiO1xuaW1wb3J0IHtGaXJlYmFzZVBvc3R9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy9maXJlYmFzZS1wb3N0LmNsYXNzXCI7XG5pbXBvcnQge0ZpcmViYXNlRGF0YX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL2ZpcmViYXNlLWRhdGEuY2xhc3NcIjtcbmltcG9ydCB7RmlyZWJhc2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7RmlyZWJhc2VOb3RpZmljYXRpb259IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy9maXJlYmFzZS1ub3RpZmljYXRpb24uY2xhc3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC1wZW5kaW5nJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGVuZGluZy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcGVuZGluZy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGVuZGluZ0NvbXBvbmVudCB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBsaXN0OiBBcnJheTxBc3Npc3RhbmNlPjtcbiAgICBzZWFyY2hCYXI6IFNlYXJjaEJhcjtcbiAgICB1c2VyOiBVc2VyO1xuICAgIC8qdXNlcldvcmtlcjogV29ya2VyOyovXG4gICAgaW50ZXJ2YWw6IGFueTtcbiAgICBpbnRlcnZhbFRpbWluZzogbnVtYmVyO1xuICAgIGxpc3RlZEl0ZW1zOiBudW1iZXJbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgICAgICAgICAvKnByaXZhdGUgd29ya2VyU2VydmljZTogV29ya2VyU2VydmljZSwqL1xuICAgICAgICAgICAgICAgIHByaXZhdGUgYXNzaXN0YW5jZVNlcnZpY2U6IEFzc2lzdGFuY2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSAnVHJhYmFqb3MgcGVuZGllbnRlcyBkZSBhY2VwdGFyJztcbiAgICAgICAgdGhpcy5pbnRlcnZhbFRpbWluZyA9IDU1MDA7XG4gICAgICAgIHRoaXMubGlzdGVkSXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBwYWdlTG9hZGVkKCkge1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLmxvZ2luU2VydmljZS5nZXRVc2VyKCk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuZ2V0QXNzaXN0YW5jZXMoKTtcbiAgICAgICAgdGhpcy5nZXRBc3Npc3RhbmNlc0RlbGF5ZWQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVBc3Npc3RhbmNlcygpIHtcbiAgICAgICAgdGhpcy5nZXRBc3Npc3RhbmNlcygpO1xuICAgICAgICB0aGlzLmdldEFzc2lzdGFuY2VzRGVsYXllZCgpO1xuICAgIH1cblxuICAgIGdldEFzc2lzdGFuY2VzRGVsYXllZCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0QXNzaXN0YW5jZXMoKTtcbiAgICAgICAgfSwgdGhpcy5pbnRlcnZhbFRpbWluZyk7XG4gICAgfVxuXG4gICAgZ2V0QXNzaXN0YW5jZXMoKSB7XG4gICAgICAgIHRoaXMuYXNzaXN0YW5jZVNlcnZpY2UuYWxsUGVuZGluZygxLCAyMCwgXCJQRU5ESU5HXCIpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIC8qY29uc29sZS5sb2coJ0Fzc2lzdGFuY2UgPT4gUmVzcG9uc2UgPT4gJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpOyovXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Fzc2lzdGFuY2UgPT4gUmVzcG9uc2UgPT4gJywgZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QgPSBkYXRhLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdGVkSXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RlZEl0ZW1zLnB1c2goaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcnMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9ycyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzLnN0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaXNOZXdiaWUoaWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gKHRoaXMubGlzdGVkSXRlbXMuaW5kZXhPZihpZCkgPj0gMCkgPyAnb2xkJyA6ICduZXcnO1xuICAgIH1cblxuICAgIHNldE5ld2JpZXMoKSB7XG4gICAgICAgIHRoaXMubGlzdGVkSXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdChhcmdzKSB7XG4gICAgICAgIHRoaXMuc2V0U2VhcmNoQmFyT2ZmKCk7XG4gICAgICAgIGxldCByZXN1bHRMaXN0OiBBcnJheTxBc3Npc3RhbmNlPjtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2gnLCBzZWFyY2hCYXIudGV4dCk7XG4gICAgICAgIHJlc3VsdExpc3QgPSB0aGlzLmxpc3QuZmlsdGVyKGl0ZW0gPT5cbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAoaXRlbS5hZGRyZXNzLmluZGV4T2Yoc2VhcmNoQmFyLnRleHQpICE9PSAtMSkgfHxcbiAgICAgICAgICAgICAgICAoaXRlbS5hZGRyZXNzcmVmZXJlbmNlLmluZGV4T2Yoc2VhcmNoQmFyLnRleHQpICE9PSAtMSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmxpc3QgPSByZXN1bHRMaXN0O1xuICAgIH1cblxuICAgIGNsZWFyU2VhcmNoQmFyKCkge1xuICAgICAgICB0aGlzLnNldFNlYXJjaEJhck9mZigpO1xuICAgICAgICB0aGlzLmdldEFzc2lzdGFuY2VzKCk7XG4gICAgICAgIHRoaXMuZ2V0QXNzaXN0YW5jZXNEZWxheWVkKCk7XG4gICAgfVxuXG4gICAgbG9hZFNlYXJjaEJhcigpIHtcbiAgICAgICAgdGhpcy5zZXRTZWFyY2hCYXJPZmYoKTtcbiAgICB9XG5cbiAgICBzZXRTZWFyY2hCYXJPZmYoKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoQmFyID0gPFNlYXJjaEJhcj50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJtYWluLXNlYXJjaC1iYXJcIik7XG4gICAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQmFyLmFuZHJvaWQuY2xlYXJGb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QXNzaXN0KGFzc2lzdGFuY2U6IEFzc2lzdGFuY2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Fzc2lzdGFuY2UgcGFzc2VkIGFzIHBhcmFtZXRlciA9PiAnLCBKU09OLnN0cmluZ2lmeShhc3Npc3RhbmNlKSk7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogXCJFc3RhIHNlZ3VybyBxdWUgZGVzZWEgYXRlbmRlciBsYSBzb2xpY2l0dWQ/XCIsXG4gICAgICAgICAgICB0aXRsZTogXCJQcm9jZWRlP1wiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlNpXCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCIsXG4gICAgICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiXG4gICAgICAgIH07XG4gICAgICAgIGRpYWxvZ3MuY29uZmlybShvcHRpb25zKS50aGVuKChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFzc2lzdChhc3Npc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VuZENvbmZpcm1hdGlvbihhc3Npc3RhbmNlOiBBc3Npc3RhbmNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBc3Npc3RhbmNlID0+IENvbmZpcm1pbmcgPT4gJywgSlNPTi5zdHJpbmdpZnkoYXNzaXN0YW5jZSkpO1xuICAgICAgICBjb25zdCBmaXJlYmFzZUNvbmZpcm1hdGlvbiA9IG5ldyBGaXJlYmFzZVBvc3QoXG4gICAgICAgICAgICBhc3Npc3RhbmNlLmN1c3RvbWVyLmZjbSxcbiAgICAgICAgICAgIG5ldyBGaXJlYmFzZU5vdGlmaWNhdGlvbihcbiAgICAgICAgICAgICAgICBcIkxpc3RvLCB0dSBzb2xpY2l0dWQgZXN0YSBzaWVuZG8gYXRlbmRpZGFcIixcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5nZXRVc2VyKCkubGFzdG5hbWVzICsgXCIsIFwiICsgdGhpcy5sb2dpblNlcnZpY2UuZ2V0VXNlcigpLmZpcnN0bmFtZXMgKyBcInNlcsOhIGVsIHF1ZSBsbyBheXVkYXLDoVwiXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbmV3IEZpcmViYXNlRGF0YShhc3Npc3RhbmNlLmN1c3RvbWVyLmlkLCBhc3Npc3RhbmNlLmlkLCBcIkFURU5ESUVORE9cIilcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2Uuc2VuZE5vdGlmaWNhdGlvbihmaXJlYmFzZUNvbmZpcm1hdGlvbikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2lzdGFuY2UgPT4gbm90aWZpY2F0aW9uID0+IFNVQ0NFU1MgPT4gXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2lzdGFuY2UgPT4gbm90aWZpY2F0aW9uID0+IEVSUk9SID0+IFwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgdXBkYXRlQXNzaXN0KGFzc2lzdGFuY2U6IEFzc2lzdGFuY2UpIHtcbiAgICAgICAgYXNzaXN0YW5jZS5zdGF0ZSA9IFwiQVRFTkRJRU5ET1wiO1xuICAgICAgICBjb25zb2xlLmxvZygnQXNzaXN0YW5jZSA9PiBQcmVwYXJpbmcgPT4gJywgSlNPTi5zdHJpbmdpZnkoYXNzaXN0YW5jZSkpO1xuICAgICAgICAvKmFzc2lzdGFuY2Uud29ya2VyID0gdGhpcy51c2VyV29ya2VyOyovXG4gICAgICAgIHRoaXMuYXNzaXN0YW5jZVNlcnZpY2UudXBkYXRlKGFzc2lzdGFuY2UpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3Npc3RhbmNlID0+IFJlY2VpdmVkJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZENvbmZpcm1hdGlvbihkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYXNzaXN0YW5jZS9hc3Npc3RcIiwgYXNzaXN0YW5jZS5pZF0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG59XG4iXX0=