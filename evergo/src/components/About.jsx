import React from 'react';
import order from '../assets/order.png';
import pickup from '../assets/pickup.png';
import ship from '../assets/ship.png';


const HowItWorks = () => {
  const steps = [
    { 
      id: "01", 
      title: "Place Order", 
      desc: "Easily book your delivery through our portal.",
      image: order // Use a small snippet of your web UI here
    },
    { 
      id: "02", 
      title: "We Pick It Up", 
      desc: "Our couriers arrive within 30 minutes for pickup.",
      image: pickup // Use a photo of a package being handed over
    },
    { 
      id: "03", 
      title: "Delivered Fast", 
      desc: "Real-time tracking until it reaches the destination.",
      image: ship // Use a photo of a successful delivery
    }
  ];

  return (
    <section className="how-it-works-modern" id="about">
      <div className="process-header">
        <span className="subtitle">Seamless Process</span>
        <h2>How EverGo <span className="highlight">Works</span></h2>
      </div>

      <div className="process-container">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="process-step">
              <div className="step-rectangle">
                <div className="step-image-box">
                  <img src={step.image} alt={step.title} />
                  <span className="step-count">{step.id}</span>
                </div>
                <div className="step-info">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            </div>
            
            {/* Don't show arrow after the last step */}
            {index < steps.length - 1 && (
              <div className="process-arrow">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
// import React from 'react';
// // import './HowItWorks.css';

// const HowItWorks = () => {
//   const steps = [
//     { id: 1, title: "Place Order", desc: "Easily book your delivery through our portal.", icon: "📝" },
//     { id: 2, title: "We Pick It Up", desc: "Our couriers arrive within 30 minutes for pickup.", icon: "🚚" },
//     { id: 3, title: "Delivered Fast", desc: "Real-time tracking until it reaches the destination.", icon: "🏁" }
//   ];

//   return (
//     <section className="how-it-works" id="about">
//       <h2 className="section-title">How It <span className="highlight">Works</span></h2>
//       <div className="steps-container">
//         {steps.map((step) => (
//           <div className="step-card" key={step.id}>
//             <div className="step-number">{step.id}</div>
//             <div className="step-icon-circle">{step.icon}</div>
//             <h3>{step.title}</h3>
//             <p>{step.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;