import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm"; 

// Set your publishable key from Stripe
const stripePromise = loadStripe("your-publishable-key-here");

const PaymentPage = () => {
  return (
    <div>
      <h3 style={{ color: 'black' }}>Payment Page</h3>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default PaymentPage;