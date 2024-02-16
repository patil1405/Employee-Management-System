package com.example.Employee_Management.Controller;

import com.example.Employee_Management.Model.Employee;
import com.example.Employee_Management.Repo.EmployeeRepo;
import com.example.Employee_Management.Service.EmployeeService;
import com.example.Employee_Management.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:9091/manager/text/list")

public class EmployeeController {

    @Autowired
    EmployeeRepo employeeRepo;

    @Autowired
    EmployeeService empServiceImpl;




    @GetMapping("/homepage")
    public String homePage(){
        return "Welcome to HomePage";
    }

    @PostMapping("/addEmployee")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) throws Exception{
        Employee emp=empServiceImpl.addEmployee(employee);
        return new ResponseEntity<Employee>(emp,HttpStatus.CREATED);
    }

    @DeleteMapping("/deleteEmp/{empId}")
    public void deleteEmp(@PathVariable int empId){
        empServiceImpl.removeEmployee(empId);

    }

    @GetMapping("findEmp/{empId}")
    public ResponseEntity<Optional<Employee>> findEmpbyid(@PathVariable int empId)
    {
        Optional<Employee> emps=empServiceImpl.findEmpbyId(empId);
        return new ResponseEntity<>(emps, HttpStatus.ACCEPTED);
    }

    @GetMapping("/allEmp")
    public ResponseEntity<List<Employee>> listAllEmp(){
        List<Employee> lEmp=empServiceImpl.getAllEmployee();
        return new ResponseEntity<List<Employee>>(lEmp,HttpStatus.ACCEPTED);

    }

    @PutMapping("/updateEmp/{id}")
    public Employee updatedEmployee(@PathVariable int id,@RequestBody Employee updateEmpDetails ) throws Exception{
        return empServiceImpl.updateEmp(id, updateEmpDetails);

    }








}
