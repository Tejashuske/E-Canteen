package com.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.entity.Cart;
import com.server.entity.Order;
import com.server.entity.USER_ROLE;
import com.server.entity.User;
import com.server.repository.OrderRepository;
import com.server.service.AdminService;
import com.server.service.UserServiceImpl;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class LoginController {

    @Autowired
    private UserServiceImpl userService;
    
    @Autowired
    private AdminService adminService;
    
    @Autowired
    HttpSession session;
    
    @Autowired
    OrderRepository orderRepository;
    
    @PostMapping("/saveOrderToSession")
    public ResponseEntity<String> saveOrderIntoSession(@RequestBody Order order, HttpSession session) {
        if (order == null) {
            return ResponseEntity.badRequest().body("Invalid order data");
        }

        session.setAttribute("order", order);
        return ResponseEntity.ok("Order stored in session successfully");
    }
    
    @PostMapping("/saveOrderIntoDatabase")
    public ResponseEntity<String> saveOrderIntoDatabase(@RequestBody Order order) {
        if (order == null) {
            return ResponseEntity.badRequest().body("Invalid order data");
        }

        orderRepository.save(order);
        return ResponseEntity.ok("Order stored in database successfully");
    }
    
    @GetMapping("/getAllOrders")
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderRepository.findAll();
        if (orders.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/getOrderFromSession")
    public ResponseEntity<?> getOrderFromSession(HttpSession session) {
        Object order = session.getAttribute("order");

        if (order == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No order found in session");
        }

        try {
            Order sessionOrder = (Order) order;
            return ResponseEntity.ok(sessionOrder);
        } catch (ClassCastException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Session data is corrupted");
        }
    }


    // Endpoint to get the session user
    @GetMapping("/sessionUser")
    public ResponseEntity<?> getSessionUser(HttpSession session) {
        Object user = session.getAttribute("user");
        
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found in session");
        }

        // Safely convert the user object to the correct type
        try {
            User sessionUser = (User) user;
            return ResponseEntity.ok(sessionUser);
        } catch (ClassCastException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Session data is corrupted");
        }
    }

    // Endpoint to handle login
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User userEntity, HttpSession session) {
        String role = userService.validateUser(userEntity.getUserName(), userEntity.getPassword());
        System.out.println("🔹 Sending role to frontend: " + role);

        if (!role.equals("INVALID")) {
            // Retrieve user using AdminService
            User user = adminService.getStudent(userEntity.getUserName());

            if (user == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }

            try {
                // Assign role from the validated role string
                USER_ROLE userRole = USER_ROLE.valueOf(role); // Convert String to Enum
                user.setRole(userRole);
            } catch (IllegalArgumentException e) {
                return ResponseEntity.badRequest().body("Invalid role");
            }

            // Store user and cart in session
            session.setAttribute("user", user);
            session.setAttribute("cart", new Cart());

            return ResponseEntity.ok(role); // Send role to frontend
        }

        return ResponseEntity.badRequest().body("Invalid credentials");
    }
}
