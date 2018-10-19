import { AuthService } from './../../core/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
    
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, 
        private authService: AuthService){

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
            () => {},
            err => {
                console.log(err);
                this.loginForm.reset();
            }
        );
    }
}