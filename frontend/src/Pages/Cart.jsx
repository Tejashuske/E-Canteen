import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ cart }) {
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);  // Calculate total price

  const handleProceedToCheckout = () => {
    navigate('/checkout');  // Redirect to the Checkout page
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.quantity} x ${item.price} = ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p><strong>Total: ${totalPrice}</strong></p>
          <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
