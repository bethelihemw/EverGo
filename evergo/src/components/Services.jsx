import React from 'react';

const Services = () => {
  const serviceList = [
    { title: "Local Delivery", desc: "Fastest pick-up and drop-off in your city." },
    { title: "Express Shipping", desc: "Next-day delivery for urgent packages." },
    { title: "Secure Handling", desc: "Fragile or high-value, we treat it with care." }
  ];

  return (
    <section className="services" id="services">
      <h2 className="section-title">Our Services</h2>
      <div className="service-grid">
        {serviceList.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="card-icon">📦</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;