// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const VendorPage = () => {
//   const navigate = useNavigate();
//   const [menu, setMenu] = useState([]);

//   // Fetch menu items from the backend
//   useEffect(() => {
//     fetchMenuItems();
//   }, []);

//   const fetchMenuItems = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/vendor/getAllMenu");
//       setMenu(response.data);
//     } catch (error) {
//       console.error("Error fetching menu items:", error);
//     }
//   };

//   // Remove item from menu
//   const removeItem = async (id) => {
//     if (window.confirm("Are you sure you want to remove this item?")) {
//       try {
//         await axios.delete(`http://localhost:8080/vendor/removeMenu/${id}`);
//         fetchMenuItems(); // Refresh the menu after deletion
//       } catch (error) {
//         console.error("Error removing item:", error);
//       }
//     }
//   };

//   // Navigate to the Add Item Page
//   const goToAddItemPage = () => {
//     navigate("/add-item");
//   };

//   // Logout function
//   const handleLogout = () => {
//     navigate("/login");
//   };

//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h2>Vendor Dashboard</h2>
//       <h3>Menu List</h3>
//       <table border="1" style={{ width: "60%", margin: "auto", borderCollapse: "collapse" }}>
//         <thead>
//           <tr style={{ backgroundColor: "#f0f0f0" }}>
//             <th>No</th>
//             <th>Item Name</th>
//             <th>Price (₹)</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {menu.map((item, index) => (
//             <tr key={item.id}>
//               <td>{index + 1}</td>
//               <td>{item.name}</td>
//               <td>{item.price}</td>
//               <td>
//                 <button onClick={() => removeItem(item.id)} style={{ color: "red" }}>
//                   Remove
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <br />
//       <button onClick={goToAddItemPage} style={{ marginRight: "10px" }}>Add Item</button>
//       <button onClick={handleLogout} style={{ backgroundColor: "red", color: "white" }}>Logout</button>
//     </div>
//   );
// };

// export default VendorPage;


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