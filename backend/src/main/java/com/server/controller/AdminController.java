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
import com.server.service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	AdminService service;
	

	@PostMapping("/addUser")
	public boolean addUser(@RequestBody UserDTO dto) {
		return service.addStudent(dto);
	}

	@DeleteMapping("/removeUser/{userName}")
	public boolean removeUser(@PathVariable("userName") String userName) {
		return service.removeStudent(userName);
	}

	@PutMapping("/updateUser/{userName}")
	public boolean updateUser(@PathVariable("userName") String userName,@RequestBody UserDTO dto) {
		return service.updateStudent(userName, dto);
	}

	@GetMapping("/getUser/{userName}")
	public User getUser(@PathVariable("userName") String userName) {
		return service.getStudent(userName);
	}
	
	@GetMapping("/getAllUsers")
	public List<User> getAllUsers() {
		return service.getAllStudents();
	}
	
	@PostMapping("/addVendor")
	public boolean addVendor(@RequestBody UserDTO dto) {
		return service.addVendor(dto);
	}
	
	@GetMapping("/getAllVendors")
	public List<User> getAllVendors() {
		return service.getAllVendors();
	}
}
