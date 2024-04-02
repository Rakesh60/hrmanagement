import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path:'employeeform',component:EmployeeRegComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
