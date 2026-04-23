import React from 'react';

const reasons = [
  {
    icon: '🏠',
    title: 'Doorstep Convenience',
    description: 'No more driving to car washes. We bring professional-grade cleaning to your home or office.',
  },
  {
    icon: '💧',
    title: 'Water-Efficient Cleaning',
    description: 'Our methods save up to 80% more water compared to traditional car washes. Eco-friendly & sustainable.',
  },
  {
    icon: '👨‍🔧',
    title: 'Trusted Professionals',
    description: 'All our technicians are background-verified, trained, and equipped with the best tools and products.',
  },
  {
    icon: '💰',
    title: 'Affordable Pricing',
    description: 'Premium service without the premium price tag. Transparent pricing with absolutely no hidden charges.',
  },
  {
    icon: '📱',
    title: 'Easy App Booking',
    description: 'Book in under 60 seconds through our intuitive mobile app. Track your service in real-time.',
  },
  {
    icon: '🛡️',
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
            Why ShineUp
          </span>
          <h2 className="section-title">Why Thousands Trust ShineUp</h2>
          <p className="section-subtitle">
            We're not just another cleaning service. Here's what makes us the preferred choice for doorstep vehicle care.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div className="why-card animate-on-scroll" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="why-card-icon">{reason.icon}</div>
              <div>
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
