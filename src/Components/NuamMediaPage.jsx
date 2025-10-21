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
  const [roi, setRoi] = useState(420);

  // Stats
  const [stats, setStats] = useState({ clients: 0, reach: 0, awards: 0 });
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true });
  useEffect(() => {
    if (inView) {
      const timers = [
        setInterval(() => setStats(s => ({ ...s, clients: Math.min(s.clients + 3,2 ) })), 25),
        setInterval(() => setStats(s => ({ ...s, reach: Math.min(s.reach + 500000, 10000000) })), 10),
        setInterval(() => setStats(s => ({ ...s, awards: Math.min(s.awards + 1, 0) })), 60),
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
    {
      name: "Starter",
       price: "Custom",
      features: ["2 Platforms", "10 Posts/mo", "₹50K Ad Spend", "Basic Reporting"],
      popular: false
    },
    {
      name: "Growth",
    price: "Custom",
      features: ["4 Platforms", "30 Posts/mo", "₹2L Ad Spend", "Weekly Reports", "A/B Testing"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["All Platforms", "Unlimited Posts", "₹5L+ Ad Spend", "Real-time Dashboard", "Dedicated Manager"],
      popular: false
    },
  ];

  const caseStudies = [
    { brand: "ZestTea", result: "320% ROAS in 90 days", img: "https://source.unsplash.com/600x400/?tea,brand,marketing" },
    { brand: "FitPulse Gym", result: "12,000 leads in 6 months", img: "https://source.unsplash.com/600x400/?gym,fitness,ads" },
    { brand: "LuxeLiving", result: "₹42Cr sales via Instagram", img: "https://source.unsplash.com/600x400/?luxury,home,realestate" },
  ];

  const team = [
    { name: "Aarav Sharma", role: "Head of Strategy", img: "https://source.unsplash.com/200x200/?portrait,man,indian" },
    { name: "Priya Desai", role: "Creative Director", img: "https://source.unsplash.com/200x200/?portrait,woman,indian" },
    { name: "Rohan Mehta", role: "Performance Lead", img: "https://source.unsplash.com/200x200/?portrait,man,professional" },
  ];

  const testimonials = [
    { name: "Kavya Patel", role: "CEO, ZestTea", text: "320% ROAS in 90 days. Nuam Media is pure gold.", rating: 5 },
    { name: "Vikram Singh", role: "CMO, FitPulse", text: "12K leads. Best decision we made.", rating: 5 },
    { name: "Neha Gupta", role: "Founder, LuxeLiving", text: "₹42Cr in sales. Unreal results.", rating: 5 },
  ];

  const gallery = [
    "https://source.unsplash.com/400x300/?digital,marketing,campaign,creative",
    "https://source.unsplash.com/400x300/?social,media,ads,instagram",
    "https://source.unsplash.com/400x300/?seo,analytics,report",
    "https://source.unsplash.com/400x300/?content,creation,video",
    "https://source.unsplash.com/400x300/?google,ads,performance",
    "https://source.unsplash.com/400x300/?branding,agency,team",
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
        .hero { height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem; position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; inset: 0; background: repeating-linear-gradient(90deg, rgba(247,37,133,0.03) 0px, transparent 1px, transparent 50px, rgba(247,37,133,0.03) 51px); opacity: 0.2; }
        .hero-bg { position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(247,37,133,0.3), transparent 70%); filter: blur(130px); }
        .hero h1 { font-size: clamp(3rem, 10vw, 7.5rem); font-weight: 900; background: linear-gradient(135deg, #fff, var(--accent)); -webkit-background-clip: text; color: transparent; margin: 0; text-shadow: 0 0 70px var(--glow); }
        .counter { font-size: 2.5rem; font-weight: 700; color: var(--accent); margin: 1.5rem 0; }
        .hero p { font-size: 1.4rem; max-width: 800px; margin: 1.5rem auto; opacity: 0.9; line-height: 1.8; }

        /* SECTION */
        .section { padding: 8rem 2rem; max-width: 1400px; margin: 0 auto; }
        .section-title { font-size: 3.2rem; text-align: center; margin-bottom: 4rem; background: linear-gradient(135deg, #fff, var(--accent)); -webkit-background-clip: text; color: transparent; font-weight: 800; }

        /* GRID & CARDS */
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .card { background: var(--card); border: 1px solid var(--border); border-radius: 20px; padding: 2rem; backdrop-filter: blur(14px); transition: all 0.5s ease; position: relative; overflow: hidden; }
        .card:hover { transform: translateY(-16px) scale(1.02); box-shadow: 0 0 50px var(--glow); border-color: var(--accent); }
        .card::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(247,37,133,0.25), transparent); transition: left 0.9s; }
        .card:hover::before { left: 100%; }

        /* SERVICE */
        .service-icon { width: 80px; height: 80px; background: rgba(247,37,133,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: var(--accent); }

        /* PACKAGES */
        .package-card { text-align: center; position: relative; }
        .popular-badge { position: absolute; top: -12px; right: 20px; background: var(--accent); color: #fff; padding: 0.4rem 1rem; border-radius: 20px; font-size: 0.8rem; font-weight: 700; }
        .price { font-size: 2.2rem; color: var(--accent); font-weight: 700; margin: 1rem 0; }
        .features { list-style: none; text-align: left; margin: 1.5rem 0; }
        .features li { margin: 0.6rem 0; display: flex; align-items: center; font-size: 0.95rem; }
        .features li svg { margin-right: 0.5rem; color: var(--accent); }

        /* CASE STUDY */
        .case-img { width: 100%; height: 200px; background: var(--light); border-radius: 16px; margin-bottom: 1rem; background-size: cover; background-position: center; }
        .result { font-size: 1.3rem; font-weight: 700; color: var(--accent); margin-top: 0.5rem; }

        /* ROI CALCULATOR */
        .roi-calc { background: var(--card); border: 1px solid var(--border); border-radius: 20px; padding: 2rem; text-align: center; }
        .calc-input { width: 100%; padding: 1rem; background: rgba(255,255,255,0.08); border: 1px solid var(--border); border-radius: 12px; color: #fff; font-size: 1.1rem; margin: 1rem 0; }
        .calc-output { font-size: 2.5rem; font-weight: 900; color: var(--accent); margin: 1.5rem 0; }

        /* TEAM */
        .team-card { text-align: center; }
        .team-img { width: 120px; height: 120px; background: var(--light); border-radius: 50%; margin: 0 auto 1rem; background-size: cover; background-position: center; border: 3px solid var(--accent); }

        /* TESTIMONIAL */
        .testimonial { background: var(--light); border-radius: 16px; padding: 2rem; position: relative; }
        .stars { color: #ffd700; margin-bottom: 1rem; }

        /* GALLERY */
        .gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; }
        .gallery-img { height: 200px; background: var(--light); border-radius: 14px; background-size: cover; transition: transform 0.4s; }
        .gallery-img:hover { transform: scale(1.05); }

        /* CTA */
        .cta-final { background: linear-gradient(135deg, rgba(247,37,133,0.35), transparent); text-align: center; padding: 9rem 2rem; }
        .cta-button { display: inline-block; padding: 1.4rem 4rem; font-size: 1.3rem; background: transparent; border: 2.5px solid var(--accent); color: #fff; border-radius: 60px; text-decoration: none; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; position: relative; overflow: hidden; transition: all 0.5s; }
        .cta-button:hover { background: var(--accent); box-shadow: 0 0 50px var(--glow); transform: translateY(-6px); }

        /* MOBILE CTA BAR */
        .mobile-cta { position: fixed; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.95); padding: 1rem; text-align: center; border-top: 1px solid var(--border); display: none; z-index: 1000; }
        .mobile-cta button { width: 90%; padding: 1rem; background: var(--accent); color: #fff; border: none; border-radius: 50px; font-weight: 700; font-size: 1.1rem; }

        @media (max-width: 768px) {
          .section { padding: 5rem 1rem; }
          .section-title { font-size: 2.4rem; }
          .hero h1 { font-size: 3rem; }
          .grid { grid-template-columns: 1fr; }
          .mobile-cta { display: block; }
        }
      `}</style>

      <div className="media-page">
        {/* HERO */}
        <motion.section className="hero" ref={heroRef}>
          <motion.div className="hero-bg" style={{ scale: scaleBg }} />
          <motion.div style={{ y: yHero, position: 'relative', zIndex: 10 }}>
            <motion.h1
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              NUAM MEDIA
            </motion.h1>
            {/* <motion.div className="counter" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }}>
              {campaigns.toLocaleString()}+ Campaigns Launched
            </motion.div> */}
            <motion.p initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}>
              We’re the creative force behind brand growth — blending strategy, storytelling, and data to deliver results that matter.
            </motion.p>
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 1.4 }}>
              <Link to="#packages" className="cta-button" style={{ marginTop: '2rem' }}>
                See Packages <ArrowRight style={{ marginLeft: '10px' }} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* SERVICES */}
        <section className="section" id="services">
          <h2 className="section-title">Our Services</h2>
          <div className="grid">
            {services.map((s, i) => (
              <motion.div key={i} className="card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
                <div className="service-icon">{s.icon}</div>
                <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>{s.title}</h3>
                <p style={{ textAlign: 'center', opacity: 0.8, fontSize: '0.9rem' }}>{s.platforms}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PACKAGES */}
        <section className="section" id="packages" style={{ background: 'rgba(247,37,133,0.03)' }}>
          <h2 className="section-title">Choose Your Plan</h2>
          <div className="grid">
            {packages.map((p, i) => (
              <motion.div key={i} className="card package-card" whileHover={{ y: -10 }}>
                {p.popular && <div className="popular-badge">MOST POPULAR</div>}
                <h3>{p.name}</h3>
                <p className="price">{p.price}</p>
                <ul className="features">
                  {p.features.map((f, idx) => (
                    <li key={idx}><Check size={16} /> {f}</li>
                  ))}
                </ul>
                <Link to="/contact" className="cta-button" style={{ marginTop: '1.5rem', padding: '0.8rem 2rem', fontSize: '1rem' }}>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CASE STUDIES */}
        {/* <section className="section">
          <h2 className="section-title">Success Stories</h2>
          <div className="grid">
            {caseStudies.map((c, i) => (
              <motion.div key={i} className="card" whileHover={{ y: -10 }}>
                <div className="case-img" style={{ backgroundImage: `url(${c.img})` }} />
                <h3>{c.brand}</h3>
                <p className="result">{c.result}</p>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* ROI CALCULATOR */}
        <section className="section" style={{ background: 'rgba(247,37,133,0.04)' }}>
          <h2 className="section-title">Estimate Your ROI</h2>
          <div className="grid">
            <div className="card roi-calc">
              <p>Monthly Ad Spend (₹)</p>
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
              <p>₹{adSpend.toLocaleString()}</p>
              <p>Average ROI: {roi}%</p>
              <p className="calc-output">₹{(adSpend * (roi / 100)).toLocaleString()}</p>
              <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Expected Revenue</p>
            </div>
          </div>
        </section>

        {/* TEAM */}
        {/* <section className="section">
          <h2 className="section-title">Meet the Team</h2>
          <div className="grid">
            {team.map((t, i) => (
              <motion.div key={i} className="card team-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
                <div className="team-img" style={{ backgroundImage: `url(${t.img})` }} />
                <h3>{t.name}</h3>
                <p style={{ opacity: 0.7 }}>{t.role}</p>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* TESTIMONIALS */}
        <section className="section" style={{ background: 'rgba(247,37,133,0.03)' }}>
          <h2 className="section-title">What Clients Say</h2>
          <div className="grid">
            {testimonials.map((t, i) => (
              <motion.div key={i} className="testimonial" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.2 }}>
                <div className="stars">{'★★★★★'.slice(0, t.rating)}</div>
                <p style={{ fontStyle: 'italic', margin: '1rem 0' }}>"{t.text}"</p>
                <p><strong>{t.name}</strong> — {t.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        {/* <section className="section">
          <h2 className="section-title">Our Work</h2>
          <div className="gallery">
            {gallery.map((src, i) => (
              <motion.div key={i} className="gallery-img" style={{ backgroundImage: `url(${src})` }} whileHover={{ scale: 1.08 }} />
            ))}
          </div>
        </section> */}

        {/* STATS */}
        <section className="section" ref={statsRef}>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', textAlign: 'center' }}>
            <div><div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent)' }}>{stats.clients}+</div><div>Clients</div></div>
            <div><div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent)' }}>{(stats.reach / 1000000).toFixed(1)}</div><div>Reach</div></div>
            <div><div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent)' }}>{stats.awards}</div><div>Awards</div></div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="cta-final">
          <motion.h2 className="section-title" initial={{ scale: 0.85 }} whileInView={{ scale: 1 }}>
            Ready to Scale?
          </motion.h2>
          <motion.p style={{ fontSize: '1.4rem', maxWidth: '750px', margin: '0 auto 2.5rem', opacity: 0.9 }}>
            Let’s build a campaign that doesn’t just perform — it **dominates**.
          </motion.p>
          <motion.div initial={{ y: 30 }} whileInView={{ y: 0 }}>
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