package com.server.service;

import java.util.List;

import com.server.dto.UserDTO;
import com.server.entity.User;

public interface AdminService {

	boolean addStudent(UserDTO dto);
	boolean removeStudent(String userName);
	boolean updateStudent(String userName, UserDTO dto);
	User getStudent(String userName);
	List<User> getAllStudents();
	boolean addVendor(UserDTO dto);
	List<User> getAllVendors();
}
