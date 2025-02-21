package com.server.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.server.entity.User;

public interface UserRepository extends JpaRepository<User, String>{

	User findByUserName(String userName);
}
