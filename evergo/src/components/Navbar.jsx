import React from 'react';

import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className='logos' src={logo} alt="EverGo Logo" />
        {/* <span className="logo-e">E</span>ver<span className="logo-go">Go</span> */}
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact" className="nav-cta" style={{ color: 'white' }}>Get Started</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;