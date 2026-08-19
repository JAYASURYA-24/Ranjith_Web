import { Link } from 'react-router-dom';
import WashBackgroundAnimation from './WashBackgroundAnimation';
import carWashImg from '../assets/images/services/car-wash.webp';
import bikeWashImg from '../assets/images/services/bike-wash.webp';

const services = [
  {
    title: 'Doorstep Car Wash',
    description: 'Premium foam wash, interior vacuuming, dashboard polish, and tyre shine - all at your doorstep with eco-friendly products.',
    image: carWashImg,
    status: 'active',
    statusLabel: 'Car Wash Service',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7c-.7 0-1.3.3-1.8.7C4.3 8.6 3 10 3 10s-2.7.6-4.5 1.1C-2.3 11.3-3 12.1-3 13v3c0 .6.4 1 1 1h2" />
        <path d="M5 11l1.5-4.5h11L19 11" />
        <circle cx="7.5" cy="16.5" r="1.5" />
        <circle cx="16.5" cy="16.5" r="1.5" />
      </svg>
    ),
    route: '/car-wash'
  },
  {
    title: 'Doorstep Bike Wash',
    description: 'Complete bike cleaning with foam wash, chain lubrication, alloy cleaning, and polish to keep your ride looking brand new.',
    image: bikeWashImg,
    status: 'active',
    statusLabel: 'Bike Wash Service',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M15 6h4l-3 5.5h-5.5L8 17.5" />
        <path d="M5.5 17.5L10 11.5l3.5 1.5 3-5.5" />
      </svg>
    ),
    route: '/bike-wash'
  }
];

export default function Services() {
  return (
    <section className="services" id="services" aria-label="Our Services">
      <WashBackgroundAnimation />
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
            </svg>
            Our Services
          </span>
          <h2 className="section-title">What We <span className="text-gradient">Offer</span></h2>
          <p className="section-subtitle">
            We bring convenient and hassle-free car wash, bike wash, and helmet cleaning services right to your doorstep with transparent pricing and professional care.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <Link
              to={service.route}
              className={`service-card animate-on-scroll delay-${(index + 1) * 100} ${service.status === 'coming-soon' ? 'coming-soon-card' : ''}`}
              key={index}
              style={{ textDecoration: 'none', color: 'inherit' }}
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
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0369a1', textAlign: 'center', padding: '0 20px' }}>
                      {service.title}
                    </span>
                  </div>
                )}
              </div>
              <div className="service-card-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-card-action">
                  <span className="service-view-btn">
                    View
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
              {service.status === 'coming-soon' && (
                <div className="service-card-overlay">
                  {/* <div className="coming-soon-text">Coming Soon</div> */}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
