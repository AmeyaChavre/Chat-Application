import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Included the RouterModule
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
// Included all the feature modules that we have created in the chat application
import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
// Since we want LoginComponent available at all times we will import that also 
import { LoginComponent } from './user/login/login.component';
// toastr modules imported
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({
  declarations: [
    AppComponent
  ],
  // Included all the feature modules in the root module also in imports section
  imports: [
    BrowserModule,
    HttpClientModule,
    ChatModule,
    UserModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      // We have enabled routing in a manner that we will always be opening Login Page by
      // default in our Application
      {path: 'login', component: LoginComponent, pathMatch: 'full' },
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: '*', component: LoginComponent},
      {path: '**', component: LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
