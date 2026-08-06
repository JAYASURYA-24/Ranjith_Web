import heroBg from '../assets/images/hero/hero-bg.webp';
import { handleAppDownload } from '../utils/appLinks';

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Hero section">
      <div className="hero-overlay"></div>

      {/* Floating Water Bubble Particles */}
      <div className="hero-bubbles" aria-hidden="true">
        <span className="bubble bubble-1"></span>
        <span className="bubble bubble-2"></span>
        <span className="bubble bubble-3"></span>
        <span className="bubble bubble-4"></span>
        <span className="bubble bubble-5"></span>
        <span className="bubble bubble-6"></span>
      </div>

      <div className="header-container hero-content">

        {/* LEFT: Text */}
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Trusted by 1000+ Happy Customers
          </div>

          <h1>
            Car &amp; Bike Wash at Your <span className="highlight">Doorstep</span>
          </h1>

          <p className="hero-description">
            Experience premium vehicle cleaning at your doorstep. We bring the wash to you—saving your time,
            water, and effort with eco-friendly products and trained professionals.
          </p>

          <div className="hero-actions">
            <a href="#download" className="btn-primary" id="hero-cta-download" onClick={handleAppDownload}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <path d="M12 14l2 2 4-4" />
              </svg>
              Book a Wash
            </a>
            <a href="#services" className="btn-secondary" id="hero-cta-services">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
              Explore Services
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <h3>1K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="hero-stat">
              <h3>1500+</h3>
              <p>Vehicles Washed</p>
            </div>
            <div className="hero-stat">
              <h3>4.8★</h3>
              <p>App Rating</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img src={heroBg} alt="Professional doorstep car washing service" loading="eager" />
          </div>
        </div>

      </div>

      {/* Multi-Layered Flowing Liquid Waves */}
      <div className="hero-wave-container" aria-hidden="true">
        <svg className="wave-svg wave-layer-1" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,20 C180,85 360,-15 540,45 C720,105 900,15 1080,55 C1140,68 1170,72 1200,75 L1200,120 L0,120 Z" fill="rgba(14, 165, 233, 0.18)" />
        </svg>
        <svg className="wave-svg wave-layer-2" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,45 C200,100 400,25 600,70 C800,115 1000,35 1200,65 L1200,120 L0,120 Z" fill="#f8fafd" />
        </svg>
      </div>
    </section>

  );
}
