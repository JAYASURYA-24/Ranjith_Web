import { useEffect } from 'react';
import PartnerWithUs from '../components/PartnerWithUs';

export default function PartnerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '100px' }}>
      <PartnerWithUs />
    </div>
  );
}
