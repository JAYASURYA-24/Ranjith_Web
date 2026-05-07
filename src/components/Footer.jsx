import React from 'react';
import { Link } from 'react-router-dom';
import { handleAppDownload } from '../utils/appLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo" aria-label="ReShine Home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="logo-icon">R</div>
              <span>Re<span className="logo-highlight">Shine</span></span>
            </Link>
            <p>
              Premium doorstep vehicle cleaning services. We bring the wash to your doorstep — saving your time, water, and effort with trained professionals.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Follow us on Facebook" id="social-facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Follow us on Instagram" id="social-instagram">
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

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/#about">About Us</Link></li>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/#how-it-works">How It Works</Link></li>
              <li><Link to="/#testimonials">Reviews</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
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
              <li><a href="tel:+919876543210">+91 98765 43210</a></li>
              <li><a href="mailto:hello@ReShine.in">hello@ReShine.in</a></li>
              <li><a href="#contact">All Major Cities, India</a></li>
              <li><a href="#contact">Mon–Sun: 7AM – 8PM</a></li>
            </ul>
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
