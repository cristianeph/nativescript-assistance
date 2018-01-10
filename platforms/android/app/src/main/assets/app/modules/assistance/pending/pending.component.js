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
        console.log('Assistance => Preparing => ', JSON.stringify(assistance));
        /*assistance.worker = this.userWorker;*/
        this.assistanceService.register(assistance).subscribe(function (data) {
            console.log('Assistance => Recieved', JSON.stringify(data));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVuZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZW5kaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUVoRCxrRkFBOEU7QUFDOUUsc0RBQW9EO0FBRXBELGlEQUE4QztBQUM5QywwQ0FBdUM7QUFDdkMsb0NBQXNDO0FBSXRDLHdFQUFvRTtBQUVwRSxtRkFBeUU7QUFDekUsbUZBQXlFO0FBQ3pFLDhFQUEwRTtBQUMxRSxtR0FBeUY7QUFRekY7SUFVSSwwQkFBb0IsTUFBYyxFQUNkLElBQVUsRUFDVixZQUEwQixFQUMxQixlQUFnQztRQUN4Qyx5Q0FBeUM7UUFDakMsaUJBQW9DO1FBTHBDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRWhDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxnQ0FBZ0MsQ0FBQztRQUM5QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQscUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsNENBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxnREFBcUIsR0FB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QUM7UUFDUCxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUF0SlEsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDO3lDQVc4QixlQUFNO1lBQ1IsV0FBSTtZQUNJLDRCQUFZO1lBQ1Qsa0NBQWU7WUFFYixzQ0FBaUI7T0FmL0MsZ0JBQWdCLENBd0o1QjtJQUFELHVCQUFDO0NBQUEsQUF4SkQsSUF3SkM7QUF4SlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Fzc2lzdGFuY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy9hc3Npc3RhbmNlLmNsYXNzXCI7XG5pbXBvcnQge0Fzc2lzdGFuY2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2Fzc2lzdGFuY2Uuc2VydmljZVwiO1xuaW1wb3J0IHtpc0FuZHJvaWR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQge1NlYXJjaEJhcn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhclwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHtXb3JrZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3dvcmtlci5zZXJ2aWNlXCI7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NsYXNzZXMvdXNlci5jbGFzc1wiO1xuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHtXb3JrZXJ9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy93b3JrZXIuY2xhc3NcIjtcbmltcG9ydCB7RmlyZWJhc2VQb3N0fSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NsYXNzZXMvZmlyZWJhc2UtcG9zdC5jbGFzc1wiO1xuaW1wb3J0IHtGaXJlYmFzZURhdGF9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY2xhc3Nlcy9maXJlYmFzZS1kYXRhLmNsYXNzXCI7XG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0ZpcmViYXNlTm90aWZpY2F0aW9ufSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NsYXNzZXMvZmlyZWJhc2Utbm90aWZpY2F0aW9uLmNsYXNzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhcHAtcGVuZGluZycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BlbmRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3BlbmRpbmcuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBlbmRpbmdDb21wb25lbnQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbGlzdDogQXJyYXk8QXNzaXN0YW5jZT47XG4gICAgc2VhcmNoQmFyOiBTZWFyY2hCYXI7XG4gICAgdXNlcjogVXNlcjtcbiAgICAvKnVzZXJXb3JrZXI6IFdvcmtlcjsqL1xuICAgIGludGVydmFsOiBhbnk7XG4gICAgaW50ZXJ2YWxUaW1pbmc6IG51bWJlcjtcbiAgICBsaXN0ZWRJdGVtczogbnVtYmVyW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgLypwcml2YXRlIHdvcmtlclNlcnZpY2U6IFdvcmtlclNlcnZpY2UsKi9cbiAgICAgICAgICAgICAgICBwcml2YXRlIGFzc2lzdGFuY2VTZXJ2aWNlOiBBc3Npc3RhbmNlU2VydmljZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gJ1RyYWJham9zIHBlbmRpZW50ZXMgZGUgYWNlcHRhcic7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxUaW1pbmcgPSA1NTAwO1xuICAgICAgICB0aGlzLmxpc3RlZEl0ZW1zID0gW107XG4gICAgfVxuXG4gICAgcGFnZUxvYWRlZCgpIHtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5sb2dpblNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLmdldEFzc2lzdGFuY2VzKCk7XG4gICAgICAgIHRoaXMuZ2V0QXNzaXN0YW5jZXNEZWxheWVkKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlQXNzaXN0YW5jZXMoKSB7XG4gICAgICAgIHRoaXMuZ2V0QXNzaXN0YW5jZXMoKTtcbiAgICAgICAgdGhpcy5nZXRBc3Npc3RhbmNlc0RlbGF5ZWQoKTtcbiAgICB9XG5cbiAgICBnZXRBc3Npc3RhbmNlc0RlbGF5ZWQoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldEFzc2lzdGFuY2VzKCk7XG4gICAgICAgIH0sIHRoaXMuaW50ZXJ2YWxUaW1pbmcpO1xuICAgIH1cblxuICAgIGdldEFzc2lzdGFuY2VzKCkge1xuICAgICAgICB0aGlzLmFzc2lzdGFuY2VTZXJ2aWNlLmFsbCgxLCAyMCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgLypjb25zb2xlLmxvZygnQXNzaXN0YW5jZSA9PiBSZXNwb25zZSA9PiAnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7Ki9cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXNzaXN0YW5jZSA9PiBSZXNwb25zZSA9PiAnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdCA9IGRhdGEuY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ZWRJdGVtcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdGVkSXRlbXMucHVzaChpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8qdGhpcy5jbGVhck5ld2JpZXMoKTsqL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcnMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9ycyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzLnN0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaXNOZXdiaWUoaWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gKHRoaXMubGlzdGVkSXRlbXMuaW5kZXhPZihpZCkgPj0gMCkgPyAnb2xkJyA6ICduZXcnO1xuICAgIH1cblxuICAgIHNldE5ld2JpZXMoKSB7XG4gICAgICAgIHRoaXMubGlzdGVkSXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdChhcmdzKSB7XG4gICAgICAgIHRoaXMuc2V0U2VhcmNoQmFyT2ZmKCk7XG4gICAgICAgIGxldCByZXN1bHRMaXN0OiBBcnJheTxBc3Npc3RhbmNlPjtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2gnLCBzZWFyY2hCYXIudGV4dCk7XG4gICAgICAgIHJlc3VsdExpc3QgPSB0aGlzLmxpc3QuZmlsdGVyKGl0ZW0gPT5cbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAoaXRlbS5hZGRyZXNzLmluZGV4T2Yoc2VhcmNoQmFyLnRleHQpICE9PSAtMSkgfHxcbiAgICAgICAgICAgICAgICAoaXRlbS5hZGRyZXNzcmVmZXJlbmNlLmluZGV4T2Yoc2VhcmNoQmFyLnRleHQpICE9PSAtMSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmxpc3QgPSByZXN1bHRMaXN0O1xuICAgIH1cblxuICAgIGNsZWFyU2VhcmNoQmFyKCkge1xuICAgICAgICB0aGlzLnNldFNlYXJjaEJhck9mZigpO1xuICAgICAgICB0aGlzLmdldEFzc2lzdGFuY2VzKCk7XG4gICAgICAgIHRoaXMuZ2V0QXNzaXN0YW5jZXNEZWxheWVkKCk7XG4gICAgfVxuXG4gICAgbG9hZFNlYXJjaEJhcigpIHtcbiAgICAgICAgdGhpcy5zZXRTZWFyY2hCYXJPZmYoKTtcbiAgICB9XG5cbiAgICBzZXRTZWFyY2hCYXJPZmYoKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoQmFyID0gPFNlYXJjaEJhcj50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJtYWluLXNlYXJjaC1iYXJcIik7XG4gICAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQmFyLmFuZHJvaWQuY2xlYXJGb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QXNzaXN0KGFzc2lzdGFuY2U6IEFzc2lzdGFuY2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Fzc2lzdGFuY2UgcGFzc2VkIGFzIHBhcmFtZXRlciA9PiAnLCBKU09OLnN0cmluZ2lmeShhc3Npc3RhbmNlKSk7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogXCJFc3RhIHNlZ3VybyBxdWUgZGVzZWEgYXRlbmRlciBsYSBzb2xpY2l0dWQ/XCIsXG4gICAgICAgICAgICB0aXRsZTogXCJQcm9jZWRlP1wiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlNpXCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCIsXG4gICAgICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiXG4gICAgICAgIH07XG4gICAgICAgIGRpYWxvZ3MuY29uZmlybShvcHRpb25zKS50aGVuKChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFzc2lzdChhc3Npc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VuZENvbmZpcm1hdGlvbihhc3Npc3RhbmNlOiBBc3Npc3RhbmNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBc3Npc3RhbmNlID0+IENvbmZpcm1pbmcgPT4gJywgSlNPTi5zdHJpbmdpZnkoYXNzaXN0YW5jZSkpO1xuICAgICAgICBjb25zdCBmaXJlYmFzZUNvbmZpcm1hdGlvbiA9IG5ldyBGaXJlYmFzZVBvc3QoXG4gICAgICAgICAgICBhc3Npc3RhbmNlLmN1c3RvbWVyLmZjbSxcbiAgICAgICAgICAgIG5ldyBGaXJlYmFzZU5vdGlmaWNhdGlvbihcbiAgICAgICAgICAgICAgICBcIkxpc3RvLCB0dSBzb2xpY2l0dWQgZXN0YSBzaWVuZG8gYXRlbmRpZGFcIixcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5nZXRVc2VyKCkubGFzdG5hbWVzICsgXCIsIFwiICsgdGhpcy5sb2dpblNlcnZpY2UuZ2V0VXNlcigpLmZpcnN0bmFtZXMgKyBcInNlcsOhIGVsIHF1ZSBsbyBheXVkYXLDoVwiXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbmV3IEZpcmViYXNlRGF0YShhc3Npc3RhbmNlLmN1c3RvbWVyLmlkLCBhc3Npc3RhbmNlLmlkLCBcIkFURU5ESUVORE9cIilcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2Uuc2VuZE5vdGlmaWNhdGlvbihmaXJlYmFzZUNvbmZpcm1hdGlvbikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2lzdGFuY2UgPT4gbm90aWZpY2F0aW9uID0+IFNVQ0NFU1MgPT4gXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2lzdGFuY2UgPT4gbm90aWZpY2F0aW9uID0+IEVSUk9SID0+IFwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgdXBkYXRlQXNzaXN0KGFzc2lzdGFuY2U6IEFzc2lzdGFuY2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Fzc2lzdGFuY2UgPT4gUHJlcGFyaW5nID0+ICcsIEpTT04uc3RyaW5naWZ5KGFzc2lzdGFuY2UpKTtcbiAgICAgICAgLyphc3Npc3RhbmNlLndvcmtlciA9IHRoaXMudXNlcldvcmtlcjsqL1xuICAgICAgICB0aGlzLmFzc2lzdGFuY2VTZXJ2aWNlLnJlZ2lzdGVyKGFzc2lzdGFuY2UpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3Npc3RhbmNlID0+IFJlY2lldmVkJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZENvbmZpcm1hdGlvbihkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYXNzaXN0YW5jZS9hc3Npc3RcIiwgYXNzaXN0YW5jZS5pZF0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG59XG4iXX0=