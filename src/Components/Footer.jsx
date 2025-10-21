import React from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="footer-content">
        <div className="footer-columns">
          {/* Column 1: NUAM */}
          <div className="footer-column footer-brand">
            <h2 className="brand-name">
              NU<span>AM</span>
            </h2>
            <p className="brand-desc">
              A tech-powered creative firm delivering digital solutions that shape the future.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
            
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About us</Link></li>
              <li><Link to="/services">Service</Link></li>
             <li> <Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div className="footer-column">
            <h4 className="footer-title">Follow Us</h4>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} NUAM Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
