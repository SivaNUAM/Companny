import React, { useEffect } from 'react';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import mediums from "../assets/video/mediums.mp4";
// import logo from "../assets/logo.png";
import about from "../assets/about.jpg"; // For image section

const About = () => {
  useEffect(() => {
    const section = document.querySelector('.about-section');

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      const video = document.querySelector('.parallax-video');
    //   const logo = document.querySelector('.parallax-logo');
      const title = document.querySelector('.parallax-title');
      const text = document.querySelector('.parallax-text');

      if (video && logo && title && text) {
        video.style.transform = `translate3d(${x * 0.2}px, ${y * 0.2}px, 0)`;
        // logo.style.transform = `translate3d(${x * 0.4}px, ${y * 0.4}px, 0)`;
        title.style.transform = `translate3d(${x * 0.6}px, ${y * 0.6}px, 0)`;
        text.style.transform = `translate3d(${x * 0.8}px, ${y * 0.8}px, 0)`;
      }
    };

    section.addEventListener('mousemove', handleMouseMove);
    return () => section.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="about-pages">
      {/* === Section 1: Parallax About Us === */}
      <section className="about-section">
        <div className="parallax-layer parallax-video">
          <video
            src={mediums}
            autoPlay
            loop
            muted
            playsInline
            className="blob-video"
          />
        </div>

        {/* <img src={''} alt="Logo" className="parallax-layer parallax-logo" /> */}

        <div className="heading-container">
          <h1 className="about-title parallax-layer parallax-title">
            About <span>Us</span>
          </h1>
          <div className="parallax-layer parallax-text">
            <p className="mission-text">
              Shaping Tomorrow: From Skyscrapers to Software, Storytelling to Digital Worlds.
            </p>
            <p className="sub-text">
              NUAM is a multi-disciplinary powerhouse that shapes futures across industries — from building skyscrapers to crafting code, from telling cinematic stories to developing digital worlds.
            </p>
          </div>
        </div>
      </section>

      {/* === Section 2: Fullscreen Image with Caption === */}
      <section className="image-section">
        <div className="image-overlay">
          <img src={about} alt="Innovation" className="cover-img" />
          <div className="caption">
            <h2>Powered by Innovation</h2>
            <p>We bring AI to life across industries with scalable data solutions and cutting-edge models.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
