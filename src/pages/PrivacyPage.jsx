import { useEffect } from 'react';

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-page">
      <div className="container">
        <div className="service-page-header animate-on-scroll">
          <h1 className="section-title">Privacy Policy</h1>
          <p className="section-subtitle">
            How we collect, use, and protect your data.
          </p>
        </div>

        <div className="service-details animate-on-scroll" style={{ display: 'block' }}>
          <div className="detail-card glass-card" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
            <h3>1. Information We Collect</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
              We collect information that you provide directly to us, such as your name, email address, phone number, vehicle details, and service location when you book an appointment.
            </p>
            
            <h3>2. How We Use Your Information</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
              We use the information we collect to provide, maintain, and improve our services, to process transactions, and to send you related information, including confirmations and receipts.
            </p>
            
            <h3>3. Data Protection</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
              We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <h3>4. Contact Us</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
              If you have any questions about this Privacy Policy, please contact us at support@reshineservices.in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
