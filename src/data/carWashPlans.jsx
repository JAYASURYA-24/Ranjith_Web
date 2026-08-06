export const carWashPlansData = {
  'basic-manual-wash': {
    id: 'basic-manual-wash',
    title: 'Basic Manual Wash',
    badge: 'Daily Care',
    cardClass: '',
    preferredFor: 'Low mud and daily care',
    estimatedTime: '25-30 mins',
    tagline: 'Gentle, effective daily maintenance to keep your car looking fresh.',
    overview: 'Our Basic Manual Wash is crafted for vehicle owners who want consistent, routine maintenance to preserve their car’s everyday shine. We use ultra-soft microfiber mitts and mild pH-neutral shampoos to lift light dust and road film without stripping off existing wax or polish.',
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    includes: [
      'Outer body manual hand wash with pH-neutral shampoo',
      'Soft microfiber towel drying & streak-free finish',
      'Tyre sidewall cleaning & deep gloss polish',
      'Exterior windshield & window wipe down'
    ],
    detailedSteps: [
      {
        title: 'Step 1: Soft Rinse & Debris Removal',
        desc: 'Pre-rinse using clean water to safely dislodge surface dust and prevent micro-scratches.'
      },
      {
        title: 'Step 2: Gentle Hand Wash',
        desc: 'Washing bodywork with plush microfiber mitts and gentle car shampoo.'
      },
      {
        title: 'Step 3: Tyre Dressing',
        desc: 'Tire sidewalls cleaned and dressed with non-greasy UV protective tyre polish.'
      },
      {
        title: 'Step 4: Streak-Free Drying',
        desc: 'Hand drying with absorbent microfiber towels ensuring zero water spots.'
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
    preferredFor: 'High mud, glossy finish',
    estimatedTime: '35-40 mins',
    tagline: 'High-pressure water jet & thick snow foam for deep mud removal.',
    overview: 'Designed for cars subjected to highway driving, heavy dust, or sticky mud. Our high-pressure foam loosens stubborn contaminants before gentle rinsing.',
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7c-.7 0-1.3.3-1.8.7C4.3 8.6 3 10 3 10s-2.7.6-4.5 1.1C-2.3 11.3-3 12.1-3 13v3c0 .6.4 1 1 1h2" />
        <path d="M5 11l1.5-4.5h11L19 11" />
        <circle cx="7.5" cy="16.5" r="1.5" />
        <circle cx="16.5" cy="16.5" r="1.5" />
      </svg>
    ),
    includes: [
      'High-pressure pump water jet wash (wheel arches & bodywork)',
      'Thick snow foam application to dissolve tough grime & road tar',
      'Detailing brush cleaning around grill, badges & door seals',
      'Tyre polish & alloy wheel face cleaning',
      'Hydrophobic glass drying'
    ],
    detailedSteps: [
      {
        title: 'Step 1: Underbody & Arch Jet Blast',
        desc: 'High-pressure water blast to clear mud from wheel arches and lower body sill.'
      },
      {
        title: 'Step 2: Thick Snow Foam Bath',
        desc: 'Covering the entire car in dense foam that encapsulates and floats away dirt.'
      },
      {
        title: 'Step 3: Microfiber Agitation & Rinse',
        desc: 'Gentle contact wipe on painted surfaces followed by high-pressure clean rinse.'
      },
      {
        title: 'Step 4: Alloy & Tyre Shine',
        desc: 'Alloy face wiping and premium tyre polish application for a wet-look shine.'
      }
    ],
    recommendedAddOns: [
      'Wax Coating Polish',
      'Engine Bay Steam Cleaning'
    ]
  },

  'premium-wash': {
    id: 'premium-wash',
    title: 'Premium Wash (Basic Interior & Exterior)',
    badge: 'Most Popular',
    cardClass: 'popular',
    preferredFor: 'Basic interior and exterior care',
    estimatedTime: '45-50 mins',
    tagline: 'Complete 360° refresh covering full exterior foam wash & interior vacuuming.',
    overview: 'Our most sought-after package gives your car a total makeover inside and out. It merges our signature pressure foam wash with complete interior vacuuming, dashboard UV protection, and glass polishing so you step into a spotless cabin.',
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    includes: [
      'Commercial pressure pump water wash',
      'Rich outer foam wash & mitt agitation',
      'Deep tyre polish & rim cleaning',
      'Full cabin interior vacuuming (floors, seats, boot space)',
      'Dashboard, console & steering column dust removal & polish',
      'Interior glass & mirror streak-free cleaning'
    ],
    detailedSteps: [
      {
        title: 'Step 1: High-Pressure Foam Exterior Wash',
        desc: 'Complete exterior foam wash, pressure rinse, and microfiber hand drying.'
      },
      {
        title: 'Step 2: High-Power Cabin Vacuuming',
        desc: 'Vacuuming all floor carpets, seat crevices, door pockets, and boot trunk space.'
      },
      {
        title: 'Step 3: Dashboard & Trim Polish',
        desc: 'Wiping down dashboard, AC vents, and center console with matte UV protectant.'
      },
      {
        title: 'Step 4: Tyre & Glass Polish',
        desc: 'Finishing touches with rich tyre shine polish and crystal-clear window cleaning.'
      }
    ],
    recommendedAddOns: [
      'AC Vent Cleaning',
      'Rat Repellent Treatment'
    ]
  },

  'elite-deep-cleaning': {
    id: 'elite-deep-cleaning',
    title: 'Elite Deep Cleaning',
    badge: 'Ultimate Care',
    cardClass: 'elite',
    preferredFor: 'Complete deep interior & exterior restoration',
    estimatedTime: '75-90 mins',
    tagline: 'Showroom restoration with steam cleaning, seat foam wash & paint gloss polish.',
    overview: 'The ultimate luxury car care package. Designed to restore your car to factory showroom condition. Includes foam washing and stain extraction for seat mats, deep steam cleaning sanitization, plastic trim restoration, and high-gloss body sealant polish.',
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    includes: [
      'Outer foam wash, underbody pressure cleaning & tyre polish',
      'Outer body high-shine paint polish & protective sealant',
      'Interior dashboard, door panels & vinyl trim deep polish',
      'Seat, door & boot space floor mat foam wash & polish',
      'Rubber & plastic trim restoration polish',
      'Exterior & interior glass hydrophobic polish',
      'Complete interior steam cleaning & antibacterial sanitization'
    ],
    detailedSteps: [
      {
        title: 'Step 1: Foam Wash & Paint Gloss Polish',
        desc: 'Pressure snow foam wash followed by hand application of high-shine body polish.'
      },
      {
        title: 'Step 2: Floor Mat & Seat Foam Scrubbing',
        desc: 'Shampooing and foam scrubbing fabric/rubber floor mats, seats, and boot carpet.'
      },
      {
        title: 'Step 3: High-Temperature Steam Cleaning',
        desc: 'Steam cleaning AC vents, seat seams, and handles to eliminate 99.9% of bacteria.'
      },
      {
        title: 'Step 4: Complete Trim & Glass Polish',
        desc: 'Restoring exterior plastic trims, rubber seals, and applying glass water-repellent.'
      }
    ],
    recommendedAddOns: [
      'Roof Cleaning',
      'Engine Bay Steam Cleaning',
      'Rat Repellent Treatment'
    ]
  }
};
