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
    title: 'Water-Efficient Cleaning',
    description: 'Our methods save up to 80% more water compared to traditional car washes. Eco-friendly & sustainable.',
  },
  {
    icon: trust3,
    title: 'Trusted Professionals',
    description: 'All our technicians are background-verified, trained, and equipped with the best tools and products.',
  },
  {
    icon: trust4,
    title: 'Affordable Pricing',
    description: 'Premium service without the premium price tag. Transparent pricing with absolutely no hidden charges.',
  },
  {
    icon: trust5,
    title: 'Easy App Booking',
    description: 'Book in under 60 seconds through our intuitive mobile app. Track your service in real-time.',
  },
  {
    icon: trust6,
    title: '100% Satisfaction',
    description: 'Not happy with the service? We offer a re-clean guarantee. Your satisfaction is our top priority.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose" id="why-choose-us" aria-label="Why Choose Us">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
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
              <div className="why-card-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <img src={reason.icon} alt={reason.title} style={{ width: '80px', height: '80px', objectFit: 'contain' }} loading="lazy" />
              </div>
              <div style={{ textAlign: 'center' }}>
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
