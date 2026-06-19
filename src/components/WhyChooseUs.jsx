import React from 'react';
import trust1 from '../assets/images/trust/Trust_1.webp';
import trust2 from '../assets/images/trust/Trust_2.webp';
import trust3 from '../assets/images/trust/Trust_3.webp';
import trust4 from '../assets/images/trust/Trust_4.webp';
import trust5 from '../assets/images/trust/Trust_5.webp';
import trust6 from '../assets/images/trust/Trust_6.webp';

const reasons = [
  {
    icon: trust1,
    title: 'Doorstep Convenience',
    description: 'No more driving to car washes. We bring professional-grade cleaning to your home or office.',
  },
  {
    icon: trust2,
    title: 'Eco-Friendly & Water-Efficient',
    description: 'Experience a smarter way to clean your vehicle with eco-conscious products and water-efficient methods.',
  },
  {
    icon: trust3,
    title: 'Trusted Professionals',
    description: 'All our technicians are background-verified, trained, and equipped with the best tools and products.',
  },

  {
    icon: trust5,
    title: 'Easy App Booking',
    description: 'Book in under 60 seconds through our intuitive mobile app. Track your service in real-time.',
  },

];

export default function WhyChooseUs() {
  return (
    <section className="why-choose" id="why-choose-us" aria-label="Why Choose Us">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Why ReShine
          </span>
          <h2 className="section-title">Why Thousands <span className="text-gradient">Trust ReShine</span></h2>
          <p className="section-subtitle">
            We're not just another cleaning service. Here's what makes us the preferred choice for doorstep vehicle care.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div className="why-card animate-on-scroll" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="why-card-icon" style={{ background: 'transparent', boxShadow: 'none' }}>
                <img src={reason.icon} alt={reason.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} loading="lazy" />
              </div>
              <div className="why-card-text" style={{ textAlign: 'left' }}>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
