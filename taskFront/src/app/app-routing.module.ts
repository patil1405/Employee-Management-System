import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Router } from '@angular/router';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { UpdateEMployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
const routes: Routes = [
  {path:'', redirectTo:'homepage', pathMatch:'full'},
  {path:'homepage', component:HomepageComponent},
 {path:'addEmployee', component:AddEmployeeComponent},
 {path:'allEmployees', component:AllEmployeeComponent},
 {path:'updateEmployee/:id', component:UpdateEMployeeComponent},
 {path:'employeeDetails/:id', component:EmployeeDetailsComponent},

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
