import React, { useEffect } from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

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
              🚀 Coming Soon
            </span>
          </div>
          <h1 className="section-title">Professional Home Deep Cleaning</h1>
          <p className="section-subtitle">
            A clean home is a happy home. We are bringing our expertise in detailing from your driveway to your living room. From deep cleaning sofas to sanitizing kitchens, prepare for spotless living spaces.
          </p>
        </div>

        <div className="service-demo animate-on-scroll">
          <h2 className="text-center section-title" style={{ fontSize: '2rem', marginBottom: '3rem' }}>See the Transformation</h2>
          <BeforeAfterSlider 
            beforeImage="/before_home.png" 
            afterImage="/after_home.png" 
            beforeLabel="Cluttered & Dusty" 
            afterLabel="Pristine & Organized"
          />
        </div>

        <div className="animate-on-scroll" style={{ marginTop: '4rem' }}>
          <div className="glass-card" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Get Notified When We Launch!</h2>
            <p className="section-subtitle" style={{ margin: '1rem auto' }}>
              Leave your email and we'll alert you as soon as our home cleaning crews are ready for booking in your area.
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
