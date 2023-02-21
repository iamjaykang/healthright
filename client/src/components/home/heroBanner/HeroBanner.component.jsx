import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = (props) => {
  return (
    <div
      className="app__hero-banner-section"
      style={{ backgroundImage: `url(${props.bgImg})` }}
    >
      <div className="app__hero-banner-content-container">
        <div className="app__hero-banner-text-container">
          <h1 className="app__hero-banner-title">{props.title}</h1>
          <p className="app__hero-banner-subtitle">{props.subtitle}</p>
          <p className="app__hero-banner-description">{props.description}</p>
        </div>
        <div className="app__hero-banner-link-container">
          <Link to="/brands" className="app__hero-banner-link">Shop now</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
