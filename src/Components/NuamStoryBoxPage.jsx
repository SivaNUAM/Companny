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

  const portfolio = [
    { title: "The Last Signal", genre: "Sci-Fi Thriller", img: "https://source.unsplash.com/400x300/?sci-fi,movie" },
    { title: "Monsoon Hearts", genre: "Romantic Drama", img: "https://source.unsplash.com/400x300/?romance,film" },
    { title: "Echoes of 1947", genre: "Historical Epic", img: "https://source.unsplash.com/400x300/?history,drama" },
  ];

  const testimonials = [
    { name: "Arjun Rao", role: "Director", text: "Nuam turned my rough idea into a festival-winning script.", rating: 5 },
    { name: "Meera Nair", role: "Aspiring Writer", text: "Their mentorship helped me get my first Netflix pitch!", rating: 5 },
    { name: "Vikram Singh", role: "Producer", text: "Professional, creative, and deadline-driven. Gold standard.", rating: 5 },
  ];

  const gallery = [
    "https://source.unsplash.com/400x300/?screenplay,writing",
    "https://source.unsplash.com/400x300/?film,production",
    "https://source.unsplash.com/400x300/?storyboard,cinema",
    "https://source.unsplash.com/400x300/?writer,desk",
    "https://source.unsplash.com/400x300/?movie,premiere",
    "https://source.unsplash.com/400x300/?script,development",
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
        .hero { height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem; position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; inset: 0; background: repeating-linear-gradient(45deg, rgba(247,37,133,0.03) 0px, transparent 1px, transparent 50px, rgba(247,37,133,0.03) 51px); opacity: 0.2; }
        .hero-bg { position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(247,37,133,0.25), transparent 70%); filter: blur(120px); }
        .hero h1 { font-size: clamp(3rem, 10vw, 7rem); font-weight: 900; background: linear-gradient(135deg, #fff, var(--accent)); -webkit-background-clip: text; color: transparent; margin: 0; text-shadow: 0 0 60px var(--glow); }
        .typewriter { font-size: 1.6rem; font-weight: 300; margin: 2rem 0; height: 2.2rem; white-space: nowrap; overflow: hidden; border-right: 3px solid var(--accent); animation: blink 0.7s infinite; }
        @keyframes blink { 50% { border-color: transparent; } }

        /* SECTION */
        .section { padding: 8rem 2rem; max-width: 1400px; margin: 0 auto; }
        .section-title { font-size: 3.2rem; text-align: center; margin-bottom: 4rem; background: linear-gradient(135deg, #fff, var(--accent)); -webkit-background-clip: text; color: transparent; font-weight: 800; }

        /* GRID & CARDS */
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .card { background: var(--card); border: 1px solid rgba(247,37,133,0.3); border-radius: 20px; padding: 2rem; backdrop-filter: blur(14px); transition: all 0.5s ease; position: relative; overflow: hidden; }
        .card:hover { transform: translateY(-16px) scale(1.02); box-shadow: 0 0 50px var(--glow); border-color: var(--accent); }
        .card::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(247,37,133,0.25), transparent); transition: left 0.9s; }
        .card:hover::before { left: 100%; }

        /* SERVICE ICON */
        .service-icon { width: 80px; height: 80px; background: rgba(247,37,133,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: var(--accent); }

        /* PORTFOLIO */
        .portfolio-img { width: 100%; height: 200px; background: var(--light); border-radius: 16px; margin-bottom: 1rem; background-size: cover; background-position: center; }

        /* STATS */
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 2rem; text-align: center; }
        .stat-num { font-size: 3rem; font-weight: 900; color: var(--accent); }
        .stat-label { font-size: 1rem; opacity: 0.8; }

        /* TESTIMONIAL */
        .testimonial { background: var(--light); border-radius: 16px; padding: 2rem; position: relative; }
        .quote-icon { position: absolute; top: -20px; left: 20px; font-size: 3rem; color: var(--accent); opacity: 0.3; }

        /* GALLERY */
        .gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; }
        .gallery-img { height: 200px; background: var(--light); border-radius: 14px; background-size: cover; transition: transform 0.4s; }
        .gallery-img:hover { transform: scale(1.05); }

        /* CTA */
        .cta-final { background: linear-gradient(135deg, rgba(247,37,133,0.3), transparent); text-align: center; padding: 9rem 2rem; }
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

      <div className="story-page">
        {/* HERO */}
        <motion.section className="hero" ref={heroRef}>
          <motion.div className="hero-bg" style={{ scale: scaleBg }} />
          <motion.div style={{ y: yHero, position: 'relative', zIndex: 10 }}>
            <motion.h1
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              NUAM STORY BOX
            </motion.h1>
            <motion.div
              className="typewriter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {typedText}
            </motion.div>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              style={{ maxWidth: '800px', margin: '2rem auto', fontSize: '1.3rem', opacity: 0.9 }}
            >
              We develop stories and screenplays for the entertainment industry. 
              We also support aspiring writers in bringing their vision to life.
            </motion.p>
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 1.6 }}>
              <Link to="#services" className="cta-button" style={{ marginTop: '2rem' }}>
                Explore Our Craft <ArrowRight style={{ marginLeft: '10px' }} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* SERVICES */}
        <section className="section" id="services">
          <h2 className="section-title">What We Do</h2>
          <div className="grid">
            {services.map((s, i) => (
              <motion.div key={i} className="card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
                <div className="service-icon">{s.icon}</div>
                <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>{s.title}</h3>
                <p style={{ textAlign: 'center' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="section" style={{ background: 'rgba(247,37,133,0.03)' }}>
          <h2 className="section-title">Our Process</h2>
          <div className="grid">
            {["Idea", "Outline", "Draft", "Polish", "Pitch"].map((step, i) => (
              <motion.div key={i} className="card" initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ delay: i * 0.1 }}>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent)', textAlign: 'center', marginBottom: '1rem' }}>{i + 1}</div>
                <h3 style={{ textAlign: 'center' }}>{step}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        {/* <section className="section">
          <h2 className="section-title">Our Stories</h2>
          <div className="grid">
            {portfolio.map((p, i) => (
              <motion.div key={i} className="card" whileHover={{ y: -10 }}>
                <div className="portfolio-img" style={{ backgroundImage: `url(${p.img})` }} />
                <h3>{p.title}</h3>
                <p style={{ opacity: 0.7, fontStyle: 'italic' }}>{p.genre}</p>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* SUPPORT */}
        <section className="section" style={{ background: 'rgba(247,37,133,0.04)' }}>
          <h2 className="section-title">We Support Writers</h2>
          <div className="grid">
            {[
              { icon: <MessageSquare />, text: "Free Feedback Sessions" },
              { icon: <Users />, text: "Writer Community" },
              { icon: <Award />, text: "Pitching to Producers" },
            ].map((s, i) => (
              <motion.div key={i} className="card" initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
                <div style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '1rem', textAlign: 'center' }}>{s.icon}</div>
                <p style={{ textAlign: 'center' }}>{s.text}</p>
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
              <motion.div key={i} className="testimonial" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.2 }}>
                <Quote className="quote-icon" />
                <p style={{ fontStyle: 'italic', margin: '1.5rem 0' }}>"{t.text}"</p>
                <p><strong>{t.name}</strong> — {t.role}</p>
                <div style={{ color: '#ffd700', marginTop: '0.5rem' }}>{'★★★★★'.slice(0, t.rating)}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        {/* <section className="section">
          <h2 className="section-title">Behind the Scenes</h2>
          <div className="gallery">
            {gallery.map((src, i) => (
              <motion.div key={i} className="gallery-img" style={{ backgroundImage: `url(${src})` }} whileHover={{ scale: 1.08 }} />
            ))}
          </div>
        </section> */}

        {/* FINAL CTA */}
        <section className="cta-final">
          <motion.h2 className="section-title" initial={{ scale: 0.85 }} whileInView={{ scale: 1 }}>
            Let’s Write Your Story
          </motion.h2>
          <motion.p style={{ fontSize: '1.4rem', maxWidth: '750px', margin: '0 auto 2.5rem', opacity: 0.9 }}>
            Whether you're a producer or a dreamer — we turn ideas into unforgettable stories.
          </motion.p>
          <motion.div initial={{ y: 30 }} whileInView={{ y: 0 }}>
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