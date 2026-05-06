import React from 'react';
import motor from "../assets/motor.png"

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Delivering More. <br /> <span className="highlight">Every Time.</span></h1>
        <p>Fast, secure, and reliable delivery solutions tailored for your business needs.</p>
        <button className="hero-btn">Track Order</button>
      </div>
      
      <div className="hero-visual">
        {/* The moving delivery guy */}
        <img src={motor} alt="Delivery Guy" className="moving-moto" />
        <div className="road-line"></div>
      </div>
    </section>
  );
};

export default Hero;