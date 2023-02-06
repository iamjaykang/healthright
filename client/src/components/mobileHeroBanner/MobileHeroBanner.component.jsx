import React from "react";
import { Link } from "react-router-dom";
import "./MobileHeroBanner.css";

const MobileHeroBanner = (props) => {
  return (
    <div
      className="hero-banner-mobile"
      style={{ backgroundImage: `url(${props.bgImg})` }}
    >
      <div className="banner-mobile-content-container">
        <div className="banner-mobile-btn-container">
          <Link to='/brands'>
          <button>Shop now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileHeroBanner;
