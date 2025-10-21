import React from "react";
import { motion } from "framer-motion"; // Don't forget to import this!
import "./abouts.css"; // Ensure you have this CSS file for styling
const Philo = () => {
  const philosophyData = [
    {
      title: "🚀 Mission",
      text: "To drive growth by delivering innovative, high-quality digital solutions that empower clients, teams, and communities across the globe.",
    },
    {
      title: "🎯 Vision",
      text: "To become a global catalyst for change, where technology, design, and storytelling converge to shape a better tomorrow.",
    },
    {
      title: "💎 Core Values",
      content: (
        <ul>
          <li><strong>Integrity:</strong> We do what’s right, not what’s easy.</li>
          <li><strong>Innovation:</strong> We embrace bold ideas and disruptive thinking.</li>
          <li><strong>Excellence:</strong> We strive for pixel-perfect results.</li>
          <li><strong>Respect:</strong> We empower people from all walks of life.</li>
        </ul>
      ),
    },
  ];

  return (
    <section id="philosophy" className="about-section philosophy">
      <h2 className="section-title neon">Our Philosophy</h2>
      <div className="philosophy-grid">
        {philosophyData.map((item, index) => (
          <motion.div
            key={index}
            className="philosophy-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <h3 className="gradient-text">{item.title}</h3>
            <div className="gradient-underline"></div>
            {item.text ? <p>{item.text}</p> : item.content}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Philo;
