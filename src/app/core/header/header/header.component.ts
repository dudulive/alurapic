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
    user: User;

    constructor(userService: UserService){
        this.user$ = userService.getUsers();
        this.user$.subscribe(user => this.user = user);
    }

}