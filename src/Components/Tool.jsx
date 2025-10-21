import React, { useState, useRef, useEffect } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';

const services = [
  {
    icon: <FaReact />,
    title: 'Frontend Development',
    description: 'We craft responsive and stunning UI using React, Tailwind, and more.',
    color: '#61dafb',
    gradient: 'linear-gradient(135deg, #61dafb, #21a0e6)',
    skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind'],
    bgPattern: 'react'
  },
  {
    icon: <FaNodeJs />,
    title: 'Backend APIs',
    description: 'Robust and scalable backend using Node.js, Express, and RESTful APIs.',
    color: '#68d391',
    gradient: 'linear-gradient(135deg, #68d391, #38a169)',
    skills: ['Node.js', 'Express', 'REST API', 'GraphQL'],
    bgPattern: 'node'
  },
  {
    icon: <FaDatabase />,
    title: 'Database Design',
    description: 'Optimized NoSQL/SQL database solutions using MongoDB, MySQL, PostgreSQL.',
    color: '#f6ad55',
    gradient: 'linear-gradient(135deg, #f6ad55, #ed8936)',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'],
    bgPattern: 'database'
  },
  {
    icon: <FaCode />,
    title: 'Custom Software',
    description: 'Tailored solutions in automation, AI integration, and system design.',
    color: '#9f7aea',
    gradient: 'linear-gradient(135deg, #9f7aea, #805ad5)',
    skills: ['Python', 'AI/ML', 'Automation', 'DevOps'],
    bgPattern: 'code'
  },
];

