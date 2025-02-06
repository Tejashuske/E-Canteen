import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (index) => {
    setRating(index);
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p>📧 Email: <span className="highlight">support@ecanteen.com</span></p>
        <p>📞 Phone: <span className="highlight">+91 9876543210</span></p>

        <hr />

        <h3>Rate Us</h3>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((index) => (
            <span
              key={index}
              className={`star ${index <= rating ? "filled" : ""}`}
              onClick={() => handleRating(index)}
            >
              ★
            </span>
          ))}
        </div>
        {rating > 0 && <p className="rating-text">You rated {rating} ⭐</p>}
      </div>
    </div>
  );
};

export default Contact;
