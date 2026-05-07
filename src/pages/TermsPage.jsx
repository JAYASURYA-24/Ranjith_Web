import React, { useEffect } from 'react';

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-page">
      <div className="container">
        <div className="service-page-header animate-on-scroll">
          <h1 className="section-title">Terms and Conditions</h1>
          <p className="section-subtitle">
            Please read these terms carefully before using our services.
          </p>
        </div>

        <div className="service-details animate-on-scroll" style={{ display: 'block' }}>
          <div className="detail-card glass-card" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
            <h3>1. Introduction</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Welcome to ReShine. By accessing or using our services, you agree to be bound by these terms and conditions. If you disagree with any part of the terms, you may not access the service.
            </p>
            
            <h3>2. Service Availability</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Our doorstep vehicle cleaning services are currently available in select cities. We reserve the right to withdraw or amend the services we provide without notice.
            </p>
            
            <h3>3. Pricing and Payment</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
              All prices are subject to change without prior notice. Payment is required at the time of service completion unless otherwise agreed upon.
            </p>
            
            <h3>4. User Responsibilities</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
              You are responsible for providing accurate location details and ensuring our professionals have reasonable access to the vehicle to perform the services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
