import React, { useState } from "react";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Button } from "react-bootstrap";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setLoading(false);
      console.error(error);
    } else {
      console.log("Payment Method:", paymentMethod);

      // Send payment method to the backend for processing
      try {
        const response = await fetch("http://localhost:8080/api/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentMethodId: paymentMethod.id,
          }),
        });

        const paymentResponse = await response.json();
        if (paymentResponse.success) {
          setLoading(false);
          alert("Payment successful!");
        } else {
          setLoading(false);
          alert("Payment failed. Please try again.");
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
        alert("Payment failed. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <CardElement />
      </div>
      <Button type="submit" disabled={loading || !stripe}>
        {loading ? "Processing..." : "Pay Now"}
      </Button>
    </form>
  );
};

export default CheckoutForm;