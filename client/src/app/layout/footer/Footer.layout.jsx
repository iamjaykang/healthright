import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="app__footer">
      <div className="container">
        <div className="footer-info">
          <div className="footer-info-col">
            <h3 className="footer-info-heading">Help & Support</h3>
            <ul className="footer-info-list">
              <li>
                <button>Delivery</button>
              </li>
              <li>
                <button>Reviews</button>
              </li>
              <li>
                <button>Terms & Conditions</button>
              </li>
              <li>
                <button>FAQs</button>
              </li>
            </ul>
          </div>
          <div className="footer-info-col">
            <h3 className="footer-info-heading">About us</h3>
            <ul className="footer-info-list">
              <li>
                <button>Our Story</button>
              </li>
              <li>
                <button>Why Healthright</button>
              </li>
              <li>
                <button>Our Impact</button>
              </li>
              <li>
                <button>How we work</button>
              </li>
            </ul>
          </div>
          <div className="footer-info-col">
            <h3 className="footer-info-heading">Resources</h3>
            <ul className="footer-info-list">
              <li>
                <button>Blog</button>
              </li>
              <li>
                <button>Brands</button>
              </li>
              <li>
                <button>Shop Your Way</button>
              </li>
            </ul>
          </div>
          <div className="footer-info-col">
            <h3 className="footer-info-heading">Get in touch</h3>
            <ul className="footer-info-list">
              <li>
                <button>Contact us</button>
              </li>
              <li>
                <button>LiveChat</button>
              </li>
              <li>
                <button>Facebook</button>
              </li>
              <li>
                <button>Instagram</button>
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
