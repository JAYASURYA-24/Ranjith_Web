import { useState, useEffect } from 'react';
import thumb1 from '../assets/images/testimonials/thumb1.png';
import thumb2 from '../assets/images/testimonials/thumb2.png';
import thumb3 from '../assets/images/testimonials/thumb3.png';
import thumb4 from '../assets/images/testimonials/thumb4.png';

const videoTestimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Fortuner Owner • Bengaluru',
    service: 'Premium Doorstep SUV Wash',
    rating: 5,
    duration: '0:42',
    text: '“The foam wash & interior vacuuming were top tier. They arrived on time at my apartment and transformed my SUV to showroom shine!”',
    thumbnail: thumb1,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-car-washing-machine-in-action-41527-large.mp4',
    initials: 'RS',
  },
  {
    id: 2,
    name: 'Priya Nair',
    role: 'Hatchback Owner • Chennai',
    service: 'Interior Deep Clean & Foam Wash',
    rating: 5,
    duration: '0:35',
    text: '“I scheduled it during office hours and came down to a spotless, fresh-smelling car. Super convenient and professional team!”',
    thumbnail: thumb2,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-cleaning-a-car-with-a-microfiber-cloth-41528-large.mp4',
    initials: 'PN',
  },
  {
    id: 3,
    name: 'Arjun Patel',
    role: 'Superbike Owner • Hyderabad',
    service: 'Doorstep Bike Detailing',
    rating: 5,
    duration: '0:48',
    text: '“Cleaned every corner of my bike including chain degreasing, alloy polish, and wax. Absolutely worth every rupee!”',
    thumbnail: thumb3,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-cleaning-a-car-wheel-41529-large.mp4',
    initials: 'AP',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    role: 'Sedan Owner • Bengaluru',
    service: 'Exterior Hydrophobic Care',
    rating: 5,
    duration: '0:50',
    text: '“No queues, no waiting at car wash centers. ReShine brought high-pressure foam equipment straight to my driveway. 10/10 service!”',
    thumbnail: thumb4,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-car-washing-machine-in-action-41527-large.mp4',
    initials: 'SR',
  },
  {
    id: 5,
    name: 'Vikram Malhotra',
    role: 'Luxury Sedan Owner • Mumbai',
    service: 'Full Car Wash & Polish',
    rating: 5,
    duration: '0:40',
    text: '“Exceptional doorstep service! Premium eco-friendly products used. The paint gloss and dashboard polish lasted for weeks.”',
    thumbnail: thumb1,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-cleaning-a-car-with-a-microfiber-cloth-41528-large.mp4',
    initials: 'VM',
  },
];

// Tripled array for continuous seamless infinite looping without rewinding
const extendedTestimonials = [
  ...videoTestimonials.map(item => ({ ...item, uniqueKey: `set1-${item.id}` })),
  ...videoTestimonials.map(item => ({ ...item, uniqueKey: `set2-${item.id}` })),
  ...videoTestimonials.map(item => ({ ...item, uniqueKey: `set3-${item.id}` })),
];

