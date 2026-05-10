import React from 'react';

const Contact = () => {
  return (
    <section className="contact-clean" id="contact">
      <div className="contact-wrapper">
        <div className="contact-info-panel">
          <h2>Get in <span className="highlight-orange">Touch</span></h2>
          <p className="subtitle">Have questions about a Delivery? Our team is here 24/7.</p>
          
          <div className="contact-details">
            <div className="detail-item">
              <span className="icon">📍</span>
              <p>123 Delivery Way, Tech City</p>
            </div>
            <div className="detail-item">
              <span className="icon">📞</span>
              <p>+251 938 444 444   or   +251 941 444 333</p>
              
            </div>
            <div className="detail-item">
              <span className="icon">✉️</span>
              <p>support@evergo.com</p>
            </div>
          </div>
        </div>
        
        <form className="contact-form-minimal">
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <textarea placeholder="How can we help?" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;


// import React from 'react';
// // import './Contact.css';

// const Contact = () => {
//   return (
//     <section className="contact" id="contact">
//       <div className="contact-info">
//         <h2>Get in <span className="highlight">Touch</span></h2>
//         <p>Have questions about a shipment? Our team is here 24/7.</p>
//         <div className="info-item">📍 123 Delivery Way, Tech City</div>
//         <div className="info-item">📞 +1 (555) EVER-GO</div>
//         <div className="info-item">📧 support@evergo.com</div>
//       </div>
      
//       <form className="contact-form">
//         <input type="text" placeholder="Your Name" required />
//         <input type="email" placeholder="Your Email" required />
//         <textarea placeholder="How can we help?" rows="5"></textarea>
//         <button type="submit">Send Message</button>
//       </form>
//     </section>
//   );
// };

// export default Contact;