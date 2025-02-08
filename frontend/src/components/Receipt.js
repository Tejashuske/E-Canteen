import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Receipt.css";

const Receipt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, totalPrice } = location.state || { cart: [], totalPrice: 0 };

  return (
    <div className="receipt-container">
      <h2 className="title">Order Receipt</h2>

      <table className="receipt-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>₹{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="total">Total: ₹{totalPrice}</h3>

      <p className="thank-you">🎉 Thank you for your order! Enjoy your meal. 🍽️</p>

      <button className="home-btn" onClick={() => navigate("/student")}>Back to Menu</button>
    </div>
  );
};

export default Receipt;