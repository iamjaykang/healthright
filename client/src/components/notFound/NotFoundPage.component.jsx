import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1 className="not-found-page__title">404 - Page Not Found</h1>
      <p className="not-found-page__description">
        We're sorry, the page you requested could not be found. Please check the
        URL or try again later.
      </p>
      <Link to="/" className="not-found-page__button">
        Return to Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
