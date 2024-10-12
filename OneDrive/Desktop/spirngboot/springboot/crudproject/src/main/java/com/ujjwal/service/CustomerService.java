package com.ujjwal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ujjwal.repository.CustomerRepository;

import lombok.RequiredArgsConstructor;
import com.ujjwal.entity.Customer;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository customerRepository;

    public Customer postCustomer (Customer customer){
        return customerRepository.save(customer);
    }

    public List<Customer> getAllCustomer() {
        return customerRepository.findAll() ;
    }

    public void deleteCustomer(Long id){
        customerRepository.deleteById(id);
    }

    public Customer getCustomerById(Long id){
        return customerRepository.findById(id).orElse(null);
    }

    public Customer updateCustomer(Long id, Customer customer){
        Optional<Customer> customeroptional = customerRepository.findById(id);
        if(customeroptional.isPresent()){
            Customer existingCustomer = customeroptional.get();
            existingCustomer.setEmail(customer.getEmail());
            existingCustomer.setName(customer.getName());
            existingCustomer.setPhone(customer.getPhone());
            return customerRepository.save(existingCustomer);

        }
        return null;
    }
}
