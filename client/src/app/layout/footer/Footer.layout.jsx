import React from "react";

const Footer = () => {
  return (
    <footer className="app__footer">
      <div className="app__footer-container">
        <div className="app__footer-info">
          <div className="app__footer-info-col">
            <h3 className="app__footer-info-heading">Help & Support</h3>
            <ul className="app__footer-info-list">
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
          <div className="app__footer-info-col">
            <h3 className="app__footer-info-heading">About us</h3>
            <ul className="app__footer-info-list">
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
          <div className="app__footer-info-col">
            <h3 className="app__footer-info-heading">Resources</h3>
            <ul className="app__footer-info-list">
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
          <div className="app__footer-info-col">
            <h3 className="app__footer-info-heading">Get in touch</h3>
            <ul className="app__footer-info-list">
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
        <div className="app__footer-copyright">
          Copyright © {new Date().getFullYear()} Healthright Limited
        </div>
      </div>
    </footer>
  );
};

export default Footer;
