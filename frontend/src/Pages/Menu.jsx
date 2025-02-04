import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Menu({ cart, setCart }) {
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, name: 'Cheeseburger', description: 'A juicy cheeseburger with lettuce, tomato, and cheese.', price: 10 },
    { id: 2, name: 'Veggie Pizza', description: 'A fresh veggie pizza with mushrooms, olives, and peppers.', price: 12 },
    { id: 3, name: 'Pasta Alfredo', description: 'A creamy Alfredo pasta with garlic bread on the side.', price: 15 },
    { id: 4, name: 'Caesar Salad', description: 'A classic Caesar salad with crispy croutons and parmesan.', price: 8 },
    { id: 5, name: 'Tacos', description: 'Tacos with your choice of beef or chicken, topped with salsa and sour cream.', price: 7 },
    { id: 6, name: 'Chicken Wings', description: 'Spicy chicken wings served with ranch dipping sauce.', price: 9 },
  ];

  // Function to handle increase and decrease of quantity
  const handleQuantityChange = (itemId, change) => {
    setQuantities(prev => {
      const currentQuantity = prev[itemId] || 0;
      const newQuantity = Math.max(currentQuantity + change, 0);  // Ensure quantity is not negative
      return { ...prev, [itemId]: newQuantity };
    });
  };

  // Function to add item with selected quantity to cart
  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 0;  // Default to 1 if no quantity selected
    const updatedCart = [...cart];
    
    // Check if item already exists in cart, if so, update the quantity
    const existingItemIndex = updatedCart.findIndex(cartItem => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += quantity;
    } else {
      updatedCart.push({ ...item, quantity });
    }
    
    setCart(updatedCart);
    navigate('/cart');  // Redirect to cart page
  };

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p><strong>${item.price}</strong></p>

            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
              <span>{quantities[item.id] || 1}</span>  {/* Show the selected quantity */}
              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
            </div>

            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
