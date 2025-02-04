package com.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.dto.UserDTO;
import com.server.entity.User;
import com.server.repository.UserRepository;
import com.server.service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	AdminService service;
	
	@Autowired
	UserRepository userRepository;

	@PostMapping("/addUser")
	public boolean addUser(@RequestBody UserDTO dto) {
		return service.addUser(dto);
	}

	@DeleteMapping("/removeUser/{userName}")
	public boolean removeUser(@PathVariable("userName") String userName) {
		return service.removeUser(userName);
	}

	@PutMapping("/updateUser/{userName}")
	public boolean updateUser(@PathVariable("userName") String userName,@RequestBody UserDTO dto) {
		return service.updateUser(userName, dto);
	}

	@GetMapping("/getUser/{userName}")
	public User getUser(@PathVariable("userName") String userName) {
		return service.getUser(userName);
	}
	
	@GetMapping("/getAllUsers")
	public List<User> getAllUsers() {
		return service.getAllUsers();
	}
}
