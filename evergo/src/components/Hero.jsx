import React from 'react';
import motor from '../assets/motor.png';
// import './Hero.css';

const Hero = () => {
  return (
    <section id='home' className="hero">
      
      <div className="hero-container">
        {/* <div className="blob-bgs"></div> */}
        <div className="hero-content">
          <div className="blob-bgs"></div>
          <span className="badge">Reliable Delivery for Everyone</span>
          <h1>
            Delivering More. <br />
            <span className="highlight">Every Time.</span>
          </h1>
          {/* <div className="blob-bg"></div> */}
          <p>
            Whether it's critical business documents, medical supplies, 
            or your daily essentials—EverGo provides a seamless 24/7 delivery 
            network designed for speed and security across the city.
          </p>
          
          <div className="hero-btns">
            <button className="btn-primary">Track Order</button>
            <button className="btn-secondary">Send a Package</button>
          </div>

          <div className="hero-stats">
            <div className="stat-item"><strong>500+</strong> <span>Active Riders</span></div>
            <div className="stat-item"><strong>15min</strong> <span>Avg. Pickup</span></div>
            <div className="stat-item"><strong>100%</strong> <span>Secure</span></div>
          </div>
        </div>
        {/* <div className="blob-bgs"></div> */}
        <div className="hero-visual">
          <div className="blob-bg"></div>
          <img src={motor} className="moto-animation" alt="EverGo Delivery" />
        </div>
      </div>
    </section>
  );
};

export default Hero;