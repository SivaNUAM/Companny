import React from 'react';
import './Testimonial.css';
import gp1 from '../assets/gp1.jpg';
// import avatar2 from '../assets/avatar2.jpg';
// import avatar3 from '../assets/avatar3.jpg';
// import avatar4 from '../assets/avatar4.jpg';

const testimonials = [
  {
    text: "NUAM delivered top-notch work and exceeded expectations!",
    name: "Arjun Dev",
    role: "Creative Director, PixelPeak",
    image: gp1,
  },
  {
    text: "Highly skilled team. Great communication and quality.",
    name: "Meera Nair",
    role: "Founder, BloomTech",
    image: '',
  },
  {
    text: "The best team we’ve worked with in terms of creativity!",
    name: "Ravi Menon",
    role: "CTO, MetaGrid",
    image: '',
  },
  {
    text: "Their UI/UX and development were both flawless.",
    name: "Anjali S",
    role: "Project Lead, Luminex",
    image: '',
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-slider-section">
      <div className="testimonial-slider-title">
        <h2>
          People <span>Love</span> Working With Us
        </h2>
        <p>Real stories. Real impact.</p>
      </div>

      <div className="testimonial-slider-wrapper">
        <div className="testimonial-slider-track">
          {testimonials.concat(testimonials).map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">“{item.text}”</p>
              <div className="testimonial-author">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
