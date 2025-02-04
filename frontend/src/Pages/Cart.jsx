import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
// import LogoutButton from "../components/LogoutButton"; // Import Logout Button

const CartPage = () => {
  const location = useLocation();
  const cart = location.state?.cart || [];

  return (
    <Container>
      {/* <LogoutB  utton /> Add Logout Button */}
      <h3 className="text-center my-4">Your Cart</h3>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.dishName}</td>
                  <td>₹{item.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="text-center mt-4">
            <Link to="/payment" state={{ cart }}>
              <Button variant="primary">Proceed to Payment</Button>
            </Link>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;