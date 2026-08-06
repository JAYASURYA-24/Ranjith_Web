import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { handleAppDownload } from '../utils/appLinks';
import logoImg from '../assets/images/logo/Reshine_Logo.webp';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = () => {
    setMenuOpen(false);
    setServicesExpanded(false);
    const dropdown = document.querySelector('.nav-dropdown-wrapper');
    if (dropdown) {
      dropdown.classList.remove('mobile-dropdown-open');
    }
  };

  const handleTopClick = () => {
    setMenuOpen(false);
    setServicesExpanded(false);
    const dropdown = document.querySelector('.nav-dropdown-wrapper');
    if (dropdown) {
      dropdown.classList.remove('mobile-dropdown-open');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="header-container header-inner">
          <Link to="/" className="logo" aria-label="ReShine Home" onClick={handleTopClick}>
            <img src={logoImg} alt="ReShine Logo" className="logo-img" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-links desktop-nav" id="nav-main" role="navigation" aria-label="Main navigation">
            <Link to="/" onClick={handleTopClick}>Home</Link>
            <Link to="/about" onClick={handleNavClick}>About Us</Link>

            <div className="nav-dropdown-wrapper">
              <a className="nav-dropdown-trigger" onClick={(e) => e.preventDefault()}>
                Services <span className="dropdown-arrow"><i className="fa-solid fa-chevron-down"></i></span>
              </a>
              <div className="nav-dropdown">
                <Link to="/car-wash" onClick={handleNavClick}>
                  <span className="service-sub-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7c-.7 0-1.3.3-1.8.7C4.3 8.6 3 10 3 10s-2.7.6-4.5 1.1C-2.3 11.3-3 12.1-3 13v3c0 .6.4 1 1 1h2" />
                      <path d="M5 11l1.5-4.5h11L19 11" />
                      <circle cx="7.5" cy="16.5" r="1.5" />
                      <circle cx="16.5" cy="16.5" r="1.5" />
                      <path d="M12 2a1.2 1.2 0 0 1 1.2 1.2c0 .8-1.2 2-1.2 2s-1.2-1.2-1.2-2A1.2 1.2 0 0 1 12 2z" />
                    </svg>
                  </span>
                  <span className="dropdown-label">Car Wash</span>
                </Link>

                <Link to="/bike-wash" onClick={handleNavClick}>
                  <span className="service-sub-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="5.5" cy="17.5" r="3.5" />
                      <circle cx="18.5" cy="17.5" r="3.5" />
                      <path d="M15 6h4l-3 5.5h-5.5L8 17.5" />
                      <path d="M5.5 17.5L10 11.5l3.5 1.5 3-5.5" />
                      <path d="M12 7l1-4h3" />
                      <path d="M9 2.5a1.2 1.2 0 0 1 1.2 1.2c0 .8-1.2 2-1.2 2s-1.2-1.2-1.2-2A1.2 1.2 0 0 1 9 2.5z" />
                    </svg>
                  </span>
                  <span className="dropdown-label">Bike Wash</span>
                </Link>
              </div>
            </div>

            <Link to="/partner" onClick={handleNavClick}>PartnerApp</Link>
            <Link to="/contact" onClick={handleNavClick}>Contact</Link>
            <a href="/#download" className="nav-cta" onClick={(e) => { handleNavClick(); handleAppDownload(e); }}>Download App</a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="header-right">
            <button
              className={`mobile-toggle ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Backdrop */}
      <div
        className={`mobile-drawer-backdrop ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-In Drawer */}
      <aside className={`mobile-drawer ${menuOpen ? 'open' : ''}`} aria-label="Mobile Navigation Drawer">
        {/* Drawer Header Bar */}
        <div className="mobile-drawer-header">
          <button className="mobile-drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Drawer Body Items */}
        <div className="mobile-drawer-body">
          <ul className="drawer-nav-list">
            <li>
              <Link to="/" className={`drawer-nav-item ${location.pathname === '/' ? 'active' : ''}`} onClick={handleTopClick}>
                <span className="drawer-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </span>
                <span className="drawer-item-text">Home</span>
              </Link>
            </li>

            <li>
              <Link to="/about" className={`drawer-nav-item ${location.pathname === '/about' ? 'active' : ''}`} onClick={handleNavClick}>
                <span className="drawer-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </span>
                <span className="drawer-item-text">About Us</span>
              </Link>
            </li>

            {/* Services Accordion Item */}
            <li className={`drawer-accordion ${servicesExpanded ? 'expanded' : ''}`}>
              <button
                className="drawer-nav-item drawer-accordion-trigger"
                onClick={() => setServicesExpanded(!servicesExpanded)}
                aria-expanded={servicesExpanded}
              >
                <span className="drawer-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </span>
                <span className="drawer-item-text">Services</span>
                <span className="drawer-chevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>

              <div className="drawer-sub-menu">
                <Link to="/car-wash" className="drawer-sub-item" onClick={handleNavClick}>
                  <span className="service-sub-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7c-.7 0-1.3.3-1.8.7C4.3 8.6 3 10 3 10s-2.7.6-4.5 1.1C-2.3 11.3-3 12.1-3 13v3c0 .6.4 1 1 1h2" />
                      <path d="M5 11l1.5-4.5h11L19 11" />
                      <circle cx="7.5" cy="16.5" r="1.5" />
                      <circle cx="16.5" cy="16.5" r="1.5" />
                      <path d="M12 2a1.2 1.2 0 0 1 1.2 1.2c0 .8-1.2 2-1.2 2s-1.2-1.2-1.2-2A1.2 1.2 0 0 1 12 2z" />
                    </svg>
                  </span>
                  <span>Car Wash</span>
                </Link>
                <Link to="/bike-wash" className="drawer-sub-item" onClick={handleNavClick}>
                  <span className="service-sub-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="5.5" cy="17.5" r="3.5" />
                      <circle cx="18.5" cy="17.5" r="3.5" />
                      <path d="M15 6h4l-3 5.5h-5.5L8 17.5" />
                      <path d="M5.5 17.5L10 11.5l3.5 1.5 3-5.5" />
                      <path d="M12 7l1-4h3" />
                      <path d="M9 2.5a1.2 1.2 0 0 1 1.2 1.2c0 .8-1.2 2-1.2 2s-1.2-1.2-1.2-2A1.2 1.2 0 0 1 9 2.5z" />
                    </svg>
                  </span>
                  <span>Bike Wash</span>
                </Link>
              </div>
            </li>

            <li>
              <Link to="/partner" className={`drawer-nav-item ${location.pathname === '/partner' ? 'active' : ''}`} onClick={handleNavClick}>
                <span className="drawer-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </span>
                <span className="drawer-item-text">PartnerApp</span>
              </Link>
            </li>

            <li>
              <Link to="/contact" className={`drawer-nav-item ${location.pathname === '/contact' ? 'active' : ''}`} onClick={handleNavClick}>
                <span className="drawer-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </span>
                <span className="drawer-item-text">Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Drawer Footer CTA */}
        <div className="mobile-drawer-footer">
          <a
            href="/#download"
            className="drawer-cta-btn"
            onClick={(e) => {
              handleNavClick();
              handleAppDownload(e);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download App
          </a>
        </div>
      </aside>
    </>
  );
}
