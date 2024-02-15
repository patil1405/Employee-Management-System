import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmpServiceService } from '../emp-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEMployeeComponent implements OnInit {
  id!:number;
  employee: Employee=new Employee();
  constructor(private employeeService:EmpServiceService,
    private route:ActivatedRoute,
    private router: Router){

  }
  
  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      console.log(data);
      this.employee=data;
    },error=>console.log(error));
}

 
 /* onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
      this.goToAllEmployees();
      Swal.fire('Success','Employee Updated Successfully','success');
    },error=>console.log(error));
    
  }*/

  onSubmit(){
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
        this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
          this.goToAllEmployees();
        },error=>Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email or Mobile no already Exits',
          })
        );

        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes were not saved", "", "info");
      }
    });
  }

  goToAllEmployees(){
    this.router.navigate([`/allEmployees`]);
  }

  gotoAllEmployee(){
    this.router.navigate([`allEmployees`])
  }


}
