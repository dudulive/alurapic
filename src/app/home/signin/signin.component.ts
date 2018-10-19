import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
    
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder){

    }

    ngOnInit(): void {
       this.loginForm = this.formBuilder.group({
           userName: ['', Validators.required],
           password: ['', Validators.required],
       });
    }

}