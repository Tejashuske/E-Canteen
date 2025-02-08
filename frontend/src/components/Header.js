import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [studentName, setStudentName] = useState("");

  // Function to fetch session user
  const fetchSessionUser = () => {
    axios.get("http://localhost:8080/api/sessionUser", { withCredentials: true })
      .then(response => {
        setStudentName(response.data.name || "Guest");
      })
      .catch(error => {
        console.error("Error fetching session user:", error);
        setStudentName("Guest"); // Default to "Guest" in case of error
      });
  };

  useEffect(() => {
    // Fetch session user data when component mounts or user state changes
    fetchSessionUser();
  }, [user]); // Add `user` dependency so it refetches on login/logout

  const handleLogout = () => {
    sessionStorage.removeItem("userRole");
    setUser(null);
    setStudentName(""); // Clear student name on logout
    navigate("/"); // Redirect to home after logout
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#333", color: "white" }}>
      <div>
        <Link to="/" style={{ color: "white", textDecoration: "none", marginRight: "10px" }}>Home</Link>
        <Link to="/about" style={{ color: "white", textDecoration: "none", marginRight: "10px" }}>About</Link>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
      </div>

      <div>
        {user ? (
          <>
            <span>Welcome, {studentName}!</span>
            <button onClick={handleLogout} style={{ marginLeft: "10px", cursor: "pointer" }}>Logout</button>
          </>
        ) : (
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
