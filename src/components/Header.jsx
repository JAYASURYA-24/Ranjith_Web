import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { handleAppDownload } from '../utils/appLinks';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const handleTopClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="header-container header-inner">
        <Link to="/" className="logo" aria-label="ReShine Home" onClick={handleTopClick}>

          <span>Re<span className="logo-highlight">Shine</span></span>
        </Link>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} id="nav-main" role="navigation" aria-label="Main navigation">
          <Link to="/" onClick={handleTopClick}>Home</Link>
          <Link to="/about" onClick={handleNavClick}>About Us</Link>

          <div className="nav-dropdown-wrapper">
            <a className="nav-dropdown-trigger" onClick={(e) => {
              e.preventDefault();
              if (window.innerWidth <= 1024) {
                const parent = e.currentTarget.parentElement;
                parent.classList.toggle('mobile-dropdown-open');
              }
            }}>
              Services <span className="dropdown-arrow"><i className="fa-solid fa-chevron-down"></i></span>
            </a>
            <div className="nav-dropdown">
              <Link to="/car-wash" onClick={handleNavClick}>

                <span className="dropdown-label">Car Wash</span>
              </Link>
              <Link to="/bike-wash" onClick={handleNavClick}>

                <span className="dropdown-label">Bike Wash</span>
              </Link>
              <Link to="/puc-service" onClick={handleNavClick}>

                <span className="dropdown-label">PUC Service</span>
                <span className="dropdown-tag">Soon</span>
              </Link>
              <Link to="/home-cleaning" onClick={handleNavClick}>
                <span className="dropdown-label">Home Cleaning</span>
                <span className="dropdown-tag">Soon</span>
              </Link>
            </div>
          </div>

          <Link to="/partner" onClick={handleNavClick}>PartnerApp</Link>


          <Link to="/contact" onClick={handleNavClick}>Contact</Link>

          {/* Theme toggle removed */}

          <a href="/#download" className="nav-cta" onClick={(e) => { handleNavClick(); handleAppDownload(e); }}>Download App</a>
        </nav>

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
  );
}
