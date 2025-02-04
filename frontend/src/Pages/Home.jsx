import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container row">
      <nav class="">
        <div class="container-fluid nvmenu">
          <div class="navbar-header">
            <a class="" href="#">WebSiteName</a>
          </div>
          <div>
            <ul class="nav navbar-nav rightmenu">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">Page 1</a></li>
              <li><a href="#">Page 2</a></li>
              <li><a href="#">Page 3</a></li>
            </ul>
          </div>
        </div>
      </nav>
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