package com.server.service;

import java.util.List;

import com.server.entity.Cart;

public interface StudentService {
	
	boolean addToCartList(Long id);
	boolean removeFromCartList(Long id);
	List<Cart> getCartItems();
	
}
