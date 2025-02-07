import React from "react";
import { useNavigate } from "react-router-dom";

const ReceiptPage = ({ cart }) => {
  const navigate = useNavigate();
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div style={{ padding: "20px", backgroundColor: "#FFE5D0", minHeight: "100vh", textAlign: "center" }}>
      <div style={{ maxWidth: "600px", margin: "auto", backgroundColor: "white", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
        
        <h2 style={{ color: "#28A745", fontSize: "24px" }}>✅ Payment Successful</h2>
        <p style={{ color: "#28A745", fontSize: "18px" }}>Order Placed Successfully! 🎉</p>

        <h3 style={{ color: "#FC8019" }}>Receipt</h3>

        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
          <thead>
            <tr style={{ backgroundColor: "#FFD8B1", color: "#FC8019" }}>
              <th style={{ padding: "10px", borderBottom: "2px solid #FC8019" }}>Item</th>
              <th style={{ padding: "10px", borderBottom: "2px solid #FC8019" }}>Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index} style={{ textAlign: "center" }}>
                <td style={{ padding: "10px", borderBottom: "1px solid #FC8019" }}>{item.name}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #FC8019", color: "#FC8019" }}>₹{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={{ textAlign: "right", color: "#FC8019", fontSize: "18px", fontWeight: "bold" }}>
          Total Paid: ₹{totalAmount}
        </h3>

        <p style={{ fontSize: "18px", fontWeight: "bold", color: "#FC8019" }}>Thank You! 😊</p>

        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "#FC8019",
            color: "white",
            padding: "12px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#E07018")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#FC8019")}
        >
          Back to Home 🏠
        </button>
      </div>
    </div>
  );
};

export default ReceiptPage;
