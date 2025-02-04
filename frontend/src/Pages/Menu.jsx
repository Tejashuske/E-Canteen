import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoutButton from "../Components/LogoutButton"; // Import the Logout Button

const MenuPage = () => {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/menu/today");
        setMenu(response.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchMenu();
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <Container>
      <LogoutButton /> {/* Add Logout Button */}
      <h3 className="text-center my-4">Today's Menu</h3>
      <Row>
        {menu.map((item) => (
          <Col key={item.id} md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{item.dishName}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>Price: ₹{item.price}</Card.Text>
                <Button onClick={() => addToCart(item)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {cart.length > 0 && (
        <div className="text-center mt-4">
          <Link to="/cart" state={{ cart }}>
            <Button variant="success">View Cart ({cart.length} items)</Button>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default MenuPage;