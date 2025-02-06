import React from "react";
import "./About.css"; // Ensure this file exists

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h2>About e-Canteen</h2>
        <p>We provide fresh and hygienic food at affordable prices.</p>
        <p>Our mission is to deliver healthy and tasty meals to everyone.</p>
        <div className="highlights">
          <div className="highlight-box">✅ Fresh Ingredients</div>
          <div className="highlight-box">✅ Hygienic Cooking</div>
          <div className="highlight-box">✅ Affordable Prices</div>
        </div>
      </div>
    </div>
  );
};

export default About;
