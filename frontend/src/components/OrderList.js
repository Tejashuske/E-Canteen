import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OrderList = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  // Fetch orders from the backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8080/orders/getAllOrders", {
          withCredentials: true,
        });
        if (response.status === 200) {
          setOrders(response.data);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  // Remove an order from the database
  const removeOrder = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/orders/cancelOrder/${id}`, {
        withCredentials: true,
      });
      setOrders((prevOrders) => prevOrders.filter((order) => order.orderId !== id)); // ✅ Use functional update
    } catch (error) {
      console.error("Error removing order:", error);
    }
  };
  

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Order List</h2>
      {orders.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Student Name</th>
              <th>Total Price (₹)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId}> {/* ✅ Updated key */}
                <td>{order.orderId}</td> {/* ✅ Use order.orderId */}
                <td>{order.studentName}</td>
                <td>₹{order.total}</td>
                <td>
                  <button style={styles.removeBtn} onClick={() => removeOrder(order.orderId)}>
                    ❌ Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      ) : (
        <p style={styles.noOrders}>No orders available</p>
      )}
      <button onClick={() => navigate("/vendor")} style={styles.backBtn}>
        ⬅ Back
      </button>
    </div>
  );
};

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
    width: "60%",
    margin: "auto",
    borderCollapse: "collapse",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
  noOrders: {
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
  backBtn: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "16px",
  },
};

export default OrderList;
