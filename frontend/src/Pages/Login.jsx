import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login request to backend
      const response = await axios.post("http://localhost:8080/api/login", {
        id,
        password,
      });

      // Extract the role from the response
      const { role } = response.data;

      // Redirect based on role
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "vendor") {
        navigate("/vendor-page");
      } else if (role === "student") {
        navigate("/menu");
      } else {
        setError("Invalid role.");
      }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="text-danger">{error}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicId">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
export default Login;