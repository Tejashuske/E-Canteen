package com.server.service;

import java.util.List;

import com.server.entity.Order;

public interface OrderService {

	Order placeOrder(Order order);
    Order getOrderById(Long id);
    List<Order> getAllOrders();
    void cancelOrder(Long id);
}
