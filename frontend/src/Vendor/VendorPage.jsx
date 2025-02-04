import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

const VendorPage = () => {
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/menu/add", {
        dishName,
        description,
      });
      setMessage("Menu added successfully!");
      setDishName("");
      setDescription("");
    } catch (error) {
      setMessage("Failed to add menu. Please try again.");
    }
  };

  return (
    <div>
      <h3>Add Today's Menu</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formDishName">
          <Form.Label>Dish Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter dish name"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter dish description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Menu
        </Button>
      </Form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default VendorPage;