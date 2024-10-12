package com.ujjwal.crudapp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ujjwal.crudapp.service.DetailsServiveImp;
import com.ujjwal.crudapp.service.Studentservice;

@RestController
public class TestController {

  //object of interface
  @Autowired
  private Studentservice studentservice;


  @RequestMapping("/test")
  @ResponseBody
  public String handle() {
    return "This is jsu hjtu";
  }
  @GetMapping("/home")
  public String home() {
    return "home";
  }

  @GetMapping("/details")
  public List<Student> getDetails(){
   return studentservice.getDetails();
  }
}
