package com.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.backend.model.USER_ROLE;
import com.backend.model.User;
import com.backend.service.UserService;


@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping("/{username}")
    public ResponseEntity<User> getUserByUserName(@PathVariable String username) {
        User user = userService.getUserByUserName(username);
        if (user != null) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.notFound().build();
    }



    @PostMapping("/signin")
    public ResponseEntity<String> signinUser(@RequestParam String userName, @RequestParam String password) {
        return userService.signinUser(userName, password);
    }



    @GetMapping("/role")
    public USER_ROLE getCurrentUserRole() {
        return userService.getCurrentUserRole();
    }
}
