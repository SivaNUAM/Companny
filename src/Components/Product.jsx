import React from "react";
import "./ProductSection.css";
import { FaUserMd, FaUsers, FaFilePrescription, FaMoneyBill, FaCalendarAlt, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <FaUserMd />,
    title: "Clinic Management System",
    description: "A robust patient record system that keeps all information centralized and secure.",
    details: [
      "Maintain complete patient profiles",
      "Track medical history & allergies",
      "Securely upload reports & scans",
      "Quick search & filtering of patients"
    ],
  },
//   {
//     icon: <FaUsers />,
//     title: "Staff Management",
//     description: "Manage doctors, nurses, and staff with proper role-based access.",
//     details: [
//       "Add and manage staff roles",
//       "Attendance tracking",
//       "Shift scheduling",
//       "Role-based access control"
//     ],
//   },
//   {
//     icon: <FaFilePrescription />,
//     title: "E-Prescriptions",
//     description: "Generate and share prescriptions digitally with patients instantly.",
//     details: [
//       "Pre-designed prescription templates",
//       "Easily add medicines & dosages",
//       "Instant share via email/SMS",
//       "Safe and secure digital storage"
//     ],
//   },
];

const Product = () => {
  return (
    <section className="product-section">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">
          A complete digital solution designed to streamline clinic operations, 
          enhance patient care, and improve overall efficiency for doctors, staff, and administrators.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
            <div className="icon flex items-center justify-center">
             {feature.icon}
            </div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <ul className="feature-list">
                {feature.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* ✅ Learn More button inside card */}
              <Link to={"/product-details"} className="learn-more-btn">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
