import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import PartnerBanner from '../components/PartnerBanner';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Find the element by its ID (removing the '#' symbol)
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Use a small timeout to ensure the DOM is fully rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // If no hash, we are just on '/', so scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <PartnerBanner />
    </>
  );
}
