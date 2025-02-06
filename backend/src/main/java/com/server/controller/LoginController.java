package com.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.entity.Cart;
import com.server.entity.USER_ROLE;
import com.server.entity.User;
import com.server.service.UserServiceImpl;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api")
public class LoginController {

	@Autowired
    private UserServiceImpl userService;

	
//	@PostMapping("/login")
//	public ResponseEntity<String> loginUser(@RequestBody User user, HttpSession session) {
//	    String role = userService.validateUser(user.getUserName(), user.getPassword());
//	    System.out.println("🔹 Sending role to frontend: " + role);
//	    return ResponseEntity.ok(role);
//	}
	
	
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User userEntity, HttpSession session) {
        String role = userService.validateUser(userEntity.getUserName(), userEntity.getPassword());
        System.out.println("🔹 Sending role to frontend: " + role);

        if (!role.equals("INVALID")) {
            User user = new User();
            user.setUserName(userEntity.getUserName());

            try {
                USER_ROLE userRole = USER_ROLE.valueOf(role); // Convert String to Enum
                user.setRole(userRole);
            } catch (IllegalArgumentException e) {
                return ResponseEntity.badRequest().body("Invalid role");
            }

            session.setAttribute("user", user); // Store user in session
            session.setAttribute("cart", new Cart()); // Store cart in session

            return ResponseEntity.ok(role); // Send role to frontend
        }

        return ResponseEntity.badRequest().body("Invalid credentials");
    }

}
