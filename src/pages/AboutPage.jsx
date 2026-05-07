import React, { useEffect } from 'react';
import About from '../components/About';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px' }}>
      <About />
    </div>
  );
}
