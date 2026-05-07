import React, { useEffect } from 'react';
import Contact from '../components/Contact';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px' }}>
      <Contact />
    </div>
  );
}
