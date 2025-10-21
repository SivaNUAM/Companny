import { useEffect,React } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import "./abouts.css";
import about from "../assets/about.jpg";

const Abouts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Sticky Navigation */}
      <nav className="about-nav">
        <ul>
          <li><a href="#hero">About</a></li>
          <li><a href="#philosophy">Philosophy</a></li>
          <li><a href="#journey">Our Journey</a></li>
          <li><a href="#culture">Culture</a></li>
        </ul>
      </nav>

      {/* 1️⃣ Hero Section */}
      <section id="hero" className="about-section hero">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="neon">About NUAM</h1>
            <p className="hero-tagline">
              NUAM is a future-forward company delivering transformative solutions in technology,
              digital branding, and architecture. We merge creativity with strategy to power
              real-world impact.
            </p>
          </motion.div>
          <Tilt scale={1.1} tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={true} glareMaxOpacity={0.25}>
            <img src={about} alt="About NUAM" className="hero-img" loading="lazy" />
          </Tilt>
        </div>
      </section>
</div>
  );
};

export default Abouts;