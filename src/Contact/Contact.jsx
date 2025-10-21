import {React,useEffect} from "react";
import "./Contacts.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <section className="contact-section">
      <div className="overlay-bg" />
      <div className="contact-container">
        <div className="contact-left">
          <h2 className="contact-title">
            Get in <span>Touch</span>
          </h2>
          <p className="contact-sub">
            Have a project in mind or just want to say hello? Let’s connect!
          </p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone Number" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-right">
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <span>Info@nuamenterprises.com</span>
            </div>
            <div className="info-item">
              <FaPhoneAlt className="info-icon" />
              <span>+91 6282603759</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <span>3/675, Neriyakkal House, Unichira, Thrikkakara, Thrikkakara, Ernakulam, Ernakulam- 682021, Kerala, India</span>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title="location-map"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