export default function Testimonials() {
  const totalOriginal = videoTestimonials.length;
  const [currentIndex, setCurrentIndex] = useState(totalOriginal); // Start in the middle set
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Dynamic responsive breakpoint handler
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsToShow(1);
      } else if (width < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock background body scroll when video modal is open
  useEffect(() => {
    if (selectedVideo !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedVideo]);

  // Continuous auto-slide interval (moves forward endlessly every 2.5s)
  useEffect(() => {
    if (isPaused || selectedVideo !== null) return;

    const timer = setInterval(() => {
      setWithTransition(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2500);

    return () => clearInterval(timer);
  }, [isPaused, selectedVideo]);

  // Seamless infinite loop reset handler (resets position without animation jump)
  useEffect(() => {
    if (currentIndex >= totalOriginal * 2) {
      const timer = setTimeout(() => {
        setWithTransition(false);
        setCurrentIndex(totalOriginal);
      }, 600);
      return () => clearTimeout(timer);
    }
    if (currentIndex < totalOriginal) {
      const timer = setTimeout(() => {
        setWithTransition(false);
        setCurrentIndex(currentIndex + totalOriginal);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, totalOriginal]);

  // Re-enable smooth transition after silent position reset
  useEffect(() => {
    if (!withTransition) {
      const timer = setTimeout(() => {
        setWithTransition(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [withTransition]);

  // Keyboard accessibility for modal (ESC to close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedVideo) {
        setSelectedVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedVideo]);

  const handlePrev = () => {
    setWithTransition(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setWithTransition(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Touch handlers for responsive swiping on phones/tablets
  const minSwipeDistance = 40;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const activeDotIndex = currentIndex % totalOriginal;

  return (
    <section className="testimonials" id="testimonials" aria-label="Customer Video Testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
            Video Reviews
          </span>
          <h2 className="section-title">What <span className="text-gradient">Customers Say</span></h2>
          <p className="section-subtitle">
            See real video reviews from vehicle owners who love our doorstep foam wash, bike care, and detailing services.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="testimonial-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Navigation Arrow Left */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            type="button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Navigation Arrow Right */}
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={handleNext}
            aria-label="Next testimonial"
            type="button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Cards Track */}
          <div className="testimonial-carousel-track-container">
            <div
              className="testimonial-carousel-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                transition: withTransition ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
              }}
            >
              {extendedTestimonials.map((item) => (
                <div
                  className="testimonial-slide"
                  key={item.uniqueKey}
                  style={{ flex: `0 0 ${100 / cardsToShow}%`, maxWidth: `${100 / cardsToShow}%` }}
                >
                  <div className="video-testimonial-card">
                    {/* Video Thumbnail Area */}
                    <div
                      className="video-thumb-wrapper"
                      onClick={() => setSelectedVideo(item)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Play video testimonial from ${item.name}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setSelectedVideo(item);
                        }
                      }}
                    >
                      <img src={item.thumbnail} alt={`${item.name} testimonial`} loading="lazy" className="video-thumb-img" />
                      
                      <div className="video-thumb-overlay">
                        {/* Service Tag */}
                        <span className="video-service-tag">{item.service}</span>

                        {/* Play Button */}
                        <button className="video-play-btn" aria-label="Play video" type="button">
                          <span className="play-pulse-ring"></span>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </button>

                        {/* Video Duration Badge */}
                        <span className="video-duration-badge">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          {item.duration}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="video-card-body">
                      {/* Rating Stars */}
                      <div className="testimonial-stars" aria-label={`Rating: ${item.rating} out of 5 stars`}>
                        {[...Array(item.rating)].map((_, i) => (
                          <span className="star-icon" key={i}>★</span>
                        ))}
                      </div>

                      {/* Short Testimonial Text */}
                      <p className="video-testimonial-text">{item.text}</p>

                      {/* Customer Info Footer */}
                      <div className="video-card-footer">
                        <div className="author-avatar">{item.initials}</div>
                        <div className="author-details">
                          <h4 className="author-name">
                            {item.name}
                            <svg className="verified-badge" width="14" height="14" viewBox="0 0 24 24" fill="#0ea5e9">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                          </h4>
                          <p className="author-role">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="carousel-dots-container">
            {videoTestimonials.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === activeDotIndex ? 'active' : ''}`}
                onClick={() => {
                  setWithTransition(true);
                  setCurrentIndex(totalOriginal + idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal Lightbox */}
      {selectedVideo && (
        <div className="video-modal-backdrop" onClick={() => setSelectedVideo(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-modal-close"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video modal"
              type="button"
            >
              ✕
            </button>

            <div className="video-player-container">
              <video
                src={selectedVideo.videoUrl}
                poster={selectedVideo.thumbnail}
                controls
                autoPlay
                playsInline
                className="modal-video-element"
              >
                Your browser does not support HTML5 video.
              </video>
            </div>

            <div className="video-modal-info">
              <div className="modal-header-row">
                <div>
                  <h3 className="modal-author-name">{selectedVideo.name}</h3>
                  <p className="modal-author-role">{selectedVideo.role} • {selectedVideo.service}</p>
                </div>
                <div className="testimonial-stars">
                  {[...Array(selectedVideo.rating)].map((_, i) => (
                    <span className="star-icon" key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="modal-testimonial-text">{selectedVideo.text}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
