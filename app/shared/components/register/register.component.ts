import {Component, OnInit} from '@angular/core';
import {User} from "../../classes/user.class";

@Component({
    moduleId: module.id,
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    newUser: User;

    constructor() {
        this.newUser = new User(null, '', '', null, null, '', '', null, '');
    }

    ngOnInit() {
    }

    register() {

    }

}
