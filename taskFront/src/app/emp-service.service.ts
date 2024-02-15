import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})


export class EmpServiceService {


  private baseURL="http://localhost:8080/";

  constructor(private httpClient : HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL+"allEmp"}`);
  }

  addEmployee(employee:any): Observable<any>{
    return this.httpClient.post<any>(`${this.baseURL+"addEmployee"}`,employee);
  }

  
  getEmployeeById(id:number): Observable<Employee>{
      return this.httpClient.get<Employee>(`${this.baseURL+"findEmp"}/${id}`);

  }

  
  updateEmployee(id:number,employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"updateEmp"}/${id}`,employee);
  }

  deleteEmployee(id:number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL+"deleteEmp"}/${id}`);
  }


  

}


