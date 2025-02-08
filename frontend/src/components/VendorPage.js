import React from "react";
import { useNavigate } from "react-router-dom";

const VendorPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Vendor Dashboard</h2>

        <div style={styles.buttonContainer}>
          <button onClick={() => navigate("/menu-list")} style={styles.menuButton}>
            🍽️ Menu List
          </button>
          <button onClick={() => navigate("/order-list")} style={styles.orderButton}>
            📦 Order List
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#FFA726", // Website theme color
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: "400px",
  },
  title: {
    color: "#FC8019",
    marginBottom: "20px",
    fontSize: "24px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  menuButton: {
    backgroundColor: "#FFA726",
    color: "white",
    padding: "12px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
  orderButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "12px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

// Hover Effects
styles.menuButton[":hover"] = {
  backgroundColor: "#FB8C00",
};
styles.orderButton[":hover"] = {
  backgroundColor: "#388E3C",
};

export default VendorPage;