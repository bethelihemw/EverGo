import React, { useState } from 'react';
import logo from "../assets/logo.png";


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img className='logos' src={logo} alt="EverGo Logo" />
      </div>

      {/* Toggle class based on state */}
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} 
          onClick={() => setIsMobile(false)}>
        <li> <a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact" className="nav-cta" style={{ color: 'white' }}>Get Started</a></li>
      </ul>

      {/* Hamburger Icon */}
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <span className="close-icon">✕</span> 
        ) : (
          <span className="hamburger-bar"></span>
        )}
      </button>
    </nav>
  );
};

export default Navbar;