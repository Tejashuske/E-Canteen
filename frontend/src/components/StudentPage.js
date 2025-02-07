import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { id: 1, name: "Chai", price: 10 },
  { id: 2, name: "Coffee", price: 15 },
  { id: 3, name: "Samosa", price: 25 },
  { id: 4, name: "Poha", price: 20 },
  { id: 5, name: "Mini-Thali", price: 30 },
  { id: 6, name: "Full-Thali", price: 60 }
];

const StudentPage = ({ cart, setCart }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // 👈 useNavigate for redirection

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#FFE5D0", minHeight: "100vh" }}>
      <div style={{ maxWidth: "600px", margin: "auto", backgroundColor: "white", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ color: "#FC8019", textAlign: "center" }}>Student Dashboard</h2>
        <p style={{ textAlign: "center", color: "#FC8019" }}>Welcome! Check out today's menu and place your order.</p>

        <input
          type="text"
          placeholder="Search menu..."
          style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #FC8019", borderRadius: "5px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div>
          {menuItems
            .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
            .map((item) => (
              <div key={item.id} style={{ padding: "10px", backgroundColor: "#FFD8B1", marginBottom: "10px", borderRadius: "5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h3 style={{ margin: "0", color: "#FC8019" }}>{item.name}</h3>
                  <p style={{ margin: "0", color: "#FC8019" }}>₹{item.price}</p>
                </div>
                <button
                  style={{ backgroundColor: "#FC8019", color: "white", border: "none", padding: "8px 12px", borderRadius: "5px", cursor: "pointer" }}
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            style={{ backgroundColor: "#FC8019", color: "white", padding: "10px 15px", borderRadius: "5px", border: "none", cursor: "pointer" }}
            onClick={() => navigate("/cart")} // 👈 Navigate to Cart Page
          >
            Go to Cart ({cart.length})
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
