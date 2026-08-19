import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { carWashPlansData } from '../data/carWashPlans.jsx';
import WashBackgroundAnimation from '../components/WashBackgroundAnimation';
import ServiceProcessMap from '../components/ServiceProcessMap';
import carWashImg from '../assets/images/services/car-wash.webp';
import { handleAppDownload } from '../utils/appLinks';

export default function CarWashPlanDetailPage() {
  const { planId } = useParams();
  const navigate = useNavigate();

  const plan = carWashPlansData[planId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [planId]);

  if (!plan) {
    return (
      <div className="service-page">
        <WashBackgroundAnimation />
        <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h2>Package Not Found</h2>
          <p style={{ margin: '20px 0' }}>The car wash package you are looking for does not exist.</p>
          <Link to="/car-wash" className="btn-primary" style={{ display: 'inline-flex' }}>
            ← Back to Car Wash Packages
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
            onClick={() => navigate('/car-wash')}
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
              src={plan.image || carWashImg}
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

        {/* Customer Requirements & Best For Banner if available */}
        {(plan.customerRequirements || plan.bestFor) && (
          <div className="detail-two-col-grid">
            {plan.customerRequirements && (
              <div className="glass-card" style={{
                padding: '24px 22px',
                borderLeft: '4px solid #f59e0b',
                background: 'linear-gradient(135deg, rgba(254, 243, 199, 0.4) 0%, rgba(255, 255, 255, 0.9) 100%)'
              }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--gray-900)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>📌</span> Customer Requirements
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {plan.customerRequirements.map((req, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--gray-800)', fontWeight: '600', lineHeight: '1.5' }}>
                      <span style={{ color: '#d97706', fontSize: '1rem' }}>•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {plan.bestFor && (
              <div className="glass-card" style={{
                padding: '24px 22px',
                borderLeft: '4px solid var(--sky-500)',
                background: 'linear-gradient(135deg, rgba(240, 249, 255, 0.6) 0%, rgba(255, 255, 255, 0.9) 100%)'
              }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--gray-900)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>👍</span> Best For
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                  {plan.bestFor.map((item, idx) => (
                    <span key={idx} style={{
                      background: 'var(--sky-100)',
                      color: 'var(--sky-800)',
                      border: '1px solid var(--sky-200)',
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.86rem',
                      fontWeight: '700',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <span style={{ color: 'var(--sky-600)' }}>✓</span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Complimentary Gift Banner */}
        {plan.complimentary && (
          <div className="glass-card" style={{
            padding: '22px 28px',
            borderLeft: '4px solid #10b981',
            background: 'linear-gradient(135deg, rgba(209, 250, 229, 0.5) 0%, rgba(255, 255, 255, 0.95) 100%)',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            borderRadius: 'var(--radius-xl)'
          }}>
            <div style={{ fontSize: '1.8rem', background: '#ecfdf5', borderRadius: '12px', padding: '8px 14px', border: '1px solid #a7f3d0', lineHeight: 1 }}>
              🎁
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#065f46', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                Complimentary Bonus
              </h3>
              <p style={{ fontSize: '0.98rem', fontWeight: '600', color: 'var(--gray-800)', margin: 0 }}>
                {plan.complimentary}
              </p>
            </div>
          </div>
        )}

        {/* Package Overview */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="glass-card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--gray-900)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sky-600)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              Package Overview
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--gray-600)', lineHeight: '1.7', margin: 0 }}>
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
              to="/car-wash"
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
