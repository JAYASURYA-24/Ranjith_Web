export default function Contact() {

  return (
    <section className="contact" id="contact" aria-label="Contact Us">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Get in Touch
          </span>
          <h2 className="section-title">Contact <span className="text-gradient">Us</span></h2>
          <p className="section-subtitle">
            Have a question or need assistance? We'd love to hear from you. Reach out through any of the channels below.
          </p>
        </div>

        <div className="contact-info-cards animate-on-scroll">
          <a href="tel:+919445469407" className="contact-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="contact-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <div className="contact-card-content">
              <h4>Phone</h4>
              <p>+91 9445469407</p>
            </div>
          </a>

          <a href="mailto:support@reshineservices.in" className="contact-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="contact-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="contact-card-content">
              <h4>Email</h4>
              <p>support@reshineservices.in</p>
            </div>
          </a>

          <a href="https://www.google.com/maps/place/RESHINE+SERVICES+PRIVATE+LIMITED/@12.952892,80.1997149,21z/data=!4m6!3m5!1s0x61f3210b8f45c96f:0x834dc5f3d786232a!8m2!3d12.95289!4d80.199615!16s%2Fg%2F11z8n3rmv2?hl=en&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="contact-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="contact-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="contact-card-content">
              <h4>Location</h4>
              <p>Velachery, Chennai</p>
            </div>
          </a>

          <div className="contact-card">
            <div className="contact-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="contact-card-content">
              <h4>Support Hours</h4>
              <p>Mon – Sat, 8AM – 8PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
