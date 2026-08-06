import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import WashBackgroundAnimation from '../components/WashBackgroundAnimation';
import bikeBefore from '../assets/images/services/before_bike.webp';
import bikeAfter from '../assets/images/services/after_bike.webp';
import { handleAppDownload } from '../utils/appLinks';

const bikeWashPackages = [
  {
    id: 'manual-basic-wash',
    title: '1. Manual Basic Wash',
    badge: 'Daily Care',
    preferredFor: 'Daily care and light dust removal',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M15 6h4l-3 5.5h-5.5L8 17.5" />
        <path d="M5.5 17.5L10 11.5l3.5 1.5 3-5.5" />
      </svg>
    ),
    includes: [
      'Bike wash with brand shampoo',
      'Tyre polish'
    ],
    cardClass: ''
  },
  {
    id: 'pressure-foam-wash',
    title: '2. Pressure Foam Wash',
    badge: 'Gloss Finish',
    preferredFor: 'Muddy roads, engine grime & glossy finish',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7c-.7 0-1.3.3-1.8.7C4.3 8.6 3 10 3 10s-2.7.6-4.5 1.1C-2.3 11.3-3 12.1-3 13v3c0 .6.4 1 1 1h2" />
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
      </svg>
    ),
    includes: [
      'Pressure pump wash with foam',
      'Tyre polish',
      'Silicon glaze spray polish'
    ],
    cardClass: 'popular'
  },
  {
    id: 'helmet-cleaning',
    title: '3. Helmet Cleaning',
    badge: 'Hygiene Special',
    preferredFor: 'Sweat odor removal & visor clarity',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    includes: [
      'High quality foam wash (both outer and inner)',
      'High-temperature steam wash'
    ],
    cardClass: 'elite'
  }
];

const addOns = [
  {
    name: 'Wax Coating Polish',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  },
  {
    name: 'Plastic Polish',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  }
];

export default function BikeWashPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-page">
      <WashBackgroundAnimation />
      <div className="container">
        {/* Header */}
        <div className="service-page-header animate-on-scroll">
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <span className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="5.5" cy="17.5" r="3.5" />
                <circle cx="18.5" cy="17.5" r="3.5" />
                <path d="M15 6h4l-3 5.5h-5.5L8 17.5" />
                <path d="M5.5 17.5L10 11.5l3.5 1.5 3-5.5" />
              </svg>
              Bike Wash Service
            </span>
          </div>
          <h1 className="section-title">Doorstep Bike Wash & Detailing</h1>
          <p className="section-subtitle">
            Your two-wheeler deserves care and shine. We bring specialized foam washing, chain care, and helmet sanitization right to your doorstep.
          </p>
        </div>

        {/* Visual Transformation */}
        <div className="service-demo animate-on-scroll">
          <h2 className="text-center section-title" style={{ fontSize: '2rem', marginBottom: '3rem' }}>
            See the Transformation
          </h2>
          <BeforeAfterSlider
            beforeImage={bikeBefore}
            afterImage={bikeAfter}
            beforeLabel="Before"
            afterLabel="After"
          />
        </div>

        {/* Bike Wash Packages Section */}
        <div style={{ marginTop: '5rem' }} className="animate-on-scroll">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-badge">Bike Wash Packages</span>
            <h2 className="section-title" style={{ fontSize: '2.2rem', marginTop: '0.5rem' }}>
              Choose Your <span className="text-gradient">Bike Wash Plan</span>
            </h2>
            <p className="section-subtitle">
              Select the perfect cleaning & detailing package for your motorcycle or scooter.
            </p>
          </div>

          <div className="packages-grid bike-packages-grid">
            {bikeWashPackages.map((pkg, index) => (
              <div className={`package-card ${pkg.cardClass}`} key={index}>
                {pkg.badge && (
                  <span className={`package-badge ${pkg.cardClass === 'popular' ? 'popular-badge' : pkg.cardClass === 'elite' ? 'elite-badge' : ''}`}>
                    <span className="package-badge-dot"></span>
                    {pkg.badge}
                  </span>
                )}

                <div className="package-icon-wrapper">
                  {pkg.icon}
                </div>

                <div className="package-header">
                  <h3>{pkg.title}</h3>
                  <div className="package-preferred">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>Preferred for: <strong>{pkg.preferredFor}</strong></span>
                  </div>
                </div>

                <div style={{ fontSize: '0.86rem', fontWeight: '800', color: 'var(--gray-900)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  What's Included:
                </div>
                <ul className="package-features">
                  {pkg.includes.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <span className="package-check-circle">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link to={`/bike-wash/${pkg.id}`} className="package-footer-btn">
                  <span>View More</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Add-ons Section */}
        <div style={{ marginTop: '5rem' }} className="animate-on-scroll">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-badge">Add-Ons</span>
            <h2 className="section-title" style={{ fontSize: '2.2rem', marginTop: '0.5rem' }}>
              Custom <span className="text-gradient">Add-Ons</span>
            </h2>
            <p className="section-subtitle">
              Enhance your bike wash package with specialized treatment add-ons.
            </p>
          </div>

          <div className="addons-grid bike-addons-grid">
            {addOns.map((addon, index) => (
              <div className="addon-card" key={index}>
                <div className="addon-icon">
                  {addon.icon}
                </div>
                <div>
                  <h4>{addon.name}</h4>
                  <span className="addon-tag">
                    <span className="package-badge-dot" style={{ background: 'var(--sky-500)', display: 'inline-block' }}></span>
                    Available on Request
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div style={{
          marginTop: '5rem',
          maxWidth: '860px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
          background: 'linear-gradient(135deg, var(--sky-500), var(--sky-700))',
          padding: '40px 24px',
          borderRadius: 'var(--radius-2xl)',
          color: 'var(--white)',
          boxShadow: '0 12px 36px rgba(14, 165, 233, 0.3)'
        }} className="animate-on-scroll">
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '12px' }}>
            Ready to Give Your Bike a Showroom Polish?
          </h2>
          <p style={{ fontSize: '1rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 24px' }}>
            Book your doorstep bike wash in under 60 seconds through our mobile app!
          </p>
          <a
            href="#download"
            className="btn-primary"
            onClick={(e) => handleAppDownload(e)}
            style={{
              background: 'var(--white)',
              color: 'var(--sky-700)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
              display: 'inline-flex'
            }}
          >
            Book a Wash Now
          </a>
        </div>
      </div>
    </div>
  );
}
