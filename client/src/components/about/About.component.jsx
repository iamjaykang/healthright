import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="benefits">
        <h3 className="benefits-title">Our Mission</h3>
        <ul className="benefits-list">
            <li className="benefits-item">Support health and wellness journey of customers.</li>
            <li className="benefits-item">Provide premium, locally sourced supplements.</li>
            <li className="benefits-item">Believe in the power of nature.</li>
            <li className="benefits-item">Bring the best of New Zealand's natural resources to customers.</li>
            <li className="benefits-item">Deliver high-quality ingredients and excellent customer service.</li>
        </ul>
        </div>
      <div className="store-info">
        <h2 className="store-info-title">About Our Store</h2>
        <p className="store-info-description">
        Healthright offers premium New Zealand health supplements for a better you. With a focus on local ingredients, we support your wellness journey with quality products. Shop with us today!
        </p>
      </div>
    </div>
  );
};

export default About;
