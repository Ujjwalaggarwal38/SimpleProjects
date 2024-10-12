package com.newapp.journalApp.controller;

import com.newapp.journalApp.entity.User;
import com.newapp.journalApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserEntryController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAll(){
        return userService.getAll();
    }

    @PostMapping
    public void createUser(@RequestBody User user){
        userService.saveEntry(user);
    }

    @PutMapping("/{username}")
    public ResponseEntity<?> updateUser(@RequestBody User user,@PathVariable String username){
        User userinDb=userService.findByUsername(username);
        if(userinDb!=null){
            userinDb.setUsername(user.getUsername());
            userinDb.setPassword(user.getPassword());
            userService.saveEntry(userinDb);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

//    @DeleteMapping("/user")
//    public void deleteUser(@RequestBody User user){}
}
