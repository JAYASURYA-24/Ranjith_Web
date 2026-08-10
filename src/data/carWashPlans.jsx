import basicManualWashImg from '../assets/images/services/basic_manual_wash.webp';
import pressureFoamWashImg from '../assets/images/services/pressure_foam_wash.webp';
import premiumWashImg from '../assets/images/services/premium_pressur_pump_wash.webp';
import eliteDeepCleaningImg from '../assets/images/services/elite-pressure-pump-wash.webp';

export const carWashPlansData = {
  'basic-manual-wash': {
    id: 'basic-manual-wash',
    title: 'Basic Manual Wash (No Electricity Required)',
    badge: 'No Electricity Required',
    cardClass: '',
    image: basicManualWashImg,
    preferredFor: 'Daily maintenance • Light dust • Pocket-friendly cleaning',
    estimatedTime: '30-40 mins',
    tagline: 'Simple, effective hand wash at your doorstep without needing power.',
    overview: 'Our Basic Manual Wash is great for regular upkeep. Done completely by hand without needing power or a pressure machine, our team uses gentle cleaning liquids and soft microfiber cloths to make your car look fresh and clean.',
    customerRequirements: [
      '2 buckets of clean water',
      'Access to water tap or source',
      'No electricity required'
    ],
    bestFor: [
      'Regular weekly cleaning',
      'Light dust & daily use cars',
      'Budget-friendly wash'
    ],
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    includes: [
      'Floor mats removal & water wash',
      'Interior brush dusting & dirt removal',
      'Seat wipe down with cleaning liquid',
      'Full exterior gentle hand wash',
      'Streak-free microfiber towel dry',
      'Tyre cleaning & shine polish',
      'Hand wax polish for smooth shine',
      'Dashboard wipe & fresh car scent',
      'Fresh paper floor mats placed',
      'Final quality check & handover'
    ],
    detailedSteps: [
      {
        title: 'Step 1: Exterior Hand Wash',
        desc: 'Gentle hand wash with premium car shampoo to lift dirt.'
      },
      {
        title: 'Step 2: Microfiber Towel Dry',
        desc: 'Complete drying with soft microfiber towels to prevent water marks.'
      },
      {
        title: 'Step 3: Tyre Shine Polish',
        desc: 'Long-lasting tyre shine polish applied for a clean look.'
      },
      {
        title: 'Step 4: Glass Polish',
        desc: 'Clear, streak-free polish on all mirrors and windows.'
      }
    ]
  },

  'pressure-foam-wash': {
    id: 'pressure-foam-wash',
    title: 'Pressure Foam Wash',
    badge: 'Gloss Finish',
    cardClass: '',
    image: pressureFoamWashImg,
    preferredFor: 'Tough mud • Road dirt • High-gloss exterior shine',
    estimatedTime: '35-40 mins',
    tagline: 'High-pressure jet wash with thick snow foam for stubborn road dirt.',
    overview: 'Our Pressure Foam Wash is built for cars with road grime, sticky dirt, and mud. We use high-pressure water pumps and thick snow foam to lift dirt safely without scratching your car paint.',
    customerRequirements: [
      'Standard power socket within 15 meters (~₹7 electricity used)',
      '2 buckets of clean water',
      'Access to water tap or source'
    ],
    complimentary: '1 Free surprise car care gift included',
    bestFor: [
      'Muddy & highway-driven cars',
      'Heavy road dust & grime',
      'High-gloss snow foam wash'
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
      'Floor mats removal & pressure wash',
      'Exterior high-pressure water rinse',
      'Thick snow foam bath application',
      'Detail brush cleaning on grills & badges',
      'Soft microfiber mitt hand wash',
      'Full pressure water rinse & wheel arch wash',
      'Streak-free microfiber towel dry',
      'Tyre cleaning & gloss polish',
      'Glass & mirror streak-free wipe',
      'Final quality check & handover'
    ],
    detailedSteps: [
      {
        title: 'Step 1: Pressure Pre-Rinse',
        desc: 'High-pressure water rinse to knock off loose mud and dirt.'
      },
      {
        title: 'Step 2: Thick Snow Foam Bath',
        desc: 'Rich snow foam blanket to break down stubborn grime safely.'
      },
      {
        title: 'Step 3: Soft Mitt Hand Wash',
        desc: 'Gentle hand wash with soft microfiber mitts.'
      },
      {
        title: 'Step 4: Full Pressure Rinse',
        desc: 'Complete rinse to wash away all foam and dirt particles.'
      },
      {
        title: 'Step 5: Microfiber Towel Dry',
        desc: 'Thorough drying with ultra-absorbent microfiber towels.'
      },
      {
        title: 'Step 6: Tyre Shine Polish',
        desc: 'Deep black tyre gloss polish for a showroom look.'
      },
      {
        title: 'Step 7: Glass & Mirror Polish',
        desc: 'Streak-free window and mirror cleaning for clear vision.'
      }
    ]
  },

  'premium-wash': {
    id: 'premium-wash',
    title: 'Premium Pressure Pump Wash',
    badge: 'Most Popular',
    cardClass: 'popular',
    image: premiumWashImg,
    preferredFor: 'Weekly maintenance • Dusty vehicles • Complete interior & exterior care',
    estimatedTime: '45-50 mins',
    tagline: 'Deep cleaning using a high-pressure washer and powerful interior vacuum.',
    overview: 'Our Premium Pressure Pump Wash delivers complete inside-and-out deep cleaning. Combines pressure washing, snow foam, and full interior vacuuming right at your doorstep.',
    customerRequirements: [
      'Standard power socket within 15 meters (~₹7 electricity used)',
      '2 buckets of clean water',
      'Access to water tap or source'
    ],
    complimentary: '3 Free surprise car care gifts included',
    bestFor: [
      'Weekly & bi-weekly cleaning',
      'Dusty interiors and exteriors',
      'Complete inside-and-out shine'
    ],
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    includes: [
      'Floor mats removal & pressure wash',
      'Interior vacuuming (seats, floors & boot)',
      'Seat spot cleaning & vacuum finish',
      'Exterior high-pressure pre-rinse',
      'Protective snow foam bath',
      'Gentle hand wash with microfiber gloves',
      'Full exterior pressure rinse',
      'Microfiber towel drying',
      'Tyre cleaning & shine polish',
      'Hand wax polish for paint protection',
      'Dashboard polish & fresh fragrance spray'
    ],
    detailedSteps: [
      {
        title: 'Step 1: Floor Mat Pressure Wash',
        desc: 'Removing mats and washing them with high-pressure water.'
      },
      {
        title: 'Step 2: Cabin Vacuum Cleaning',
        desc: 'Deep vacuuming of seats, floor carpet, and boot space.'
      },
      {
        title: 'Step 3: Seat Wipe & Clean',
        desc: 'Seat surface cleaning with specialized solution and vacuum dry.'
      },
      {
        title: 'Step 4: Pressure Pre-Rinse',
        desc: 'High-pressure body rinse to remove loose mud.'
      },
      {
        title: 'Step 5: Snow Foam Application',
        desc: 'Applying thick protective snow foam.'
      },
      {
        title: 'Step 6: Soft Hand Scrub',
        desc: 'Gentle hand wash using soft microfiber wash gloves.'
      },
      {
        title: 'Step 7: Full Pressure Rinse',
        desc: 'Thorough clean water rinse over the entire car.'
      },
      {
        title: 'Step 8: Microfiber Drying',
        desc: 'Drying with plush microfiber towels.'
      },
      {
        title: 'Step 9: Tyre Shine Polish',
        desc: 'Applying long-lasting tyre gloss polish.'
      },
      {
        title: 'Step 10: Glass Polish & Shine',
        desc: 'Cleaning glass and mirrors for crystal-clear clarity.'
      }
    ]
  },

  'elite-deep-cleaning': {
    id: 'elite-deep-cleaning',
    title: 'Elite Pressure Pump Wash (Deep Cleaning Service)',
    badge: 'Ultimate Care',
    cardClass: 'elite',
    image: eliteDeepCleaningImg,
    preferredFor: 'Monthly deep cleaning • Family vehicles • Full interior restoration',
    estimatedTime: '75-90 mins',
    tagline: 'The ultimate deep cleaning with steam sanitization and wax restoration.',
    overview: 'Our Elite Deep Cleaning is the complete luxury spa package for your car. Includes high-pressure foam wash, deep vacuuming, steam sanitization to kill germs, and wax polish to restore shine.',
    customerRequirements: [
      'Standard power socket within 15 meters (~₹7 electricity used)',
      '2 buckets of clean water',
      'Access to water tap or source'
    ],
    complimentary: '5 Free surprise car care gifts included',
    bestFor: [
      'Monthly deep cleaning',
      'Family cars & heavy use vehicles',
      'Germ sanitization & full restoration'
    ],
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    includes: [
      'Floor mats removal & pressure wash',
      'Deep interior vacuuming (carpets, seats, boot)',
      'Detail brush dusting on AC vents & dashboard',
      'Deep seat cleaning with solution & extraction',
      'High-pressure pre-wash & snow foam bath',
      'Microfiber hand wash & pressure rinse',
      'Streak-free microfiber drying',
      'Steam sanitization (kills 99.9% germs & bacteria)',
      'Tyre cleaning & rich gloss polish',
      'Wax polish & plastic trim restoration',
      'Dashboard polish & premium fragrance spray'
    ],
    detailedSteps: [
      {
        title: 'Step 1: Floor Mat Pressure Wash',
        desc: 'Removing mats and deep washing with pressure jet.'
      },
      {
        title: 'Step 2: Deep Interior Vacuum',
        desc: 'Thorough vacuuming of all dust, sand, and food crumbs.'
      },
      {
        title: 'Step 3: AC Vents & Crevice Brushing',
        desc: 'Cleaning AC vents, console buttons, and tight corners.'
      },
      {
        title: 'Step 4: Deep Seat Extraction',
        desc: 'Seat fabric/leather cleaning with cleaning liquid and vacuum dry.'
      },
      {
        title: 'Step 5: Pressure Rinse & Snow Foam',
        desc: 'Exterior pressure blast and thick protective snow foam coat.'
      },
      {
        title: 'Step 6: Soft Hand Wash & Rinse',
        desc: 'Gentle hand wash followed by a complete clean water rinse.'
      },
      {
        title: 'Step 7: Microfiber Towel Dry',
        desc: 'Complete drying with ultra-absorbent microfiber towels.'
      },
      {
        title: 'Step 8: Steam Sanitization',
        desc: 'Hot steam sanitization to kill germs, bacteria, and odors.'
      },
      {
        title: 'Step 9: Tyre & Trim Polish',
        desc: 'Polishing tyres and restoring dark color on plastic trims.'
      },
      {
        title: 'Step 10: Glass Polish & Fresh Scent',
        desc: 'Streak-free window polish and premium interior scent spray.'
      }
    ]
  }
};
