import React from "react";

const About = () => {
  return (
    <div className="app__about-section">
      <div className="app__benefits-container">
        <h3 className="app__benefits-title">Our Mission</h3>
        <ul className="app__benefits-list">
          <li className="app__benefits-item">
            Support health and wellness journey of customers.
          </li>
          <li className="app__benefits-item">
            Provide premium, locally sourced supplements.
          </li>
          <li className="app__benefits-item">
            Believe in the power of nature.
          </li>
          <li className="app__benefits-item">
            Bring the best of New Zealand's natural resources to customers.
          </li>
          <li className="app__benefits-item">
            Deliver high-quality ingredients and excellent customer service.
          </li>
        </ul>
      </div>
      <div className="app__store-info-container">
        <h2 className="app__store-info-title">About Our Store</h2>
        <p className="app__store-info-description">
          Healthright offers premium New Zealand health supplements for a better
          you. With a focus on local ingredients, we support your wellness
          journey with quality products. Shop with us today!
        </p>
      </div>
    </div>
  );
};

export default About;
