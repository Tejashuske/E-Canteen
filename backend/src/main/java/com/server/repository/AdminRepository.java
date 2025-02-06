package com.server.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.server.entity.User;

public interface AdminRepository extends JpaRepository<User, String> {

	@Query("SELECT u FROM User u WHERE u.role = ROLE_STUDENT")
	List<User> getAllStudents();
	
	@Query("SELECT u FROM User u WHERE u.role = ROLE_VENDOR")
	List<User> getAllVendors();
}
