package com.example.Employee_Management.Service;



import com.example.Employee_Management.Model.ContactDetails;
import com.example.Employee_Management.Model.Employee;
import com.example.Employee_Management.Repo.ContactRepo;
import com.example.Employee_Management.Repo.EmployeeRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {



    @Autowired
    private EmployeeRepo employeeRepo;

    @Autowired
    private ContactRepo contactRepo;

    @Override
    @Transactional
    public Employee addEmployee(Employee employee) throws Exception{

        ContactDetails local=contactRepo.findByEmail(employee.getContactDetails().getEmail());
        ContactDetails mbno=contactRepo.findByMbno(employee.getContactDetails().getMbno());
        if(local==null && mbno == null){
            return employeeRepo.save(employee);

        }
        else {
            throw new Exception("Email already exists");

        }



    }


    @Override
    public void removeEmployee(int id) {
        employeeRepo.deleteById(id);
    }

    @Override
    public Optional<Employee> findEmpbyId(int id) {
        Optional<Employee> emp=employeeRepo.findById(id);
        if(emp.isPresent()){
            return emp;
        }
        else {
            return null;
        }

    }



    @Override
    public List<Employee> getAllEmployee() {
        List<Employee> emp=employeeRepo.findAll();
        return emp;
    }

    @Override
    public Employee updateEmp(int id,  Employee employee) throws Exception {
        if (employeeRepo.existsById(id)) {
            employee.setEmpId(id);
            return employeeRepo.save(employee);
        }
        else {
            throw new NoSuchElementException("Employee not found with id: " + id);
        }




    }


}
