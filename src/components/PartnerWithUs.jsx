import React, { useState } from 'react';

const partnerBenefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Grow Your Revenue',
    desc: 'Get a steady stream of bookings from our large customer base without any marketing effort. Increase your daily earnings significantly.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Flexible Schedule',
    desc: 'Work on your own terms. You choose when and where you want to provide washing services, giving you complete control over your time.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'Easy Management App',
    desc: 'Use our dedicated partner app to easily manage your bookings, track your earnings, and navigate directly to customer locations.',
  }
];

const partnerSteps = [
  {
    number: '01',
    icon: '📱', 
    title: 'Download the App',
    description: 'Get the ShineUp Partner app from Google Play or App Store and create your account.',
  },
  {
    number: '02',
    icon: '🔔',
    title: 'Get Bookings',
    description: 'Receive real-time wash requests from customers nearby your selected location.',
  },
  {
    number: '03',
    icon: '🧽',
    title: 'Done Work',
    description: 'Navigate to the customer, provide top-notch washing service, and mark it complete.',
  },
  {
    number: '04',
    icon: '💸',
    title: 'Enjoy Payment',
    description: 'Get paid securely and instantly after every completed job straight to your bank.',
  },
];

export default function PartnerWithUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="partner-with-us" id="partner" aria-label="Partner With Us">
        <div className="container">
          <div className="partner-content animate-on-scroll">
            <div className="partner-text-block">
              <span className="section-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
                Join Our Network
              </span>
              <h2 className="section-title">Partner With <span style={{ color: 'var(--sky-500)' }}>ShineUp</span></h2>
              <p className="section-subtitle">
                Are you an individual car/bike washer or a wash service center? Join our growing network of service providers. Boost your income, enjoy flexible hours, and get access to modern tools.
              </p>
              
              <div className="partner-benefits">
                {partnerBenefits.map((benefit, index) => (
                  <div className="partner-benefit-item" key={index}>
                    <div className="benefit-icon">{benefit.icon}</div>
                    <div className="benefit-text">
                      <h4>{benefit.title}</h4>
                      <p>{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                className="btn-primary partner-cta" 
                style={{ marginTop: '35px' }}
                onClick={() => setIsModalOpen(true)}
              >
                Become a Partner Today
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
            
            <div className="partner-visual animate-on-scroll">
              <div className="partner-image-wrapper">
                <img src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Professional car washing service" loading="lazy" />
                <div className="partner-overlay-card">
                  <div className="overlay-icon">📈</div>
                  <div className="overlay-text">
                    <strong>+40%</strong>
                    <span>Average Income Boost</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="partner-steps-section animate-on-scroll" style={{ marginTop: '100px', paddingTop: '60px', borderTop: '1px solid rgba(14, 165, 233, 0.1)' }}>
            <div className="section-header" style={{ marginBottom: '40px' }}>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>How Partner App Works</h2>
              <p className="section-subtitle">Start earning in just four simple steps using our seamless partner application.</p>
            </div>
            
            <div className="steps-grid">
              {partnerSteps.map((step, index) => (
                <div className="step-card" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="step-emoji-wrapper">
                    {step.icon}
                  </div>
                  <div className="step-label">STEP {step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="step-bg-number">{step.number}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Partner Registration Modal */}
      {isModalOpen && (
        <div className="partner-modal-overlay">
          <div className="partner-modal">
            <button className="close-modal-btn" onClick={() => setIsModalOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="modal-header">
              <h3>Join ShineUp Partner</h3>
              <p>Fill out the form below and our team will contact you shortly.</p>
            </div>
            <form className="partner-form" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); alert('Application Submitted Successfully!'); }}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input type="tel" placeholder="Enter 10-digit number" pattern="[0-9]{10}" required />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input type="text" placeholder="E.g. Jayanagar, Bengaluru" required />
              </div>
              <div className="form-group">
                <label>Pincode</label>
                <input type="text" placeholder="E.g. 560011" pattern="[0-9]{6}" required />
              </div>
              <div className="form-group">
                <label>Services You Provide</label>
                <div className="custom-select-wrapper">
                  <select required>
                    <option value="">Select Service</option>
                    <option value="car_wash">Car Wash Only</option>
                    <option value="bike_wash">Bike Wash Only</option>
                    <option value="both">Both Car & Bike Wash</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
