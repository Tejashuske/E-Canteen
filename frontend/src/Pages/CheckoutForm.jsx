import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button } from "react-bootstrap";

const CheckoutForm = ({ totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setLoading(false);
      alert(error.message);
    } else {
      console.log("Payment Successful:", paymentMethod);
      setLoading(false);
      alert("Payment successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <CardElement />
      <Button type="submit" disabled={!stripe || loading} className="mt-3">
        {loading ? "Processing..." : `Pay ₹${totalAmount}`}
      </Button>
    </form>
  );
};

export default CheckoutForm;