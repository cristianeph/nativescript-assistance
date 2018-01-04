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
    /*userWorker: Worker;*/
    function PendingComponent(router, page, loginService, firebaseService, 
        /*private workerService: WorkerService,*/
        assistanceService) {
        this.router = router;
        this.page = page;
        this.loginService = loginService;
        this.firebaseService = firebaseService;
        this.assistanceService = assistanceService;
        this.title = 'Trabajos pendientes de aceptar';
    }
    PendingComponent.prototype.pageLoaded = function () {
        this.user = this.loginService.getUser();
        /*this.workerService.find(this.user.id).subscribe(
            data => {
                console.log('Worker object by user => ', JSON.stringify(data));
                this.userWorker = data;
                this.getAssistances();
            }
        );*/
        this.getAssistances();
    };
    PendingComponent.prototype.getAssistances = function () {
        var _this = this;
        this.assistanceService.all(1, 20).subscribe(function (data) {
            console.log('Assistance => Response => ', JSON.stringify(data));
            if (data.content) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVuZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZW5kaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUVoRCxrRkFBOEU7QUFDOUUsc0RBQW9EO0FBRXBELGlEQUE4QztBQUM5QywwQ0FBdUM7QUFDdkMsb0NBQXNDO0FBSXRDLHdFQUFvRTtBQUVwRSxtRkFBeUU7QUFDekUsbUZBQXlFO0FBQ3pFLDhFQUEwRTtBQUMxRSxtR0FBeUY7QUFRekY7SUFLSSx1QkFBdUI7SUFFdkIsMEJBQW9CLE1BQWMsRUFDZCxJQUFVLEVBQ1YsWUFBMEIsRUFDMUIsZUFBZ0M7UUFDeEMseUNBQXlDO1FBQ2pDLGlCQUFvQztRQUxwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUVoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsZ0NBQWdDLENBQUE7SUFDakQsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEM7Ozs7OztZQU1JO1FBQ0osSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCx5Q0FBYyxHQUFkO1FBQUEsaUJBY0M7UUFiRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3ZDLFVBQUEsSUFBSTtZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENB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RSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDdkYsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUNqRCxVQUFBLElBQUk7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuRSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDN0QsS0FBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBMUdRLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDekMsQ0FBQzt5Q0FROEIsZUFBTTtZQUNSLFdBQUk7WUFDSSw0QkFBWTtZQUNULGtDQUFlO1lBRWIsc0NBQWlCO09BWi9DLGdCQUFnQixDQTRHNUI7SUFBRCx1QkFBQztDQUFBLEFBNUdELElBNEdDO0FBNUdZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBc3Npc3RhbmNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NsYXNzZXMvYXNzaXN0YW5jZS5jbGFzc1wiO1xuaW1wb3J0IHtBc3Npc3RhbmNlU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hc3Npc3RhbmNlLnNlcnZpY2VcIjtcbmltcG9ydCB7aXNBbmRyb2lkfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0IHtTZWFyY2hCYXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCB7V29ya2VyU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy93b3JrZXIuc2VydmljZVwiO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL3VzZXIuY2xhc3NcIjtcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7V29ya2VyfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NsYXNzZXMvd29ya2VyLmNsYXNzXCI7XG5pbXBvcnQge0ZpcmViYXNlUG9zdH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL2ZpcmViYXNlLXBvc3QuY2xhc3NcIjtcbmltcG9ydCB7RmlyZWJhc2VEYXRhfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NsYXNzZXMvZmlyZWJhc2UtZGF0YS5jbGFzc1wiO1xuaW1wb3J0IHtGaXJlYmFzZVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHtGaXJlYmFzZU5vdGlmaWNhdGlvbn0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL2ZpcmViYXNlLW5vdGlmaWNhdGlvbi5jbGFzc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXBwLXBlbmRpbmcnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wZW5kaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9wZW5kaW5nLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQZW5kaW5nQ29tcG9uZW50IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGxpc3Q6IEFycmF5PEFzc2lzdGFuY2U+O1xuICAgIHNlYXJjaEJhcjogU2VhcmNoQmFyO1xuICAgIHVzZXI6IFVzZXI7XG4gICAgLyp1c2VyV29ya2VyOiBXb3JrZXI7Ki9cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcbiAgICAgICAgICAgICAgICAvKnByaXZhdGUgd29ya2VyU2VydmljZTogV29ya2VyU2VydmljZSwqL1xuICAgICAgICAgICAgICAgIHByaXZhdGUgYXNzaXN0YW5jZVNlcnZpY2U6IEFzc2lzdGFuY2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSAnVHJhYmFqb3MgcGVuZGllbnRlcyBkZSBhY2VwdGFyJ1xuICAgIH1cblxuICAgIHBhZ2VMb2FkZWQoKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMubG9naW5TZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgICAgLyp0aGlzLndvcmtlclNlcnZpY2UuZmluZCh0aGlzLnVzZXIuaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXb3JrZXIgb2JqZWN0IGJ5IHVzZXIgPT4gJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlcldvcmtlciA9IGRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBc3Npc3RhbmNlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICApOyovXG4gICAgICAgIHRoaXMuZ2V0QXNzaXN0YW5jZXMoKTtcbiAgICB9XG5cbiAgICBnZXRBc3Npc3RhbmNlcygpIHtcbiAgICAgICAgdGhpcy5hc3Npc3RhbmNlU2VydmljZS5hbGwoMSwgMjApLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3Npc3RhbmNlID0+IFJlc3BvbnNlID0+ICcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdCA9IGRhdGEuY29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9ycy5zdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNsZWFyU2VhcmNoQmFyKCkge1xuICAgICAgICB0aGlzLnNldFNlYXJjaEJhck9mZigpO1xuICAgIH1cblxuICAgIGxvYWRTZWFyY2hCYXIoKSB7XG4gICAgICAgIHRoaXMuc2V0U2VhcmNoQmFyT2ZmKCk7XG4gICAgfVxuXG4gICAgc2V0U2VhcmNoQmFyT2ZmKCkge1xuICAgICAgICB0aGlzLnNlYXJjaEJhciA9IDxTZWFyY2hCYXI+dGhpcy5wYWdlLmdldFZpZXdCeUlkKFwibWFpbi1zZWFyY2gtYmFyXCIpO1xuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaEJhci5hbmRyb2lkLmNsZWFyRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFzc2lzdChhc3Npc3RhbmNlOiBBc3Npc3RhbmNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBc3Npc3RhbmNlIHBhc3NlZCBhcyBwYXJhbWV0ZXIgPT4gJywgSlNPTi5zdHJpbmdpZnkoYXNzaXN0YW5jZSkpO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRXN0YSBzZWd1cm8gcXVlIGRlc2VhIGF0ZW5kZXIgbGEgc29saWNpdHVkP1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwiUHJvY2VkZT9cIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJTaVwiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOb1wiLFxuICAgICAgICAgICAgbmV1dHJhbEJ1dHRvblRleHQ6IFwiQ2FuY2VsYXJcIlxuICAgICAgICB9O1xuICAgICAgICBkaWFsb2dzLmNvbmZpcm0ob3B0aW9ucykudGhlbigocmVzdWx0OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBc3Npc3QoYXNzaXN0YW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbmRDb25maXJtYXRpb24oYXNzaXN0YW5jZTogQXNzaXN0YW5jZSkge1xuICAgICAgICBjb25zdCBmaXJlYmFzZUNvbmZpcm1hdGlvbiA9IG5ldyBGaXJlYmFzZVBvc3QoXG4gICAgICAgICAgICBhc3Npc3RhbmNlLmN1c3RvbWVyLmZjbSxcbiAgICAgICAgICAgIG5ldyBGaXJlYmFzZU5vdGlmaWNhdGlvbihcbiAgICAgICAgICAgICAgICBcIkxpc3RvLCB0dSBzb2xpY2l0dWQgZXN0YSBzaWVuZG8gYXRlbmRpZGFcIixcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5nZXRVc2VyKCkubGFzdG5hbWVzICsgXCIsIFwiICsgdGhpcy5sb2dpblNlcnZpY2UuZ2V0VXNlcigpLmZpcnN0bmFtZXMgKyBcInNlcsOhIGVsIHF1ZSBsbyBheXVkYXLDoVwiXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbmV3IEZpcmViYXNlRGF0YShhc3Npc3RhbmNlLmN1c3RvbWVyLmlkLCBhc3Npc3RhbmNlLmlkLCBcIkFURU5ESUVORE9cIilcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2Uuc2VuZE5vdGlmaWNhdGlvbihmaXJlYmFzZUNvbmZpcm1hdGlvbikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2lzdGFuY2Ugc2VuZCBub3RpZmljYXRpb24gPT4gU1VDQ0VTUyA9PiBcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzaXN0YW5jZSBzZW5kIG5vdGlmaWNhdGlvbiA9PiBFUlJPUiA9PiBcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHVwZGF0ZUFzc2lzdChhc3Npc3RhbmNlOiBBc3Npc3RhbmNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBc3Npc3RhbmNlIHBhc3NlZCBhcyBwYXJhbWV0ZXIgKDIgdGltZSkgPT4gJywgSlNPTi5zdHJpbmdpZnkoYXNzaXN0YW5jZSkpO1xuICAgICAgICAvKmFzc2lzdGFuY2Uud29ya2VyID0gdGhpcy51c2VyV29ya2VyOyovXG4gICAgICAgIHRoaXMuYXNzaXN0YW5jZVNlcnZpY2UucmVnaXN0ZXIoYXNzaXN0YW5jZSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Fzc2lzdGFuY2UgdXBkYXRlZCBvYmplY3QgPT4gJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9hc3Npc3RhbmNlL2Fzc2lzdFwiLCBhc3Npc3RhbmNlLmlkXSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==