import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  const [menu, setMenu] = useState([]);
  const navigate = useNavigate();
  
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
  
  const handlePayment = () => {
    // Redirect to Payment Page
    navigate("/payment");
  };

  return (
    <div>
      <h3>Today's Menu</h3>
      {menu.length > 0 ? (
        <ul>
          {menu.map((item) => (
            <li key={item.id}>
              <h5>{item.dishName}</h5>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No menu available for today.</p>
      )}
      
      {/* Payment Button */}
      <Button onClick={handlePayment}>Proceed to Payment</Button>
    </div>
  );
};

export default MenuPage;