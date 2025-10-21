import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, Star, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBox, setHoveredBox] = useState(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Generate floating particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submit logic here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Contact',
      content: '+91 6282603759',
      gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'Info@nuamenterprises.com',
      gradient: 'linear-gradient(135deg, #a855f7, #ec4899)'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '3/675, Neriyakkal House, Unichira, Thrikkakara, Thrikkakara, Ernakulam, Ernakulam- 682021, Kerala, India',
      gradient: 'linear-gradient(135deg, #3b82f6, #a855f7)'
    }
  ];

  const containerStyle = {
    position: 'relative',
    minHeight: '100vh',
    background: '#000000',
    color: '#ffffff',
    fontFamily: '"Segoe UI", system-ui, sans-serif',
    overflow: 'hidden'
  };

  const backgroundStyle = {
    position: 'absolute',
    inset: '0',
    background: 'linear-gradient(135deg, #000000 0%, #1f2937 50%, #000000 100%)'
  };

  const backgroundOverlayStyle = {
    position: 'absolute',
    inset: '0',
    opacity: '0.3'
  };

  const blurCircle1Style = {
    position: 'absolute',
    top: '25%',
    left: '25%',
    width: '384px',
    height: '384px',
    background: 'rgba(236, 72, 153, 0.1)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: 'pulse 3s ease-in-out infinite'
  };

  const blurCircle2Style = {
    position: 'absolute',
    bottom: '25%',
    right: '25%',
    width: '320px',
    height: '320px',
    background: 'rgba(168, 85, 247, 0.1)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: 'pulse 3s ease-in-out infinite',
    animationDelay: '1s'
  };

  const sectionStyle = {
    position: 'relative',
    zIndex: '10',
    padding: '80px 24px'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '64px',
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
    opacity: isVisible ? '1' : '0',
    transition: 'all 1s ease-out'
  };

  const titleContainerStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '16px'
  };

  const titleStyle = {
    fontSize: window.innerWidth < 768 ? '48px' : '72px',
    fontWeight: 'bold',
    margin: '0'
  };

  const titleSpanStyle = {
    background: 'linear-gradient(135deg, #ec4899, #f43f5e)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'pulse 2s ease-in-out infinite'
  };

  const subtitleStyle = {
    fontSize: '20px',
    color: '#d1d5db',
    maxWidth: '512px',
    margin: '0 auto',
    lineHeight: '1.6'
  };

  const gridStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: window.innerWidth < 1024 ? '1fr' : 'repeat(12, 1fr)',
    gap: '32px',
    alignItems: 'start'
  };

  const contactInfoStyle = {
    gridColumn: window.innerWidth < 1024 ? 'span 1' : 'span 4',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(-40px) scale(0.95)',
    opacity: isVisible ? '1' : '0',
    transition: 'all 1s ease-out',
    transitionDelay: '0.2s'
  };

  const infoBoxStyle = (index) => ({
    position: 'relative',
    padding: '24px',
    borderRadius: '16px',
    backdropFilter: 'blur(20px)',
    background: 'rgba(255, 255, 255, 0.05)',
    border: hoveredBox === index ? '1px solid rgba(236, 72, 153, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
    cursor: 'pointer',
    transform: hoveredBox === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
    boxShadow: hoveredBox === index 
      ? '0 25px 50px rgba(236, 72, 153, 0.2)' 
      : '0 10px 25px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.5s ease-out',
    overflow: 'hidden'
  });

  const infoBoxOverlayStyle = (gradient, isHovered) => ({
    position: 'absolute',
    inset: '0',
    background: gradient,
    borderRadius: '16px',
    opacity: isHovered ? '0.1' : '0',
    transition: 'opacity 0.5s ease-out'
  });

  const iconContainerStyle = (gradient) => ({
    padding: '12px',
    borderRadius: '12px',
    background: gradient,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });

  const infoHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '12px'
  };

  const infoTitleStyle = {
    fontSize: '20px',
    fontWeight: '600',
    color: '#f472b6',
    margin: '0'
  };

  const infoContentStyle = {
    color: '#d1d5db',
    lineHeight: '1.6',
    paddingLeft: '64px',
    margin: '0'
  };

  const starStyle = {
    position: 'absolute',
    top: '8px',
    right: '8px',
    color: '#f472b6',
    animation: 'pulse 1s ease-in-out infinite'
  };

  const formContainerStyle = {
    gridColumn: window.innerWidth < 1024 ? 'span 1' : 'span 4',
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
    opacity: isVisible ? '1' : '0',
    transition: 'all 1s ease-out',
    transitionDelay: '0.4s'
  };

  const formStyle = {
    padding: '32px',
    borderRadius: '16px',
    backdropFilter: 'blur(20px)',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
  };

  const formTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #ec4899, #a855f7)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '32px'
  };

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  };

  const inputContainerStyle = {
    position: 'relative'
  };

  const inputStyle = (isFocused) => ({
    width: '100%',
    padding: '16px',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.1)',
    border: isFocused ? '2px solid #ec4899' : '1px solid rgba(255, 255, 255, 0.2)',
    color: '#ffffff',
    fontSize: '15px',
    outline: 'none',
    transition: 'all 0.3s ease-out',
    boxSizing: 'border-box'
  });

  const inputGlowStyle = (isFocused) => ({
    position: 'absolute',
    inset: '0',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.2))',
    opacity: isFocused ? '1' : '0',
    transition: 'opacity 0.3s ease-out',
    zIndex: '-1',
    filter: 'blur(4px)'
  });

  const buttonStyle = {
    width: '100%',
    padding: '16px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #ec4899, #f43f5e)',
    color: '#ffffff',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transform: 'scale(1)',
    transition: 'all 0.3s ease-out',
    boxShadow: '0 4px 15px rgba(236, 72, 153, 0.3)'
  };

  const mapContainerStyle = {
    gridColumn: window.innerWidth < 1024 ? 'span 1' : 'span 4',
    transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(40px) scale(0.95)',
    opacity: isVisible ? '1' : '0',
    transition: 'all 1s ease-out',
    transitionDelay: '0.6s'
  };

  const mapWrapperStyle = {
    position: 'relative'
  };

  const mapGlowStyle = {
    position: 'absolute',
    inset: '0',
    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.2))',
    borderRadius: '16px',
    filter: 'blur(20px)',
    opacity: '0',
    transition: 'opacity 0.5s ease-out'
  };

  const mapStyle = {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    backdropFilter: 'blur(20px)',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
    height: '400px'
  };

  const iframeStyle = {
    width: '100%',
    height: '100%',
    border: '0',
    filter: 'brightness(0.9) contrast(1.1) saturate(1.1)'
  };

  const bottomDecorationStyle = {
    marginTop: '80px',
    textAlign: 'center'
  };

  const decorationContainerStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: '#6b7280'
  };

  const decorationLineStyle = {
    width: '64px',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, #ec4899)'
  };

  const decorationTextStyle = {
    fontSize: '14px'
  };

  return (
    <div style={containerStyle}>
      {/* Animated Background */}
      <div style={backgroundStyle}>
        <div style={backgroundOverlayStyle}>
          <div style={blurCircle1Style}></div>
          <div style={blurCircle2Style}></div>
        </div>
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: '#f472b6',
            borderRadius: '50%',
            opacity: '0.6',
            animation: `ping 2s cubic-bezier(0, 0, 0.2, 1) infinite`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      <section style={sectionStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <div style={titleContainerStyle}>
            <Sparkles style={{ color: '#ec4899', animation: 'spin 3s linear infinite' }} size={24} />
            <h2 style={titleStyle}>
              Let's <span style={titleSpanStyle}>Connect</span>
            </h2>
            <Sparkles style={{ color: '#ec4899', animation: 'spin 3s linear infinite' }} size={24} />
          </div>
          <p style={subtitleStyle}>
            We're here to help you innovate and grow. Reach out now!
          </p>
        </div>

        <div style={gridStyle}>
          {/* Contact Info */}
          <div style={contactInfoStyle}>
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  style={infoBoxStyle(index)}
                  onMouseEnter={() => setHoveredBox(index)}
                  onMouseLeave={() => setHoveredBox(null)}
                >
                  <div style={infoBoxOverlayStyle(info.gradient, hoveredBox === index)}></div>
                  
                  <div style={{ position: 'relative', zIndex: '10' }}>
                    <div style={infoHeaderStyle}>
                      <div style={iconContainerStyle(info.gradient)}>
                        <IconComponent size={24} color="#ffffff" />
                      </div>
                      <h3 style={infoTitleStyle}>{info.title}</h3>
                    </div>
                    <p style={infoContentStyle}>{info.content}</p>
                  </div>

                  {hoveredBox === index && (
                    <div style={starStyle}>
                      <Star size={16} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div style={formContainerStyle}>
            <div style={formStyle}>
              <div>
                <h3 style={formTitleStyle}>
                  Send Message
                </h3>
              </div>

              <div style={inputGroupStyle}>
                <div style={inputContainerStyle}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={inputStyle(false)}
                    onFocus={(e) => e.target.style.border = '2px solid #ec4899'}
                    onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)'}
                  />
                </div>

                <div style={inputContainerStyle}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={inputStyle(false)}
                    onFocus={(e) => e.target.style.border = '2px solid #ec4899'}
                    onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)'}
                  />
                </div>

                <div style={inputContainerStyle}>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    required
                    style={{
                      ...inputStyle(false),
                      resize: 'none'
                    }}
                    onFocus={(e) => e.target.style.border = '2px solid #ec4899'}
                    onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)'}
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  style={buttonStyle}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.background = 'linear-gradient(135deg, #be185d, #dc2626)';
                    e.target.style.boxShadow = '0 8px 25px rgba(236, 72, 153, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.background = 'linear-gradient(135deg, #ec4899, #f43f5e)';
                    e.target.style.boxShadow = '0 4px 15px rgba(236, 72, 153, 0.3)';
                  }}
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div style={mapContainerStyle}>
            <div style={mapWrapperStyle}
                 onMouseEnter={(e) => {
                   const glow = e.currentTarget.querySelector('.map-glow');
                   if (glow) glow.style.opacity = '1';
                 }}
                 onMouseLeave={(e) => {
                   const glow = e.currentTarget.querySelector('.map-glow');
                   if (glow) glow.style.opacity = '0';
                 }}>
              <div className="map-glow" style={mapGlowStyle}></div>
              <div style={mapStyle}>
                <iframe
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8254126308734!2d76.3214764!3d10.031261599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dcbdc91b763%3A0xf6b99e4db2b7f0f9!2sNUAM!5e0!3m2!1sen!2sin!4v1756109859940!5m2!1sen!2sin"
                  style={iframeStyle}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent)',
                  pointerEvents: 'none'
                }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div style={bottomDecorationStyle}>
          <div style={decorationContainerStyle}>
            <div style={decorationLineStyle}></div>
            <Sparkles size={16} style={{ color: '#ec4899', animation: 'pulse 2s ease-in-out infinite' }} />
            <span style={decorationTextStyle}>Ready to innovate together?</span>
            <Sparkles size={16} style={{ color: '#ec4899', animation: 'pulse 2s ease-in-out infinite' }} />
            <div style={{
              ...decorationLineStyle,
              background: 'linear-gradient(270deg, transparent, #ec4899)'
            }}></div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        input::placeholder,
        textarea::placeholder {
          color: #9ca3af;
        }

        input:focus,
        textarea:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Contact;