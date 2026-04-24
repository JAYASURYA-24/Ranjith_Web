import React, { useState, useRef } from 'react';

export default function BeforeAfterSlider({ beforeImage, afterImage, beforeLabel = "Before", afterLabel = "After" }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (event) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX;

    if (event.touches) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = event.clientX;
    }

    const x = clientX - containerRect.left;
    const width = containerRect.width;
    let position = (x / width) * 100;

    position = Math.max(0, Math.min(100, position));
    setSliderPosition(position);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e) => {
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchEnd = () => {
    document.removeEventListener('touchmove', handleMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  return (
    <div
      ref={containerRef}
      className="before-after-container"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* Background (After image) */}
      <img src={afterImage} alt="After" className="after-image" />
      <span className="slider-label after-label">{afterLabel}</span>

      {/* Foreground (Before image) */}
      <div
        className="before-wrapper"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img src={beforeImage} alt="Before" className="before-image" />
        <span className="slider-label before-label">{beforeLabel}</span>
      </div>

      {/* The slider handle line and button */}
      <div
        className="slider-handle"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="slider-handle-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 21 12 15 6"></polyline>
            <polyline points="9 6 3 12 9 18"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}
