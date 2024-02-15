package com.example.Employee_Management.Model;


import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
import org.springframework.lang.NonNull;

@Entity
@Table(name="contact_details")
public class ContactDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name ="EmailId")
    private String email;

    @Column(name="MobileNo")
    @Nonnull
    private long mbno;

    public ContactDetails() {
    }

    public ContactDetails(int id, String email, long mbno) {
        this.id = id;
        this.email = email;
        this.mbno = mbno;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getMbno() {
        return mbno;
    }

    public void setMbno(long mbno) {
        this.mbno = mbno;
    }
}
