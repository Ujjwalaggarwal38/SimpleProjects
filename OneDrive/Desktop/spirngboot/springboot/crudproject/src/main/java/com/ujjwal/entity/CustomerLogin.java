package com.ujjwal.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class CustomerLogin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;

    // public CustomerLogin() {

    // }

    // public CustomerLogin(Long id, String name, String email, String password) {
    //     this.id = id;
    //     this.name = name;
    //     this.email = email;
    //     this.password = password;
    // }

    // public void setCustomerName(String name){
    //     this.name = name;
    // }
    // public String getCustomerName() {
    //     return name;
    // }

    // public String getCustomerEmail() {
    //     return email;
    // }
    // public Long getId(){
    //     return id;
    // }



}
