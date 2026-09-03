import { useEffect } from 'react';

export default function HomeCleanPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-page">
      <div className="container">
        <div className="service-page-header animate-on-scroll">
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <span className="section-badge" style={{ color: '#f59e0b', borderColor: 'rgba(245, 158, 11, 0.3)', background: 'rgba(245, 158, 11, 0.1)' }}>
              Coming Soon
            </span>
          </div>
          <h1 className="section-title">Professional Home Deep Cleaning</h1>
          <p className="section-subtitle">
            A clean home is a happy home. We are bringing our expertise in detailing from your driveway to your living room. From deep cleaning sofas to sanitizing kitchens, prepare for spotless living spaces.
          </p>
        </div>
      </div>
    </div>
  );
}
