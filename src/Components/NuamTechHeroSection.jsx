import React, { useEffect, useRef } from "react";
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
          height: 100vh;
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
          top: 0; left: 0; right: 0; bottom: 0;
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
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 2;
        }

        .particle {
          position: absolute;
          background: var(--accent);
          border-radius: 50%;
          opacity: 0.4;
          filter: blur(1px);
          animation: float 15s infinite linear;
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
          padding: 2rem;
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 900;
          background: linear-gradient(135deg, #fff, var(--accent));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin: 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
          text-shadow: 0 0 30px var(--glow);
          animation: glowPulse 3s ease-in-out infinite alternate;
        }

        @keyframes glowPulse {
          from { text-shadow: 0 0 20px var(--glow), 0 0 40px var(--glow); }
          to { text-shadow: 0 0 40px var(--glow), 0 0 80px var(--glow); }
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          margin: 1.5rem 0;
          opacity: 0.9;
          font-weight: 300;
          letter-spacing: 0.5px;
        }

        .hero-desc {
          font-size: 1.1rem;
          max-width: 700px;
          margin: 0 auto 2.5rem;
          line-height: 1.7;
          opacity: 0.8;
        }

        .cta-button {
          display: inline-block;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          background: transparent;
          border: 2px solid var(--accent);
          border-radius: 50px;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          z-index: 1;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(247, 37, 133, 0.3), transparent);
          transition: left 0.7s;
          z-index: -1;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          background: var(--accent);
          box-shadow: 0 0 30px rgba(247, 37, 133, 0.6);
          transform: translateY(-3px);
        }

        .tech-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          margin: 0.5rem;
          background: rgba(247, 37, 133, 0.15);
          border: 1px solid var(--accent);
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 500;
          backdrop-filter: blur(5px);
        }

        /* 3D Tilt Effect */
        .hero-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(247, 37, 133, 0.3);
          border-radius: 20px;
          padding: 2rem;
          margin-top: 3rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transform-style: preserve-3d;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-content { padding: 1rem; }
          .hero-card { padding: 1.5rem; }
          .tech-badge { font-size: 0.8rem; padding: 0.4rem 0.8rem; }
        }
      `}</style>

      <section ref={sectionRef} className="nuam-hero">
        {/* Animated Grid Background */}
        <motion.div className="bg-grid" style={{ y: yBg }} />

        {/* Floating Particles */}
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: Math.random() * 6 + 2 + "px",
                height: Math.random() * 6 + 2 + "px",
                left: Math.random() * 100 + "%",
                animationDelay: Math.random() * 15 + "s",
                animationDuration: (Math.random() * 20 + 15) + "s",
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <motion.div className="hero-content" style={{ y: yText, opacity }}>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ marginTop: '120px' }}
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
            style={{ transform: "rotateX(5deg)",marginTop: '0px' }}
            
          >
            <div>
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