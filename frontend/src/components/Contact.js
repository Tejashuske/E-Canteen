import React, { useState } from "react";
import "./Contact.css"; 

const Contact = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRating = (index) => {
    setRating(index);
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Get in Touch</h2>
        <p>📧 <strong>Email:</strong> <span className="highlight">support@ecanteen.com</span></p>
        <p>📞 <strong>Phone:</strong> <span className="highlight">+91 9876543210</span></p>
        <p>📍 <strong>Location:</strong> <span className="highlight">e-Canteen, C-DAC Pashan, Pune</span></p>

        <hr />

        <h3>Rate Your Experience</h3>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((index) => (
            <span
              key={index}
              className={`star ${index <= (hover || rating) ? "filled" : ""}`}
              onClick={() => handleRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(0)}
            >
              ★
            </span>
          ))}
        </div>
        {rating > 0 && <p className="rating-text">You rated {rating} ⭐</p>}

        <div className="feedback-box">
          <textarea placeholder="Share your feedback..." rows="4"></textarea>
          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
