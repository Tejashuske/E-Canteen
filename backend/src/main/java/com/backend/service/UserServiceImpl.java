package com.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.backend.model.USER_ROLE;
import com.backend.model.User;
import com.backend.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;


    @Override
    public User getUserByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }


    @Override
    public ResponseEntity<String> signinUser(String userName, String password) {
        User user = userRepository.findByUserName(userName);
        if (user != null && user.getPassword().equals(password)) {
            return ResponseEntity.ok("Login successful");
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }


    @Override
    public USER_ROLE getCurrentUserRole() {
        return USER_ROLE.ROLE_STUDENT;
    }
}
