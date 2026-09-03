import dirtyCarWash from '../assets/images/about/dirty-car-wash.webp';
import founder_1 from '../assets/images/founders/founder_1.webp';
import founder_2 from '../assets/images/founders/founder_3.webp';
import founder_3 from '../assets/images/founders/founder_2.webp';
import ranjith from '../assets/images/founders/Ranjith.webp';
import teamPhoto from '../assets/images/founders/Employee.webp';

export default function About() {
  return (
    <section className="about" id="about" aria-label="About Us">
      <div className="container">

        {/* Header centered */}
        <div className="about-header text-center animate-on-scroll" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-badge" style={{ margin: '0 auto 12px auto' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            About ReShine
          </span>
          <h2 className="section-title text-center" style={{ margin: '0 auto' }}>
            A Cleaner Vehicle.<br /><span className="text-gradient">A Better Experience.</span>
          </h2>
        </div>

        {/* Left image right content */}
        <div className="about-grid" style={{ marginBottom: '60px' }}>
          <div className="about-image-wrapper animate-on-scroll">
            <div className="about-image">
              <img src={dirtyCarWash} alt="A professional doorstep vehicle washing experience by ReShine" />
            </div>
            <div className="about-accent"></div>
          </div>

          <div className="about-content animate-on-scroll" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className="about-text" style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--gray-900)' }}>
              Founded in 2026, ReShine was built on a simple vision: to make professional vehicle cleaning convenient, reliable, and accessible right at your doorstep.
            </p>
            <p className="about-text">
              Created by a team that genuinely cares about vehicles, ReShine addresses a problem every vehicle owner knows well — keeping a car or bike clean without losing valuable time at a wash centre or compromising on quality. We bring the entire vehicle-wash experience to you, delivering professional doorstep car and bike washing built around cleanliness, hygiene, safety, and convenience.
            </p>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="about-mv-grid animate-on-scroll">
          {/* Our Mission Box */}
          <div className="about-mission-box">
            <div className="about-mission-header">
              <div className="about-mission-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <h3 className="about-mission-title">Our Mission</h3>
            </div>
            <p className="about-mission-text">
              To redefine vehicle care by delivering professional, high-quality doorstep cleaning services that save time and ensure complete peace of mind.
            </p>
          </div>

          {/* Our Vision Box */}
          <div className="about-mission-box">
            <div className="about-mission-header">
              <div className="about-mission-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="about-mission-title">Our Vision</h3>
            </div>
            <p className="about-mission-text">
              To be India's most trusted doorstep vehicle care brand — setting a new standard for quality, convenience, and eco-friendly cleaning.
            </p>
          </div>
        </div>

        {/* Our Promise Section */}
        <div className="about-promise-box animate-on-scroll">
          <div className="about-promise-ambient-glow"></div>
          <div className="section-badge-light">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            The ReShine Standard
          </div>

          <h3 className="about-promise-title">Our Uncompromising Promise</h3>
          <p className="about-promise-subtitle">
            Impeccable Quality • Total Convenience • 100% Satisfaction
          </p>

          <p className="about-promise-text">
            We deliver professional-grade doorstep vehicle care using high-pressure foam technology, eco-friendly products, and trained specialists who treat every car and bike with absolute precision and respect.
          </p>

          {/* Elegant 3-Pillars Grid */}
          <div className="about-promise-pillars">
            <div className="promise-pillar-item">
              <div className="promise-pillar-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span>Doorstep Convenience</span>
            </div>

            <div className="promise-pillar-item">
              <div className="promise-pillar-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <span>Showroom Finish</span>
            </div>

            <div className="promise-pillar-item">
              <div className="promise-pillar-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <span>Trusted Care</span>
            </div>
          </div>

          <div className="about-promise-tagline">
            ReShine — We Come. We Clean. You Shine.
          </div>
        </div>

        {/* Meet Our Founders & Supporters Section */}
        <div className="founders-section animate-on-scroll">
          <div className="founders-header text-center" style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span className="section-badge" style={{ margin: '0 auto 12px auto' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Leadership & Strategic Supporters
            </span>
            <h2 className="section-title text-center" style={{ margin: '0 auto 12px auto' }}>
              Meet Our Founders & <span className="text-gradient">Supporters</span>
            </h2>
            <p style={{ color: 'var(--gray-600)', maxWidth: '640px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.6' }}>
              The visionaries and strategic growth partners driving innovation, convenience, and hygiene-focused vehicle care across India.
            </p>
          </div>

          <div className="founders-grid">
            {/* Founder 1 */}
            <div className="founder-card">
              <div className="founder-avatar-wrapper">
                <div className="founder-blue-accent"></div>
                <img src={founder_1} alt="Rishikesh S R - Founder" className="founder-photo" />
              </div>
              <h3 className="founder-name">Vaishali</h3>
              <p className="founder-role">Founder</p>
            </div>

            {/* Founder 2 */}
            <div className="founder-card">
              <div className="founder-avatar-wrapper">
                <div className="founder-blue-accent"></div>
                <img src={founder_2} alt="Pavan Guntupalli - Founder" className="founder-photo" />
              </div>
              <h3 className="founder-name">Suganya</h3>
              <p className="founder-role">Founder</p>
            </div>

            {/* Founder 3 */}
            <div className="founder-card">
              <div className="founder-avatar-wrapper">
                <div className="founder-blue-accent"></div>
                <img src={founder_3} alt="Aravind Sanka - Founder" className="founder-photo" />
              </div>
              <h3 className="founder-name">Vasuki</h3>
              <p className="founder-role">Founder</p>
            </div>
          </div>

          {/* Business Supporter / Strategic Partner Card Below Founders */}
          <div className="supporter-card animate-on-scroll">
            <div className="supporter-content">
              <span className="supporter-badge">Business Growth Supporter</span>
              <h3 className="supporter-name">ShineUp Solution</h3>
              <p className="supporter-bio">
                Strategic partner empowering and backing ReShine's business growth, market expansion, and operational excellence across India.
              </p>
            </div>

            <div className="supporter-blob-container">
              <div className="supporter-blob-accent"></div>
              <div className="supporter-dot-matrix"></div>
              <div className="supporter-blob-image">
                <img src={ranjith} alt="ShineUp Solution - Business Growth Supporter" />
              </div>
            </div>
          </div>

          {/* Team Members Photo Section */}
          <div className="team-photo-section animate-on-scroll">
            <div className="team-photo-header text-center" style={{ textAlign: 'center', marginBottom: '28px' }}>
              <span className="section-badge" style={{ margin: '0 auto 10px auto' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Our Passionate Team
              </span>
              <h3 className="section-title text-center" style={{ fontSize: '1.6rem', margin: '0 auto 8px auto' }}>
                The People Behind <span className="text-gradient">ReShine</span>
              </h3>
              <p style={{ color: 'var(--gray-600)', maxWidth: '580px', margin: '0 auto', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Dedicated professionals working together to bring doorstep convenience, quality, and hygiene-focused car care to your home.
              </p>
            </div>

            <div className="team-photo-card">
              <img src={teamPhoto} alt="ReShine Team Members" className="team-photo-img" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

