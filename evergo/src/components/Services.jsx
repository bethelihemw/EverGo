import React from 'react';
// import './Services.css';
import local from '../assets/local.png';
import express from '../assets/express.png';
import ship from '../assets/ship.png';

const Services = () => {
  const serviceList = [
    { 
      title: "Local Delivery", 
      tagline: "Your City, Connected.",
      desc: "From legal documents to daily essentials, our local network ensures your items cross the city in record time with real-time transparency.",
      img: local 
    },
    { 
      title: "Express Shipping", 
      tagline: "Speed Without Compromise.",
      desc: "For those 'needed it yesterday' moments. Our express lane prioritizes your cargo for guaranteed next-day arrival across our entire network.",
      img: express 
    },
    { 
      title: "Secure Handling", 
      tagline: "Safe & Sound.",
      desc: "High-value tech or fragile medical supplies—we treat every package with white-glove care. Security isn't an option; it's our standard.",
      img: ship 
    }
  ];

  return (
    <section className="services-modern" id="services">
      <div className="services-header">
        <span className="accent-line"></span>
        <h2>Premium Logistics Solutions</h2>
      </div>

      {serviceList.map((service, index) => (
        <div className={`service-row ${index % 2 !== 0 ? 'reverse' : ''}`} key={index}>
          <div className="service-image-container">
            <div className="image-wrapper">
              {/* These will be moved on top via CSS on mobile */}
              <span className="mobile-overlay-number">0{index + 1}</span>
              <span className="mobile-overlay-tag">{service.tagline}</span>
              
              <img src={service.img} alt={service.title} />
              <div className="image-overlay"></div>
            </div>
          </div>
          
          <div className="service-text-container">
            <span className="service-number">0{index + 1}</span>
            <span className="service-tag">{service.tagline}</span>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <button className="service-learn-more">View Details</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;

// import React from 'react';
// import './Services.css';

// const Services = () => {
//   const serviceList = [
//     { 
//       title: "Local Delivery", 
//       desc: "Fastest pick-up and drop-off in your city, reaching your doorstep in record time.",
//       icon: "📍" 
//     },
//     { 
//       title: "Express Shipping", 
//       desc: "Priority handling for urgent packages with guaranteed next-day arrival.",
//       icon: "🚀" 
//     },
//     { 
//       title: "Secure Handling", 
//       desc: "Specialized care for fragile and high-value items with end-to-end protection.",
//       icon: "🛡️" 
//     }
//   ];

//   return (
//     <section className="services" id="services">
//       <div className="services-bg-glow"></div>
//       <h2 className="section-title">
//         Our <span className="highlight">Expertise</span>
//       </h2>
//       <p className="section-subtitle">Tailored logistics solutions for every scale and speed.</p>
      
//       <div className="service-grid">
//         {serviceList.map((service, index) => (
//           <div className="service-card" key={index}>
//             <div className="card-loader"></div>
//             <div className="card-content">
//               <div className="card-icon-wrapper">
//                 <span className="card-icon">{service.icon}</span>
//               </div>
//               <h3>{service.title}</h3>
//               <p>{service.desc}</p>
//               <div className="card-link">Learn More →</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;

// import React from 'react';

// const Services = () => {
//   const serviceList = [
//     { title: "Local Delivery", desc: "Fastest pick-up and drop-off in your city." },
//     { title: "Express Shipping", desc: "Next-day delivery for urgent packages." },
//     { title: "Secure Handling", desc: "Fragile or high-value, we treat it with care." }
//   ];

//   return (
//     <section className="services" id="services">
//       <h2 className="section-title">Our Services</h2>
//       <div className="service-grid">
//         {serviceList.map((service, index) => (
//           <div className="service-card" key={index}>
//             <div className="card-icon">📦</div>
//             <h3>{service.title}</h3>
//             <p>{service.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;