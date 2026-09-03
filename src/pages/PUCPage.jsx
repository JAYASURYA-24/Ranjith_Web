import { useEffect } from 'react';

export default function PUCPage() {
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
          <h1 className="section-title">Doorstep PUC Certificate</h1>
          <p className="section-subtitle">
            Skip the long queues at petrol pumps. Soon, our certified agents will visit your location to test your vehicle and issue Government-approved Pollution Under Control (PUC) certificates instantly.
          </p>
        </div>
      </div>
    </div>
  );
}
