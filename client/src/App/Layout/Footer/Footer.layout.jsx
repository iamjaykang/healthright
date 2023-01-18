import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-info">
          <div className="footer-info-col">
            <h3 className="footer-info-heading">Help & Support</h3>
            <ul className="footer-info-list">
              <li>
                <a href="#">Delivery</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="footer-info-col">
            <h3 className="footer-info-heading">About us</h3>
            <ul className="footer-info-list">
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Why Healthright</a>
              </li>
              <li>
                <a href="#">Our Impact</a>
              </li>
              <li>
                <a href="#">How we work</a>
              </li>
            </ul>
          </div>
          <div className="footer-info-col">
            <h3 className="footer-info-heading">Resources</h3>
            <ul className="footer-info-list">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Brands</a>
              </li>
              <li>
                <a href="#">Shop Your Way</a>
              </li>
            </ul>
          </div>
          <div className="footer-info-col">
            <h3 className="footer-info-heading">Get in touch</h3>
            <ul className="footer-info-list">
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">LiveChat</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          Copyright © {new Date().getFullYear()} Healthright Limited
        </div>
      </div>
    </footer>
  );
};

export default Footer;
