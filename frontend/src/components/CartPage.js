import React from "react";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cart }) => {
  const navigate = useNavigate();
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div style={{ padding: "20px", backgroundColor: "#FFE5D0", minHeight: "100vh" }}>
      <div style={{ maxWidth: "600px", margin: "auto", backgroundColor: "white", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ color: "#FC8019", textAlign: "center" }}>Your Cart</h2>

        {cart.length === 0 ? (
          <p style={{ textAlign: "center", color: "#FC8019" }}>
            Your cart is empty. <br />
            <button
              onClick={() => navigate("/")}
              style={{
                marginTop: "10px",
                backgroundColor: "#FC8019",
                color: "white",
                padding: "10px 15px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Go to Menu
            </button>
          </p>
        ) : (
          <>
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
              Total Amount: ₹{totalAmount}
            </h3>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                onClick={() => navigate("/receipt")}
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
                Proceed to Payment 💳
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
