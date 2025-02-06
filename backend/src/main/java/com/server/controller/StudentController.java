package com.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.service.StudentService;

@RestController
@RequestMapping("/user")
public class StudentController {
	
	@Autowired
	StudentService userService;
	

	@PostMapping("/addToCartList/{id}")
	public boolean addToCartList(@PathVariable("id") Long id) {
		return userService.addToCartList(id);
	}

	@DeleteMapping("/removeFromCartList/{id}")
	public boolean removeFromCartList(@PathVariable("id") Long id) {
		return userService.removeFromCartList(id);
	}
}
