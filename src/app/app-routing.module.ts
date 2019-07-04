import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterNowComponent } from './register-now/register-now.component';
import { CommonComponent } from './login/common/common.component';
import { DashboardComponent } from './login/common/dashboard/dashboard.component';


const routes: Routes = [
{path:'', component:LoginComponent},
{path: 'register', component:RegisterNowComponent},
{path: 'common', component:CommonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
