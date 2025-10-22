import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const NuamTechHeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Prevent Math.random() re-render flicker
  const [particles] = useState(() =>
    [...Array(20)].map(() => ({
      size: Math.random() * 6 + 2,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: Math.random() * 20 + 15,
    }))
  );

  return (
    <>
      <style>{`
        :root {
          --bg: #000;
          --accent: #f72585;
          --text: #fff;
          --glow: rgba(247, 37, 133, 0.6);
        }

        .nuam-hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: var(--bg);
          overflow: hidden;
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1500px;
        }

        .bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(247, 37, 133, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(247, 37, 133, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          transform: translateZ(-100px);
          opacity: 0.3;
          z-index: 1;
        }

        .floating-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 2;
        }

        .particle {
          position: absolute;
          background: var(--succent);
          border-radius: 50%;
          opacity: 0.4;
          filter: blur(1px);
          animation: float linear infinite;
        }

        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.2; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 900px;
          padding: 1.5rem;
        }

        /* === FULL MAIN HEADING DESIGN (MATCHES OTHER PAGES) === */
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

        .hero-subtitle {
          font-size: clamp(1.1rem, 3.5vw, 1.6rem);
          margin: 1.2rem 0;
          opacity: 0.9;
          font-weight: 300;
          letter-spacing: 0.5px;
        }

        .hero-desc {
          font-size: clamp(0.95rem, 2.8vw, 1.1rem);
          max-width: 700px;
          margin: 0 auto 2rem;
          line-height: 1.7;
          opacity: 0.8;
          padding: 0 0.5rem;
        }

        .cta-button {
          display: inline-block;
          padding: 0.9rem 2.2rem;
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          background: transparent;
          border: 2px solid var(--accent);
          border-radius: 60px;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          min-width: 180px;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(247,37,133,0.3), transparent);
          transition: left 0.7s;
          z-index: -1;
        }

        .cta-button:hover::before { left: 100%; }
        .cta-button:hover {
          background: var(--accent);
          box-shadow: 0 0 40px var(--glow);
          transform: translateY(-4px);
        }

        .tech-badge {
          display: inline-block;
          padding: 0.45rem 0.9rem;
          margin: 0.4rem;
          background: rgba(247, 37, 133, 0.15);
          border: 1px solid var(--accent);
          border-radius: 30px;
          font-size: 0.85rem;
          font-weight: 500;
          backdrop-filter: blur(5px);
        }

        .hero-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(247, 37, 133, 0.3);
          border-radius: 20px;
          padding: 1.6rem;
          margin-top: 2rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transform-style: preserve-3d;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .hero-content { padding: 1rem; }
          .hero-card { padding: 1.2rem; margin-top: 1.5rem; }
          .tech-badge { 
            font-size: 0.8rem; 
            padding: 0.35rem 0.7rem; 
            margin: 0.3rem;
          }
          .cta-button {
            padding: 0.8rem 2rem;
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .hero-content { padding: 0.8rem; }
          .hero-card { padding: 1rem; }
          .tech-badge { 
            display: block; 
            margin: 0.5rem auto; 
            max-width: 80%;
          }
        }
      `}</style>

      <section ref={sectionRef} className="nuam-hero">
        {/* Animated Grid */}
        <motion.div className="bg-grid" style={{ y: yBg }} />

        {/* Floating Particles */}
        <div className="floating-particles">
          {particles.map((p, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                left: `${p.left}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <motion.div className="hero-content" style={{ y: yText, opacity }}>
          {/* FULL MAIN HEADING */}
      <motion.h1
  className="section-title"
  style={{ marginTop: "28px" }}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  NUAM TECH
</motion.h1>


          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Innovate Beyond Limits
          </motion.p>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Pioneering AI, Robotics, and Next-Gen Solutions for a Smarter Tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Link to="/nuam-tech" className="cta-button">
              Explore Technology
            </Link>
          </motion.div>

          {/* Tech Badges */}
          <motion.div
            className="hero-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            style={{ transform: "rotateX(5deg)" }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem" }}>
              <span className="tech-badge">Website Development</span>
              <span className="tech-badge">APP Development</span>
              <span className="tech-badge">Custom Software</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default NuamTechHeroSection;