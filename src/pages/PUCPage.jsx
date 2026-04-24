import React, { useEffect } from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

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
              🚀 Coming Soon
            </span>
          </div>
          <h1 className="section-title">Doorstep PUC Certificate</h1>
          <p className="section-subtitle">
            Skip the long queues at petrol pumps. Soon, our certified agents will visit your location to test your vehicle and issue Government-approved Pollution Under Control (PUC) certificates instantly.
          </p>
        </div>

        <div className="service-demo animate-on-scroll">
          <h2 className="text-center section-title" style={{ fontSize: '2rem', marginBottom: '3rem' }}>Cleaner Emissions, Greener Earth</h2>
          <BeforeAfterSlider 
            beforeImage="/before_puc.png" 
            afterImage="/after_puc.png" 
            beforeLabel="Harmful Emissions" 
            afterLabel="Passed & Certified"
          />
        </div>

        <div className="animate-on-scroll" style={{ marginTop: '4rem' }}>
          <div className="glass-card" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Get Notified When We Launch!</h2>
            <p className="section-subtitle" style={{ margin: '1rem auto' }}>
              Leave your email to be the first to book our doorstep PUC service and get an exclusive launch discount.
            </p>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '12px', marginTop: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                style={{ 
                  padding: '14px 20px', 
                  borderRadius: 'var(--radius-full)', 
                  border: '1px solid var(--gray-200)', 
                  background: 'var(--gray-50)', 
                  color: 'var(--gray-900)', 
                  outline: 'none', 
                  flex: '1', 
                  minWidth: '260px',
                  fontSize: '0.95rem'
                }} 
              />
              <button type="submit" className="btn btn-primary">Notify Me</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
