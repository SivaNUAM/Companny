import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Film, PenTool, BookOpen, Users, Sparkles, Star,
  MessageSquare, Award, Globe, Mail, Phone, MapPin,
  ArrowRight, Play, Quote, Lightbulb, Clapperboard
} from "lucide-react";

const NuamStoryBoxPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);

  // Typewriter effect
  const [typedText, setTypedText] = useState("");
  const fullText = "We write the future of entertainment.";
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, []);

  // Stats
  const [stats, setStats] = useState({ stories: 0, clients: 0, awards: 0, supported: 0 });
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true });
  useEffect(() => {
    if (inView) {
      const timers = [
        setInterval(() => setStats(s => ({ ...s, stories: Math.min(s.stories + 3, 1) })), 30),
        setInterval(() => setStats(s => ({ ...s, clients: Math.min(s.clients + 2, 5) })), 40),
        setInterval(() => setStats(s => ({ ...s, awards: Math.min(s.awards + 1, 0) })), 80),
        setInterval(() => setStats(s => ({ ...s, supported: Math.min(s.supported + 5, 10) })), 25),
      ];
      return () => timers.forEach(clearInterval);
    }
  }, [inView]);

  const services = [
    { icon: <Film />, title: "Screenplay Development", desc: "From idea to final draft — Hollywood-ready scripts" },
    { icon: <BookOpen />, title: "Story Consulting", desc: "Refine your plot, characters, and world-building" },
    { icon: <PenTool />, title: "Content Creation", desc: "Web series, short films, ads, novels" },
    { icon: <Lightbulb />, title: "Aspiring Writer Support", desc: "Mentorship, feedback, pitching help" },
  ];

  const testimonials = [
    { name: "Arjun Rao", role: "Director", text: "Nuam turned my rough idea into a festival-winning script.", rating: 5 },
    { name: "Meera Nair", role: "Aspiring Writer", text: "Their mentorship helped me get my first Netflix pitch!", rating: 5 },
    { name: "Vikram Singh", role: "Producer", text: "Professional, creative, and deadline-driven. Gold standard.", rating: 5 },
  ];

  return (
    <>
      <style>{`
        :root {
          --bg: #000;
          --accent: #f72585;
          --text: #fff;
          --card: rgba(255, 255, 255, 0.06);
          --glow: rgba(247, 37, 133, 0.5);
          --light: rgba(255, 255, 255, 0.08);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: var(--bg); color: var(--text); font-family: 'Inter', sans-serif; overflow-x: hidden; }

        .story-page { position: relative; }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 2rem 1rem;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(45deg, rgba(247,37,133,0.03) 0px, transparent 1px, transparent 50px, rgba(247,37,133,0.03) 51px);
          opacity: 0.2;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(247,37,133,0.25), transparent 70%);
          filter: blur(120px);
        }

        /* ANIMATED SECTION TITLE */
        .section-title {
          font-size: clamp(2.4rem, 7vw, 6rem);
          font-weight: 800;
          text-align: center;
          margin: 0 auto 2.5rem;
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

        .typewriter {
          font-size: clamp(1.1rem, 3.5vw, 1.5rem);
          font-weight: 300;
          margin: 1.8rem 0;
          height: 2rem;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2.5px solid var(--accent);
          animation: blink 0.7s infinite;
          max-width: 100%;
        }
        @keyframes blink { 50% { border-color: transparent; } }

        /* SECTION */
        .section {
          padding: 5rem 1rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* GRID & CARDS */
        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .card {
          background: var(--card);
          border: 1px solid rgba(247,37,133,0.3);
          border-radius: 18px;
          padding: 1.6rem;
          backdrop-filter: blur(14px);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 0 40px var(--glow);
          border-color: var(--accent);
        }
        .card::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(247,37,133,0.25), transparent);
          transition: left 0.8s;
        }
        .card:hover::before { left: 100%; }

        .service-icon {
          width: 60px; height: 60px;
          background: rgba(247,37,133,0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: var(--accent);
        }

        /* STATS */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          text-align: center;
        }
        .stat-num {
          font-size: clamp(2.2rem, 6vw, 3rem);
          font-weight: 900;
          color: var(--accent);
        }
        .stat-label {
          font-size: 0.95rem;
          opacity: 0.8;
        }

        /* TESTIMONIAL */
        .testimonial {
          background: var(--light);
          border-radius: 16px;
          padding: 1.6rem;
          position: relative;
        }
        .quote-icon {
          position: absolute;
          top: -16px; left: 16px;
          font-size: 2.5rem;
          color: var(--accent);
          opacity: 0.3;
        }

        /* CTA */
        .cta-final {
          background: linear-gradient(135deg, rgba(247,37,133,0.3), transparent);
          text-align: center;
          padding: 6rem 1rem;
        }
        .cta-button {
          display: inline-block;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          background: transparent;
          border: 2px solid var(--accent);
          color: #fff;
          border-radius: 60px;
          text-decoration: none;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s;
          min-width: 200px;
        }
        .cta-button:hover {
          background: var(--accent);
          box-shadow: 0 0 40px var(--glow);
          transform: translateY(-4px);
        }

        /* RESPONSIVE */
        @media (min-width: 480px) {
          .grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 768px) {
          .hero { padding: 2rem; }
          .section { padding: 6rem 2rem; }
          .grid { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
          .stats-grid { grid-template-columns: repeat(4, 1fr); }
          .service-icon { width: 72px; height: 72px; }
          .cta-button { padding: 1.2rem 3.5rem; font-size: 1.2rem; }
        }
        @media (min-width: 1024px) {
          .section { padding: 7rem 2rem; }
        }
      `}</style>

      <div className="story-page">
        {/* HERO */}
        <motion.section className="hero" ref={heroRef}>
          {/* <motion.div className="hero-bg" style={{ scale: scaleBg }} /> */}
          <motion.div style={{ y: yHero, position: "relative", zIndex: 10 }}>
            <motion.h1
              className="section-title"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            >
              NUAM STORY BOX
            </motion.h1>

            <motion.div
              className="typewriter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {typedText}
            </motion.div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
              style={{
                maxWidth: "800px",
                margin: "1.5rem auto",
                fontSize: "1.1rem",
                opacity: 0.9,
                lineHeight: "1.7",
                padding: "0 0.5rem"
              }}
            >
              We develop stories and screenplays for the entertainment industry. 
              We also support aspiring writers in bringing their vision to life.
            </motion.p>

            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4 }}
              style={{ marginTop: "1.5rem" }}
            >
              <Link to="#services" className="cta-button">
                Explore Our Craft <ArrowRight style={{ marginLeft: "8px" }} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* SERVICES */}
        <section className="section" id="services">
          <h2 className="section-title">What We Do</h2>
          <div className="grid">
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">{s.icon}</div>
                <h3 style={{ textAlign: "center", marginBottom: "0.8rem", fontSize: "1.2rem" }}>
                  {s.title}
                </h3>
                <p style={{ textAlign: "center", fontSize: "0.95rem", opacity: 0.9 }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="section" style={{ background: "rgba(247,37,133,0.03)" }}>
          <h2 className="section-title">Our Process</h2>
          <div className="grid">
            {["Idea", "Outline", "Draft", "Polish", "Pitch"].map((step, i) => (
              <motion.div
                key={i}
                className="card"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: "var(--accent)",
                    textAlign: "center",
                    marginBottom: "0.8rem"
                  }}
                >
                  {i + 1}
                </div>
                <h3 style={{ textAlign: "center", fontSize: "1.2rem" }}>{step}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SUPPORT */}
        <section className="section" style={{ background: "rgba(247,37,133,0.04)" }}>
          <h2 className="section-title">We Support Writers</h2>
          <div className="grid">
            {[
              { icon: <MessageSquare />, text: "Free Feedback Sessions" },
              { icon: <Users />, text: "Writer Community" },
              { icon: <Award />, text: "Pitching to Producers" },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="card"
                initial={{ x: i % 2 === 0 ? -40 : 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <div
                  style={{
                    fontSize: "2.8rem",
                    color: "var(--accent)",
                    marginBottom: "0.8rem",
                    textAlign: "center"
                  }}
                >
                  {s.icon}
                </div>
                <p style={{ textAlign: "center", fontSize: "1.1rem" }}>{s.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="section" ref={statsRef}>
          <div className="stats-grid">
            <div><div className="stat-num">{stats.stories}+</div><div className="stat-label">Stories Written</div></div>
            <div><div className="stat-num">{stats.clients}+</div><div className="stat-label">Happy Clients</div></div>
            <div><div className="stat-num">{stats.awards}</div><div className="stat-label">Awards Won</div></div>
            <div><div className="stat-num">{stats.supported}+</div><div className="stat-label">Writers Supported</div></div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section">
          <h2 className="section-title">Voices from the Industry</h2>
          <div className="grid">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="testimonial"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <Quote className="quote-icon" />
                <p style={{ fontStyle: "italic", margin: "1.2rem 0", fontSize: "0.95rem" }}>
                  "{t.text}"
                </p>
                <p style={{ fontSize: "0.9rem" }}>
                  <strong>{t.name}</strong> — {t.role}
                </p>
                <div style={{ color: "#ffd700", marginTop: "0.4rem", fontSize: "1.1rem" }}>
                  {"★★★★★".slice(0, t.rating)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="cta-final">
          <motion.h2
            className="section-title"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            Let’s Write Your Story
          </motion.h2>
          <motion.p
            style={{
              fontSize: "1.1rem",
              maxWidth: "90%",
              margin: "0 auto 2rem",
              opacity: 0.9,
              lineHeight: "1.7"
            }}
          >
            Whether you're a producer or a dreamer — we turn ideas into unforgettable stories.
          </motion.p>
          <motion.div initial={{ y: 20 }} whileInView={{ y: 0 }} viewport={{ once: true }}>
            <Link to="/contact" className="cta-button">
              Start Your Project
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default NuamStoryBoxPage;