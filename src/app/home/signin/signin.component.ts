import { Router } from '@angular/router';
import { AuthService } from './../../core/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
    
    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder, 
        private authService: AuthService,
        private router : Router){

    }

    ngOnInit(): void {
       this.loginForm = this.formBuilder.group({
           userName: ['', Validators.required],
           password: ['', Validators.required],
       });
    }

    login(){
        const password = this.loginForm.get('password').value;
        const userName = this.loginForm.get('userName').value;

        this.authService.authenticate(userName, password).subscribe(
            () => { this.router.navigate(['user', userName]),
            err => {
                console.log(err);
                this.loginForm.reset();
                this.userNameInput.nativeElement.focus();
            }
        );
    }
}