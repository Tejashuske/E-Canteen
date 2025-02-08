package com.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.context.request.WebRequest;

import com.server.entity.Cart;
import com.server.service.CartService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@SessionAttributes("cart")
public class StudentController {

    @Autowired
    private CartService cartService;

    // Add item to cart
    @PostMapping("/addToCartList/{id}")
    public boolean addToCartList(@PathVariable("id") Long id, WebRequest request) {
        return cartService.addToCartList(id, request);  // Passing the WebRequest for session handling
    }

    // Remove item from cart
    @DeleteMapping("/removeFromCartList/{id}")
    public boolean removeFromCartList(@PathVariable("id") Long id, WebRequest request) {
        return cartService.removeFromCartList(id, request);  // Passing the WebRequest for session handling
    }

    // Get all cart items
    @GetMapping("/getCart")
    public List<Cart> getCart(WebRequest request) {
        return cartService.getCartItemsFromSession(request);  // Fetching cart items from session
    }
}
