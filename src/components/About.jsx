import dirtyCarWash from '../assets/images/about/dirty-car-wash.webp';
import missionIcon from '../assets/images/about/mission.webp';
import visionIcon from '../assets/images/about/vission.webp';
import ecoIcon from '../assets/images/about/eco-frndly.webp';
import qualityIcon from '../assets/images/about/quality.webp';
import rishikeshImg from '../assets/images/about/rishikesh.png';
import pavanImg from '../assets/images/about/pavan.png';
import aravindImg from '../assets/images/about/aravind.png';
import teamPhoto from '../assets/images/about/team_members.png';

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
          <h2 className="section-title text-center" style={{ margin: '0 auto' }}>Redefining <span className="text-gradient">Vehicle Care,</span><br />One Doorstep at a Time</h2>
        </div>

        {/* Left image right content */}
        <div className="about-grid" style={{ marginBottom: '60px' }}>
          <div className="about-image-wrapper animate-on-scroll">
            <div className="about-image">
              <img src={dirtyCarWash} alt="A dirty car being professionally washed at a doorstep" />
            </div>
            <div className="about-accent"></div>
          </div>

          <div className="about-content animate-on-scroll" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className="about-text">
              ReShine was born from a simple idea - what if professional car care came to you?
              Founded by a team of automotive enthusiasts, we set out to eliminate the hassle of
              traditional car washes and bring premium, eco-friendly cleaning right to your driveway.
            </p>
            <p className="about-text">
              Today, we serve thousands of satisfied customers across major cities. We strictly use water-efficient techniques,
              biodegradable products, and highly trained professionals who treat every single vehicle like their own. Experience the ultimate convenience of getting a showroom shine without ever leaving your home.
            </p>
          </div>
        </div>

        {/* 2x2 grid for cards */}
        <div className="about-values-new animate-on-scroll" style={{ marginBottom: '80px' }}>
          <div className="about-value">
            <div className="about-value-icon" style={{ backgroundImage: `url(${missionIcon})` }}></div>
            <div>
              <h4>Our Mission</h4>
              <p>Make professional vehicle care accessible to every doorstep across India by combining innovative technology with exceptional customer service. We strive to create a seamless, reliable experience that saves our customers valuable time while delivering superior cleaning results.</p>
            </div>
          </div>
          <div className="about-value">
            <div className="about-value-icon" style={{ backgroundImage: `url(${visionIcon})` }}></div>
            <div>
              <h4>Our Vision</h4>
              <p>Become India's most trusted and widely used doorstep vehicle services platform, setting a new industry standard for quality, convenience, and sustainability. We envision a future where traditional, water-wasting car washes are entirely replaced by eco-friendly mobile solutions.</p>
            </div>
          </div>
          <div className="about-value">
            <div className="about-value-icon" style={{ backgroundImage: `url(${ecoIcon})` }}></div>
            <div>
              <h4>Eco-Friendly</h4>
              <p>We actively utilize advanced waterless and low-water techniques that save up to 80% more water per wash compared to traditional methods. Furthermore, all our cleaning solutions and waxes are 100% biodegradable, ensuring zero harmful runoff into the local environment.</p>
            </div>
          </div>
          <div className="about-value">
            <div className="about-value-icon" style={{ backgroundImage: `url(${qualityIcon})` }}></div>
            <div>
              <h4>Quality First</h4>
              <p>We never compromise on the quality of our service. From utilizing premium microfiber towels to top-tier pH-balanced shampoos, our background-verified professionals are rigorously trained and evaluated to deliver a spotless, swirl-free finish every single time.</p>
            </div>
          </div>
        </div>

        {/* Meet Our Founders Section */}
        <div className="founders-section animate-on-scroll">
          <div className="founders-header text-center" style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span className="section-badge" style={{ margin: '0 auto 12px auto' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Leadership Team
            </span>
            <h2 className="section-title text-center" style={{ margin: '0 auto 12px auto' }}>
              Meet Our <span className="text-gradient">Founders</span>
            </h2>
            <p style={{ color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.6' }}>
              The visionaries driving innovation, convenience, and eco-friendly vehicle care across India.
            </p>
          </div>

          <div className="founders-grid">
            {/* Founder 1 */}
            <div className="founder-card">
              <div className="founder-avatar-wrapper">
                <div className="founder-blue-accent"></div>
                <img src={rishikeshImg} alt="Rishikesh S R - Founder" className="founder-photo" />
              </div>
              <h3 className="founder-name">Rishikesh S R</h3>
              <p className="founder-role">Founder</p>
              <p className="founder-bio">
                Leading strategic vision and technology at ReShine to revolutionize doorstep automotive care across major urban hubs.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="founder-card">
              <div className="founder-avatar-wrapper">
                <div className="founder-blue-accent"></div>
                <img src={pavanImg} alt="Pavan Guntupalli - Founder" className="founder-photo" />
              </div>
              <h3 className="founder-name">Pavan Guntupalli</h3>
              <p className="founder-role">Founder</p>
              <p className="founder-bio">
                Spearheading operations, partner networks, and customer excellence to deliver flawless doorstep washing experiences.
              </p>
            </div>

            {/* Founder 3 */}
            <div className="founder-card">
              <div className="founder-avatar-wrapper">
                <div className="founder-blue-accent"></div>
                <img src={aravindImg} alt="Aravind Sanka - Founder" className="founder-photo" />
              </div>
              <h3 className="founder-name">Aravind Sanka</h3>
              <p className="founder-role">Founder</p>
              <p className="founder-bio">
                Driving growth, eco-friendly product innovation, and expanding mobile detailing services to new cities.
              </p>
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
                Dedicated professionals working together to bring doorstep convenience, quality, and eco-friendly car care to your home.
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
