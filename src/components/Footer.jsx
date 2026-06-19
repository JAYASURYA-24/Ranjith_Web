import React from 'react';
import { Link } from 'react-router-dom';
import { handleAppDownload, PLAYSTORE_LINK, APPSTORE_LINK } from '../utils/appLinks';
import logoImg from '../assets/images/logo/Reshine_Logo.webp';
import playstoreIcon from '../assets/images/app-promo/playstore.webp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h4 className="footer-brand-heading">Registered Office</h4>
            <p>
              <strong>RESHINE SERVICES PRIVATE LIMITED</strong><br />Plot No. 25, Door No. 2/931A (2nd Floor), Rose Avenue, Ambedkar Salai, S.Kolathur, Kovilambakkam, Chennai - 600117.
            </p>
            <div className="footer-app-links" style={{ display: 'flex', gap: '5px', marginTop: '20px', flexWrap: 'wrap' }}>
              <a href={PLAYSTORE_LINK} target="_blank" rel="noopener noreferrer" className="store-btn google-play" style={{ transform: 'scale(0.85)', transformOrigin: 'left center', margin: 0 }}>
                <span className="store-btn-icon">
                  <img src={playstoreIcon} alt="Google Play" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                </span>
                <div className="store-btn-text">
                  <small>Get it on</small>
                  <span>Google Play</span>
                </div>
              </a>
              <a href={APPSTORE_LINK} target="_blank" rel="noopener noreferrer" className="store-btn app-store" style={{ transform: 'scale(0.85)', transformOrigin: 'left center', margin: 0 }}>
                <span className="store-btn-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </span>
                <div className="store-btn-text">
                  <small>Download on the</small>
                  <span>App Store</span>
                </div>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/#how-it-works">How It Works</Link></li>
              <li><Link to="/#testimonials">Reviews</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/car-wash">Car Wash</Link></li>
              <li><Link to="/bike-wash">Bike Wash</Link></li>
              <li><Link to="/puc-service">Vehicle PUC</Link></li>
              <li><Link to="/home-cleaning">Home Cleaning</Link></li>              <li><a href="#download" onClick={handleAppDownload}>Download App</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul>
              <li><a href="tel:+919445469407">+91 9445469407</a></li>
              <li><a href="mailto:support@reshineservices.in">support@reshineservices.in</a></li>

            </ul>
            <div className="footer-social" style={{ marginTop: '20px' }}>
              <a href="#" className="social-link" aria-label="Follow us on Facebook" id="social-facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="https://instagram.com/reshineservice.in" className="social-link" aria-label="Follow us on Instagram" id="social-instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Follow us on Twitter" id="social-twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Follow us on YouTube" id="social-youtube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} ReShine Services Pvt. Ltd. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
