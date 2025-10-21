import React, { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Services.css";

// React icons
import { FaPaintBrush, FaCode, FaPencilRuler, FaSearch, FaChevronDown } from "react-icons/fa";
import seo from '../assets/seo.jpg';
import software from '../assets/software.jpg';
import digital from '../assets/digital.jpg';
import custom from '../assets/custom.jpg';

const services = [
  {
    title: "Development",
    icon: <FaCode />,
    description: "We build robust and scalable software solutions tailored to your business needs.",
    image: software,
    extra: {
      extraDescription: "Our development services focus on delivering cutting-edge, high-performance web solutions that drive engagement and scalability.",
      points: [
        "Responsive web design for seamless user experiences across devices",
        "High-performance backend systems for efficient data processing",
        "Integration with third-party APIs for enhanced functionality",
        "Custom UI/UX design to align with brand identity",
        "Continuous maintenance and updates for long-term reliability",
        "Secure coding practices to protect against vulnerabilities"
      ]
    }
  },
  {
    title: "Custom Software",
    icon: <FaPencilRuler />,
    description: "Tailored software solutions that fit your unique business requirements.",
    image: custom,
    extra: {
      extraDescription: "We create bespoke software tailored to address your specific business challenges and goals.",
      points: [
        "Custom workflows designed to optimize business processes",
        "Scalable architecture to support future growth",
        "Intuitive user interfaces for enhanced usability",
        "Integration with existing systems for seamless operation",
        "Dedicated support for post-launch enhancements",
        "Data migration services for smooth transitions"
      ]
    }
  },
  {
    title: "Digital Marketing",
    icon: <FaPaintBrush />,
    description: "Comprehensive digital marketing strategies to enhance your online presence.",
    image: digital,
    extra: {
      extraDescription: "Our data-driven digital marketing strategies are designed to boost your brand visibility and engagement.",
      points: [
        "Targeted social media campaigns to reach your audience",
        "Content marketing strategies to build authority",
        "Email marketing automation for personalized outreach",
        "Pay-per-click advertising for immediate traffic",
        "Analytics and reporting for performance tracking",
        "Brand strategy development for consistent messaging"
      ]
    }
  },
  {
    title: "SEO",
    icon: <FaSearch />,
    description: "Optimize your website to rank higher in search engine results and attract more traffic.",
    image: seo,
    extra: {
      extraDescription: "Our SEO services leverage advanced techniques to improve your website’s visibility and drive organic traffic.",
      points: [
        "In-depth keyword research and optimization",
        "On-page and off-page SEO for maximum impact",
        "Technical SEO audits to enhance site performance",
        "Content optimization for better search rankings",
        "Link-building strategies to boost authority",
        "Local SEO for targeting regional audiences",
        "Regular performance reports to track progress"
      ]
    }
  },
];

const Services = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleServiceClick = (index) => {
    setActiveIndex(index);
    setIsExpanded(false);
  };

  const handleImageClick = () => {
    setIsExpanded((prev) => !prev);
  };

  const currentService = services[activeIndex];

  return (
    <section className="service-modern">
      <div className="overlay-bg" />

      <div className="service-left">
        <p className="sub">OUR SERVICE</p>
        <h2 className="title">
          What <span>Services</span> We're Offering
        </h2>
        <p className="desc">
          We offer solutions that enhance your digital presence and business growth.
        </p>

        <div className="service-list">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleServiceClick(index)}
            >
              <h3>
                <span className="icon">{service.icon}</span>
                {service.title}
              </h3>
              {activeIndex === index && (
                <p className="service-desc">{service.description}</p>
              )}
              <div className="arrow">→</div>
            </div>
          ))}
        </div>
      </div>

      <div className="service-right">
        <div className="image-click-wrapper" onClick={handleImageClick}>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentService.title}
              src={currentService.image}
              alt={currentService.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="service-image"
              onError={(e) => {
                e.target.src = '/path/to/fallback-image.jpg';
              }}
            />
          </AnimatePresence>

          <motion.div
            className="down-arrow"
            animate={{
              rotate: isExpanded ? 180 : 0,
              y: isExpanded ? 0 : [0, 6, 0],
            }}
            transition={{
              rotate: { duration: 0.3, ease: "easeInOut" },
              y: isExpanded ? { duration: 0 } : { duration: 1, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <FaChevronDown />
          </motion.div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="extra-description"
            >
              <p className="extra-desc-text">{currentService.extra.extraDescription}</p>
              <ul className="extra-list">
                {currentService.extra.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;