import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="copyright">
          Copyright © {new Date().getFullYear()} Healthright Limited
        </div>
        <ul className="social-links">
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
