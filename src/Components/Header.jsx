import React, { useEffect, useState } from "react";
import "./header.css";
import logo3 from "../assets/logo3.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) setDropdownOpen(false);
  }, [menuOpen]);

  return (
    <>
      <header className={`custom-headers ${animate ? "animate-header" : ""}`}>
        <div className="logo-container">
          <img src={logo3} alt="Logo" className="header-logo" />
        </div>

        <div className="header-titlee">NUAM ENTERPRISES</div>

        <div
          className={`choco-menus ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bars bar1"></div>
          <div className="bars bar2"></div>
          <div className="bars bar3"></div>
        </div>
      </header>

      <div className={`fullscreen-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ×
        </button>

        <ul className="fullscreen-linkss">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li className={`fullscreen-dropdown ${dropdownOpen ? "open" : ""}`}>
            <span onClick={() => setDropdownOpen(!dropdownOpen)}>About ▾</span>
            <ul className="fullscreen-submenu">
              <li>
                <Link to="/about" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>About us</Link>
              </li>
              <li>
                <Link to="/about/philosophy" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Our Philosophy</Link>
              </li>
              <li>
                <Link to="/about/Journey" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Our Journey</Link>
              </li>
              <li>
                <Link to="/about/Culture" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Culture</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          </li>
                    <li>
            <Link to="/product-details" onClick={() => setMenuOpen(false)}>Products</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
          <button className="btn1">Explore us</button>
        </ul>
      </div>
    </>
  );
};

export default Header;