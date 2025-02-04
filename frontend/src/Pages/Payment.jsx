import React from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Container, Table } from "react-bootstrap";

const stripePromise = loadStripe("your-stripe-public-key");

const PaymentPage = () => {
  const location = useLocation();
  const cart = location.state?.cart || [];

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Container>
      <h3 className="text-center my-4">Payment Page</h3>

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

      <h5 className="text-center">Total: ₹{totalAmount}</h5>

      <Elements stripe={stripePromise}>
        <CheckoutForm totalAmount={totalAmount} />
      </Elements>
    </Container>
  );
};

export default PaymentPage;