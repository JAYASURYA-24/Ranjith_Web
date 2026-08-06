export const bikeWashPlansData = {
  'manual-basic-wash': {
    id: 'manual-basic-wash',
    title: 'Manual Basic Wash',
    badge: 'Daily Care',
    cardClass: '',
    preferredFor: 'Daily care and light dust removal',
    estimatedTime: '15-20 mins',
    tagline: 'Safe, gentle hand wash with brand shampoo for quick daily shine.',
    overview: 'Our Manual Basic Wash is ideal for daily commuters looking to keep their motorcycle or scooter clean and spotless. We use premium brand shampoo and soft microfiber cloths to gently lift surface dust and dirt without scratching your bike’s paintwork.',
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M15 6h4l-3 5.5h-5.5L8 17.5" />
        <path d="M5.5 17.5L10 11.5l3.5 1.5 3-5.5" />
      </svg>
    ),
    includes: [
      'Bike wash with premium brand shampoo',
      'Tyre sidewall cleaning & gloss polish',
      'Mirror & visor wipe down',
      'Microfiber streak-free drying'
    ],
    detailedSteps: [
      {
        title: 'Step 1: Water Rinse',
        desc: 'Pre-rinsing body panels and wheels to loosen loose dust.'
      },
      {
        title: 'Step 2: Shampoo Hand Scrub',
        desc: 'Washing tank, fairings, and seat with soft microfiber mitts and shampoo.'
      },
      {
        title: 'Step 3: Tyre Polish',
        desc: 'Applying long-lasting tyre sidewall shine polish.'
      },
      {
        title: 'Step 4: Streak-Free Wipe',
        desc: 'Drying with plush microfiber towels ensuring zero water spots.'
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
    preferredFor: 'Muddy roads, engine grime & glossy finish',
    estimatedTime: '25-30 mins',
    tagline: 'High-pressure snow foam wash with silicone glaze shine polish.',
    overview: 'Designed for motorcycles exposed to heavy mud, road grime, and oily engine deposits. High-pressure jet blast penetrates tight engine fins and wheel spokes, followed by dense snow foam and a rich silicon glaze spray polish for an ultra-glossy finish.',
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7c-.7 0-1.3.3-1.8.7C4.3 8.6 3 10 3 10s-2.7.6-4.5 1.1C-2.3 11.3-3 12.1-3 13v3c0 .6.4 1 1 1h2" />
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
      </svg>
    ),
    includes: [
      'Commercial pressure pump water wash (engine block & wheel arches)',
      'High-density snow foam bath application',
      'Tyre polish & alloy rim cleaning',
      'Silicon glaze spray polish for tank, fairings & bodywork'
    ],
    detailedSteps: [
      {
        title: 'Step 1: Underbody & Engine Pressure Blast',
        desc: 'Blasting away thick mud and grease around engine, chain area & mudguards.'
      },
      {
        title: 'Step 2: Snow Foam Bath',
        desc: 'Soaking the entire motorcycle in thick foam to lift stubborn road film.'
      },
      {
        title: 'Step 3: Detail Agitation & Rinse',
        desc: 'Detailing spokes, chain cover, and exhaust pipes followed by clean water rinse.'
      },
      {
        title: 'Step 4: Silicon Glaze Spray Polish',
        desc: 'Buffing tank, fairings, and metal components with silicon glaze for water repellency and high gloss.'
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
    preferredFor: 'Sweat odor removal & visor clarity',
    estimatedTime: '15-20 mins',
    tagline: 'Deep antibacterial foam & high-temperature steam sanitization.',
    overview: 'Helmets accumulate sweat, bacteria, and road dust over time. Our helmet cleaning service uses specialized antibacterial foam wash for both the outer shell and inner padding, followed by high-temperature steam sanitization for maximum hygiene.',
    iconSvg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    includes: [
      'High quality foam wash for both outer shell & inner padding',
      'High-temperature steam wash & 99.9% antibacterial sanitization',
      'Visor bug & road film removal with anti-fog polish',
      'Fresh odor-neutralizer spray treatment'
    ],
    detailedSteps: [
      {
        title: 'Step 1: Outer Shell Foam Wash',
        desc: 'Removing dead bugs, grease, and dust from outer shell and vents.'
      },
      {
        title: 'Step 2: Inner Liner Antibacterial Foam',
        desc: 'Deep cleaning cheek pads and inner mesh lining with hygiene foam.'
      },
      {
        title: 'Step 3: High-Temp Steam Blast',
        desc: 'Sanitizing inner lining with dry steam to kill bacteria and eliminate odor.'
      },
      {
        title: 'Step 4: Visor Polish & Fragrance',
        desc: 'Polishing visor for distortion-free clarity and applying fresh fragrance spray.'
      }
    ],
    recommendedAddOns: [
      'Pressure Foam Wash',
      'Wax Coating Polish'
    ]
  }
};
