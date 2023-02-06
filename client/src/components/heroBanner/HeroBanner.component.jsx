import React from "react";
import { Link } from "react-router-dom";
import "./HeroBanner.css";

const HeroBanner = (props) => {
  return (
    <div
      className="hero-banner"
      style={{ backgroundImage: `url(${props.bgImg})` }}
    >
      <div className="hero-banner-content-container">
        <div className="hero-banner-text-container">
          <h1 className="hero-banner-title">{props.title}</h1>
          <p className="hero-banner-subtitle">{props.subtitle}</p>
          <p className="hero-banner-description">{props.description}</p>
        </div>
        <div className="hero-banner-btn-container">
          <Link to='/brands'>
          <button>Shop now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
