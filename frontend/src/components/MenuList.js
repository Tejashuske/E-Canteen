import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MenuList = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState([]);

  // Fetch menu items from the backend
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("http://localhost:8080/vendor/getAllMenu");
        setMenu(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenu();
  }, []);

  // Handle removing an item from the menu
  const removeItem = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/vendor/removeMenu/${id}`);
      if (response.data) {
        setMenu(menu.filter((item) => item.id !== id));
      } else {
        console.error("Failed to delete menu item.");
      }
    } catch (error) {
      console.error("Error deleting menu item:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Menu List</h2>
      {menu.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>No</th>
              <th>Item Name</th>
              <th>Price (₹)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>
                  <button style={styles.removeBtn} onClick={() => removeItem(item.id)}>
                    ❌ Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={styles.noItems}>No items in the menu</p>
      )}
      <div style={styles.buttonContainer}>
        <button onClick={() => navigate("/add-item")} style={styles.addItemBtn}>➕ Add Item</button>
        <button onClick={() => navigate("/vendor")} style={styles.backBtn}>⬅ Back</button>
      </div>
    </div>
  );
};

// CSS styles for MenuList
const styles = {
  container: {
    padding: "30px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#333",
  },
  table: {
    width: "70%",
    margin: "auto",
    borderCollapse: "collapse",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
  noItems: {
    fontSize: "18px",
    color: "#888",
  },
  removeBtn: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "6px 12px",
    cursor: "pointer",
    borderRadius: "4px",
    transition: "0.3s",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  addItemBtn: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "16px",
    marginRight: "10px",
  },
  backBtn: {
    padding: "10px 20px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "16px",
  },
};

export default MenuList;
