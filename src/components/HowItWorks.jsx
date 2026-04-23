import React from 'react';
import step1 from '../assets/how-it-works/step1.png';
import step2 from '../assets/how-it-works/step2.png';
import step3 from '../assets/how-it-works/step3.png';
import step4 from '../assets/how-it-works/step4.png';

const steps = [
  {
    number: '01',
    image: step1,
    title: 'Download the App',
    description: 'Get the ShineUp app from Google Play or App Store and create your account in seconds.',
  },
  {
    number: '02',
    image: step2,
    title: 'Choose Your Service',
    description: 'Select from our range of services — car wash, bike wash, and more. Pick a convenient time slot.',
  },
  {
    number: '03',
    image: step3,
    title: 'We Come to You',
    description: 'Our trained professional arrives at your location with all the equipment needed for a premium wash.',
  },
  {
    number: '04',
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
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4"/>
              <path d="M12 8h.01"/>
            </svg>
            Simple Process
          </span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Getting your vehicle cleaned has never been easier. Just four simple steps to a sparkling clean ride.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card animate-on-scroll" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="step-image">
                <img src={step.image} alt={step.title} loading="lazy" />
              </div>
              <div className="step-label">STEP {step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <div className="step-bg-number">{step.number}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

