import React from 'react';
import step1 from '../assets/images/how-it-works/step1.webp';
import step2 from '../assets/images/how-it-works/step2.webp';
import step3 from '../assets/images/how-it-works/step3.webp';
import step4 from '../assets/images/how-it-works/step4.webp';

const steps = [
  {
    number: '01',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
    ),
    image: step1,
    title: 'Download the App',
    description: 'Get the ReShine app from Google Play or App Store and create your account in seconds.',
  },
  {
    number: '02',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="9" y1="3" x2="9" y2="21"></line>
      </svg>
    ),
    image: step2,
    title: 'Choose Service',
    description: 'Select from our range of services - car wash, bike wash, and more. Pick a convenient time slot.',
  },
  {
    number: '03',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    image: step3,
    title: 'We Come to You',
    description: 'Our trained professional arrives at your location with all the equipment needed for a premium wash.',
  },
  {
    number: '04',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
    image: step4,
    title: 'Enjoy the Shine',
    description: 'Sit back and relax while we deliver a spotless, showroom-quality finish right at your doorstep.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works" aria-label="How It Works">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            Simple Process
          </span>
          <h2 className="section-title">How It <span className="text-gradient">Works</span></h2>
          <p className="section-subtitle">
            Getting your vehicle cleaned has never been easier. Just four simple steps to a sparkling clean ride.
          </p>
        </div>

        <div className="hpw-steps-container animate-on-scroll">
          {steps.map((step, index) => (
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
                  <img src={step.image} alt={step.title} className="hpw-step-image" loading="lazy" />
                </div>

                <div className="hpw-card-content">
                  <h3 className="hpw-step-title">{step.title}</h3>
                  <p className="hpw-step-desc">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
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
      </div>
    </section>
  );
}

