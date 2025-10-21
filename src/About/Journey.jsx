import React from "react";
import { motion } from "framer-motion";
import "./abouts.css"; // Create this CSS file or add styles globally

const Journey = () => {
const journeyData = [
  {
    year: "2025",
    title: "NUAM Launched",
    description:
      "NUAM officially started its journey with a mission to unite design, technology, and innovation. In just a few months, we successfully delivered 3+ projects and began forming strong relationships with early clients.",
  },
  {
    year: "2025",
    title: "Identity & Foundation",
    description:
      "Launched our official branding, website, and service offerings. Focused on building trust, delivering quality, and creating a solid startup identity rooted in creativity and reliability.",
  },
  {
    year: "2025",
    title: "First Milestones Achieved",
    description:
      "Completed multiple projects across industries, received positive testimonials, and laid the groundwork for long-term growth through a focus on excellence and innovation.",
  },
];


  return (
    <section id="journey" className="about-section journey">
      <div className="parallax-bg"></div>
      <h2 className="section-title neon">Our Journey</h2>
      <div className="journey-carousel">
        {journeyData.map((item, index) => (
          <motion.div
            key={index}
            className="carousel-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <div className="carousel-year">{item.year}</div>
            <div className="carousel-content">
              <h3 className="gradient-text">{item.title}</h3>
              <div className="gradient-underline"></div>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
