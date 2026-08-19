import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { bikeWashPlansData } from '../data/bikeWashPlans.jsx';
import WashBackgroundAnimation from '../components/WashBackgroundAnimation';
import ServiceProcessMap from '../components/ServiceProcessMap';
import bikeWashImg from '../assets/images/services/bike-wash.webp';
import { handleAppDownload } from '../utils/appLinks';

export default function BikeWashPlanDetailPage() {
  const { planId } = useParams();
  const navigate = useNavigate();

  const plan = bikeWashPlansData[planId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [planId]);

  if (!plan) {
    return (
      <div className="service-page">
        <WashBackgroundAnimation />
        <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h2>Package Not Found</h2>
          <p style={{ margin: '20px 0' }}>The bike wash package you are looking for does not exist.</p>
          <Link to="/bike-wash" className="btn-primary" style={{ display: 'inline-flex' }}>
            ← Back to Bike Wash Packages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="service-page">
      <WashBackgroundAnimation />
      <div className="container">
        {/* Back Link */}
        <div style={{ marginBottom: '1rem' }}>
          <button
            onClick={() => navigate('/bike-wash')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--sky-600)',
              fontSize: '0.92rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 8px',
              borderRadius: 'var(--radius-md)',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'var(--sky-50)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'none'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back
          </button>
        </div>

        {/* Plan Header Card */}
        <div className={`package-detail-header-card ${plan.cardClass}`} style={{
          background: plan.cardClass === 'popular'
            ? 'linear-gradient(135deg, rgba(224, 242, 254, 0.6) 0%, #ffffff 60%)'
            : plan.cardClass === 'elite'
            ? 'linear-gradient(135deg, rgba(254, 249, 195, 0.6) 0%, #ffffff 60%)'
            : 'linear-gradient(135deg, rgba(240, 249, 255, 0.7) 0%, #ffffff 60%)',
          border: plan.cardClass === 'popular'
            ? '2px solid var(--sky-400)'
            : plan.cardClass === 'elite'
            ? '1.5px solid rgba(234, 179, 8, 0.5)'
            : '1px solid rgba(14, 165, 233, 0.2)',
          borderRadius: 'var(--radius-2xl)',
          overflow: 'hidden',
          boxShadow: '0 12px 35px rgba(14, 165, 233, 0.12)',
          position: 'relative'
        }}>
          {/* Left Side: Full Size Image with Smoke & Blend Effect */}
          <div className="package-detail-image-box">
            <img
              src={plan.image || bikeWashImg}
              alt={plan.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block'
              }}
            />

            {/* Smoke & Mist Blend Overlays on Image Right Edge */}
            <div className="smoke-blend-overlay" />
            <div className="smoke-mist-effect" />
          </div>

          {/* Right Side: Plan Name & Info */}
          <div className="package-detail-info-box">
            <div className="detail-meta-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="package-icon-wrapper" style={{ margin: 0, width: '42px', height: '42px', minWidth: '42px' }}>
                  {plan.iconSvg}
                </div>
                <span className="section-badge" style={{ display: 'inline-block', margin: 0 }}>{plan.badge}</span>
              </div>

              <div style={{
                background: 'var(--sky-50)',
                border: '1px solid var(--sky-200)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--sky-800)',
                fontWeight: '700',
                fontSize: '0.85rem'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Estimated Time: {plan.estimatedTime}</span>
              </div>
            </div>

            <h1 className="package-detail-title">
              {plan.title}
            </h1>

            <p style={{ fontSize: '1.02rem', color: 'var(--gray-700)', fontWeight: '500', marginBottom: '14px', lineHeight: '1.5' }}>
              {plan.tagline}
            </p>

            <div className="package-preferred" style={{ fontSize: '0.88rem', padding: '6px 14px', display: 'inline-flex', width: 'fit-content' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Preferred for: <strong>{plan.preferredFor}</strong></span>
            </div>
          </div>
        </div>

        {/* Package Overview */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="glass-card" style={{ padding: '30px 24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--gray-900)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sky-600)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              Package Overview
            </h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--gray-600)', lineHeight: '1.7', margin: 0 }}>
              {plan.overview}
            </p>
          </div>
        </div>

        {/* Step by Step Detailing Process Map */}
        <ServiceProcessMap steps={plan.detailedSteps} />



        {/* Bottom CTA Banner */}
        <div className="detail-cta-card">
          <h2 className="detail-cta-title">
            Ready to Book {plan.title}?
          </h2>
          <p style={{ fontSize: '1.02rem', opacity: 0.92, maxWidth: '600px', margin: '0 auto 24px', lineHeight: '1.6' }}>
            Book your doorstep wash in seconds through our app or click below to get started!
          </p>
          <div className="detail-cta-actions">
            <a
              href="#download"
              className="btn-primary detail-cta-btn"
              onClick={(e) => handleAppDownload(e)}
              style={{
                background: 'var(--white)',
                color: 'var(--sky-700)',
                boxShadow: '0 4px 18px rgba(0,0,0,0.15)',
                display: 'inline-flex',
                fontSize: '0.98rem',
                padding: '13px 28px'
              }}
            >
              Book Now
            </a>
            <Link
              to="/bike-wash"
              className="btn-secondary detail-cta-btn"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                color: 'var(--white)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                display: 'inline-flex',
                fontSize: '0.98rem',
                padding: '13px 24px'
              }}
            >
              Compare Other Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
