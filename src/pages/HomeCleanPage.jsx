import { useEffect } from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import homeBefore from '../assets/images/services/before_home.webp';
import homeAfter from '../assets/images/services/after_home.webp';

export default function HomeCleanPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-page">
      <div className="container">
        <div className="service-page-header animate-on-scroll">
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <span className="section-badge" style={{ color: '#f59e0b', borderColor: 'rgba(245, 158, 11, 0.3)', background: 'rgba(245, 158, 11, 0.1)' }}>
              Coming Soon
            </span>
          </div>
          <h1 className="section-title">Professional Home Deep Cleaning</h1>
          <p className="section-subtitle">
            A clean home is a happy home. We are bringing our expertise in detailing from your driveway to your living room. From deep cleaning sofas to sanitizing kitchens, prepare for spotless living spaces.
          </p>
        </div>

        <div className="service-demo animate-on-scroll">
          <h2 className="text-center section-title" style={{ fontSize: '2rem', marginBottom: '3rem' }}>See the Transformation</h2>
          <BeforeAfterSlider
            beforeImage={homeBefore}
            afterImage={homeAfter}
            beforeLabel="Before"
            afterLabel="After"
          />
        </div>
      </div>
    </div>
  );
}
