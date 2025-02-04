import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic (e.g., clearing local storage)
    localStorage.removeItem("user"); // Example: Remove user session
    navigate("/"); // Redirect to Home Page
  };

  return (
    <div style={{ position: "absolute", top: 10, right: 10 }}>
      <Button variant="danger" onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default LogoutButton;