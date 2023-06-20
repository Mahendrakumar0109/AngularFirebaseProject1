import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { Form1Component } from './form1/form1.component';
import{AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment.development';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { FileuploadComponent } from './component/fileupload/fileupload.component';

@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    Form1Component,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
