import { ForgotPasswordComponent } from './components/member/forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/member/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';
import { RegisterComponent } from './components/member/register/register.component';
import { AddHelpComponent } from './components/help/add-help/add-help.component';

import { AddFundComponent } from './components/help/add-fund/add-fund.component';
import { BalanceComponent } from './components/member/balance/balance.component';
import { HelpDescriptionComponent } from './components/help/help-description/help-description.component';



const routes: Routes = [
  {
    path:'', redirectTo: "home", pathMatch: 'full'
  },
  {
    //Links for the logged user will be children of home component
    path:"home", component: HomeComponent, 
    children: [
      {
        path:"charts", component: DashboardComponent
      },
      {
        path:"help", component: HelpComponent
      },
      
      {
        path:"add-help" , component:AddHelpComponent
      },
      {
        path:"add-fund", component: AddFundComponent
      },
      {
        path:"balance", component: BalanceComponent
      },
      {
        path:"help-description", component:HelpDescriptionComponent, pathMatch:'full'
      }
    ]
  },
  {
    path:"login", component: LoginComponent
  },
  {
    //new add
    path: "forgot-password", component: ForgotPasswordComponent
  },
  {
    path:"register", component: RegisterComponent, pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
