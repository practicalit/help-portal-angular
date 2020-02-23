import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';
import { RegisterComponent } from './components/member/register/register.component';
import { AddFundComponent } from './components/help/add-fund/add-fund.component';


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
        path:"add-fund", component: AddFundComponent
      }
    ]
  },
  {
    path:"login", component: LoginComponent
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
