package com.example.Employee_Management.Model;

import jakarta.persistence.*;
import org.springframework.boot.autoconfigure.amqp.RabbitConnectionDetails;

import java.sql.Date;


@Entity
@Table(name = "EmployeeDetails")
public class Employee {




    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int empId;

    @Column(name = "Name")
    private String empName;

    @Column(name = "Department")
    private String empDept;

    @Column(name = "Age")
    private int age;

    @Column(name = "Date of Joining")
    private java.sql.Date empDOJ;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cd_id", referencedColumnName = "id")
    public ContactDetails contactDetails=new ContactDetails();


    public int getEmpId() {
        return empId;
    }

    public void setEmpId(int empId) {
        this.empId = empId;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public String getEmpDept() {
        return empDept;
    }

    public void setEmpDept(String empDept) {
        this.empDept = empDept;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Date getEmpDOJ() {
        return empDOJ;
    }

    public void setEmpDOJ(Date empDOJ) {
        this.empDOJ = empDOJ;
    }


    public Employee() {
    }

    public Employee(int empId, String empName, String empDept, int age, Date empDOJ) {
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.age = age;
        this.empDOJ = empDOJ;

    }

    public ContactDetails getContactDetails() {
        return contactDetails;
    }

    public void setContactDetails(ContactDetails contactDetails) {
        this.contactDetails = contactDetails;
    }

    public Employee(int empId, String empName, String empDept, int age, Date empDOJ, ContactDetails contactDetails) {
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.age = age;
        this.empDOJ = empDOJ;
        this.contactDetails = contactDetails;
    }
}
