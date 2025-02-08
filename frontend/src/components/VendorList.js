import React, { useState, useEffect } from "react";
import axios from "axios";

const VendorList = () => {
  const [vendors, setVendors] = useState([]);
  const [newVendor, setNewVendor] = useState("");

  // Fetch vendors from backend
  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      const response = await axios.get("http://localhost:8080/admin/getAllVendors");
      setVendors(response.data);
    } catch (error) {
      console.error("Error fetching vendors:", error);
    }
  };

  // Add vendor
  const handleAddVendor = async () => {
    if (newVendor.trim() !== "") {
      try {
        // Define userDTO object
        const userDTO = {
          userName: newVendor.replace(/\s+/g, "").toLowerCase() + Math.floor(1000 + Math.random() * 9000), // Generates a unique username
          password: "1234", // Default password, change as needed
          name: newVendor,
          role: "ROLE_VENDOR",
        };
  
        // Send POST request to add vendor
        const response = await axios.post("http://localhost:8080/admin/addVendor", userDTO);
  
        if (response.data) {
          fetchVendors(); // Refresh vendor list
          setNewVendor("");
        }
      } catch (error) {
        console.error("Error adding vendor:", error);
      }
    }
  };
  

  // Remove vendor
  const handleRemoveVendor = async (username) => {
    try {
      const response = await axios.delete(`http://localhost:8080/admin/removeUser/${username}`);
      if (response.data) {
        fetchVendors(); // Refresh vendor list
      }
    } catch (error) {
      console.error("Error removing vendor:", error);
    }
  };

  return (
    <div style={{ backgroundColor: "#FC8019", minHeight: "100vh", padding: "20px" }}>
      <div style={{ maxWidth: "800px", margin: "auto", backgroundColor: "white", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ color: "#FC8019", textAlign: "center" }}>Vendor List</h2>

        {/* Vendor Table */}
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
          <thead>
            <tr style={{ backgroundColor: "#FC8019", color: "white" }}>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Sr. No</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Vendor Name</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr key={vendor.id}>
                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>{index + 1}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{vendor.name}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>
                  <button
                    onClick={() => handleRemoveVendor(vendor.userName)}
                    style={{ backgroundColor: "red", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer" }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add Vendor Section */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <input
            type="text"
            placeholder="Enter Vendor Name"
            value={newVendor}
            onChange={(e) => setNewVendor(e.target.value)}
            style={{ padding: "8px", width: "60%", borderRadius: "5px", border: "1px solid #ddd" }}
          />
          <button
            onClick={handleAddVendor}
            style={{ marginLeft: "10px", backgroundColor: "#FC8019", color: "white", padding: "8px 15px", border: "none", borderRadius: "5px", cursor: "pointer" }}
          >
            Add Vendor
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorList;
