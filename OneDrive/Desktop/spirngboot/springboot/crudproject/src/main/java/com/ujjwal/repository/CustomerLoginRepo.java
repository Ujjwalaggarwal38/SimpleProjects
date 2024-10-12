package com.ujjwal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ujjwal.entity.CustomerLogin;

@Repository
public interface CustomerLoginRepo extends JpaRepository<CustomerLogin, Long> {
    // CustomerLogin findByUsername(String name);
    
}