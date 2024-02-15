package com.example.Employee_Management.Repo;


import com.example.Employee_Management.Model.ContactDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepo extends JpaRepository<ContactDetails, Integer> {
    ContactDetails findByEmail(String email);
    ContactDetails findByMbno(long mbno);
}