import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// include the router module here
import { RouterModule, Routes } from '@angular/router';
// import FormsModule so that it can be used in SignUp Component
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([

      // notice that we are not including the login component 
      // as it has alrteady been provided in  root module using forRoot() method
      
      { path: 'sign-up', component: SignupComponent }
      
    ])
  ]
})
export class UserModule { }
