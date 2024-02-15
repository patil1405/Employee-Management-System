import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrl: './all-employee.component.css'
})
export class AllEmployeeComponent implements OnInit{

  employees!: Employee[];
 
  constructor(private employeeService: EmpServiceService,
    private router: Router) { }
 
  ngOnInit(): void {
  
    this.getEmployees();
      
    }

    private getEmployees(){
      this.employeeService.getEmployeeList().subscribe(data=>{
        this.employees=data;
      });
    }

   
    updateEmployee(id: number){
      this.router.navigate([`updateEmployee`,id]);

    }


    /*deleteEmployee(id: number){
      this.employeeService.deleteEmployee(id).subscribe(data=>{
        Swal.fire('Success','You have succesfully registered','success');
        console.log(data);
        this.getEmployees();
        
      },error=>console.log(error));
    }*/

    deleteEmployee(id: number){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeService.deleteEmployee(id).subscribe(data=>{
          this.getEmployees();
        })
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
    
    findEmployee(id:number){
      this.router.navigate([`employeeDetails`,id]);
    }


    gotoHomePage(){
      this.router.navigate([`homepage`])
    }

  }
