package com.server.service;

import java.util.List;

import com.server.dto.UserDTO;
import com.server.entity.User;

public interface AdminService {

	boolean addUser(UserDTO dto);
	boolean removeUser(String userName);
	boolean updateUser(String userName, UserDTO dto);
	User getUser(String userName);
	List<User> getAllUsers();
}
