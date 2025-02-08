package com.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.server.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
