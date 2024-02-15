import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
 
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit{
  
 
  employee: Employee=new Employee();
  constructor(private employeeService: EmpServiceService,
    private router: Router){}
  ngOnInit(): void {
    
  }

  saveEmployee(){
    this.employeeService.addEmployee(this.employee).subscribe(data=>{
      console.log(data);
      
    },error=>console.log(error));
    
  }
  
  gotoallEmployees(){
    this.router.navigate([`/homepage`]);
  }

 /* onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }*/

  onSubmit(){
    if(this.employee.empName==null || this.employee.empDOJ==null ||
      this.employee.age==null || this.employee.empDOJ==null || this.employee.contactDetails.email==null || this.employee.contactDetails.mbno==null){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Enter Full Details of employee!',
        })
        return;
      }
      else{
      this.employeeService.addEmployee(this.employee).subscribe(data=>{
        this.saveEmployee;
        console.log(data);
        Swal.fire('Success','You have succesfully registered','success');
        this.gotoallEmployees();
      },error=>Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email or Mobile no already exits',
        })
      );

      }

      
  }

  gotoHomePage(){
    this.router.navigate([`homepage`]); 

  }

  

}
