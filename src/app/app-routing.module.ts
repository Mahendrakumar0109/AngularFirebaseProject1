import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { FileuploadComponent } from './component/fileupload/fileupload.component';

const routes: Routes = [
  {path:'',redirectTo:'file-upload',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'register',component:RegisterComponent},
  {path:'varify-email',component:VerifyEmailComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'file-upload', component:FileuploadComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
