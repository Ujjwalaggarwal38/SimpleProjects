package com.ujjwal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ujjwal.entity.CustomerLogin;
import com.ujjwal.repository.CustomerLoginRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomerLoginService {
    @Autowired
    private final CustomerLoginRepo customerloginRepo;

    public String addCustomer(CustomerLogin customerLogin) {
        customerloginRepo.save(customerLogin);
        return customerLogin.getPassword();
    }


}
