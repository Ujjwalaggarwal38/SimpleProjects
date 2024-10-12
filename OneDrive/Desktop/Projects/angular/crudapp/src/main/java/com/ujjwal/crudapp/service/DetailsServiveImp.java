package com.ujjwal.crudapp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ujjwal.crudapp.Student;


@Service
public class DetailsServiveImp implements Studentservice{

    List <Student> list;
    public DetailsServiveImp(){
        list=new ArrayList<>();
        list.add(new Student("a","auhnk@gmai.com","87973792"));
        list.add(new Student("b","bi@gmail.com","9200833"));
    }

    @Override
    public List<Student> getDetails() {
            return list;
    }

}
