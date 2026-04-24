import React, { useEffect } from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function BikeWashPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-page">
      <div className="container">
        <div className="service-page-header animate-on-scroll">
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <span className="section-badge">
              Available Now
            </span>
          </div>
          <h1 className="section-title">Doorstep Bike Wash & Detailing</h1>
          <p className="section-subtitle">
            Your two-wheeler deserves love too. Our specialized bike wash removes tough grease, grime, and mud, ensuring your motorcycle looks stunning and performs optimally.
          </p>
        </div>

        <div className="service-demo animate-on-scroll">
          <h2 className="text-center section-title" style={{ fontSize: '2rem', marginBottom: '3rem' }}>See the Transformation</h2>
          <BeforeAfterSlider 
            beforeImage="/before_bike.png" 
            afterImage="/after_bike.png" 
            beforeLabel="Muddy & Foamed" 
            afterLabel="Polished & Shining"
          />
        </div>

        <div className="service-details animate-on-scroll">
          <div className="detail-card glass-card">
            <h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              What's Included
            </h3>
            <ul>
              <li><span className="check-icon">✓</span> Complete Foaming and Degreasing</li>
              <li><span className="check-icon">✓</span> Chain Cleaning & Lubrication</li>
              <li><span className="check-icon">✓</span> Engine Block Cleaning</li>
              <li><span className="check-icon">✓</span> Alloy Wheels & Spokes Polishing</li>
              <li><span className="check-icon">✓</span> Body Wax & Polish</li>
            </ul>
          </div>
          <div className="detail-card glass-card">
            <h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              Ride with Pride
            </h3>
            <p style={{ lineHeight: '1.8' }}>
              Motorcycles have intricate parts exposed to harsh weather and road conditions. We use specialized brushes to reach tight spots around the engine and suspension, followed by applying premium protectants to safeguard plastic, metal, and rubber components.
            </p>
            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <a href="/#contact" className="btn btn-primary">Book Appointment</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