const EnhancedToolCard = ({ tool, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className={`tool-card-wrapper ${isVisible ? 'animate-in' : ''}`}
      style={{
        '--tool-color': tool.color,
        '--tool-gradient': tool.gradient,
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
        '--animation-delay': `${index * 0.2}s`
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="tool-box">
        <div className="tool-bg-pattern"></div>
        <div className="tool-glow-orb"></div>
        <div className="tool-spotlight"></div>
        
        <div className="tool-content">
          <div className="tool-icon-wrapper">
            <div className="tool-icon">{tool.icon}</div>
            <div className="tool-icon-glow"></div>
          </div>
          
          <h3 className="tool-name">{tool.title}</h3>
          <p className="tool-desc">{tool.description}</p>
          
          <div className="tool-skills">
            {tool.skills.map((skill, idx) => (
              <span key={idx} className="skill-tag" style={{'--delay': `${idx * 0.1}s`}}>
                {skill}
              </span>
            ))}
          </div>
          
          <div className="tool-progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
        
        <div className="tool-corner-accent"></div>
        <div className="tool-border-glow"></div>
        
        {isHovered && (
          <>
            <div className="tool-particle particle-1"></div>
            <div className="tool-particle particle-2"></div>
            <div className="tool-particle particle-3"></div>
          </>
        )}
      </div>
    </div>
  );
};

const Tool = () => {
  const [sectionInView, setSectionInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionInView(true);
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
        .tech-tools-main {
          background: #000;
          padding: 120px 20px;
          color: #fff;
          font-family: 'Fira Code', monospace;
          text-align: center;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .tech-tools-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background:
            radial-gradient(circle at 20% 30%, rgba(97, 218, 251, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(159, 122, 234, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 70%, rgba(104, 211, 145, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 60% 80%, rgba(246, 173, 85, 0.06) 0%, transparent 50%);
          animation: bgPulse 8s ease-in-out infinite alternate;
          z-index: 0;
        }

        .tech-tools-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(97, 218, 251, 0.15) 1px, transparent 1px);
          background-size: 50px 50px, 80px 80px;
          animation: floatPattern 20s linear infinite;
          opacity: 0.3;
        }

        .tech-tools-header {
          max-width: 900px;
          margin: 0 auto 80px;
          position: relative;
          z-index: 2;
          animation: ${sectionInView ? 'headerSlideIn' : 'none'} 1s ease-out;
        }

        .tech-tools-header h2 {
          font-size: clamp(32px, 8vw, 52px);
          font-weight: 800;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #fff, #61dafb, #9f7aea);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
        }

        .tech-tools-header h2::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, #61dafb, #9f7aea, #68d391);
          border-radius: 2px;
          animation: ${sectionInView ? 'expandLine' : 'none'} 1.5s ease-out 0.5s both;
        }

        .tech-tools-header p {
          font-size: 18px;
          color: #b0b0b0;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
          opacity: ${sectionInView ? 1 : 0};
          transform: ${sectionInView ? 'translateY(0)' : 'translateY(20px)'};
          transition: all 0.8s ease 0.3s;
        }

        .tech-tools-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .tool-card-wrapper {
          perspective: 1000px;
          opacity: 0;
          transform: translateY(60px) rotateX(15deg);
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .tool-card-wrapper.animate-in {
          opacity: 1;
          transform: translateY(0) rotateX(0deg);
          transition-delay: var(--animation-delay);
        }

        .tool-box {
          background: rgba(15, 15, 15, 0.9);
          padding: 40px 35px 35px;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transform-style: preserve-3d;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          height: 100%;
        }

        .tool-box:hover {
          transform: translateY(-15px) rotateX(5deg) rotateY(2deg);
          border-color: var(--tool-color);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px var(--tool-color),
            0 0 50px rgba(97, 218, 251, 0.2);
        }

        .tool-bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--tool-gradient);
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: 24px;
        }

        .tool-box:hover .tool-bg-pattern {
          opacity: 0.05;
        }

        .tool-spotlight {
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
          border-radius: 24px;
        }

        .tool-box:hover .tool-spotlight {
          opacity: 1;
        }

        .tool-glow-orb {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 100px;
          height: 100px;
          background: var(--tool-gradient);
          border-radius: 50%;
          opacity: 0;
          filter: blur(30px);
          transform: scale(0.5);
          transition: all 0.4s ease;
        }

        .tool-box:hover .tool-glow-orb {
          opacity: 0.3;
          transform: scale(1);
        }

        .tool-content {
          position: relative;
          z-index: 3;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .tool-icon-wrapper {
          position: relative;
          display: inline-block;
          margin-bottom: 24px;
        }

        .tool-icon {
          font-size: 48px;
          color: var(--tool-color);
          display: block;
          animation: iconFloat 3s ease-in-out infinite;
          transition: all 0.4s ease;
          position: relative;
          z-index: 2;
        }

        .tool-box:hover .tool-icon {
          transform: scale(1.1) translateZ(10px);
          filter: drop-shadow(0 0 20px var(--tool-color));
        }

        .tool-icon-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 80px;
          height: 80px;
          background: var(--tool-color);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
          filter: blur(20px);
          transition: all 0.4s ease;
        }

        .tool-box:hover .tool-icon-glow {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.3;
        }

        .tool-name {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 16px;
          color: #fff;
          transition: color 0.3s ease;
          line-height: 1.3;
        }

        .tool-box:hover .tool-name {
          color: var(--tool-color);
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        .tool-desc {
          font-size: 15px;
          color: #b0b0b0;
          line-height: 1.7;
          margin-bottom: 24px;
          flex-grow: 1;
          transition: color 0.3s ease;
        }

        .tool-box:hover .tool-desc {
          color: #d0d0d0;
        }

        .tool-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .skill-tag {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--tool-color);
          padding: 8px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
          opacity: 0;
          transform: scale(0.8);
          animation: tagAppear 0.5s ease forwards;
          animation-delay: var(--delay);
        }

        .tool-box:hover .skill-tag {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--tool-color);
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
        }

        .tool-progress-bar {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: var(--tool-gradient);
          border-radius: 2px;
          width: 0;
          transition: width 1s ease;
          position: relative;
        }

        .tool-box:hover .progress-fill {
          width: 85%;
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: progressShine 2s infinite;
        }

        .tool-corner-accent {
          position: absolute;
          top: 0;
          right: 0;
          width: 60px;
          height: 60px;
          background: var(--tool-gradient);
          opacity: 0.1;
          clip-path: polygon(100% 0%, 0% 0%, 100% 100%);
          transition: opacity 0.3s ease;
        }

        .tool-box:hover .tool-corner-accent {
          opacity: 0.3;
        }

        .tool-border-glow {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: conic-gradient(from 0deg, var(--tool-color), transparent 180deg, var(--tool-color));
          border-radius: 26px;
          opacity: 0;
          transition: opacity 0.4s ease;
          animation: borderRotate 3s linear infinite;
          z-index: -1;
        }

        .tool-box:hover .tool-border-glow {
          opacity: 0.5;
        }

        .tool-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: var(--tool-color);
          border-radius: 50%;
          animation: particleFloat 2s ease-in-out infinite;
        }

        .particle-1 {
          top: 20%;
          left: 20%;
          animation-delay: 0s;
        }

        .particle-2 {
          top: 60%;
          right: 25%;
          animation-delay: 0.7s;
        }

        .particle-3 {
          bottom: 30%;
          left: 70%;
          animation-delay: 1.4s;
        }

        /* Animations */
        @keyframes bgPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }

        @keyframes floatPattern {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes headerSlideIn {
          0% { opacity: 0; transform: translateY(-50px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes expandLine {
          0% { width: 0; }
          100% { width: 120px; }
        }

        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }

        @keyframes tagAppear {
          0% { opacity: 0; transform: scale(0.8) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes progressShine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes borderRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes particleFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.7; 
          }
          50% { 
            transform: translateY(-20px) scale(1.2); 
            opacity: 1; 
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .tech-tools-main {
            padding: 80px 15px;
          }
          
          .tech-tools-list {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .tool-box {
            padding: 30px 25px;
          }

          .tool-icon {
            font-size: 40px;
          }
        }

        @media (max-width: 480px) {
          .tool-name {
            font-size: 20px;
          }
          
          .tool-desc {
            font-size: 14px;
          }

          .tool-icon {
            font-size: 36px;
          }
        }
      `}</style>

      <section ref={sectionRef} className="tech-tools-main">
        <div className="tech-tools-bg"></div>
        
        <div className="tech-tools-header">
          <h2>
            Our <span>Technology's</span>
          </h2>
          <p>
            Elevating your digital presence with powerful design and cutting-edge technology solutions.
          </p>
        </div>
        
        <div className="tech-tools-list">
          {services.map((tool, index) => (
            <EnhancedToolCard key={index} tool={tool} index={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Tool;