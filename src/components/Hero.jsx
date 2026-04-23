import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Hero section">
      <div className="hero-bg">
        <img src="/hero-bg.png" alt="Professional doorstep car washing service" loading="eager" />
      </div>
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Trusted by 10,000+ Happy Customers
          </div>

          <h1>
            Professional <span className="highlight">Doorstep</span> Car & Bike Wash
          </h1>

          <p className="hero-description">
            Experience premium vehicle cleaning at your doorstep. We bring the wash to you — saving your time,
            water, and effort with eco-friendly products and trained professionals.
          </p>

          <div className="hero-actions">
            <a href="#download" className="btn-primary" id="hero-cta-download">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download App
            </a>
            <a href="#services" className="btn-secondary" id="hero-cta-services">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="10 8 16 12 10 16 10 8"/>
              </svg>
              Explore Services
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <h3>10K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="hero-stat">
              <h3>50K+</h3>
              <p>Vehicles Washed</p>
            </div>
            <div className="hero-stat">
              <h3>4.8★</h3>
              <p>App Rating</p>
            </div>
          </div>
        </div>

        {/* <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img src="/app-mockup.png" alt="ShineUp mobile app showing vehicle wash booking interface" />
            <div className="hero-floating-card card-1">
              <div className="floating-icon green">✓</div>
              <div className="floating-card-text">
                <h4>Service Completed!</h4>
                <p>Your car is sparkling clean</p>
              </div>
            </div>
            <div className="hero-floating-card card-2">
              <div className="floating-icon blue">📍</div>
              <div className="floating-card-text">
                <h4>At Your Doorstep</h4>
                <p>Expert arriving in 30 min</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
