package com.server.service;

import com.server.entity.User;

public interface StudentService {
	
	boolean login(User user);
	boolean addToCartList(Long id);
	boolean removeFromCartList(Long id);
	
}
