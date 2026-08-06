import { Link } from 'react-router-dom';
import partnerImg from '../assets/images/partner-with-us/partner-banner.webp';

export default function PartnerBanner() {
  return (
    <section className="partner-banner" aria-label="Partner With Us">
      <div className="container">
        <div className="partner-banner-inner">
          <div className="partner-banner-image animate-on-scroll">
            <img src={partnerImg} alt="ReShine partner professionals providing doorstep service" loading="lazy" />
          </div>
          <div className="partner-banner-content animate-on-scroll">
            <h2 className="partner-banner-title">Earn with <span className="text-gradient">ReShine</span></h2>
            <div className="partner-banner-divider"></div>
            <p className="partner-banner-desc">
              Become a ReShine Partner. Work when you want, set your own schedule, and earn on your own terms with India's fastest-growing doorstep vehicle care platform.
            </p>
            <Link to="/partner" className="partner-banner-cta">
              Start Earning
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
