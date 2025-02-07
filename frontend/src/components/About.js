import React from "react";
import "./About.css"; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h2>Welcome to e-Canteen</h2>
        <p>
          e-Canteen is dedicated to providing fresh, hygienic, and delicious meals
          at affordable prices. We believe in quality, convenience, and a seamless
          dining experience for students and faculty alike.
        </p>
        <p>
          Our platform ensures a hassle-free ordering system, reducing wait times and
          offering a variety of nutritious food options to cater to different dietary needs.
        </p>
        <div className="highlights">
          <div className="highlight-box">✅ Fresh & Quality Ingredients</div>
          <div className="highlight-box">✅ Hygienic & Safe Preparation</div>
          <div className="highlight-box">✅ Pocket-Friendly & Delicious</div>
          <div className="highlight-box">✅ Quick & Convenient Ordering</div>
          <div className="highlight-box">✅ Student & Vendor Friendly</div>
        </div>
        <div className="mission-section">
          <h3>Our Mission</h3>
          <p>
            To revolutionize campus dining with a tech-driven, efficient, and
            health-conscious approach that makes quality food accessible to everyone.
          </p>
        </div>
        <div className="contact-section">
          <h3>Get in Touch</h3>
          <p>
            Have questions or suggestions? Reach out to us at:
            <br /><strong>support@ecanteen.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

