import React from 'react';
import mobileApp from '../assets/mobile_app_no_bg.png';

export default function AppPromo() {
  return (
    <section className="app-promo" id="download" aria-label="Download Our App">
      <div className="container app-promo-grid">
        <div className="app-promo-content animate-on-scroll">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
              <line x1="12" y1="18" x2="12.01" y2="18"/>
            </svg>
            Mobile App
          </span>
          <h2 className="section-title">Book Services Instantly<br />with Our App</h2>
          <p className="section-subtitle">
            All bookings are conveniently handled through our mobile app. Download now to access
            doorstep car wash, bike wash, and more — all at your fingertips.
          </p>

          <div className="app-features">
            <div className="app-feature">
              <div className="app-feature-check">✓</div>
              <span>Book a doorstep service in under 60 seconds</span>
            </div>
            <div className="app-feature">
              <div className="app-feature-check">✓</div>
              <span>Real-time tracking of your service professional</span>
            </div>
            <div className="app-feature">
              <div className="app-feature-check">✓</div>
              <span>Secure payments with multiple options</span>
            </div>
            <div className="app-feature">
              <div className="app-feature-check">✓</div>
              <span>Rate and review after every service</span>
            </div>
          </div>

          <div className="app-download-buttons">
            <a href="#" className="store-btn google-play" id="btn-google-play" aria-label="Download from Google Play Store">
              <span className="store-btn-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.41 12l2.288-2.492zM5.864 2.658L16.8 8.991l-2.302 2.302L5.864 2.658z"/>
                </svg>
              </span>
              <div className="store-btn-text">
                <small>Get it on</small>
                <span>Google Play</span>
              </div>
            </a>
            <a href="#" className="store-btn app-store" id="btn-app-store" aria-label="Download from Apple App Store">
              <span className="store-btn-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </span>
              <div className="store-btn-text">
                <small>Download on the</small>
                <span>App Store</span>
              </div>
            </a>
          </div>
        </div>

        <div className="app-promo-visual animate-on-scroll">
          <div className="app-mockup-wrapper">
            <img src={mobileApp} alt="ShineUp mobile app interface showing service booking screen" loading="lazy" />
            <div className="app-promo-bg-circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

