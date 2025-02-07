import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="home-hero">
        <div className="hero-content">
          <h1>Welcome to e-Canteen</h1>
          <p>Your one-stop solution for ordering food online.</p>
          <p className="quote">"Good food is the foundation of genuine happiness." – Auguste Escoffier</p>
        </div>
      </section>

      <section className="features">
        <h3>Why Choose e-Canteen?</h3>
        <div className="features-grid">
          <div className="feature">
            <h4>Easy Ordering</h4>
            <p>Order your favorite food with just a few clicks.</p>
          </div>
          <div className="feature">
            <h4>Fresh & Hygienic</h4>
            <p>We ensure fresh, healthy, and hygienic meals.</p>
          </div>
          <div className="feature">
            <h4>Easy Payment</h4>
            <p>Pay using UPI, cards, or cash on delivery.</p>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <h3>What Our Students Say</h3>
        <p>⭐ "The best online food ordering experience!" - Aman Sharma</p>
        <p>⭐ "Fast delivery and amazing food quality!" - Priya Mehta</p>
      </section>
    </div>
  );
};

export default Home;
