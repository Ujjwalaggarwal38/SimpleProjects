package com.ujjwal.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ujjwal.entity.CustomerLogin;
import com.ujjwal.service.CustomerLoginService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/customer")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CustomerLoginController {
    private final CustomerLoginService customerLoginService;

@PostMapping("/login")
public String addCustomer(@RequestBody CustomerLogin customerLogin){
    return customerLoginService.addCustomer(customerLogin);
}

}
