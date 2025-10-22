import React, { useEffect } from 'react';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import mediums from "../assets/video/mediums.mp4";
import about from "../assets/about.jpg";

const About = () => {
  useEffect(() => {
    const section = document.querySelector('.about-section');

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      const video = document.querySelector('.parallax-video');
      const title = document.querySelector('.parallax-title');
      const text = document.querySelector('.parallax-text');

      // Fixed: logo was undefined
      if (video && title && text) {
        video.style.transform = `translate3d(${x * 0.2}px, ${y * 0.2}px, 0)`;
        title.style.transform = `translate3d(${x * 0.6}px, ${y * 0.6}px, 0)`;
        text.style.transform = `translate3d(${x * 0.8}px, ${y * 0.8}px, 0)`;
      }
    };

    section?.addEventListener('mousemove', handleMouseMove);
    return () => section?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="about-pages">
      <style>{`
        /* === ONLY HEADING DESIGN CHANGED === */
        .section-title {
          font-size: clamp(2.4rem, 7vw, 6rem);
          font-weight: 800;
          text-align: center;
          margin: 0 0 1.5rem;
          background: linear-gradient(135deg, #ffffff, #a855f7, #06b6d4);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease-in-out infinite, titleSlideUp 1s ease-out;
          position: relative;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .section-title span {
          background: linear-gradient(135deg, #f72585, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #a855f7, transparent);
          border-radius: 2px;
          animation: underlineGrow 1.5s ease-out 0.5s both;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes titleSlideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes underlineGrow {
          0% { width: 0; opacity: 0; }
          100% { width: 80px; opacity: 1; }
        }
      `}</style>

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

        <div className="heading-container">
          {/* ONLY THIS HEADING CHANGED */}
          <h1 className="section-title parallax-layer parallax-title">
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