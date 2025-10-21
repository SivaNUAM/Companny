import React, { useEffect, useRef, useState } from 'react';

// Mock image for demonstration
import gp1 from '../assets/gp1.jpg';
import gp2 from '../assets/gp2.png';
import gp3 from '../assets/gp3.png';
const services = [
  {
    title: 'Web Development & App Development',
    description: 'Fast, responsive websites with modern tech stack and cutting-edge frameworks.',
    image: gp1,
    color: '#f72585',
    gradient: 'linear-gradient(135deg, #f72585, #b5179e)',
    icon: '🚀',
    features: ['React/Next.js', 'Mobile Apps', 'Cloud Deploy']
  },
  // {
  //   title: 'Digital Marketing & SEO',
  //   description: 'Craft stunning brand visuals and data-driven marketing strategies.',
  //   image: gp2,
  //   color: '#7209b7',
  //   gradient: 'linear-gradient(135deg, #7209b7, #480ca8)',
  //   icon: '📈',
  //   features: ['SEO Optimization', 'Social Media', 'Analytics']
  // },
  {
    title: 'Custom Software',
    description: 'Tailored software solutions for business growth and scalability.',
    image: gp3,
    color: '#3a0ca3',
    gradient: 'linear-gradient(135deg, #3a0ca3, #240046)',
    icon: '⚡',
    features: ['Custom Solutions', 'API Integration', 'Scalable Architecture']
  },
];

const TiltCard = ({ children, service, index }) => {
  const tiltRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!tiltRef.current) return;
      const rect = tiltRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    };

    const element = tiltRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div 
      ref={tiltRef} 
      className="tilt-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
        '--service-color': service.color,
        '--service-gradient': service.gradient,
        '--animation-delay': `${index * 0.2}s`
      }}
    >
      {children}
    </div>
  );
};

const Services = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .services-section {
          background: #000;
          padding: 100px 20px;
          text-align: center;
          color: #fff;
          font-family: 'Segoe UI', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .services-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(247, 37, 133, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(114, 9, 183, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(58, 12, 163, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .services-heading {
          font-size: clamp(32px, 6vw, 48px);
          margin-bottom: 60px;
          font-weight: 700;
          background: linear-gradient(135deg, #f72585, #7209b7, #3a0ca3);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          animation: slideInFromTop 1s ease-out;
        }

        .services-heading::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #f72585, #7209b7);
          border-radius: 2px;
          animation: expandWidth 1.5s ease-out 0.5s both;
        }

        .services-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .tilt-card {
          perspective: 1000px;
          animation: slideInFromBottom 0.8s ease-out both;
          animation-delay: var(--animation-delay);
        }

        .service-card {
          background: rgba(255, 255, 255, 0.02);
          border: 2px solid transparent;
          border-radius: 24px;
          padding: 35px 25px;
          backdrop-filter: blur(20px);
          box-shadow: 
            0 10px 40px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transform-style: preserve-3d;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--service-gradient);
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: 22px;
        }

        .service-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
            rgba(255, 255, 255, 0.1) 0%, 
            transparent 50%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          border-radius: 22px;
        }

        .tilt-card:hover .service-card {
          transform: rotateX(5deg) rotateY(5deg) translateZ(20px);
          box-shadow: 
            0 25px 80px rgba(0, 0, 0, 0.4),
            0 0 0 1px var(--service-color),
            0 0 40px rgba(247, 37, 133, 0.3);
        }

        .tilt-card:hover .service-card::before {
          opacity: 0.1;
        }

        .tilt-card:hover .service-card::after {
          opacity: 1;
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          display: block;
          filter: drop-shadow(0 0 10px var(--service-color));
          animation: float 3s ease-in-out infinite;
        }

        .service-image-container {
          position: relative;
          margin-bottom: 25px;
          overflow: hidden;
          border-radius: 16px;
        }

        .service-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 16px;
          transition: all 0.4s ease;
          position: relative;
          z-index: 1;
        }

        .service-image-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--service-gradient);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 2;
          border-radius: 16px;
        }

        .tilt-card:hover .service-image {
          transform: scale(1.1);
        }

        .tilt-card:hover .service-image-container::before {
          opacity: 0.3;
        }

        .service-content {
          position: relative;
          z-index: 3;
        }

        .service-title {
          font-size: 22px;
          color: #fff;
          margin-bottom: 15px;
          font-weight: 600;
          transition: color 0.3s ease;
          line-height: 1.3;
        }

        .tilt-card:hover .service-title {
          color: var(--service-color);
          text-shadow: 0 0 10px rgba(247, 37, 133, 0.5);
        }

        .service-description {
          font-size: 15px;
          color: #bbb;
          line-height: 1.6;
          margin-bottom: 20px;
          transition: color 0.3s ease;
        }

        .tilt-card:hover .service-description {
          color: #ddd;
        }

        .service-features {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 20px;
        }

        .feature-tag {
          background: rgba(247, 37, 133, 0.1);
          border: 1px solid rgba(247, 37, 133, 0.3);
          color: var(--service-color);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .tilt-card:hover .feature-tag {
          background: rgba(247, 37, 133, 0.2);
          border-color: var(--service-color);
          transform: scale(1.05);
        }

        .service-cta {
          position: absolute;
          bottom: 20px;
          right: 20px;
          width: 50px;
          height: 50px;
          background: var(--service-gradient);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          opacity: 0;
          transform: scale(0.5);
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          cursor: pointer;
        }

        .tilt-card:hover .service-cta {
          opacity: 1;
          transform: scale(1);
        }

        .service-cta:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px var(--service-color);
        }

        /* Animations */
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 100px;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-25deg);
          }
          100% {
            transform: translateX(200%) skewX(-25deg);
          }
        }

        .shimmer-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg, 
            transparent, 
            rgba(255, 255, 255, 0.1), 
            transparent
          );
          animation: shimmer 2s infinite;
          pointer-events: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .services-section {
            padding: 60px 15px;
          }
          
          .services-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .service-card {
            padding: 25px 20px;
          }

          .service-image {
            height: 150px;
          }
        }

        @media (max-width: 480px) {
          .service-title {
            font-size: 20px;
          }
          
          .service-description {
            font-size: 14px;
          }
        }
      `}</style>

      <section ref={sectionRef} className="services-section">
        <h2 className="services-heading">
          Our <span>Services</span>
        </h2>
        <div className="services-container">
          {services.map((service, i) => (
            <TiltCard key={i} service={service} index={i}>
              <div className="service-card">
                <div className="shimmer-effect"></div>
                <span className="service-icon">{service.icon}</span>
                <div className="service-image-container">
                  <img src={service.image} alt={service.title} className="service-image" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-features">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
                <div className="service-cta">→</div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;