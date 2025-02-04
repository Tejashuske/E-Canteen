package com.backend.service;

import org.springframework.http.ResponseEntity;
import com.backend.model.USER_ROLE;
import com.backend.model.User;

public interface UserService {
    User getUserByUserName(String userName);
    ResponseEntity<String> signinUser(String userName, String password);  
    USER_ROLE getCurrentUserRole();
}
