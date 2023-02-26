import React from "react";
import { Link } from "react-router-dom";

const MobileHeroBanner = (props: { bgImg: string}) => {
  return (
    <div
      className="app__hero-banner-section--mobile"
      style={{ backgroundImage: `url(${props.bgImg})` }}
    >
      <div className="app__hero-banner-content-container--mobile">
        <div className="app__hero-banner-link-container--mobile">
          <Link to="/brands" className="app__hero-banner-link--mobile">
            Shop now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileHeroBanner;
