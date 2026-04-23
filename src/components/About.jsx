import React from 'react';

export default function About() {
  return (
    <section className="about" id="about" aria-label="About Us">
      <div className="container about-grid">
        <div className="about-image-wrapper animate-on-scroll">
          <div className="about-image">
            <img src="/dirty-car-wash.png" alt="A dirty car being professionally washed at a doorstep" />
          </div>
          <div className="about-accent"></div>
        </div>

        <div className="about-content animate-on-scroll">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            About ShineUp
          </span>
          <h2 className="section-title">Redefining Vehicle Care,<br />One Doorstep at a Time</h2>
          <p className="about-text">
            ShineUp was born from a simple idea — what if professional car care came to you?
            Founded by a team of automotive enthusiasts, we set out to eliminate the hassle of
            traditional car washes and bring premium, eco-friendly cleaning right to your driveway.
          </p>
          <p className="about-text">
            Today, we serve thousands of satisfied customers, using water-efficient techniques,
            biodegradable products, and trained professionals who treat every vehicle like their own.
          </p>

          <div className="about-values">
            <div className="about-value">
              <div className="about-value-icon">
                <img src="/3d-mission.png" alt="Mission" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
              </div>
              <div>
                <h4>Our Mission</h4>
                <p>Make professional vehicle care accessible to every doorstep across India.</p>
              </div>
            </div>
            <div className="about-value">
              <div className="about-value-icon">
                <img src="/3d-vision.png" alt="Vision" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
              </div>
              <div>
                <h4>Our Vision</h4>
                <p>Become India's most trusted doorstep vehicle services platform.</p>
              </div>
            </div>
            <div className="about-value">
              <div className="about-value-icon">
                <img src="/3d-eco.png" alt="Eco-Friendly" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
              </div>
              <div>
                <h4>Eco-Friendly</h4>
                <p>Water-efficient methods that save up to 80% water per wash.</p>
              </div>
            </div>
            <div className="about-value">
              <div className="about-value-icon">
                <img src="/3d-quality.png" alt="Quality First" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
              </div>
              <div>
                <h4>Quality First</h4>
                <p>Premium products and trained professionals for every service.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
