import { PLAYSTORE_LINK, APPSTORE_LINK } from '../utils/appLinks';
import mobileApp from '../assets/images/app-promo/MMU.webp';
import playstoreIcon from '../assets/images/app-promo/playstore.webp';
import basicManualWashImg from '../assets/images/services/basic_manual_wash.png';
import pressureFoamWashImg from '../assets/images/services/pressure_foam_wash.png';

export default function AppPromo() {
  return (
    <section className="app-promo" id="download" aria-label="Download Our App">
      <div className="container app-promo-grid">
        <div className="app-promo-content animate-on-scroll">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
            Mobile App
          </span>
          <h2 className="section-title">Book Services <span className="text-gradient">Instantly</span><br />with Our App</h2>
          <p className="section-subtitle">
            All bookings are conveniently handled through our mobile app. Download now to access
            doorstep car wash, bike wash, and more - all at your fingertips.
          </p>

          <div className="app-features">
            <div className="app-feature">
              <div className="app-feature-check">✓</div>
              <span>Book a doorstep service in under 60 seconds</span>
            </div>
            <div className="app-feature">
              <div className="app-feature-check">✓</div>
              <span>Real-time tracking of your service professional</span>
            </div>
            <div className="app-feature">
              <div className="app-feature-check">✓</div>
              <span>Secure payments with multiple options</span>
            </div>
            <div className="app-feature">
              <div className="app-feature-check">✓</div>
              <span>Rate and review after every service</span>
            </div>
          </div>

          <div className="app-download-buttons">
            <a href={PLAYSTORE_LINK} target="_blank" rel="noopener noreferrer" className="store-btn google-play" id="btn-google-play" aria-label="Download from Google Play Store">
              <span className="store-btn-icon">
                <img src={playstoreIcon} alt="Google Play" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
              </span>
              <div className="store-btn-text">
                <small>Get it on</small>
                <span>Google Play</span>
              </div>
            </a>
            <a href={APPSTORE_LINK} target="_blank" rel="noopener noreferrer" className="store-btn app-store" id="btn-app-store" aria-label="Download from Apple App Store">
              <span className="store-btn-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </span>
              <div className="store-btn-text">
                <small>Download on the</small>
                <span>App Store</span>
              </div>
            </a>
          </div>
        </div>

        <div className="app-promo-visual animate-on-scroll">
          <div className="app-mockup-wrapper">
            <img src={mobileApp} alt="ReShine mobile app interface showing service booking screen" loading="lazy" />
            <div className="app-promo-bg-circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export const carWashPlansData = {
  'basic-manual-wash': {
    id: 'basic-manual-wash',
    title: 'Basic Manual Wash (No Electricity Required)',
    badge: 'No Electricity Required',
    cardClass: '',
    image: basicManualWashImg,
    preferredFor: 'Regular maintenance • Low-dust vehicles • Budget-friendly cleaning',
    estimatedTime: '30-40 mins',
    tagline: '💡 Perfect for regular cleaning. Service is performed manually without a pressure pump.',
    overview: 'Our Basic Manual Wash is ideal for regular maintenance. Performed completely manually without needing an electrical outlet or pressure pump, our team uses specialized Shine-Up cleaning liquids and microfiber tools to restore your car to pristine condition at your doorstep.',
    customerRequirements: [
      '2 buckets of water required',
      'Our service provider will collect water from your location. Please provide access to the water source',
      'No electricity required'
    ],
    bestFor: [
      'Regular maintenance',
      'Low-dust vehicles',
      'Budget-friendly cleaning'
    ],
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    includes: [
      'Removal of all floor mats and manual water cleaning',
      'Interior dry cleaning using brushes (dust, mud, debris removal)',
      'Basic seat cleaning using Shine-Up cleaning solution',
      'Interior dusting using Shine-Up microfiber duster',
      'Full exterior hand wash using Shine-Up liquid',
      'Complete drying using premium microfiber cloth',
      'Tyre polishing with Shine-Up solution',
      'Wax polish using Shine-Up hand polisher',
      'Dashboard polish & interior fragrance spray',
      'Complimentary floor mat paper placement',
      'Final quality check & smooth handover'
    ],
    detailedSteps: [
      {
        title: 'Step 1: Floor Mat Removal & Washing',
        desc: 'Removal of all floor mats and manual water cleaning to clear trapped dirt.'
      },
      {
        title: 'Step 2: Interior Brush Dry Cleaning',
        desc: 'Interior dry cleaning using brushes for effective dust, mud, and debris removal.'
      },
      {
        title: 'Step 3: Basic Seat Solution Cleaning',
        desc: 'Basic seat cleaning using specialized Shine-Up cleaning solution.'
      },
      {
        title: 'Step 4: Microfiber Interior Dusting',
        desc: 'Interior dusting using gentle Shine-Up microfiber duster.'
      },
      {
        title: 'Step 5: Full Exterior Hand Wash',
        desc: 'Full exterior hand wash using premium Shine-Up liquid.'
      },
      {
        title: 'Step 6: Premium Microfiber Drying',
        desc: 'Complete exterior drying using absorbent premium microfiber cloth.'
      },
      {
        title: 'Step 7: Tyre Polishing',
        desc: 'Tyre polishing with dedicated Shine-Up solution.'
      },
      {
        title: 'Step 8: Hand Wax Polish',
        desc: 'Wax polish using Shine-Up hand polisher for a protective shine.'
      },
      {
        title: 'Step 9: Dashboard Polish & Fragrance Spray',
        desc: 'Dashboard polish and fresh interior fragrance spray.'
      },
      {
        title: 'Step 10: Floor Mat Paper Placement',
        desc: 'Complimentary floor mat paper placement to protect clean carpets.'
      },
      {
        title: 'Step 11: Final Quality Check & Handover',
        desc: 'Final quality inspection & smooth handover to owner.'
      }
    ],
    recommendedAddOns: [
      'Rain Repellent Glass Coating',
      'AC Vent Sanitization Spray'
    ]
  },

  'pressure-foam-wash': {
    id: 'pressure-foam-wash',
    title: 'Pressure Foam Wash',
    badge: 'Gloss Finish',
    cardClass: '',
    image: pressureFoamWashImg,
    preferredFor: 'High mud • Road tar • Glossy exterior shine',
    estimatedTime: '35-40 mins',
    tagline: '💡 High-pressure water jet & thick snow foam bath for deep mud and grime removal.',
    overview: 'Our Pressure Foam Wash is specifically engineered for cars exposed to tough road mud, sticky dust, and highway grime. Powered by professional high-pressure water pumps and thick snow foam, it encapsulates surface contaminants for a scratch-free, high-gloss clean at your doorstep.',
    customerRequirements: [
      'Electricity access point within 15 meters (Consumes only ~0.4 units ≈ ₹7–₹8)',
      '2 buckets of water required',
      'Our service provider will collect water from your location. Please provide access to the water source'
    ],
    complimentary: '1 Surprise complementary product will be provided',
    bestFor: [
      'High mud & road grime vehicles',
      'Highway-driven cars',
      'Customers wanting high-gloss snow foam wash'
    ],
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7c-.7 0-1.3.3-1.8.7C4.3 8.6 3 10 3 10s-2.7.6-4.5 1.1C-2.3 11.3-3 12.1-3 13v3c0 .6.4 1 1 1h2" />
        <path d="M5 11l1.5-4.5h11L19 11" />
        <circle cx="7.5" cy="16.5" r="1.5" />
        <circle cx="16.5" cy="16.5" r="1.5" />
      </svg>
    ),
    includes: [
      'Removal of floor mats and pressure water cleaning',
      'Exterior pre-wash jet rinse using high-pressure pump',
      'Thick Shine-Up snow foam bath application',
      'Detailing brush cleaning around grills, badges & door seals',
      'Gentle hand wash using soft microfiber wash gloves',
      'High-pressure clean water body & wheel arch rinse',
      'Complete drying using premium microfiber cloth',
      'Tyre polishing with Shine-Up gloss solution',
      'Exterior glass & mirror streak-free wiping',
      'Final quality check & smooth handover'
    ],
    detailedSteps: [
      {
        title: 'Step 1: Floor Mat Pressure Wash',
        desc: 'Removal of floor mats and high-pressure jet cleaning.'
      },
      {
        title: 'Step 2: Underbody & Body Jet Blast',
        desc: 'High-pressure water pre-rinse to clear heavy mud from wheel arches and body panels.'
      },
      {
        title: 'Step 3: Thick Snow Foam Bath',
        desc: 'Covering the entire car in dense Shine-Up foam that encapsulates and dissolves dirt.'
      },
      {
        title: 'Step 4: Badge & Grill Brushing',
        desc: 'Precision detailing brush cleaning around grills, emblems, badges, and door seals.'
      },
      {
        title: 'Step 5: Microfiber Glove Agitation',
        desc: 'Gentle contact hand wash using soft plush microfiber wash mitts.'
      },
      {
        title: 'Step 6: High-Pressure Clean Rinse',
        desc: 'Complete high-pressure jet rinse ensuring zero foam or grime residue remains.'
      },
      {
        title: 'Step 7: Streak-Free Microfiber Drying',
        desc: 'Thorough hand drying with absorbent microfiber towels.'
      },
      {
        title: 'Step 8: Tyre Shine & Window Polish',
        desc: 'Applying Shine-Up tyre gloss polish and cleaning exterior glass mirrors.'
      },
      {
        title: 'Step 9: Quality Check & Handover',
        desc: 'Final visual inspection & smooth handover to owner.'
      }
    ],
    recommendedAddOns: [
      'Wax Coating Polish',
      'Engine Bay Steam Cleaning'
    ]
  },

  'premium-wash': {
    id: 'premium-wash',
    title: 'Premium Pressure Pump Wash',
    badge: 'Most Popular',
    cardClass: 'popular',
    preferredFor: 'Weekly cleaning • Moderately dusty vehicles • Premium finish',
    estimatedTime: '45-50 mins',
    tagline: '💡 High-quality deep cleaning using a pressure washer and vacuum cleaner.',
    overview: 'Our Premium Pressure Pump Wash delivers high-quality deep cleaning for your vehicle using professional-grade pressure washer and high-power vacuum equipment right at your doorstep.',
    customerRequirements: [
      'Electricity access point within 15 meters (Consumes only ~0.4 units ≈ ₹7–₹8)',
      '2 buckets of water required',
      'Our service provider will collect water from your location. Please provide access to the water source'
    ],
    complimentary: '3 Surprise complementary products will be provided',
    bestFor: [
      'Weekly cleaning',
      'Moderately dusty vehicles',
      'Customers looking for a premium finish'
    ],
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    includes: [
      'Removal of all floor mats and pressure wash cleaning',
      'Interior vacuum cleaning (dust, dirt, debris removal)',
      'Seat cleaning using Shine-Up solution with vacuum finish',
      'Exterior pre-wash using pressure pump',
      'Applying of Shine-Up foam (paint protection layer)',
      'Manual hand wash using premium wash gloves',
      'Complete exterior pressure rinse',
      'Drying using microfiber cloth',
      'Tyre polishing with Shine-Up solution',
      'Wax polish using Shine-Up polisher',
      'Dashboard polish & interior fragrance spray'
    ],
    detailedSteps: [
      {
        title: 'Step 1: Floor Mat Pressure Wash',
        desc: 'Removal of all floor mats and high-pressure water cleaning.'
      },
      {
        title: 'Step 2: Interior Cabin Vacuuming',
        desc: 'Deep interior vacuum cleaning for complete dust, dirt, and debris removal.'
      },
      {
        title: 'Step 3: Seat Solution Cleaning & Vacuum',
        desc: 'Seat cleaning using Shine-Up specialized solution with vacuum finish.'
      },
      {
        title: 'Step 4: Pressure Pre-Wash Rinse',
        desc: 'Exterior pre-wash rinse using high-pressure pump jet.'
      },
      {
        title: 'Step 5: Shine-Up Protective Snow Foam',
        desc: 'Application of rich Shine-Up foam providing a paint protection layer.'
      },
      {
        title: 'Step 6: Hand Wash with Premium Wash Mitts',
        desc: 'Gentle manual hand wash using premium soft wash gloves.'
      },
      {
        title: 'Step 7: Full Pressure Jet Rinse',
        desc: 'Complete exterior pressure rinse to dislodge all dirt & foam.'
      },
      {
        title: 'Step 8: Microfiber Cloth Drying',
        desc: 'Thorough drying using ultra-absorbent microfiber towels.'
      },
      {
        title: 'Step 9: Tyre Polishing',
        desc: 'Tyre polishing using Shine-Up long-lasting gloss solution.'
      },
      {
        title: 'Step 10: Hand Wax Polish',
        desc: 'Wax polish application using Shine-Up specialized polisher.'
      },
      {
        title: 'Step 11: Dashboard Polish & Fragrance Spray',
        desc: 'Dashboard polish and fresh interior fragrance spray finish.'
      }
    ],
    recommendedAddOns: [
      'AC Vent Cleaning',
      'Rat Repellent Treatment'
    ]
  },

  'elite-deep-cleaning': {
    id: 'elite-deep-cleaning',
    title: 'Elite Pressure Pump Wash (Deep Cleaning Service)',
    badge: 'Ultimate Care',
    cardClass: 'elite',
    preferredFor: 'Monthly deep cleaning • Family or heavily used vehicles • Luxury service',
    estimatedTime: '75-90 mins',
    tagline: '💡 Ultimate interior and exterior detailing experience.',
    overview: 'Our Elite Pressure Pump Wash is the ultimate luxury car care and deep cleaning experience. Combines full pressure washing, deep interior vacuuming and precision brushing, vacuum extraction seat cleaning, high-temperature steam sanitization, and premium wax & plastic trim restoration.',
    customerRequirements: [
      'Electricity access point within 15 meters (Consumes only ~0.4 units ≈ ₹7–₹8)',
      '2 buckets of water required',
      'Our service provider will collect water from your location. Please provide access to the water source'
    ],
    complimentary: '5 Surprise complementary products will be provided',
    bestFor: [
      'Monthly deep cleaning',
      'Family or heavily used vehicles',
      'Customers looking for luxury-level service'
    ],
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    includes: [
      'Removal of all floor mats and pressure wash cleaning',
      'Full interior vacuum cleaning (deep dust removal)',
      'Detailed interior brushing (AC vents, Dashboard, Corners & hard-to-reach areas)',
      'Deep seat cleaning using Shine-Up solution with vacuum extraction',
      'Exterior pre-wash using pressure pump',
      'Applying of premium foam (paint protection layer)',
      'Manual wash using specialized wash gloves',
      'Complete pressure rinse & streak-free microfiber drying',
      '🧼 Steam cleaning (interior sanitization - kills germs, bacteria & insects)',
      '✨ Tyre polishing with Shine-Up solution',
      '✨ Wax polish & plastic parts restoration',
      '✨ Dashboard polish & premium fragrance spray'
    ],
    detailedSteps: [
      {
        title: 'Step 1: Floor Mat Pressure Cleaning',
        desc: 'Removal of all floor mats followed by thorough pressure wash cleaning.'
      },
      {
        title: 'Step 2: Deep Interior Vacuuming',
        desc: 'Full interior vacuum cleaning for deep dust, sand, and dirt removal.'
      },
      {
        title: 'Step 3: Precision Brushing & Detailing',
        desc: 'Detailed interior brushing of AC vents, dashboard, crevices, and hard-to-reach corners.'
      },
      {
        title: 'Step 4: Deep Seat Solution Extraction',
        desc: 'Deep seat cleaning using specialized Shine-Up solution with vacuum extraction finish.'
      },
      {
        title: 'Step 5: Pressure Pre-Wash & Premium Foam',
        desc: 'Exterior pre-wash using pressure pump and application of rich protective snow foam.'
      },
      {
        title: 'Step 6: Specialized Hand Wash & Rinse',
        desc: 'Manual wash using premium wash gloves followed by complete high-pressure rinse.'
      },
      {
        title: 'Step 7: Streak-Free Microfiber Drying',
        desc: 'Complete exterior drying using high-absorbency microfiber towels.'
      },
      {
        title: 'Step 8: Interior Steam Sanitization 🧼',
        desc: 'Deep steam cleaning for interior sanitization to eliminate germs, bacteria, and insects.'
      },
      {
        title: 'Step 9: Tyre & Plastic Restoration ✨',
        desc: 'Tyre polishing with Shine-Up solution & plastic trim gloss restoration.'
      },
      {
        title: 'Step 10: Wax Polish & Fragrance Finish ✨',
        desc: 'Body wax polish, dashboard polish & premium interior fragrance spray application.'
      }
    ],
    recommendedAddOns: [
      'Roof Cleaning',
      'Engine Bay Steam Cleaning',
      'Rat Repellent Treatment'
    ]
  }
};

