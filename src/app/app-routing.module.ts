import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterNowComponent } from './register-now/register-now.component';
import { CommonComponent } from './login/common/common.component';
import { DashboardComponent } from './login/common/dashboard/dashboard.component';
import { ExpenditureDetailsComponent } from './login/common/dashboard/expenditure-details/expenditure-details.component';
import { AvailableWithdrawComponent } from './login/common/dashboard/available-withdraw/available-withdraw.component';


const routes: Routes = [
{path:'', component:LoginComponent},
{path: 'register', component:RegisterNowComponent},
{path: 'common', component:CommonComponent,
  children : [
    {path: '', redirectTo :'dashboard', pathMatch : 'full' },
    {path: 'dashboard', component:DashboardComponent},
    {path: 'dashboard/expenditure', component:ExpenditureDetailsComponent},
    {path: 'dashboard/withdrawMoney', component:AvailableWithdrawComponent}
  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
