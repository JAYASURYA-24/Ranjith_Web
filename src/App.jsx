import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CarWashPage from './pages/CarWashPage';
import CarWashPlanDetailPage from './pages/CarWashPlanDetailPage';
import BikeWashPage from './pages/BikeWashPage';
import BikeWashPlanDetailPage from './pages/BikeWashPlanDetailPage';
import PUCPage from './pages/PUCPage';
import HomeCleanPage from './pages/HomeCleanPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import PartnerPage from './pages/PartnerPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  // Theme logic removed - dark mode is now default
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const observeElements = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll:not(.visible)');
      animatedElements.forEach((el) => observer.observe(el));
    };

    observeElements();

    // Re-observe on route changes dynamically due to React Router
    const intervalId = setInterval(observeElements, 500);

    return () => {
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/car-wash" element={<CarWashPage />} />
          <Route path="/car-wash/:planId" element={<CarWashPlanDetailPage />} />
          <Route path="/bike-wash" element={<BikeWashPage />} />
          <Route path="/bike-wash/:planId" element={<BikeWashPlanDetailPage />} />
          <Route path="/puc-service" element={<PUCPage />} />
          <Route path="/home-cleaning" element={<HomeCleanPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
