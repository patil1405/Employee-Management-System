import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmpServiceService } from '../emp-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit{

  id!:number;
  employee!:Employee;
  
  constructor(private route:ActivatedRoute,
    private employeeService:EmpServiceService,
    private router:Router){

  }



  ngOnInit(): void {
    
    this.id=this.route.snapshot.params[`id`];
    //this.employee=new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      console.log(data);
      this.employee=data;
      
    },error=>console.log(error));
    }

    
    gotoAllEmployee(){
      this.router.navigate([`allEmployees`])
    }

  }

  


