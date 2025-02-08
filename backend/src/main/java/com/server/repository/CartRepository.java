package com.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.server.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Long>{

}
