import React, { useEffect } from 'react';
import PartnerWithUs from '../components/PartnerWithUs';

export default function PartnerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px' }}>
      <PartnerWithUs />
    </div>
  );
}
