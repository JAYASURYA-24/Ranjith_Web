import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { bikeWashPlansData } from '../data/bikeWashPlans.jsx';
import WashBackgroundAnimation from '../components/WashBackgroundAnimation';
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
        <div style={{ marginBottom: '2rem' }}>
          <button
            onClick={() => navigate('/bike-wash')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--sky-600)',
              fontSize: '0.95rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
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
            Back to Bike Wash Packages
          </button>
        </div>

        {/* Plan Header Card */}
        <div className={`package-detail-header-card ${plan.cardClass}`} style={{
          background: plan.cardClass === 'popular'
            ? 'linear-gradient(135deg, rgba(240,249,255,0.9) 0%, #ffffff 100%)'
            : plan.cardClass === 'elite'
            ? 'linear-gradient(135deg, rgba(254,252,232,0.8) 0%, #ffffff 100%)'
            : 'var(--white)',
          border: plan.cardClass === 'popular'
            ? '2px solid var(--sky-400)'
            : plan.cardClass === 'elite'
            ? '1.5px solid rgba(234, 179, 8, 0.5)'
            : '1px solid rgba(14, 165, 233, 0.2)',
          borderRadius: 'var(--radius-2xl)',
          padding: '36px 32px',
          boxShadow: '0 10px 30px rgba(14, 165, 233, 0.1)',
          position: 'relative',
          marginBottom: '3rem'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div className="package-icon-wrapper" style={{ margin: 0, width: '54px', height: '54px' }}>
                {plan.iconSvg}
              </div>
              <div>
                <span className="section-badge" style={{ marginBottom: '4px', display: 'inline-block' }}>{plan.badge}</span>
                <h1 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--gray-900)', margin: 0 }}>
                  {plan.title}
                </h1>
              </div>
            </div>

            <div style={{
              background: 'var(--sky-50)',
              border: '1px solid var(--sky-200)',
              padding: '8px 16px',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--sky-800)',
              fontWeight: '700',
              fontSize: '0.9rem'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Estimated Time: {plan.estimatedTime}</span>
            </div>
          </div>

          <p style={{ fontSize: '1.1rem', color: 'var(--gray-700)', fontWeight: '500', marginBottom: '16px', lineHeight: '1.6' }}>
            {plan.tagline}
          </p>

          <div className="package-preferred" style={{ fontSize: '0.9rem', padding: '6px 14px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Preferred for: <strong>{plan.preferredFor}</strong></span>
          </div>
        </div>

        {/* Plan Overview & Full Features Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '3.5rem' }}>
          {/* Package Overview */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--gray-900)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sky-600)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              Package Overview
            </h3>
            <p style={{ fontSize: '0.96rem', color: 'var(--gray-600)', lineHeight: '1.7' }}>
              {plan.overview}
            </p>
          </div>

          {/* Complete Inclusions Checklist */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--gray-900)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sky-600)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              Everything Included in {plan.title}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {plan.includes.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem', color: 'var(--gray-800)', fontWeight: '500', lineHeight: '1.5' }}>
                  <span className="package-check-circle" style={{ width: '22px', height: '22px', minWidth: '22px', fontSize: '0.8rem' }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step by Step Detailing Process */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-badge">How It Is Done</span>
            <h2 className="section-title" style={{ fontSize: '2rem', marginTop: '0.5rem' }}>
              Step-by-Step <span className="text-gradient">Service Process</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {plan.detailedSteps.map((step, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '24px', position: 'relative' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, var(--sky-500), var(--sky-600))',
                  color: 'var(--white)',
                  fontWeight: '800',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.95rem',
                  marginBottom: '14px',
                  boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)'
                }}>
                  {idx + 1}
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--gray-900)', marginBottom: '8px' }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--gray-600)', lineHeight: '1.5', margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Add-ons for this plan */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-badge">Popular Extras</span>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--gray-900)', marginTop: '0.5rem' }}>
              Recommended Add-Ons for this Wash
            </h3>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
            {plan.recommendedAddOns.map((addon, idx) => (
              <div key={idx} style={{
                background: 'var(--white)',
                border: '1px solid var(--sky-200)',
                padding: '12px 20px',
                borderRadius: 'var(--radius-full)',
                fontWeight: '700',
                color: 'var(--sky-800)',
                fontSize: '0.9rem',
                boxShadow: '0 2px 8px rgba(14, 165, 233, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ color: 'var(--sky-500)', fontWeight: 'bold' }}>+</span>
                <span>{addon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div style={{
          maxWidth: '860px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
          background: 'linear-gradient(135deg, var(--sky-500), var(--sky-700))',
          padding: '44px 28px',
          borderRadius: 'var(--radius-2xl)',
          color: 'var(--white)',
          boxShadow: '0 14px 40px rgba(14, 165, 233, 0.35)'
        }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '12px' }}>
            Ready to Book {plan.title}?
          </h2>
          <p style={{ fontSize: '1.05rem', opacity: 0.92, maxWidth: '600px', margin: '0 auto 26px' }}>
            Download our Reshine App or click below to schedule your doorstep wash in under 60 seconds!
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            <a
              href="#download"
              className="btn-primary"
              onClick={(e) => handleAppDownload(e)}
              style={{
                background: 'var(--white)',
                color: 'var(--sky-700)',
                boxShadow: '0 4px 18px rgba(0,0,0,0.15)',
                display: 'inline-flex',
                fontSize: '1rem',
                padding: '14px 32px'
              }}
            >
              Book {plan.title} Now
            </a>
            <Link
              to="/bike-wash"
              className="btn-secondary"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                color: 'var(--white)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                display: 'inline-flex',
                fontSize: '1rem',
                padding: '14px 28px'
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
