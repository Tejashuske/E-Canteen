package com.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.entity.Menu;
import com.server.service.VendorService;

@RestController
@RequestMapping("/vendor")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class VendorController {

	@Autowired
	VendorService vendorService;
	
	@PostMapping("/addMenu")
	public boolean addMenu(@RequestBody Menu menu) {
		return vendorService.addMenu(menu);
	}

	@DeleteMapping("/removeMenu/{id}")
	public boolean removeMenu(@PathVariable("id") Long id) {
		return vendorService.removeMenu(id);
	}

	@PutMapping("/updateMenu/{id}")
	public boolean updateMenu(@PathVariable("id") Long id,@RequestBody Menu menu) {
		return vendorService.updateMenu(id, menu);
	}

	@GetMapping("/getMenu/{id}")
	public Menu getMenu(@PathVariable("id") Long id) {
		return vendorService.getMenu(id);
	}

	@GetMapping("/getAllMenu")
	public List<Menu> getAllMenu() {
		return vendorService.getAllMenu();
	}

}
