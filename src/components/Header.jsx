import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ theme, toggleTheme }) {
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

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="header-container header-inner">
        <Link to="/" className="logo" aria-label="ShineUp Home" onClick={handleNavClick}>
          <div className="logo-icon">S</div>
          <span>Shine<span className="logo-highlight">Up</span></span>
        </Link>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} id="nav-main" role="navigation" aria-label="Main navigation">
          <Link to="/" onClick={handleNavClick}>Home</Link>
          <a href="/#about" onClick={handleNavClick}>About Us</a>
          
          <div className="nav-dropdown-wrapper">
            <a href="/#services" className="nav-dropdown-trigger" onClick={(e) => {
              if (window.innerWidth <= 768) {
                e.preventDefault();
                const parent = e.currentTarget.parentElement;
                parent.classList.toggle('mobile-dropdown-open');
              } else {
                handleNavClick();
              }
            }}>
              Services <span className="dropdown-arrow">▼</span>
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

          <a href="/#how-it-works" onClick={handleNavClick}>Process</a>
          <a href="/#testimonials" onClick={handleNavClick}>Reviews</a>
          <a href="/#contact" onClick={handleNavClick}>Contact</a>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <div className="toggle-track">
              <span className="toggle-icon sun">☀️</span>
              <span className="toggle-icon moon">🌙</span>
              <div className={`toggle-thumb ${theme === 'dark' ? 'dark' : ''}`}></div>
            </div>
          </button>

          <a href="/#download" className="nav-cta" onClick={handleNavClick}>Download App</a>
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
