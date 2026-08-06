const staticBubbles = [
  { id: 0, size: 28, left: 12, duration: 14, delay: '0.5', opacity: '0.40', blur: '0px' },
  { id: 1, size: 36, left: 82, duration: 18, delay: '2.1', opacity: '0.35', blur: '1px' },
  { id: 2, size: 18, left: 45, duration: 12, delay: '4.3', opacity: '0.50', blur: '0px' },
  { id: 3, size: 24, left: 25, duration: 16, delay: '1.2', opacity: '0.30', blur: '0px' },
  { id: 4, size: 40, left: 68, duration: 20, delay: '5.8', opacity: '0.25', blur: '1px' },
  { id: 5, size: 16, left: 92, duration: 11, delay: '3.4', opacity: '0.45', blur: '0px' },
  { id: 6, size: 30, left: 7, duration: 15, delay: '7.1', opacity: '0.38', blur: '0px' },
  { id: 7, size: 22, left: 55, duration: 13, delay: '0.8', opacity: '0.42', blur: '1px' },
  { id: 8, size: 34, left: 35, duration: 17, delay: '6.2', opacity: '0.28', blur: '0px' },
  { id: 9, size: 14, left: 78, duration: 10, delay: '2.9', opacity: '0.52', blur: '0px' },
  { id: 10, size: 26, left: 18, duration: 14, delay: '5.0', opacity: '0.33', blur: '1px' },
  { id: 11, size: 38, left: 62, duration: 19, delay: '1.7', opacity: '0.22', blur: '0px' },
  { id: 12, size: 20, left: 88, duration: 12, delay: '6.8', opacity: '0.48', blur: '0px' },
  { id: 13, size: 32, left: 40, duration: 16, delay: '3.9', opacity: '0.36', blur: '1px' }
];

export default function WashBackgroundAnimation() {
  return (
    <div className="wash-bg-animation-container" aria-hidden="true">
      {/* Ambient Water Glow Blobs */}
      <div className="wash-glow-blob wash-blob-1"></div>
      <div className="wash-glow-blob wash-blob-2"></div>
      <div className="wash-glow-blob wash-blob-3"></div>

      {/* Floating Foam Bubbles */}
      <div className="wash-bubbles-wrapper">
        {staticBubbles.map((b) => (
          <div
            key={b.id}
            className="wash-foam-bubble"
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              left: `${b.left}%`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
              opacity: b.opacity,
              filter: `blur(${b.blur})`
            }}
          />
        ))}
      </div>
    </div>
  );
}
