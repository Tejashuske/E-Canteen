import React from 'react';
import { useNavigate } from 'react-router-dom';

function CheckoutForm({ cart }) {
  const navigate = useNavigate();

  // Ensure cart is an array (even if it's undefined, it defaults to an empty array)
  const cartItems = cart || [];

  // Calculate the total price safely
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Handle form submission (for checkout)
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    navigate('/'); // Redirect to homepage (or other page after checkout)
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      
      {/* Cart Summary */}
      <div className="cart-summary">
        <h2>Your Order</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - {item.quantity} x ${item.price} = ${item.price * item.quantity}
              </li>
            ))}
          </ul>
        )}
        <p><strong>Total: ${totalPrice}</strong></p>
      </div>

      {/* User Details Form */}
      <form onSubmit={handlePlaceOrder}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>

        <div>
          <label>Address:</label>
          <textarea name="address" required />
        </div>

        <div>
          <label>Payment Method:</label>
          <select name="paymentMethod" required>
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>

        {/* Submit Order Button */}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default CheckoutForm;
