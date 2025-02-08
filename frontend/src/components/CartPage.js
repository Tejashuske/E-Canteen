import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CartPage.css";

const CartPage = ({ setCart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];
  const [studentName, setStudentName] = useState("");

  // Fetch user from session
  useEffect(() => {
    axios.get("http://localhost:8080/api/sessionUser", { withCredentials: true })
      .then(response => {
        setStudentName(response.data.name || "Guest");
      })
      .catch(error => console.error("Error fetching session user:", error));
  }, []);

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleProceedToPayment = async () => {
    if (cart.length === 0) return;

    const orderData = {
      studentName,
      menuList: cart.map(item => ({
        itemId: item.id,
        itemName: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      total: totalPrice
    };

    try {
      const response = await axios.post("http://localhost:8080/api/saveOrderIntoDatabase", orderData, {
        withCredentials: true,
      });

      if (response.status === 200) {
        navigate("/receipt", { state: { cart, totalPrice } });
      } else {
        console.error("Failed to store order in session");
      }
    } catch (error) {
      console.error("Error saving order:", error);
    }
  };

  return (
    <div className="cart-container">
      <h2 className="title">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty!</p>
      ) : (
        <>
          <p className="welcome">Welcome, {studentName}!</p>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price (₹)</th>
                <th>Quantity</th>
                <th>Total (₹)</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="total">Total Price: ₹{totalPrice}</h3>

          <div className="cart-actions">
            <button className="back-btn" onClick={() => navigate(-1)}>Modify Order</button>
            <button className="checkout-btn" onClick={handleProceedToPayment}>Proceed to Payment</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
