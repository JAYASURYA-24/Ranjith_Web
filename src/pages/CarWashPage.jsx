import React, { useEffect } from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function CarWashPage() {
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
          <h1 className="section-title">Premium Doorstep Car Wash</h1>
          <p className="section-subtitle">
            Experience the ultimate transformation for your vehicle. We use high-quality foam, specialized microfiber towels, and eco-friendly products to give your car a showroom finish, right in your driveway.
          </p>
        </div>

        <div className="service-demo animate-on-scroll">
          <h2 className="text-center section-title" style={{ fontSize: '2rem', marginBottom: '3rem' }}>See the Transformation</h2>
          <BeforeAfterSlider 
            beforeImage="/before_car.png" 
            afterImage="/after_car.png" 
            beforeLabel="Dusty & Pre-wash Foam" 
            afterLabel="Sparkling Clean"
          />
        </div>

        <div className="service-details animate-on-scroll">
          <div className="detail-card glass-card">
            <h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              What's Included
            </h3>
            <ul>
              <li><span className="check-icon">✓</span> High-Pressure Exterior Wash</li>
              <li><span className="check-icon">✓</span> Premium Snow Foam Application</li>
              <li><span className="check-icon">✓</span> Microfiber Hand Wash & Dry</li>
              <li><span className="check-icon">✓</span> Wheel & Tire Cleaning</li>
              <li><span className="check-icon">✓</span> Tire Dressing & Shine</li>
              <li><span className="check-icon">✓</span> Exterior Glass Cleaning</li>
            </ul>
          </div>
          <div className="detail-card glass-card">
            <h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              Why Choose Our Car Wash
            </h3>
            <p style={{ lineHeight: '1.8' }}>
              Our professionally trained detailing experts come equipped with everything needed—including water and power if necessary. We don't just wash your car; we carefully detail every surface to ensure there are no swirl marks, protecting your clear coat and restoring its natural shine.
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
