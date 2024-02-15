package com.example.Employee_Management.Service;


import com.example.Employee_Management.Model.Employee;

import java.util.List;

public interface EmployeeService {

    public Employee addEmployee(Employee e)throws  Exception ;

    public Employee updateEmp(int id, Employee employee) throws Exception;

    public void removeEmployee(int id);


    public java.util.Optional<Employee> findEmpbyId(int id);

    public List<Employee> getAllEmployee();
}
