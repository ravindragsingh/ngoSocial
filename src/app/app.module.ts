import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterNowComponent } from './register-now/register-now.component';
import { CommonComponent } from './login/common/common.component';
import { DashboardComponent } from './login/common/dashboard/dashboard.component';
import { ExpenditureDetailsComponent } from './login/common/dashboard/expenditure-details/expenditure-details.component';
import { AvailableWithdrawComponent } from './login/common/dashboard/available-withdraw/available-withdraw.component';
import { MoneyToWithdrawComponent } from './money-to-withdraw/money-to-withdraw.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterNowComponent,
    CommonComponent,
    DashboardComponent,
    ExpenditureDetailsComponent,
    AvailableWithdrawComponent,
    MoneyToWithdrawComponent
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
