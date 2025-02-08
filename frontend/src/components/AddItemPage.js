import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddItemPage = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState({ name: "", description: "", price: "" });

  // Handle input changes
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!item.name || !item.description || !item.price) {
      alert("Please fill all fields!");
      return;
    }

    const newItem = {
      name: item.name,
      description: item.description,
      price: parseFloat(item.price),
    };

    try {
      const response = await axios.post("http://localhost:8080/vendor/addMenu", newItem);
      if (response.data) {
        navigate("/menu-list"); // Redirect back to Vendor Dashboard
      }
    } catch (error) {
      console.error("Error adding menu item:", error);
      alert("Failed to add item.");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFA726"
    }}>
      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        width: "350px"
      }}>
        <h2 style={{ color: "#333", marginBottom: "15px" }}>Add New Item</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div>
            <label style={{ fontWeight: "bold" }}>Item Name:</label>
            <input type="text" name="name" value={item.name} onChange={handleChange} required style={{
              width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px"
            }}/>
          </div>
          <div>
            <label style={{ fontWeight: "bold" }}>Description:</label>
            <input type="text" name="description" value={item.description} onChange={handleChange} required style={{
              width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px"
            }}/>
          </div>
          <div>
            <label style={{ fontWeight: "bold" }}>Price (₹):</label>
            <input type="number" name="price" value={item.price} onChange={handleChange} required style={{
              width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px"
            }}/>
          </div>
          <button type="submit" style={{
            backgroundColor: "#FFA726", color: "black", padding: "10px", border: "none", borderRadius: "5px",
            cursor: "pointer", fontWeight: "bold"
          }}>Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItemPage;
