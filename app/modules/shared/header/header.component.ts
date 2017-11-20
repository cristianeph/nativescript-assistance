import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {confirm} from "ui/dialogs";

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Input() title: string;
    @Input() cancel: boolean;
    @Input() cancelText: string;
    @Input() cancelIcon: string;
    @Input() cancelPosition: string;

    constructor(private router: Router) {
        this.title = '';
        this.cancel = true;
        this.cancelText = 'Salir';
        this.cancelIcon = 'ic_menu_close_clear_cancel';
        this.cancelPosition = 'right';
    }

    ngOnInit() {
    }

    exit() {
        let options = {
            message: "Esta seguro que desea salir?",
            title: "Quiero salir",
            okButtonText: "Si",
            cancelButtonText: "No",
            neutralButtonText: "Cancelar"
        };
        confirm(options).then((result: boolean) => {
            if (result === true) {
                this.router.navigate(["/login"]);
            }
        });
    }

}
