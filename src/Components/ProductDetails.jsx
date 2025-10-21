import React, { useState, useEffect } from "react";
import "./ProductDetail.css";
import { 
  FaUserMd, FaUsers, FaFilePrescription, FaMoneyBill, 
  FaCalendarAlt, FaChartLine, FaShieldAlt, FaHeart,
  FaLaptopMedical, FaMobileAlt, FaCloud, FaRobot,
  FaStethoscope, FaClipboard, FaPhoneAlt, FaBell,
  FaDatabase, FaLock, FaSync, FaDownload
} from "react-icons/fa";


const ProductDetail = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [stats, setStats] = useState({ patients: 0, doctors: 0, appointments: 0, revenue: 0 });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Animate statistics on load
    const interval = setInterval(() => {
      setStats(prev => ({
        patients: Math.min(prev.patients + 47, 2500),
        doctors: Math.min(prev.doctors + 3, 150),
        appointments: Math.min(prev.appointments + 89, 4800),
        revenue: Math.min(prev.revenue + 1250, 125000)
      }));
    }, 50);

    setTimeout(() => clearInterval(interval), 2000);
    return () => clearInterval(interval);
  }, []);

  const detailedFeatures = [
    {
      icon: <FaUserMd />,
      title: "Advanced Patient Management",
      subtitle: "Complete Electronic Health Records (EHR) System",
      description: "Comprehensive patient data management with AI-powered insights and predictive analytics.",
      keyFeatures: [
        "Complete patient profiles with 360° health view",
        "Medical history tracking with timeline visualization",
        "Allergy alerts and drug interaction warnings",
        "Digital document storage (reports, scans, images)",
        "Family medical history mapping",
        "Insurance information and coverage tracking",
        "Emergency contact management",
        "Patient communication portal"
      ],
      technicalSpecs: [
        "Cloud-based storage with 99.9% uptime",
        "FHIR-compliant data standards",
        "Real-time data synchronization",
        "Advanced search and filtering capabilities",
        "Bulk import/export functionality",
        "Integration with lab systems and imaging"
      ],
      benefits: [
        "Reduced patient onboarding time by 70%",
        "Improved diagnostic accuracy through complete medical history",
        "Enhanced patient satisfaction with faster service",
        "Reduced medical errors by 85%"
      ]
    },
    {
      icon: <FaUsers />,
      title: "Staff & Doctor Dashboard",
      subtitle: "Role-Based Access Control & Workforce Management",
      description: "Intelligent dashboards tailored for different roles with advanced workflow management.",
      keyFeatures: [
        "Customizable role-based dashboards",
        "Real-time task assignment and tracking",
        "Doctor scheduling and availability management",
        "Staff performance monitoring",
        "Internal communication system",
        "Shift management and roster planning",
        "Training module integration",
        "Multi-location staff coordination"
      ],
      technicalSpecs: [
        "Advanced permission system with 50+ role types",
        "Real-time notifications and alerts",
        "Mobile-responsive dashboard design",
        "Integration with HR management systems",
        "Automated workflow triggers",
        "Performance analytics and reporting"
      ],
      benefits: [
        "Improved staff productivity by 60%",
        "Reduced administrative overhead by 45%",
        "Better work-life balance for healthcare professionals",
        "Enhanced coordination between departments"
      ]
    },
    {
      icon: <FaFilePrescription />,
      title: "Smart Digital Prescriptions",
      subtitle: "AI-Powered Prescription Management System",
      description: "Advanced e-prescription system with drug interaction checking and automated pharmacy integration.",
      keyFeatures: [
        "AI-powered prescription suggestions",
        "Drug interaction and allergy alerts",
        "Electronic pharmacy integration",
        "Prescription history and tracking",
        "Generic drug substitution recommendations",
        "Dosage calculation assistance",
        "Prescription refill management",
        "Multi-language prescription support"
      ],
      technicalSpecs: [
        "Integration with 5000+ pharmacies nationwide",
        "Real-time drug database updates",
        "Digital signature and verification",
        "Prescription audit trail",
        "Mobile app for prescription viewing",
        "Insurance formulary checking"
      ],
      benefits: [
        "Reduced prescription errors by 90%",
        "Faster prescription processing time",
        "Improved patient medication compliance",
        "Reduced healthcare costs through generic recommendations"
      ]
    },
    {
      icon: <FaMoneyBill />,
      title: "Comprehensive Billing System",
      subtitle: "Automated Revenue Cycle Management",
      description: "Complete financial management solution with automated billing, insurance claims, and revenue optimization.",
      keyFeatures: [
        "Automated invoice generation",
        "Multiple payment gateway integration",
        "Insurance claim processing and tracking",
        "Payment plan management",
        "Financial reporting and analytics",
        "Tax calculation and compliance",
        "Bad debt management",
        "Revenue forecasting"
      ],
      technicalSpecs: [
        "PCI DSS compliant payment processing",
        "Integration with 200+ insurance providers",
        "Real-time payment status updates",
        "Automated reminder system",
        "Multi-currency support",
        "Advanced financial reporting tools"
      ],
      benefits: [
        "Reduced billing errors by 95%",
        "Faster payment collection by 40%",
        "Improved cash flow management",
        "Reduced administrative costs by 50%"
      ]
    },
    {
      icon: <FaCalendarAlt />,
      title: "Intelligent Scheduling System",
      subtitle: "AI-Optimized Appointment Management",
      description: "Smart scheduling system with predictive analytics and automated optimization for maximum efficiency.",
      keyFeatures: [
        "Online patient booking portal",
        "AI-powered schedule optimization",
        "Automated appointment reminders",
        "Waitlist and cancellation management",
        "Resource and room scheduling",
        "Telemedicine appointment integration",
        "Recurring appointment setup",
        "Multi-location scheduling"
      ],
      technicalSpecs: [
        "Real-time availability updates",
        "Calendar integration (Google, Outlook)",
        "SMS and email notification system",
        "Mobile app for appointment management",
        "Advanced reporting and analytics",
        "Integration with telehealth platforms"
      ],
      benefits: [
        "Reduced no-show rates by 65%",
        "Optimized doctor utilization by 80%",
        "Improved patient satisfaction scores",
        "Increased appointment capacity by 30%"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Advanced Analytics & Insights",
      subtitle: "Business Intelligence & Predictive Analytics",
      description: "Comprehensive analytics platform with AI-driven insights for data-driven decision making.",
      keyFeatures: [
        "Real-time dashboard with KPIs",
        "Revenue and expense analytics",
        "Patient flow and trends analysis",
        "Doctor performance metrics",
        "Predictive analytics for patient outcomes",
        "Custom report generation",
        "Comparative analysis tools",
        "Automated insights and recommendations"
      ],
      technicalSpecs: [
        "Advanced data visualization tools",
        "Machine learning algorithms for predictions",
        "Export capabilities (PDF, Excel, CSV)",
        "API for custom integrations",
        "Real-time data processing",
        "Cloud-based analytics engine"
      ],
      benefits: [
        "Data-driven decision making",
        "Improved operational efficiency by 55%",
        "Better patient care through insights",
        "Optimized resource allocation"
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: "Enterprise Security & Compliance",
      subtitle: "Military-Grade Security & Healthcare Compliance",
      description: "Comprehensive security framework ensuring data protection and regulatory compliance.",
      keyFeatures: [
        "End-to-end data encryption (AES-256)",
        "Multi-factor authentication (MFA)",
        "Role-based access control (RBAC)",
        "Comprehensive audit logging",
        "HIPAA/GDPR compliance framework",
        "Regular security audits and assessments",
        "Data backup and disaster recovery",
        "Intrusion detection and prevention"
      ],
      technicalSpecs: [
        "ISO 27001 certified infrastructure",
        "SOC 2 Type II compliant",
        "99.9% uptime guarantee",
        "24/7 security monitoring",
        "Automated threat detection",
        "Regular penetration testing"
      ],
      benefits: [
        "Zero data breaches in 5+ years",
        "Full regulatory compliance",
        "Reduced security risks by 99%",
        "Peace of mind for healthcare providers"
      ]
    }
  ];

  const additionalFeatures = [
    // {
    //   icon: <FaLaptopMedical />,
    //   title: "Telemedicine Integration",
    //   description: "Built-in video consultation platform with HD quality and secure communication."
    // },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Applications",
      description: "Native iOS and Android apps for patients and healthcare providers."
    },
    {
      icon: <FaCloud />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud architecture with global data centers and edge computing."
    },
    // {
    //   icon: <FaRobot />,
    //   title: "AI Assistant",
    //   description: "Smart AI assistant for appointment scheduling and basic patient queries."
    // }
  ];

  const integrations = [
    "Laboratory Information Systems (LIS)",
    "Picture Archiving Systems (PACS)",
    "Hospital Information Systems (HIS)",
    "Electronic Health Records (EHR)",
    "Pharmacy Management Systems",
    "Medical Device Integration",
    "Telehealth Platforms",
    "Payment Gateways"
  ];

  return (
    <div className="product-detail-enhanced">
      {/* Hero Section */}
      <header className="detail-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Clinic Management System</h1>
            <h2>Complete Healthcare Operations Platform</h2>
            <p>
              Revolutionary healthcare management solution powered by AI and designed for 
              modern clinics, hospitals, and healthcare facilities. Transform your operations 
              with our comprehensive digital ecosystem.
            </p>
            {/* <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">{stats.patients.toLocaleString()}+</span>
                <span className="stat-label">Patients Managed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{stats.doctors}+</span>
                <span className="stat-label">Healthcare Providers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{stats.appointments.toLocaleString()}+</span>
                <span className="stat-label">Appointments Scheduled</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">${stats.revenue.toLocaleString()}K+</span>
                <span className="stat-label">Revenue Managed</span>
              </div>
            </div> */}
          </div>
          <div className="header-visual">
            <div className="floating-elements">
              <div className="element element-1"><FaHeart /></div>
              <div className="element element-2"><FaStethoscope /></div>
              <div className="element element-3"><FaClipboard /></div>
              <div className="element element-4"><FaPhoneAlt /></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Features Section */}
      <section className="main-features">
        <div className="features-navigation">
          {detailedFeatures.map((feature, index) => (
            <button
              key={index}
              className={`nav-item ${activeFeature === index ? 'active' : ''}`}
              onClick={() => setActiveFeature(index)}
            >
              <span className="nav-icon">{feature.icon}</span>
              <span className="nav-title">{feature.title}</span>
            </button>
          ))}
        </div>

        <div className="feature-content">
          <div className="feature-header">
            <div className="feature-icon">
              {detailedFeatures[activeFeature].icon}
            </div>
            <div className="feature-titles">
              <h3>{detailedFeatures[activeFeature].title}</h3>
              <h4>{detailedFeatures[activeFeature].subtitle}</h4>
              <p>{detailedFeatures[activeFeature].description}</p>
            </div>
          </div>

          <div className="feature-details">
            <div className="detail-section">
              <h5><FaBell /> Key Features</h5>
              <ul>
                {detailedFeatures[activeFeature].keyFeatures.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h5><FaDatabase /> Technical Specifications</h5>
              <ul>
                {detailedFeatures[activeFeature].technicalSpecs.map((spec, idx) => (
                  <li key={idx}>{spec}</li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h5><FaChartLine /> Business Benefits</h5>
              <ul>
                {detailedFeatures[activeFeature].benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="additional-features">
        <h2>Additional Capabilities</h2>
        <div className="features-grid">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="additional-feature-card">
              <div className="card-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="integrations-section">
        <h2>System Integrations</h2>
        <p>Seamlessly connect with existing healthcare systems and third-party services</p>
        <div className="integrations-grid">
          {integrations.map((integration, index) => (
            <div key={index} className="integration-item">
              <FaSync className="integration-icon" />
              <span>{integration}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Healthcare Operations?</h2>
          <p>Join thousands of healthcare providers who have revolutionized their practice with our comprehensive clinic management system.</p>
          <div className="cta-buttons" >
            {/* <a href="/contact" className="no-underline" >
            <button className="cta-primary" >
              <FaDownload /> Request Demo
            </button>
            </a> */}
            <a href="/contact">
            <button className="cta-secondary">
              <FaPhoneAlt /> Contact Sales
            </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;