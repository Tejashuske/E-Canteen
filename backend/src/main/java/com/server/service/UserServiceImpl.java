package com.server.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.entity.User;
import com.server.repository.UserRepository;

@Service
public class UserServiceImpl {

	@Autowired
    private UserRepository userRepository;

//    public boolean validateUser(String username, String password) {
//        Optional<User> user = userRepository.findById(username);
//        return user.isPresent() && user.get().getPassword().equals(password);
//    }
	
//	public String validateUser(String userName, String password) {
//        Optional<User> user = userRepository.findById(userName);
//        if (user.isPresent() && user.get().getPassword().equals(password)) {
//            return user.get().getRole().toString(); // Return role for frontend redirection
//        }
//        return "INVALID";
//    }
	
	public String validateUser(String userName, String password) {
	    Optional<User> user = userRepository.findById(userName);

	    if (user.isPresent()) {
	        System.out.println("✅ User Found: " + user.get().getUserName());
	        System.out.println("🔑 Stored Password: " + user.get().getPassword());
	        System.out.println("🔑 Entered Password: " + password);
	        System.out.println("🎭 Stored Role: " + user.get().getRole());

	        if (user.get().getPassword().equals(password)) {
	            String role = user.get().getRole().name(); // Convert Enum to String
	            System.out.println("✅ Returning Role: " + role);
	            return role;
	        } else {
	            System.out.println("❌ Password Mismatch!");
	        }
	    } else {
	        System.out.println("❌ User Not Found!");
	    }
	    return "INVALID";
	}


}
