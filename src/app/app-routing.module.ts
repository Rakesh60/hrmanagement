import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'employeeform',component:EmployeeRegComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
