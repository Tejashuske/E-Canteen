import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <Container>
          <a className="navbar-brand" href="/">🍽️ E-Canteen</a>
          <div className="ml-auto">
            <a href="/" className="nav-link d-inline px-3">Home</a>
            <a href="/about" className="nav-link d-inline px-3">About Us</a>
            <a href="/login" className="btn btn-primary">Login</a>
          </div>
        </Container>
      </header>

      <div className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 style={{ color: 'black' }}>Welcome to E-Canteen</h1>
              <p style={{ color: 'black' }}>Your one-stop solution for hassle-free canteen orders. Order food online and enjoy your meal without waiting in queues.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;