import React from 'react';
// import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-info">
        <h2>Get in <span className="highlight">Touch</span></h2>
        <p>Have questions about a shipment? Our team is here 24/7.</p>
        <div className="info-item">📍 123 Delivery Way, Tech City</div>
        <div className="info-item">📞 +1 (555) EVER-GO</div>
        <div className="info-item">📧 support@evergo.com</div>
      </div>
      
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="How can we help?" rows="5"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;