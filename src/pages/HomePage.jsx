import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import AppPromo from '../components/AppPromo';
import PartnerWithUs from '../components/PartnerWithUs';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <AppPromo />
      <PartnerWithUs />
      <Testimonials />
      <Contact />
    </>
  );
}
