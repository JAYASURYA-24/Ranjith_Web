import { useState, useEffect, useRef } from 'react';
import thumb1 from '../assets/images/testimonials/thumb1.png';
import thumb2 from '../assets/images/testimonials/thumb2.png';
import thumb3 from '../assets/images/testimonials/thumb3.png';
import thumb4 from '../assets/images/testimonials/thumb4.png';
import sampleVideo from '../assets/Videos/TestimonialsVideo/sample_video.mp4 (240p).mp4';

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
    videoUrl: sampleVideo,
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
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cleaning-a-car-door-with-a-sponge-41525-large.mp4',
    initials: 'VM',
  },
];

// Tripled array for continuous seamless infinite looping without rewinding
const extendedTestimonials = [
  ...videoTestimonials.map(item => ({ ...item, uniqueKey: `set1-${item.id}` })),
  ...videoTestimonials.map(item => ({ ...item, uniqueKey: `set2-${item.id}` })),
  ...videoTestimonials.map(item => ({ ...item, uniqueKey: `set3-${item.id}` })),
];

function VideoTestimonialCardItem({ item, activePlayingId, setActivePlayingId, isMutedGlobal, setIsMutedGlobal, onSlideNext }) {
  const isPlayingThis = activePlayingId === item.uniqueKey;
  const videoRef = useRef(null);
  const previewRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isPlayingThis && videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => { });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlayingThis, isPlaying]);

  const handleStartPlay = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setActivePlayingId(item.uniqueKey);
    setIsPlaying(true);
    setProgress(0);
  };

  const handleTogglePlayPause = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!videoRef.current) return;
    if (isPlaying) {
      // Pause current video, reset active player, and automatically slide to the next review video
      videoRef.current.pause();
      setActivePlayingId(null);
      setIsPlaying(false);
      setProgress(0);
      if (onSlideNext) {
        onSlideNext();
      }
    } else {
      videoRef.current.play().catch(() => { });
      setIsPlaying(true);
    }
  };

  const handleToggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMutedGlobal(nextMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(p);
    }
  };

  return (
    <div className="video-testimonial-card">
      {/* Video Thumbnail / Inline Player Area */}
      <div
        className={`video-thumb-wrapper ${isPlayingThis ? 'is-playing' : ''}`}
        onClick={!isPlayingThis ? handleStartPlay : undefined}
        role={!isPlayingThis ? 'button' : undefined}
        tabIndex={!isPlayingThis ? 0 : undefined}
        aria-label={!isPlayingThis ? `Play review video from ${item.name}` : undefined}
        onKeyDown={(e) => {
          if (!isPlayingThis && (e.key === 'Enter' || e.key === ' ')) {
            handleStartPlay(e);
          }
        }}
      >
        {isPlayingThis ? (
          <div
            className="inline-video-container"
            onClick={handleTogglePlayPause}
            role="button"
            tabIndex={0}
            aria-label="Pause and move to next video"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleTogglePlayPause(e);
              }
            }}
          >
            <video
              ref={videoRef}
              src={item.videoUrl}
              poster={item.thumbnail}
              autoPlay
              playsInline
              muted={isMutedGlobal}
              className="inline-card-video"
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => {
                setActivePlayingId(null);
                setIsPlaying(false);
                setProgress(0);
                if (onSlideNext) {
                  onSlideNext();
                }
              }}
            />

            {/* Top Live Playing Badge */}
            <div className="video-live-badge">
              <span className={`live-dot ${isPlaying ? 'is-active' : 'is-paused'}`}></span>
              <span>{isPlaying ? 'Playing' : 'Paused'}</span>
            </div>

            {/* Center Play Indicator when paused */}
            {!isPlaying && (
              <div className="inline-video-center-overlay" aria-hidden="true">
                <div className="center-pause-icon-btn">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            )}

            {/* Bottom Controls Bar: Mute */}
            <div className="inline-video-controls-bar" onClick={(e) => e.stopPropagation()}>
              <button
                className={`inline-video-btn ${isMutedGlobal ? 'btn-active' : ''}`}
                onClick={handleToggleMute}
                aria-label={isMutedGlobal ? 'Unmute sound' : 'Mute sound'}
                title={isMutedGlobal ? 'Unmute' : 'Mute'}
                type="button"
              >
                {isMutedGlobal ? (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="1" y1="1" x2="23" y2="23" />
                    <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a2 2 0 0 0-3.54-1.28L7.5 6H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2.5l2.25 1.8" />
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                )}
              </button>
            </div>

            {/* Real-time Progress Bar */}
            <div className="inline-video-progress-bar">
              <div className="inline-video-progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        ) : (
          <div className="inline-video-preview-wrapper" style={{ width: '100%', height: '100%', position: 'relative' }}>
            <video
              ref={previewRef}
              src={item.videoUrl}
              poster={item.thumbnail}
              autoPlay
              muted
              loop
              playsInline
              className="video-thumb-img"
            />

            <div className="video-thumb-overlay">
              {/* Service Tag */}
              <span className="video-service-tag">{item.service}</span>

              {/* Play Button */}
              <button className="video-play-btn" aria-label="Play review video" type="button">
                <span className="play-pulse-ring"></span>
                <span className="play-pulse-ring-outer"></span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
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
        )}
      </div>

      {/* Card Content */}
      <div className="video-card-body">
        {/* Rating Stars & Quote Icon */}
        <div className="video-card-header-row">
          <div className="testimonial-stars" aria-label={`Rating: ${item.rating} out of 5 stars`}>
            {[...Array(item.rating)].map((_, i) => (
              <span className="star-icon" key={i}>★</span>
            ))}
          </div>
          <span className="quote-mark-icon" aria-hidden="true">“</span>
        </div>

        {/* Testimonial Text */}
        <p className="video-testimonial-text">{item.text}</p>

        {/* Customer Info Footer */}
        <div className="video-card-footer">
          <div className="author-avatar">{item.initials}</div>
          <div className="author-details">
            <h4 className="author-name">
              {item.name}
              <svg className="verified-badge" width="15" height="15" viewBox="0 0 24 24" fill="#0ea5e9" title="Verified Customer">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </h4>
            <p className="author-role">{item.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const totalOriginal = videoTestimonials.length;
  const [currentIndex, setCurrentIndex] = useState(totalOriginal); // Start in the middle set
  const [withTransition, setWithTransition] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [activePlayingId, setActivePlayingId] = useState(null);
  const [isMutedGlobal, setIsMutedGlobal] = useState(false);
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

  // Continuous auto-slide interval (advances automatically every 3.2s unless a video is actively playing)
  useEffect(() => {
    if (activePlayingId !== null) return;

    const timer = setInterval(() => {
      setWithTransition(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3200);

    return () => clearInterval(timer);
  }, [activePlayingId, currentIndex]);

  // Seamless infinite loop reset handler (resets position without visual animation jump)
  useEffect(() => {
    if (currentIndex >= totalOriginal * 2) {
      const timer = setTimeout(() => {
        setWithTransition(false);
        setCurrentIndex(totalOriginal);
      }, 650);
      return () => clearTimeout(timer);
    }
    if (currentIndex < totalOriginal) {
      const timer = setTimeout(() => {
        setWithTransition(false);
        setCurrentIndex(currentIndex + totalOriginal);
      }, 650);
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
          <h2 className="section-title">What Our <span className="text-gradient">Customers Say</span></h2>
          <p className="section-subtitle">
            See real video reviews from vehicle owners who love our doorstep foam wash, bike care, and detailing services.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="testimonial-carousel-wrapper"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
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
                  <VideoTestimonialCardItem
                    item={item}
                    activePlayingId={activePlayingId}
                    setActivePlayingId={setActivePlayingId}
                    isMutedGlobal={isMutedGlobal}
                    setIsMutedGlobal={setIsMutedGlobal}
                    onSlideNext={handleNext}
                  />
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
    </section>
  );
}

