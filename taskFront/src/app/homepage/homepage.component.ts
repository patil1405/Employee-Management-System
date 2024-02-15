import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {


  employee:Employee=new Employee();
  constructor(private route:Router){

  }

  ngOnInit(): void {
    
  }

  gotoAddEmployee(){
    this.route.navigate([`/addEmployee`]);
  }

  allEMployees(){
    this.route.navigate([`/allEmployees`]);
  }
  

}
