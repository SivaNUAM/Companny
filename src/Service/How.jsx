import React from "react";
import { motion } from "framer-motion";
import "./how.css";
import { useRef, useEffect, useState } from "react";
import { FaBrain, FaProjectDiagram, FaTools, FaRocket } from "react-icons/fa";

const steps = [
  {
    title: "Understand",
    icon: <FaBrain />,
    desc: "We begin by deeply understanding your business goals and challenges."
  },
  {
    title: "Plan",
    icon: <FaProjectDiagram />,
    desc: "We craft a tailored strategy and roadmap to meet your goals."
  },
  {
    title: "Build",
    icon: <FaTools />,
    desc: "Our expert team designs, develops, and tests with precision."
  },
  {
    title: "Deliver & Support",
    icon: <FaRocket />,
    desc: "We launch the product and provide ongoing support and optimization."
  }
];

const How = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionRef = useRef(null);
  const stepRefs = useRef([]);
  const [progress, setProgress] = useState(0); // Start from top empty
  const [autoScroll, setAutoScroll] = useState(true);
  const scrollIntervalRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section && stepRefs.current.length > 0) {
        const windowHeight = window.innerHeight;
        const totalSteps = stepRefs.current.length;

        let currentStep = 0;
        stepRefs.current.forEach((ref, index) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            if (rect.top < windowHeight / 2 && rect.bottom > 0) {
              currentStep = index + 1;
            }
          }
        });

        const stepProgress = (currentStep / totalSteps) * 100;
        setProgress(stepProgress);
      }
    };

    const startAutoScroll = () => {
      if (!autoScroll) return;
      let currentIndex = 0;
      scrollIntervalRef.current = setInterval(() => {
        if (currentIndex < stepRefs.current.length) {
          const step = stepRefs.current[currentIndex];
          if (step) {
            step.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          currentIndex++;
        } else {
          currentIndex = 0; // Loop back to first step
        }
      }, 3000); // Scroll every 3 seconds
    };

    const stopAutoScroll = () => {
      setAutoScroll(false);
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", stopAutoScroll, { passive: true });
    window.addEventListener("touchstart", stopAutoScroll, { passive: true });
    window.addEventListener("click", stopAutoScroll);

    startAutoScroll();

    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", stopAutoScroll);
      window.removeEventListener("touchstart", stopAutoScroll);
      window.removeEventListener("click", stopAutoScroll);
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [autoScroll]);

  return (
    <section className="how-we-work" ref={sectionRef}>
      <div className="overlay-bg" />
      <div className="container">
        <motion.h2 
          className="how-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How <span>We Work</span>
        </motion.h2>

        <div className="flowchart-process">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flow-step"
              ref={(el) => (stepRefs.current[index] = el)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flow-icon">{step.icon}</div>
              <div className="flow-connector">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {index < steps.length - 1 && <span className="arrow-down">↓</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="liquid-bar show-mobile">
        <div className="liquid-fill" style={{ "--progress": `${progress}%` }}></div>
        <div className="liquid-steps">
          {steps.map((_, i) => (
            <div key={i} className="liquid-number">{i + 1}</div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default How;