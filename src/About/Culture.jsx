import React from "react";
import { motion } from "framer-motion";
import "./abouts.css";

const Culture = () => {
  return (
    <section id="culture" className="about-section culture">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="section-title neon">Culture & Ethos</h2>
        <div className="gradient-underline center"></div>
        <p className="culture-description">
          NUAM fosters a workplace where collaboration meets autonomy, and big ideas are met with
          open arms. We believe in cultivating a diverse, supportive, and growth-focused
          environment.
        </p>
        <blockquote className="culture-quote">
          "Culture eats strategy for breakfast — and we serve both with purpose."
        </blockquote>
        <div className="cta-buttons">
          <a href="/contact" className="no-underline">
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05, boxShadow: "0 6px 16px rgba(147, 51, 234, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Team
          </motion.button>
          </a>
          <a href="/contact" className="no-underline">
          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.05, boxShadow: "0 6px 16px rgba(147, 51, 234, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Culture;
