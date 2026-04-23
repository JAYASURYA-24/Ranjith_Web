import React from 'react';

const services = [
  {
    title: 'Doorstep Car Wash',
    description: 'Premium foam wash, interior vacuuming, dashboard polish, and tyre shine — all at your doorstep with eco-friendly products.',
    image: '/car-wash.png',
    iconClass: 'blue',
    icon: '🚗',
    status: 'active',
    statusLabel: 'Available Now',
  },
  {
    title: 'Doorstep Bike Wash',
    description: 'Complete bike cleaning with foam wash, chain lubrication, alloy cleaning, and polish to keep your ride looking brand new.',
    image: '/bike-wash.png',
    iconClass: 'green',
    icon: '🏍️',
    status: 'active',
    statusLabel: 'Available Now',
  },
  {
    title: 'Vehicle PUC Service',
    description: 'Get your Pollution Under Control certificate renewed at your doorstep. No queues, no hassle — fully compliant testing.',
    image: '/puc-service.png',
    iconClass: 'orange',
    icon: '📋',
    status: 'coming-soon',
    statusLabel: 'Coming Soon',
  },
  {
    title: 'Home Cleaning',
    description: 'Professional deep cleaning for your home — living rooms, kitchens, bathrooms, and more with trained cleaning experts.',
    image: null,
    iconClass: 'purple',
    icon: '🏠',
    status: 'coming-soon',
    statusLabel: 'Coming Soon',
  },
];

export default function Services() {
  return (
    <section className="services" id="services" aria-label="Our Services">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
            </svg>
            Our Services
          </span>
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">
            From sparkling car washes to comprehensive bike care — all delivered to your doorstep with professional-grade equipment and eco-friendly products.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className={`service-card animate-on-scroll ${service.status === 'coming-soon' ? 'coming-soon-card' : ''}`}
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-card-image">
                {service.image ? (
                  <img src={service.image} alt={service.title} loading="lazy" />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe, #bae6fd)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3.5rem'
                  }}>
                    {service.icon}
                  </div>
                )}
                <span className={`service-card-badge ${service.status}`}>
                  {service.statusLabel}
                </span>
              </div>
              <div className="service-card-body">
                <div className={`service-card-icon ${service.iconClass}`}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              {service.status === 'coming-soon' && (
                <div className="service-card-overlay">
                  <div className="coming-soon-text">🚀 Coming Soon</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
