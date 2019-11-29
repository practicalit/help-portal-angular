import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


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
      }
    ]
  },
  {
    path:"login", component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
