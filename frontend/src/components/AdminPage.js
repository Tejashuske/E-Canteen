// // const AdminPage = () => {
// //     return <h2>Welcome to the Admin Dashboard!</h2>;
// //   };
  
// //   export default AdminPage;
// import React from "react";
// import { Link } from "react-router-dom";


// const AdminPage= () => {
//   return (
//     <div style={{ backgroundColor: "#FC8019", minHeight: "100vh", padding: "20px" }}>
//       <div style={{ maxWidth: "600px", margin: "auto", backgroundColor: "white", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
//         <h2 style={{ color: "#FC8019" }}>Admin Dashboard</h2>
//         <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
//           <Link to="/students" style={{ backgroundColor: "#FC8019", color: "white", padding: "10px 15px", borderRadius: "5px", textDecoration: "none" }}>Student List</Link>
//           <Link to="/vendors" style={{ backgroundColor: "#FC8019", color: "white", padding: "10px 15px", borderRadius: "5px", textDecoration: "none" }}>Vendor List</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPage;


import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clearing session storage or auth token)
    navigate("/login");
  };

  return (
    <header style={{ backgroundColor: "#333", color: "white", padding: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1 style={{ margin: 0 }}>Welcome, Admin</h1>
      <button onClick={handleLogout} style={{ backgroundColor: "red", color: "white", padding: "8px 12px", borderRadius: "5px", border: "none", cursor: "pointer" }}>
        Logout
      </button>
    </header>
  );
};

const AdminPage = () => {
  return (
    <div>
      <AdminHeader />
      <div style={{ backgroundColor: "#FC8019", minHeight: "100vh", padding: "20px" }}>
        <div style={{ maxWidth: "600px", margin: "auto", backgroundColor: "white", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
          <h2 style={{ color: "#FC8019" }}>Admin Dashboard</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
            <Link to="/students" style={{ backgroundColor: "#FC8019", color: "white", padding: "10px 15px", borderRadius: "5px", textDecoration: "none" }}>Student List</Link>
            <Link to="/vendor-list" style={{ backgroundColor: "#FC8019", color: "white", padding: "10px 15px", borderRadius: "5px", textDecoration: "none" }}>Vendor List</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
