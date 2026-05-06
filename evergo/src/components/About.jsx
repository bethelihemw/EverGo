import React from 'react';
// import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    { id: 1, title: "Place Order", desc: "Easily book your delivery through our portal.", icon: "📝" },
    { id: 2, title: "We Pick It Up", desc: "Our couriers arrive within 30 minutes for pickup.", icon: "🚚" },
    { id: 3, title: "Delivered Fast", desc: "Real-time tracking until it reaches the destination.", icon: "🏁" }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <h2 className="section-title">How It <span className="highlight">Works</span></h2>
      <div className="steps-container">
        {steps.map((step) => (
          <div className="step-card" key={step.id}>
            <div className="step-number">{step.id}</div>
            <div className="step-icon-circle">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;