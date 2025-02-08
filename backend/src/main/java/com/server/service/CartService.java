package com.server.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.context.request.WebRequest;

import com.server.entity.Cart;
import com.server.repository.CartRepository;

@Service
public class CartService {

    private final CartRepository cartRepository;

    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    // Add item to cart
    public boolean addToCartList(Long itemId, WebRequest request) {
        List<Cart> cartItems = getCartItemsFromSession(request);
        Cart item = cartRepository.findById(itemId).orElse(null);
        if (item != null) {
            cartItems.add(item);
            request.setAttribute("cart", cartItems, WebRequest.SCOPE_SESSION);
            return true;
        }
        return false;
    }

    // Remove item from cart
    public boolean removeFromCartList(Long itemId, WebRequest request) {
        List<Cart> cartItems = getCartItemsFromSession(request);
        Cart item = cartRepository.findById(itemId).orElse(null);
        if (item != null) {
            cartItems.remove(item);
            request.setAttribute("cart", cartItems, WebRequest.SCOPE_SESSION);
            return true;
        }
        return false;
    }

    // Get all cart items from session
    public List<Cart> getCartItemsFromSession(WebRequest request) {
        @SuppressWarnings("unchecked")
        List<Cart> cartItems = (List<Cart>) request.getAttribute("cart", WebRequest.SCOPE_SESSION);
        if (cartItems == null) {
            cartItems = new ArrayList<>();
        }
        return cartItems;
    }

    // Fetch the cart items to be displayed
    public List<Cart> getCartItems() {
        // You could modify this to return items from the session or a database
        return cartRepository.findAll();
    }
}
