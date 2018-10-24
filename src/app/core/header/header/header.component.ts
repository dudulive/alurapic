import { Router } from '@angular/router';
import { UserService } from './../../user/user.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../user/user';

@Component({
    moduleId: module.id,
    selector: 'ap-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {
    
    user$: Observable<User>;

    constructor(private userService: UserService,
            private router: Router){
        this.user$ = userService.getUsers();
    }

    lougout(){
        this.userService.logout();
        this.router.navigate(['']);
    }

}