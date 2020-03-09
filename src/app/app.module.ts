import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StripeModule} from 'stripe-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';
import { RegisterComponent } from './components/member/register/register.component';
import { ForgotPasswordComponent } from './components/member/forgot-password/forgot-password.component';
import { AddHelpComponent } from './components/help/add-help/add-help.component';
import { AddFundComponent } from './components/help/add-fund/add-fund.component';
import { BalanceComponent } from './components/member/balance/balance.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    HelpComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AddHelpComponent,
    AddFundComponent,
    BalanceComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    [ StripeModule.forRoot("pk_test_fREbU3WRBD9u30BhtLihVNTz") ]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
