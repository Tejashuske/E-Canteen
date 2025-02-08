import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./StudentPage.css";

const StudentPage = ({ cart = [], setCart }) => {
  const [search, setSearch] = useState("");
  const [quantities, setQuantities] = useState({});
  const [user, setUser] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();

  // ✅ Wrap setCart in useCallback to prevent unnecessary re-renders
  const updateCart = useCallback(
    (updatedCart) => {
      setCart(updatedCart);
    },
    [setCart]
  );

  useEffect(() => {
    const fetchSessionUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/sessionUser",
          { withCredentials: true }
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching session user:", error);
      }
    };

    fetchSessionUser();
  }, []);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/vendor/getAllMenu"
        );
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenu();
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const initialQuantities = {};
      cart.forEach((item) => (initialQuantities[item.id] = item.quantity));
      setQuantities(initialQuantities);
    }
  }, [cart]);

  useEffect(() => {
    if (menuItems.length > 0) {
      const resetQuantities = {};
      menuItems.forEach((item) => (resetQuantities[item.id] = 0));

      setQuantities(resetQuantities);
      updateCart([]); // ✅ Use memoized setCart
    }
  }, [menuItems, updateCart]); // ✅ Using memoized setCart

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => {
      const updatedQty = (prev[id] || 0) + delta;
      if (updatedQty < 0) return prev;

      const newQuantities = { ...prev, [id]: updatedQty };

      const updatedCart = menuItems
        .filter((item) => newQuantities[item.id] > 0)
        .map((item) => ({ ...item, quantity: newQuantities[item.id] }));

      updateCart(updatedCart); // ✅ Use memoized setCart
      return newQuantities;
    });
  };

  const totalCartCount = Array.isArray(cart)
    ? cart.reduce((sum, item) => sum + item.quantity, 0)
    : 0;

  return (
    <div className="student-container">
      <h2 className="title">Student Dashboard</h2>
      {user ? (
        <p style={{ textAlign: "center", color: "#FC8019" }}>
          Welcome {user.name} ! Check out today's menu and place your order.
        </p>
      ) : (
        <p style={{ textAlign: "center", color: "#FC8019" }}>
          Loading user data...
        </p>
      )}

      <input
        type="text"
        placeholder="Search menu..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="menu-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price (₹)</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {menuItems
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    className="qty-btn"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="qty-value">{quantities[item.id] || 0}</span>
                  <button
                    className="qty-btn"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <button
        className="cart-btn"
        onClick={() => navigate("/cart", { state: { cart } })}
        disabled={totalCartCount === 0}
      >
        Go to Cart ({totalCartCount})
      </button>
    </div>
  );
};

export default StudentPage;