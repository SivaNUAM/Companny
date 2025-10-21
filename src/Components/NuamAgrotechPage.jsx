import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Leaf, Home, Sun, Droplets, Smartphone, Zap, Cpu, Cloud,
  Wifi, Shield, CheckCircle, ArrowRight, Star, Users,
  TrendingUp, Globe, Mail, Phone, MapPin, Bot, Database
} from "lucide-react";
import smart from "../Assets/smart.png";
import Terrace from "../Assets/terrace.png";
import Roof from "../Assets/roof.png";

const NuamAgrotechPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 0.5], [1, 1.4]);

  // Live Stats
  const [stats, setStats] = useState({ farmers: 0, waterSaved: 0, yieldBoost: 0, dataPoints: 0 });
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true });

  useEffect(() => {
    if (inView) {
      const timers = [
        setInterval(() => setStats(s => ({ ...s, farmers: Math.min(s.farmers + 19, 1500) })), 25),
        setInterval(() => setStats(s => ({ ...s, waterSaved: Math.min(s.waterSaved + 2, 92) })), 35),
        setInterval(() => setStats(s => ({ ...s, yieldBoost: Math.min(s.yieldBoost + 5, 320) })), 20),
        setInterval(() => setStats(s => ({ ...s, dataPoints: Math.min(s.dataPoints + 500, 85000) })), 15),
      ];
      return () => timers.forEach(clearInterval);
    }
  }, [inView]);

  /* -------------------------------------------------
     PRODUCTS – now with real Unsplash images
     ------------------------------------------------- */
  const products = [
    {
      name: "Balcony Bloom",
      size: "2–4 Plants",
      price: "$89",
      features: ["App Control", "LED", "Auto-Water"],
      img: smart
    },
    {
      name: "Terrace Titan",
      size: "8–12 Plants",
      price: "$199",
      features: ["AI Growth", "Solar", "Weather Sync"],
      img: Terrace
    },
    {
      name: "Rooftop Pro",
      size: "20+ Plants",
      price: "$499",
      features: ["IoT Sensors", "Cloud AI", "Enterprise"],
      img: Roof
    },
  ];

  const testimonials = [
    { name: "Priya Mehta", role: "Mumbai Balcony", text: "Grew 12 kg of veggies in 6 months. App is magic!", rating: 5 },
    { name: "Rajesh Kumar", role: "Delhi Terrace", text: "AI predicted pest attack 3 days early. Saved my crop.", rating: 5 },
    { name: "Ananya Singh", role: "Bangalore Apartment", text: "Kids now eat what they grow. Priceless.", rating: 5 },
  ];

  /* -------------------------------------------------
     GALLERY – six real Unsplash images
     ------------------------------------------------- */
  const galleryImages = [
  "https://source.unsplash.com/400x300/?balcony,garden,urban",
  "https://source.unsplash.com/400x300/?terrace,vegetables,home",
  "https://source.unsplash.com/400x300/?rooftop,farming,india",
  "https://source.unsplash.com/400x300/?hydroponics,apartment",
  "https://source.unsplash.com/400x300/?urban,farming,lettuce",
  "https://source.unsplash.com/400x300/?smart,garden,led",
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
          --grid: repeating-linear-gradient(0deg, rgba(247,37,133,0.03) 0px, transparent 1px, transparent 50px, rgba(247,37,133,0.03) 51px),
                  repeating-linear-gradient(90deg, rgba(247,37,133,0.03) 0px, transparent 1px, transparent 50px, rgba(247,37,133,0.03) 51px);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: var(--bg); color: var(--text); font-family: 'Inter', sans-serif; overflow-x: hidden; }

        .agro-page { position: relative; }

        /* HERO */
        .hero { height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem; position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; inset: 0; background: var(--grid); background-size: 50px 50px; opacity: 0.15; }
        .hero-bg { position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(247,37,133,0.2), transparent 70%); filter: blur(100px); }
        .hero h1 { font-size: clamp(3rem, 10vw, 7.5rem); font-weight: 900; background: linear-gradient(135deg, #fff, var(--accent)); -webkit-background-clip: text; color: transparent; margin: 0; text-shadow: 0 0 50px var(--glow); letter-spacing: -0.03em; }
        .hero p { font-size: 1.4rem; max-width: 900px; margin: 1.8rem auto; opacity: 0.92; line-height: 1.8; font-weight: 300; }

        /* SECTION */
        .section { padding: 8rem 2rem; max-width: 1400px; margin: 0 auto; position: relative; }
        .section-title { font-size: 3.2rem; text-align: center; margin-bottom: 4rem; background: linear-gradient(135deg, #fff, var(--accent)); -webkit-background-clip: text; color: transparent; font-weight: 800; }

        /* GRID & CARDS */
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .card { background: var(--card); border: 1px solid rgba(247,37,133,0.3); border-radius: 20px; padding: 2rem; backdrop-filter: blur(14px); transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); position: relative; overflow: hidden; }
        .card:hover { transform: translateY(-16px) scale(1.02); box-shadow: 0 0 50px var(--glow); border-color: var(--accent); }
        .card::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(247,37,133,0.25), transparent); transition: left 0.9s; }
        .card:hover::before { left: 100%; }

        /* IT SECTION */
        .it-card { text-align: center; }
        .it-icon { width: 80px; height: 80px; background: rgba(247,37,133,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: var(--accent); }

        /* PRODUCT */
        .product-img { width: 100%; height: 220px; background: var(--light); border-radius: 16px; margin-bottom: 1rem; background-size: cover; background-position: center; }
        .price { font-size: 2rem; color: var(--accent); font-weight: 700; }

        /* STATS */
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; text-align: center; }
        .stat-num { font-size: 3.5rem; font-weight: 900; color: var(--accent); }
        .stat-label { font-size: 1.1rem; opacity: 0.8; }

        /* TESTIMONIAL */
        .testimonial { background: var(--light); border-radius: 16px; padding: 2rem; }
        .stars { color: #ffd700; margin-bottom: 1rem; }

        /* GALLERY */
        .gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; }
        .gallery-img { height: 200px; background: var(--light); border-radius: 14px; background-size: cover; transition: transform 0.4s; }
        .gallery-img:hover { transform: scale(1.05); }

        /* CTA */
        .cta-final { background: linear-gradient(135deg, rgba(247,37,133,0.25), transparent); text-align: center; padding: 9rem 2rem; }
        .cta-button { display: inline-block; padding: 1.4rem 4rem; font-size: 1.3rem; background: transparent; border: 2.5px solid var(--accent); color: #fff; border-radius: 60px; text-decoration: none; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; position: relative; overflow: hidden; transition: all 0.5s; }
        .cta-button:hover { background: var(--accent); box-shadow: 0 0 50px var(--glow); transform: translateY(-6px); }

        /* FOOTER */
        footer { background: rgba(0,0,0,0.9); padding: 5rem 2rem 2rem; text-align: center; border-top: 1px solid rgba(247,37,133,0.4); }
        .footer-links a { color: #ccc; margin: 0 1.2rem; text-decoration: none; font-size: 0.95rem; }
        .footer-links a:hover { color: var(--accent); }

        @media (max-width: 768px) {
          .section { padding: 5rem 1rem; }
          .section-title { font-size: 2.4rem; }
          .hero h1 { font-size: 3rem; }
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="agro-page">
        {/* HERO */}
        <motion.section className="hero" ref={heroRef}>
          <motion.div className="hero-bg" style={{ scale: scaleBg }} />
          <motion.div style={{ y: yHero, position: 'relative', zIndex: 10 }}>
            <motion.h1
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              NUAM AGROTECH
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
             Bringing technology and farming together — so anyone can cultivate fresh produce in their own space, whether it’s a terrace, backyard, or balcony.
            </motion.p>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link to="#products" className="cta-button" style={{ marginTop: '2.5rem' }}>
                Start Farming Now <ArrowRight style={{ marginLeft: '10px' }} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* VISION */}
        <section className="section">
          <h2 className="section-title">Our Vision</h2>
          <div className="grid">
            {[
              { icon: <Home />, text: "Farm in Every Home" },
              { icon: <Cpu />, text: "IT-Powered Agriculture" },
              { icon: <Globe />, text: "Zero Food Miles" },
            ].map((v, i) => (
              <motion.div key={i} className="card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
                <div style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>{v.text}</h3>
                <p>Bringing smart farming to urban India.</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* IT + AGROTECH */}
        <section className="section" style={{ background: 'rgba(247,37,133,0.04)' }}>
          <h2 className="section-title">IT Meets Agriculture</h2>
          <div className="grid">
            {[
              { icon: <Smartphone />, title: "Mobile App", desc: "Control light, water, nutrients from your phone" },
              { icon: <Cloud />, title: "Cloud AI", desc: "Predicts growth, pests, harvest time" },
              { icon: <Database />, title: "Data Analytics", desc: "85,000+ data points per farm" },
              { icon: <Wifi />, title: "IoT Sensors", desc: "Real-time soil, air, light monitoring" },
            ].map((tech, i) => (
              <motion.div key={i} className="card it-card" whileHover={{ scale: 1.05 }}>
                <div className="it-icon">{tech.icon}</div>
                <h3>{tech.title}</h3>
                <p>{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <h2 className="section-title">How It Works</h2>
          <div className="grid">
            {["Install Kit", "Add Seed Pod", "Connect App", "Harvest Fresh"].map((step, i) => (
              <motion.div key={i} className="card" initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ delay: i * 0.15 }}>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent)', marginBottom: '1rem' }}>{i + 1}</div>
                <h3 style={{ fontSize: '1.5rem' }}>{step}</h3>
                <p>Zero soil. Zero mess. Just growth.</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="section" id="products">
          <h2 className="section-title">Smart Farming Kits</h2>
          <div className="grid">
            {products.map((p, i) => (
              <motion.div key={i} className="card" whileHover={{ y: -12 }}>
                {/* Real image from Unsplash */}
                <div className="product-img" style={{ backgroundImage: `url(${p.img})` }} />
                <h3>{p.name}</h3>
                <p style={{ opacity: 0.7, margin: '0.5rem 0' }}>{p.size}</p>
                <div style={{ display: 'flex', gap: '0.5rem', margin: '1rem 0', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {p.features.map(f => <span key={f} style={{ fontSize: '0.8rem', background: 'rgba(247,37,133,0.2)', padding: '0.3rem 0.8rem', borderRadius: '20px' }}>{f}</span>)}
                </div>
                <p className="price">{p.price}</p>
                <Link to="/shop" className="cta-button" style={{ marginTop: '1rem', padding: '0.8rem 2rem', fontSize: '1rem' }}>
                  Buy Now
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section className="section" style={{ background: 'rgba(247,37,133,0.03)' }}>
          <h2 className="section-title">Why Choose Nuam?</h2>
          <div className="grid">
            {[
              { icon: <Droplets />, title: "92% Less Water", desc: "Closed-loop system" },
              { icon: <TrendingUp />, title: "320% Yield Boost", desc: "AI + LED optimization" },
              { icon: <Shield />, title: "No Pesticides", desc: "Controlled environment" },
              { icon: <Bot />, title: "24/7 AI Care", desc: "Auto-adjusts conditions" },
            ].map((b, i) => (
              <motion.div key={i} className="card" initial={{ x: i % 2 === 0 ? -60 : 60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
                <div style={{ fontSize: '2.8rem', color: 'var(--accent)', marginBottom: '1rem' }}>{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* LIVE STATS */}
        <section className="section" ref={statsRef}>
          <div className="stats-grid">
            <div>
              <div className="stat-num">{stats.farmers.toLocaleString()}+</div>
              <div className="stat-label">Urban Farmers</div>
            </div>
            <div>
              <div className="stat-num">{stats.waterSaved}%</div>
              <div className="stat-label">Water Saved</div>
            </div>
            <div>
              <div className="stat-num">{stats.yieldBoost}%</div>
              <div className="stat-label">Yield Increase</div>
            </div>
            <div>
              <div className="stat-num">{stats.dataPoints.toLocaleString()}+</div>
              <div className="stat-label">Data Points Daily</div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section">
          <h2 className="section-title">Farmers Love Us</h2>
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
          <h2 className="section-title">Real Homes, Real Harvests</h2>
          <div className="gallery">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                className="gallery-img"
                style={{ backgroundImage: `url(${src})` }}
                whileHover={{ scale: 1.08 }}
              />
            ))}
          </div>
        </section> */}

        {/* FINAL CTA */}
        <section className="cta-final">
          <motion.h2 className="section-title" initial={{ scale: 0.85 }} whileInView={{ scale: 1 }}>
            Grow Your Own Food Today
          </motion.h2>
          <motion.p style={{ fontSize: '1.4rem', maxWidth: '750px', margin: '0 auto 2.5rem', opacity: 0.9 }}>
            Join 1,500+ urban farmers. First harvest in 30 days. Zero experience needed.
          </motion.p>
          <motion.div initial={{ y: 30 }} whileInView={{ y: 0 }}>
            <Link to="/get-started" className="cta-button">
              Get Your Smart Farm
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default NuamAgrotechPage;