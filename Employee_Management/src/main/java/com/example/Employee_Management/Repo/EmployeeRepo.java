package com.example.Employee_Management.Repo;

import com.example.Employee_Management.Model.ContactDetails;
import com.example.Employee_Management.Model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo  extends JpaRepository<Employee, Integer> {

}
