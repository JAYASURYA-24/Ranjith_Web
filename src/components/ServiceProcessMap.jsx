import React from 'react';

function generateWavyPath(count) {
  if (count <= 0) return '';
  const totalH = 1000;
  const startY = 0;
  const endY = totalH;

  // Calculate Y position for each node
  const nodeYs = [];
  for (let i = 0; i < count; i++) {
    nodeYs.push(((i + 0.5) / count) * totalH);
  }

  let d = `M 50 ${startY} `;

  // Curve smoothly from start to first node
  const firstY = nodeYs[0];
  d += `C 50 ${firstY * 0.35}, 35 ${firstY * 0.7}, 50 ${firstY} `;

  // Curve between consecutive nodes with alternating smooth sinusoidal wave
  for (let i = 0; i < count - 1; i++) {
    const curY = nodeYs[i];
    const nextY = nodeYs[i + 1];
    const dy = nextY - curY;
    const swingX = i % 2 === 0 ? 84 : 16;
    d += `C ${swingX} ${curY + dy * 0.35}, ${swingX} ${curY + dy * 0.65}, 50 ${nextY} `;
  }

  // Curve from last node to destination terminal
  const lastY = nodeYs[count - 1];
  const remaining = endY - lastY;
  const lastSwing = (count - 1) % 2 === 0 ? 65 : 35;
  d += `C ${lastSwing} ${lastY + remaining * 0.4}, 50 ${lastY + remaining * 0.75}, 50 ${endY}`;

  return d;
}

export default function ServiceProcessMap({ steps = [] }) {
  if (!steps || steps.length === 0) return null;

  const wavyPathD = generateWavyPath(steps.length);

  return (
    <div className="service-process-map-section">
      <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
        <span className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
            <line x1="8" y1="2" x2="8" y2="18"></line>
            <line x1="16" y1="6" x2="16" y2="22"></line>
          </svg>
          Service Route Map
        </span>
        <h2 className="section-title" style={{ fontSize: '2.2rem', marginTop: '0.6rem' }}>
          Step-by-Step <span className="text-gradient">Service Process</span>
        </h2>
        <p className="section-subtitle" style={{ maxWidth: '620px', margin: '0.6rem auto 0' }}>
          Follow our step-by-step cleaning process from arrival to final showroom shine.
        </p>
      </div>

      <div className="roadmap-container">
        {/* Start Waypoint Marker */}
        <div className="roadmap-terminal start-terminal">
          <div className="terminal-badge">
            <span className="terminal-pulse"></span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>START • Service Check-In</span>
          </div>
        </div>

        {/* Wavy Sinusoidal Route Line SVG Track */}
        <div className="roadmap-wavy-track-container" aria-hidden="true">
          <svg
            className="roadmap-wavy-svg"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="wavyTrackGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
              <filter id="wavyGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Glowing Blur Aura */}
            <path
              d={wavyPathD}
              stroke="url(#wavyTrackGradient)"
              strokeWidth="9"
              strokeLinecap="round"
              opacity="0.32"
              filter="url(#wavyGlow)"
            />

            {/* Main Wavy Line */}
            <path
              d={wavyPathD}
              stroke="url(#wavyTrackGradient)"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Animated Flow Pulse Dashes */}
            <path
              d={wavyPathD}
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeDasharray="8 14"
              opacity="0.75"
              className="roadmap-wavy-dash"
            />
          </svg>
        </div>

        {/* Road Map Steps */}
        <div className="roadmap-steps-list">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            const stepNum = idx + 1;
            const formattedNum = stepNum < 10 ? `0${stepNum}` : `${stepNum}`;
            
            // Clean up title if it already starts with "Step X:"
            const displayTitle = step.title.replace(/^Step\s*\d+\s*:\s*/i, '');

            return (
              <div
                key={idx}
                className={`roadmap-step-item ${isEven ? 'step-left' : 'step-right'}`}
              >
                {/* Center Node / GPS Checkpoint */}
                <div className="roadmap-node">
                  <div className="roadmap-node-ring"></div>
                  <div className="roadmap-node-inner">
                    <span className="node-number">{formattedNum}</span>
                  </div>
                </div>

                {/* Connecting Branch Line */}
                <div className="roadmap-branch-line" aria-hidden="true"></div>

                {/* Step Information Card */}
                <div className="roadmap-card">
                  <div className="roadmap-card-header">
                    <span className="roadmap-checkpoint-tag">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      Waypoint {formattedNum}
                    </span>
                  </div>

                  <h4 className="roadmap-card-title">
                    {displayTitle}
                  </h4>

                  <p className="roadmap-card-desc">
                    {step.desc}
                  </p>

                  <div className="roadmap-card-accent"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Destination Reached Finish Marker */}
        <div className="roadmap-terminal finish-terminal">
          <div className="terminal-badge finish-badge">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>FINISH • Quality Check & Handover</span>
          </div>
        </div>
      </div>
    </div>
  );
}
