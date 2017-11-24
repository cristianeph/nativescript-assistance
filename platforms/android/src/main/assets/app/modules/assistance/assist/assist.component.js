"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../../../shared/services/user.service");
var AssistComponent = (function () {
    function AssistComponent(route, router, userService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.title = 'Espere, estamos cargando la información del cliente';
        this.route.params.subscribe(function (params) {
            _this.id = +params['clientid'];
        });
    }
    AssistComponent.prototype.ngOnInit = function () {
    };
    AssistComponent.prototype.pageLoaded = function () {
        var _this = this;
        this.userService.infoCustomer(this.id).subscribe(function (data) {
            console.log('Object => ', JSON.stringify(data));
            _this.user = data;
            _this.title = _this.user.lastnames + ', ' + _this.user.firstnames;
        }, function (error) {
        });
    };
    AssistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-assist',
            templateUrl: './assist.component.html',
            styleUrls: ['./assist.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            user_service_1.UserService])
    ], AssistComponent);
    return AssistComponent;
}());
exports.AssistComponent = AssistComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFzc2lzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsMENBQXVEO0FBR3ZELHNFQUFrRTtBQVFsRTtJQUlJLHlCQUFvQixLQUFxQixFQUNyQixNQUFjLEVBQ2QsV0FBd0I7UUFGNUMsaUJBT0M7UUFQbUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcscURBQXFELENBQUE7UUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUM5QixLQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDNUMsVUFBQSxJQUFJO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQ2xFLENBQUMsRUFDRCxVQUFBLEtBQUs7UUFFTCxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUEzQlEsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDeEMsQ0FBQzt5Q0FLNkIsdUJBQWM7WUFDYixlQUFNO1lBQ0QsMEJBQVc7T0FObkMsZUFBZSxDQTZCM0I7SUFBRCxzQkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jbGFzc2VzL3VzZXIuY2xhc3NcIjtcbmltcG9ydCB7Q3VzdG9tZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2N1c3RvbWVyLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhcHAtYXNzaXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXNzaXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hc3Npc3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFzc2lzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBpZDogbnVtYmVyO1xuICAgIHVzZXI6IFVzZXI7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gJ0VzcGVyZSwgZXN0YW1vcyBjYXJnYW5kbyBsYSBpbmZvcm1hY2nDs24gZGVsIGNsaWVudGUnXG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5pZCA9ICtwYXJhbXNbJ2NsaWVudGlkJ107XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIHBhZ2VMb2FkZWQoKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuaW5mb0N1c3RvbWVyKHRoaXMuaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPYmplY3QgPT4gJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IGRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMudXNlci5sYXN0bmFtZXMgKyAnLCAnICsgdGhpcy51c2VyLmZpcnN0bmFtZXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==