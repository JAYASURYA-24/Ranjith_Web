import React, { useState } from 'react';
import partnerMain from '../assets/images/partner-with-us/partner-with-us.webp';
import step1Img from '../assets/images/partner-with-us/Partner_Step_1.webp';
import step2Img from '../assets/images/partner-with-us/Partner_Step_2.webp';
import step3Img from '../assets/images/partner-with-us/Partner_Step_3.webp';
import step4Img from '../assets/images/partner-with-us/Partner_Step_4.webp';

const partnerBenefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12M6 8h12m-12 5 8.5 8M6 13h3c6 0 6-10 0-10" />
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
  },
];

const partnerSteps = [
  {
    number: '01',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
    ),
    image: step1Img,
    title: 'DOWNLOAD THE APP',
    description: 'Get the ShineUp Partner app from Google Play or App Store and create your account.',
  },
  {
    number: '02',
    icon: (
      <>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        <div className="icon-badge">3</div>
      </>
    ),
    image: step2Img,
    title: 'GET BOOKINGS',
    description: 'Receive real-time wash requests from customers nearby your selected location.',
  },
  {
    number: '03',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    ),
    image: step3Img,
    title: 'DONE WORK',
    description: 'Navigate to the customer, provide top-notch washing service, and mark it complete.',
  },
  {
    number: '04',
    icon: (
      <>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="2" y1="10" x2="22" y2="10"></line>
        </svg>
        <div className="icon-badge success">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
      </>
    ),
    image: step4Img,
    title: 'ENJOY PAYMENT',
    description: 'Get paid securely and instantly after every completed job straight to your bank.',
  },
];

const partnerFeatures = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    ),
    title: '100% Secure',
    desc: 'Your data and payments are always protected.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    title: 'Instant Acceptance',
    desc: 'Quick booking alerts and easy job management.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
    title: 'Timely Payments',
    desc: 'Get paid instantly after every completed job.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    title: '24/7 Support',
    desc: "We're always here to help you, anytime.",
  }
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
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
                Join Our Network
              </span>
              <h2 className="section-title">Partner With <span className="text-gradient">ReShine</span></h2>
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
                <img src={partnerMain} alt="Professional car washing service" loading="lazy" />
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

          <div className="how-partner-works-section animate-on-scroll">
            <div className="hpw-header">
              <h2 className="hpw-title">How <span className="hpw-highlight">Partner App</span> Works</h2>
              <p className="hpw-subtitle">Start earning in just four simple steps using our seamless partner application.</p>

            </div>

            <div className="hpw-steps-container">
              {partnerSteps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="hpw-step-card" style={{ animationDelay: `${index * 0.15}s` }}>
                    <div className="hpw-card-top">
                      <div className="hpw-bg-number">{step.number}</div>
                      <div className="hpw-icon-wrapper">
                        <div className="hpw-icon-glow"></div>
                        <div className="hpw-icon">{step.icon}</div>
                      </div>
                    </div>

                    <div className="hpw-image-wrapper">
                      <img src={step.image} alt={step.title} className="hpw-step-image" />
                    </div>

                    <div className="hpw-card-content">
                      <h3 className="hpw-step-title">{step.title}</h3>
                      <p className="hpw-step-desc">{step.description}</p>
                    </div>
                  </div>
                  {index < partnerSteps.length - 1 && (
                    <div className="hpw-arrow-separator">
                      <div className="hpw-arrow-circle">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="hpw-features-footer">
              {partnerFeatures.map((feature, index) => (
                <div className="hpw-feature-item" key={index}>
                  <div className="hpw-feature-icon">{feature.icon}</div>
                  <div className="hpw-feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
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
              <h3>Join ReShine Partner</h3>
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
