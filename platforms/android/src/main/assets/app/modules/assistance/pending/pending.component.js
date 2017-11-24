"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var assistance_service_1 = require("../../../shared/services/assistance.service");
var platform_1 = require("tns-core-modules/platform");
var page_1 = require("tns-core-modules/ui/page");
var router_1 = require("@angular/router");
var PendingComponent = (function () {
    function PendingComponent(router, page, assistanceService) {
        this.router = router;
        this.page = page;
        this.assistanceService = assistanceService;
        this.title = 'Trabajos pendientes de aceptar';
    }
    PendingComponent.prototype.ngOnInit = function () {
    };
    PendingComponent.prototype.pageLoaded = function () {
        this.getAssistances();
    };
    PendingComponent.prototype.getAssistances = function () {
        var _this = this;
        this.assistanceService.all(1, 20).subscribe(function (data) {
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
    PendingComponent.prototype.getAssist = function (id) {
        var _this = this;
        this.router.navigate(["/assistance/assist", id]).then(function () {
            _this.page.actionBarHidden = false;
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
            assistance_service_1.AssistanceService])
    ], PendingComponent);
    return PendingComponent;
}());
exports.PendingComponent = PendingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVuZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZW5kaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUVoRCxrRkFBOEU7QUFDOUUsc0RBQW9EO0FBRXBELGlEQUE4QztBQUM5QywwQ0FBdUM7QUFRdkM7SUFLSSwwQkFBb0IsTUFBYyxFQUNkLElBQVUsRUFDVixpQkFBb0M7UUFGcEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsZ0NBQWdDLENBQUE7SUFDakQsQ0FBQztJQUVELG1DQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQscUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQseUNBQWMsR0FBZDtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUN2QyxVQUFBLElBQUk7WUFDQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDZixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0IsQ0FBQztRQUNMLENBQUMsRUFDRCxVQUFBLE1BQU07WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQseUNBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsMENBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNyRSxFQUFFLENBQUMsQ0FBQyxvQkFBUyxDQUFDLENBQUMsQ0FBQztZQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3hDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQVMsR0FBVCxVQUFVLEVBQVU7UUFBcEIsaUJBSUM7UUFIRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2xELEtBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFwRFEsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDO3lDQU04QixlQUFNO1lBQ1IsV0FBSTtZQUNTLHNDQUFpQjtPQVAvQyxnQkFBZ0IsQ0FzRDVCO0lBQUQsdUJBQUM7Q0FBQSxBQXRERCxJQXNEQztBQXREWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXNzaXN0YW5jZX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL2Fzc2lzdGFuY2UuY2xhc3NcIjtcbmltcG9ydCB7QXNzaXN0YW5jZVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXNzaXN0YW5jZS5zZXJ2aWNlXCI7XG5pbXBvcnQge2lzQW5kcm9pZH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7U2VhcmNoQmFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhcHAtcGVuZGluZycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BlbmRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3BlbmRpbmcuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBlbmRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbGlzdDogQXJyYXk8QXNzaXN0YW5jZT47XG4gICAgc2VhcmNoQmFyOiBTZWFyY2hCYXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFzc2lzdGFuY2VTZXJ2aWNlOiBBc3Npc3RhbmNlU2VydmljZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gJ1RyYWJham9zIHBlbmRpZW50ZXMgZGUgYWNlcHRhcidcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBwYWdlTG9hZGVkKCkge1xuICAgICAgICB0aGlzLmdldEFzc2lzdGFuY2VzKCk7XG4gICAgfVxuXG4gICAgZ2V0QXNzaXN0YW5jZXMoKSB7XG4gICAgICAgIHRoaXMuYXNzaXN0YW5jZVNlcnZpY2UuYWxsKDEsIDIwKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdCA9IGRhdGEuY29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9ycy5zdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNsZWFyU2VhcmNoQmFyKCkge1xuICAgICAgICB0aGlzLnNldFNlYXJjaEJhck9mZigpO1xuICAgIH1cblxuICAgIGxvYWRTZWFyY2hCYXIoKSB7XG4gICAgICAgIHRoaXMuc2V0U2VhcmNoQmFyT2ZmKCk7XG4gICAgfVxuXG4gICAgc2V0U2VhcmNoQmFyT2ZmKCkge1xuICAgICAgICB0aGlzLnNlYXJjaEJhciA9IDxTZWFyY2hCYXI+dGhpcy5wYWdlLmdldFZpZXdCeUlkKFwibWFpbi1zZWFyY2gtYmFyXCIpO1xuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaEJhci5hbmRyb2lkLmNsZWFyRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFzc2lzdChpZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9hc3Npc3RhbmNlL2Fzc2lzdFwiLCBpZF0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==