import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [ SignInComponent ],
    imports: [ CommonModule, ReactiveFormsModule, VMessageModule ]
})
export class HomeModule {

}