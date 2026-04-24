import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CarWashPage from './pages/CarWashPage';
import BikeWashPage from './pages/BikeWashPage';
import PUCPage from './pages/PUCPage';
import HomeCleanPage from './pages/HomeCleanPage';

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('shineup-theme');
    return saved || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('shineup-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

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
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/car-wash" element={<CarWashPage />} />
          <Route path="/bike-wash" element={<BikeWashPage />} />
          <Route path="/puc-service" element={<PUCPage />} />
          <Route path="/home-cleaning" element={<HomeCleanPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
