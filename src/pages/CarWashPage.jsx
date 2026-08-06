import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import WashBackgroundAnimation from '../components/WashBackgroundAnimation';
import carBefore from '../assets/images/services/before_car.webp';
import carAfter from '../assets/images/services/after_car.webp';
import { handleAppDownload } from '../utils/appLinks';

const carWashPackages = [
  {
    id: 'basic-manual-wash',
    title: '1. Basic Manual Wash',
    badge: 'Daily Care',
    preferredFor: 'Low mud and daily care',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    includes: [
      'Outer body wash',
      'Tyre polish'
    ],
    cardClass: ''
  },
  {
    id: 'pressure-foam-wash',
    title: '2. Pressure Foam Wash',
    badge: 'Gloss Finish',
    preferredFor: 'High mud, glossy finish',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7c-.7 0-1.3.3-1.8.7C4.3 8.6 3 10 3 10s-2.7.6-4.5 1.1C-2.3 11.3-3 12.1-3 13v3c0 .6.4 1 1 1h2" />
        <path d="M5 11l1.5-4.5h11L19 11" />
        <circle cx="7.5" cy="16.5" r="1.5" />
        <circle cx="16.5" cy="16.5" r="1.5" />
      </svg>
    ),
    includes: [
      'Pressure pump wash',
      'High quality foam wash',
      'Tyre polish'
    ],
    cardClass: ''
  },
  {
    id: 'premium-wash',
    title: '3. Premium Wash',
    subtitleTag: 'Basic Interior & Exterior',
    badge: 'Most Popular',
    preferredFor: 'Basic interior and exterior care',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    includes: [
      'Pressure pump wash',
      'Outer foam wash',
      'Tyre polish',
      'Basic vacuum cleaning',
      'Dashboard polish'
    ],
    cardClass: 'popular'
  },
  {
    id: 'elite-deep-cleaning',
    title: '4. Elite Deep Cleaning',
    badge: 'Ultimate Care',
    preferredFor: 'Complete deep interior & exterior restoration',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    includes: [
      'Outer foam wash & tyre polish',
      'Outer body shine polish',
      'Interior dashboard & door polish',
      'Seat, door & boot space floor mat foam wash & polish',
      'Rubber & plastic trim polish',
      'Exterior & interior glass polish',
      'Complete interior steam cleaning'
    ],
    cardClass: 'elite'
  }
];

const addOns = [
  {
    name: 'Roof Cleaning',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 15h18" />
        <path d="M6 15l2-6h8l2 6" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    )
  },
  {
    name: 'Rain Repellent',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    name: 'Rat Repellent',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    name: 'AC Vent Cleaning',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
      </svg>
    )
  },
  {
    name: 'Wax Coating Polish',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  },
  {
    name: 'Engine Bay Steam Cleaning',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M6.34 7.34l-2.83-2.83M17.66 7.34l2.83-2.83M2 13h4M18 13h4M6.34 18.66l-2.83 2.83M17.66 18.66l2.83 2.83M12 18v4" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    )
  }
];

export default function CarWashPage() {
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
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7c-.7 0-1.3.3-1.8.7C4.3 8.6 3 10 3 10s-2.7.6-4.5 1.1C-2.3 11.3-3 12.1-3 13v3c0 .6.4 1 1 1h2" />
                <path d="M5 11l1.5-4.5h11L19 11" />
                <circle cx="7.5" cy="16.5" r="1.5" />
                <circle cx="16.5" cy="16.5" r="1.5" />
              </svg>
              Car Wash Service
            </span>
          </div>
          <h1 className="section-title">Premium Doorstep Car Wash</h1>
          <p className="section-subtitle">
            Experience the ultimate transformation for your vehicle. We bring professional equipment, eco-friendly foam, and trained detailing experts right to your doorstep.
          </p>
        </div>

        {/* Visual Transformation */}
        <div className="service-demo animate-on-scroll">
          <h2 className="text-center section-title" style={{ fontSize: '2rem', marginBottom: '3rem' }}>
            See the Transformation
          </h2>
          <BeforeAfterSlider
            beforeImage={carBefore}
            afterImage={carAfter}
            beforeLabel="Before"
            afterLabel="After"
          />
        </div>

        {/* Car Wash Packages Section */}
        <div style={{ marginTop: '5rem' }} className="animate-on-scroll">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-badge">Car Wash Packages</span>
            <h2 className="section-title" style={{ fontSize: '2.2rem', marginTop: '0.5rem' }}>
              Choose Your <span className="text-gradient">Car Wash Plan</span>
            </h2>
            <p className="section-subtitle">
              Select the perfect cleaning package tailored for your car care needs.
            </p>
          </div>

          <div className="packages-grid">
            {carWashPackages.map((pkg, index) => (
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
                  <h3>
                    {pkg.title}
                    {pkg.subtitleTag && <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--gray-500)', fontWeight: '600', marginTop: '2px' }}>({pkg.subtitleTag})</span>}
                  </h3>
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

                <Link to={`/car-wash/${pkg.id}`} className="package-footer-btn">
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
              Enhance your wash package with specialized treatment add-ons.
            </p>
          </div>

          <div className="addons-grid">
            {addOns.map((addon, index) => (
              <div className="addon-card" key={index}>
                <div className="addon-icon">
                  {addon.icon}
                </div>
                <div>
                  <h4>{addon.name}</h4>
                  <span style={{ fontSize: '0.78rem', color: 'var(--sky-600)', fontWeight: '600' }}>Available on Request</span>
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
            Ready to Give Your Car a Showroom Polish?
          </h2>
          <p style={{ fontSize: '1rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 24px' }}>
            Book your doorstep wash in under 60 seconds through our mobile app or get in touch today!
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
