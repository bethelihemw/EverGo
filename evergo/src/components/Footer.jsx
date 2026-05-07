import React from 'react';
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img className="logos" src={logo} alt="EverGo Motor" />
          <h3>EverGo</h3>
          <p>DELIVERING MORE. EVERY TIME.</p>
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Careers</a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} EverGo Delivery Systems. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;