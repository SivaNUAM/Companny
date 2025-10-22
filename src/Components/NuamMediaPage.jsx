import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Megaphone, Target, BarChart3, Globe, Smartphone,
  Zap, Users, TrendingUp, Award, Mail, Phone, MapPin,
  ArrowRight, Play, Star, Cpu, Palette, MessageSquare,
  Instagram, Facebook, Youtube, Twitter, Check, X
} from "lucide-react";

const NuamMediaPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);

  // Live Campaign Counter
  const [campaigns, setCampaigns] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCampaigns(prev => (prev < 1247 ? prev + 13 : 1247));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  // ROI Calculator
  const [adSpend, setAdSpend] = useState(50000);
  const roi = 420; // Fixed for demo

  // Stats
  const [stats, setStats] = useState({ clients: 0, reach: 0, awards: 0 });
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true });
  useEffect(() => {
    if (inView) {
      const timers = [
        setInterval(() => setStats(s => ({ ...s, clients: Math.min(s.clients + 5, 200) })), 25),
        setInterval(() => setStats(s => ({ ...s, reach: Math.min(s.reach + 500000, 10000000) })), 10),
        setInterval(() => setStats(s => ({ ...s, awards: Math.min(s.awards + 1, 12) })), 60),
      ];
      return () => timers.forEach(clearInterval);
    }
  }, [inView]);

  const services = [
    { icon: <Megaphone />, title: "Social Media Marketing", platforms: "Instagram, FB, LinkedIn, TikTok" },
    { icon: <Target />, title: "PPC & Performance Ads", platforms: "Google Ads, Meta, Programmatic" },
    { icon: <Palette />, title: "Creative & Content", platforms: "Reels, Carousels, Videos, Copy" },
    { icon: <BarChart3 />, title: "SEO & Analytics", platforms: "Rank #1, GA4, Looker Studio" },
  ];

  const packages = [
    { name: "Starter", price: "Custom", features: ["2 Platforms", "10 Posts/mo", "₹50K Ad Spend", "Basic Reporting"], popular: false },
    { name: "Growth", price: "Custom", features: ["4 Platforms", "30 Posts/mo", "₹2L Ad Spend", "Weekly Reports", "A/B Testing"], popular: true },
    { name: "Enterprise", price: "Custom", features: ["All Platforms", "Unlimited Posts", "₹5L+ Ad Spend", "Real-time Dashboard", "Dedicated Manager"], popular: false },
  ];

  const testimonials = [
    { name: "Kavya Patel", role: "CEO, ZestTea", text: "320% ROAS in 90 days. Nuam Media is pure gold.", rating: 5 },
    { name: "Vikram Singh", role: "CMO, FitPulse", text: "12K leads. Best decision we made.", rating: 5 },
    { name: "Neha Gupta", role: "Founder, LuxeLiving", text: "₹42Cr in sales. Unreal results.", rating: 5 },
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
          --border: rgba(247,37,133,0.3);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: var(--bg); color: var(--text); font-family: 'Inter', sans-serif; overflow-x: hidden; }

        .media-page { position: relative; }

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
          background: repeating-linear-gradient(90deg, rgba(247,37,133,0.03) 0px, transparent 1px, transparent 50px, rgba(247,37,133,0.03) 51px);
          opacity: 0.2;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(247,37,133,0.3), transparent 70%);
          filter: blur(130px);
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

        .counter {
          font-size: clamp(1.8rem, 5vw, 2.5rem);
          font-weight: 700;
          color: var(--accent);
          margin: 1.5rem 0;
        }

        .hero p {
          font-size: clamp(1rem, 3vw, 1.3rem);
          max-width: 800px;
          margin: 1.5rem auto;
          opacity: 0.9;
          line-height: 1.7;
          padding: 0 0.5rem;
        }

        /* SECTION */
        .section { padding: 5rem 1rem; max-width: 1400px; margin: 0 auto; }

        /* GRID & CARDS */
        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .card {
          background: var(--card);
          border: 1px solid var(--border);
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

        /* PACKAGES */
        .package-card { text-align: center; position: relative; }
        .popular-badge {
          position: absolute;
          top: -10px; right: 16px;
          background: var(--accent);
          color: #fff;
          padding: 0.4rem 0.9rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
        }
        .price {
          font-size: 1.8rem;
          color: var(--accent);
          font-weight: 700;
          margin: 0.8rem 0;
        }
        .features {
          list-style: none;
          text-align: left;
          margin: 1.2rem 0;
          font-size: 0.9rem;
        }
        .features li {
          margin: 0.5rem 0;
          display: flex;
          align-items: center;
        }
        .features li svg {
          margin-right: 0.5rem;
          color: var(--accent);
          flex-shrink: 0;
        }

        /* ROI CALCULATOR */
        .roi-calc {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 1.8rem;
          text-align: center;
        }
        .calc-input {
          width: 100%;
          padding: 0.9rem;
          background: rgba(255,255,255,0.08);
          border: 1px solid var(--border);
          border-radius: 12px;
          color: #fff;
          font-size: 1rem;
          margin: 1rem 0;
        }
        .calc-output {
          font-size: clamp(2rem, 6vw, 2.5rem);
          font-weight: 900;
          color: var(--accent);
          margin: 1.2rem 0;
        }

        /* TESTIMONIAL */
        .testimonial {
          background: var(--light);
          border-radius: 16px;
          padding: 1.6rem;
        }
        .stars {
          color: #ffd700;
          margin-bottom: 0.8rem;
          font-size: 1.1rem;
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

        /* CTA */
        .cta-final {
          background: linear-gradient(135deg, rgba(247,37,133,0.35), transparent);
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

        /* MOBILE CTA BAR */
        .mobile-cta {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          background: rgba(0,0,0,0.95);
          padding: 1rem;
          text-align: center;
          border-top: 1px solid var(--border);
          display: none;
         283 z-index: 1000;
        }
        .mobile-cta button {
          width: 90%;
          padding: 1rem;
          background: var(--accent);
          color: #fff;
          border: none;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
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
          .mobile-cta { display: none; }
        }
        @media (min-width: 1024px) {
          .section { padding: 7rem 2rem; }
        }
        @media (max-width: 768px) {
          .mobile-cta { display: block; }
        }
      `}</style>

      <div className="media-page">
        {/* HERO */}
        <motion.section className="hero" ref={heroRef}>
          {/* <motion.div className="hero-bg" style={{ scale: scaleBg }} /> */}
          <motion.div style={{ y: yHero, position: 'relative', zIndex: 10 }}>
            <motion.h1
              className="section-title"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            >
              NUAM MEDIA
            </motion.h1>

            {/* <motion.div
              className="counter"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              {campaigns.toLocaleString()}+ Campaigns Launched
            </motion.div> */}

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              We’re the creative force behind brand growth — blending strategy, storytelling, and data to deliver results that matter.
            </motion.p>

            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.3 }}
              style={{ marginTop: "1.5rem" }}
            >
              <Link to="#packages" className="cta-button">
                See Packages <ArrowRight style={{ marginLeft: "8px" }} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* SERVICES */}
        <section className="section" id="services">
          <h2 className="section-title">Our Services</h2>
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
                <h3 style={{ textAlign: 'center', marginBottom: '0.8rem', fontSize: '1.2rem' }}>
                  {s.title}
                </h3>
                <p style={{ textAlign: 'center', opacity: 0.8, fontSize: '0.9rem' }}>
                  {s.platforms}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PACKAGES */}
        <section className="section" id="packages" style={{ background: 'rgba(247,37,133,0.03)' }}>
          <h2 className="section-title">Choose Your Plan</h2>
          <div className="grid">
            {packages.map((p, i) => (
              <motion.div
                key={i}
                className="card package-card"
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {p.popular && <div className="popular-badge">MOST POPULAR</div>}
                <h3 style={{ fontSize: '1.35rem' }}>{p.name}</h3>
                <p className="price">{p.price}</p>
                <ul className="features">
                  {p.features.map((f, idx) => (
                    <li key={idx}><Check size={16} /> {f}</li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="cta-button"
                  style={{ marginTop: '1.2rem', padding: '0.8rem 2rem', fontSize: '0.95rem' }}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ROI CALCULATOR */}
        <section className="section" style={{ background: 'rgba(247,37,133,0.04)' }}>
          <h2 className="section-title">Estimate Your ROI</h2>
          <div className="grid">
            <div className="card roi-calc">
              <p style={{ marginBottom: '0.5rem' }}>Monthly Ad Spend (₹)</p>
              <input
                type="range"
                min="5000"
                max="500000"
                step="10000"
                value={adSpend}
                onChange={(e) => setAdSpend(e.target.value)}
                className="calc-input"
                style={{ accentColor: '#f72585' }}
              />
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>₹{adSpend.toLocaleString()}</p>
              <p style={{ margin: '1rem 0', opacity: 0.9 }}>Average ROI: {roi}%</p>
              <p className="calc-output">₹{(adSpend * (roi / 100)).toLocaleString()}</p>
              <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Expected Revenue</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section" style={{ background: 'rgba(247,37,133,0.03)' }}>
          <h2 className="section-title">What Clients Say</h2>
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
                <div className="stars">{'★★★★★'.slice(0, t.rating)}</div>
                <p style={{ fontStyle: 'italic', margin: '1rem 0', fontSize: '0.95rem' }}>
                  "{t.text}"
                </p>
                <p style={{ fontSize: '0.9rem' }}>
                  <strong>{t.name}</strong> — {t.role}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="section" ref={statsRef}>
          <div className="stats-grid">
            <div>
              <div className="stat-num">{stats.clients}+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div>
              <div className="stat-num">{(stats.reach / 1000000).toFixed(1)}M</div>
              <div className="stat-label">Reach</div>
            </div>
            <div>
              <div className="stat-num">{stats.awards}</div>
              <div className="stat-label">Awards Won</div>
            </div>
            <div>
              <div className="stat-num">{campaigns}+</div>
              <div className="stat-label">Campaigns</div>
            </div>
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
            Ready to Scale?
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
            Let’s build a campaign that doesn’t just perform — it **dominates**.
          </motion.p>
          <motion.div initial={{ y: 20 }} whileInView={{ y: 0 }} viewport={{ once: true }}>
            <Link to="/contact" className="cta-button">
              Book a Free Strategy Call
            </Link>
          </motion.div>
        </section>

        {/* MOBILE CTA BAR */}
        <div className="mobile-cta">
          <button onClick={() => window.location.href = '/contact'}>
            Book Free Call
          </button>
        </div>
      </div>
    </>
  );
};

export default NuamMediaPage;