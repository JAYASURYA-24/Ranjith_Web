import manualBasicWashImg from '../assets/images/services/Manual_basic_wash.png';
import pressureFoamWashImg from '../assets/images/services/Pressure_foam_wash.png';
import helmetCleaningImg from '../assets/images/services/Helmet_cleaning.png';

export const bikeWashPlansData = {
  'manual-basic-wash': {
    id: 'manual-basic-wash',
    title: 'Manual Basic Wash',
    badge: 'Daily Care',
    cardClass: '',
    image: manualBasicWashImg,
    preferredFor: 'Daily commute • Light dust • Quick shine',
    estimatedTime: '15-20 mins',
    tagline: 'Gentle hand wash with premium shampoo for daily care.',
    overview: 'Our Manual Basic Wash is perfect for daily riders who want a clean, shiny bike. We use soft microfiber cloths and gentle shampoo to remove dust without scratching the paint.',
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M15 6h4l-3 5.5h-5.5L8 17.5" />
        <path d="M5.5 17.5L10 11.5l3.5 1.5 3-5.5" />
      </svg>
    ),
    includes: [
      'Complete bike wash with premium shampoo',
      'Tyre sidewall cleaning & gloss polish',
      'Mirrors & headlight wipe down',
      'Streak-free microfiber towel dry'
    ],
    detailedSteps: [
      {
        title: 'Step 1: Water Rinse',
        desc: 'Pre-rinsing body and wheels to loosen surface dust.'
      },
      {
        title: 'Step 2: Shampoo Hand Wash',
        desc: 'Washing tank, panels, and seat with soft microfiber mitts.'
      },
      {
        title: 'Step 3: Tyre Shine Polish',
        desc: 'Applying tyre polish for a fresh, dark shine.'
      },
      {
        title: 'Step 4: Microfiber Towel Dry',
        desc: 'Drying with plush towels to prevent water spots.'
      }
    ],
    recommendedAddOns: [
      'Wax Coating Polish',
      'Plastic Polish'
    ]
  },

  'pressure-foam-wash': {
    id: 'pressure-foam-wash',
    title: 'Pressure Foam Wash',
    badge: 'Gloss Finish',
    cardClass: 'popular',
    image: pressureFoamWashImg,
    preferredFor: 'Muddy roads • Engine dirt • Ultra-glossy finish',
    estimatedTime: '25-30 mins',
    tagline: 'High-pressure snow foam wash with silicone glaze shine.',
    overview: 'Built for bikes with heavy road mud, chain grime, and engine dirt. High-pressure water blasts tight corners, followed by thick snow foam and silicone spray for a showroom shine.',
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7c-.7 0-1.3.3-1.8.7C4.3 8.6 3 10 3 10s-2.7.6-4.5 1.1C-2.3 11.3-3 12.1-3 13v3c0 .6.4 1 1 1h2" />
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
      </svg>
    ),
    includes: [
      'High-pressure water wash (body, wheels & engine)',
      'Thick snow foam bath application',
      'Tyre cleaning & alloy rim shine',
      'Silicone glaze spray polish for paint & body'
    ],
    detailedSteps: [
      {
        title: 'Step 1: Engine & Body Pressure Rinse',
        desc: 'Blasting mud and grease away from engine and wheels.'
      },
      {
        title: 'Step 2: Snow Foam Bath',
        desc: 'Soaking the whole bike in thick foam to lift road grime.'
      },
      {
        title: 'Step 3: Detailed Scrub & Rinse',
        desc: 'Cleaning rims, chain guard, and panels followed by clean rinse.'
      },
      {
        title: 'Step 4: Silicone Glaze Polish',
        desc: 'Buffing tank and fairings for water resistance and deep shine.'
      }
    ],
    recommendedAddOns: [
      'Wax Coating Polish',
      'Plastic Polish',
      'Helmet Cleaning'
    ]
  },

  'helmet-cleaning': {
    id: 'helmet-cleaning',
    title: 'Helmet Cleaning',
    badge: 'Hygiene Special',
    cardClass: 'elite',
    image: helmetCleaningImg,
    preferredFor: 'Sweat odor removal • Visor clarity • 99.9% germ sanitization',
    estimatedTime: '15-20 mins',
    tagline: 'Antibacterial foam cleaning with high-temperature steam sanitization.',
    overview: 'Helmets trap sweat, bacteria, and dust. Our service cleans the outer shell and inner cushions with antibacterial foam, followed by hot steam to kill germs and remove odors.',
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    includes: [
      'Antibacterial foam wash (outer shell & inner padding)',
      'Hot steam sanitization (kills 99.9% bacteria & odors)',
      'Visor cleaning & anti-fog polish',
      'Fresh fragrance spray treatment'
    ],
    detailedSteps: [
      {
        title: 'Step 1: Outer Shell Cleaning',
        desc: 'Removing bugs, road grease, and dust from shell and vents.'
      },
      {
        title: 'Step 2: Inner Liner Foam Wash',
        desc: 'Deep cleaning cheek pads and inner foam lining.'
      },
      {
        title: 'Step 3: Hot Steam Sanitization',
        desc: 'Dry steam blast to eliminate sweat odor and kill bacteria.'
      },
      {
        title: 'Step 4: Visor Polish & Fresh Scent',
        desc: 'Polishing visor for clear vision and applying fresh scent.'
      }
    ],
    recommendedAddOns: [
      'Pressure Foam Wash',
      'Wax Coating Polish'
    ]
  }
};
