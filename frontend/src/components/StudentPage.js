import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API calls
import "./StudentPage.css"; // Import CSS for styling

const StudentPage = ({ cart, setCart }) => {
  const [search, setSearch] = useState("");
  const [quantities, setQuantities] = useState({});
  const [user, setUser] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();

  // Fetch user session data
  useEffect(() => {
    const fetchSessionUser = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/sessionUser", {
          withCredentials: true, // Important to send cookies with request
        });
        
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching session user:", error);
      }
    };

    fetchSessionUser();
  }, []);

  // Fetch menu items from the backend
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("http://localhost:8080/vendor/getAllMenu");
        setMenuItems(response.data); // Set menu items from API response
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenu();
  }, []);

  // Initialize quantities from cart if available
  useEffect(() => {
    const initialQuantities = {};
    cart.forEach((item) => (initialQuantities[item.id] = item.quantity));
    setQuantities(initialQuantities);
  }, [cart]);

  useEffect(() => {
    // Reset all quantities to 0 when the page loads
    const resetQuantities = {};
    menuItems.forEach((item) => {
      resetQuantities[item.id] = 0;
    });
  
    setQuantities(resetQuantities);
    setCart([]); // Also reset the cart to empty
  }, [menuItems]); // Trigger when menuItems update
  

  // Handle quantity updates and update cart
  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => {
      const updatedQty = (prev[id] || 0) + delta;
      if (updatedQty < 0) return prev;

      const newQuantities = { ...prev, [id]: updatedQty };

      // Update the cart based on selected quantities
      const updatedCart = menuItems
        .filter((item) => newQuantities[item.id] > 0)
        .map((item) => ({ ...item, quantity: newQuantities[item.id] }));

      setCart(updatedCart);
      return newQuantities;
    });
  };

  // Calculate total items in the cart
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="student-container">
      <h2 className="title">Student Dashboard</h2>
      {user ? (
        <p style={{ textAlign: "center", color: "#FC8019" }}>
          Welcome {user.name}! Check out today's menu and place your order.
        </p>
      ) : (
        <p style={{ textAlign: "center", color: "#FC8019" }}>Loading user data...</p>
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
            .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
            .map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button className="qty-btn" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span className="qty-value">{quantities[item.id] || 0}</span>
                  <button className="qty-btn" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
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
