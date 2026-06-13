export type Project = {
  slug: string
  name: string
  tagline: string
  category: 'SaaS Applications' | 'MERN Projects' | 'Business Websites' | 'WordPress Projects'
  image: string
  tech: string[]
  liveUrl: string
  githubUrl: string
  problem: string
  solution: string
  process: string[]
  features: string[]
  results: { label: string; value: string }[]
  gallery: string[]
}

export const projects: Project[] = [
 {
  slug: 'mrsolar',
  name: 'MRSolar',
  tagline:
    'A professional solar energy company website showcasing photovoltaic installations, energy storage solutions, carports, and electrical components for residential and commercial clients.',

  category: 'WordPress Projects',

  image: '/images/mrsolar-homepage.png',

  tech: [
    'WordPress',
    'Elementor',
    'Elementor Pro',
    'WPForms',
    'Responsive Design',
  ],

  liveUrl: 'https://mrsolar.movodigital.pl/',

  githubUrl: '',

  problem:
    'The client needed a modern website to showcase solar energy solutions, build trust with potential customers, highlight services, and generate qualified leads for photovoltaic installation projects.',

  solution:
    'I developed a clean and conversion-focused WordPress website featuring service pages, company information, partner showcases, customer testimonials, and strong call-to-action sections to improve lead generation.',

  process: [
    'Requirement gathering and competitor research',
    'Designing service-focused page layouts',
    'Building responsive pages using Elementor Pro',
    'Optimizing performance and mobile experience',
    'Implementing contact and inquiry forms',
  ],

  features: [
    'Modern solar energy company website',
    'Fully responsive design',
    'Service showcase sections',
    'Partner and certification displays',
    'Customer testimonials',
    'Lead generation contact forms',
    'SEO-friendly structure',
  ],

  results: [
    { label: 'Pages Created', value: '10+' },
    { label: 'Mobile Responsive', value: '100%' },
    { label: 'Core Services', value: '5+' },
  ],

  gallery: [
    '/images/mrsolar-homepage.png',
    '/images/mrsolar-services.png',
  ],
},
 {
  slug: 'novaweb-agency',

  name: 'NovaWeb Agency',

  tagline:
    'A modern web development agency website designed to showcase services, portfolio projects, testimonials, and generate client leads.',

  category: 'MERN Projects',

  image: '/images/novaweb-homepage.png',

  tech: [
    'React',
    'Tailwind CSS',
  ],

  liveUrl: 'https://web-agencyj.netlify.app/',

  githubUrl: '',

  problem:
    'The agency needed a professional online presence to showcase its expertise, highlight previous projects, build credibility through testimonials, and convert visitors into paying clients.',

  solution:
    'I designed and developed a modern agency website with a strong visual identity, service showcases, project portfolio sections, business statistics, testimonials, and conversion-focused call-to-action elements.',

  process: [
    'Researching modern agency website trends',
    'Creating a clean and premium UI design',
    'Developing responsive layouts with React',
    'Implementing project showcase and testimonial sections',
    'Optimizing performance and mobile responsiveness',
  ],

  features: [
    'Modern agency landing page',
    'Service showcase section',
    'Featured project portfolio',
    'Business statistics highlights',
    'Client testimonials',
    'Responsive design',
    'Lead generation call-to-actions',
    'SEO-friendly structure',
  ],

  results: [
    { label: 'Services Highlighted', value: '4+' },
    { label: 'Mobile Responsive', value: '100%' },
    { label: 'Project Sections', value: '6+' },
  ],

  gallery: [
    '/images/novaweb-homepage.png',
    '/images/novaweb-services.png',
  ],
},
 {
  slug: 'defi100x-community',

  name: 'DeFi100X Community',

  tagline:
    'A modern crypto trading community platform designed to help traders learn, collaborate, and improve their market performance.',

  category: 'SaaS Applications',

  image: '/images/defi100x-homepage.png',

  tech: [
    'WordPress',
    'Elementor',
    'Custom CSS',
    'JavaScript',
    'Responsive Design',
  ],

  liveUrl: 'https://defi100xcommunity.com/',

  githubUrl: '',

  problem:
    'The client needed a high-converting landing page to showcase their trading community, explain membership benefits, build trust through testimonials, and drive membership signups.',

  solution:
    'I developed a modern conversion-focused website featuring community benefits, educational resources, trading performance highlights, testimonials, FAQ sections, and strong call-to-action elements to maximize user engagement.',

  process: [
    'Researching competitor trading communities',
    'Designing a conversion-focused landing page',
    'Building responsive layouts and interactive sections',
    'Optimizing user experience and mobile performance',
    'Implementing lead generation and signup flows',
  ],

  features: [
    'Modern crypto community landing page',
    'Interactive performance statistics',
    'Community benefits showcase',
    'Member testimonials section',
    'Frequently asked questions',
    'Mobile responsive design',
    'High-converting call-to-action sections',
    'Optimized user journey for memberships',
  ],

  results: [
    { label: 'Landing Pages', value: '10+' },
    { label: 'Mobile Responsive', value: '100%' },
    { label: 'Community Sections', value: '8+' },
  ],

  gallery: [
    '/images/defi100x-homepage.png',
    '/images/defi100x-community.png',
  ],
},
  {
  slug: 'dentia-dental-clinic',

  name: 'Dentia Dental Clinic',

  tagline:
    'A modern dental clinic website designed to showcase services, build patient trust, and simplify appointment bookings.',

  category: 'Business Websites',

  image: '/images/dentia-homepage.png',

  tech: [
    'React',
    'Tailwind CSS',
    'Responsive Design',
    'JavaScript',
    'Netlify',
  ],

  liveUrl: 'https://dentist-websitee.netlify.app/',

  githubUrl: '',

  problem:
    'The dental practice needed a professional online presence to showcase treatments, highlight expertise, build credibility, and encourage patients to schedule consultations.',

  solution:
    'I designed and developed a modern healthcare website featuring treatment showcases, before-and-after results, doctor profiles, testimonials, and appointment-focused call-to-action sections.',

  process: [
    'Healthcare website research and competitor analysis',
    'Designing a patient-friendly user experience',
    'Developing responsive service and treatment pages',
    'Creating trust-building sections with testimonials and doctor profiles',
    'Optimizing mobile responsiveness and performance',
  ],

  features: [
    'Modern dental clinic landing page',
    'Service showcase section',
    'Before & after treatment gallery',
    'Doctor and specialist profiles',
    'Patient testimonials',
    'Appointment booking call-to-actions',
    'Fully responsive design',
    'SEO-friendly structure',
  ],

  results: [
    { label: 'Services Showcased', value: '6+' },
    { label: 'Mobile Responsive', value: '100%' },
    { label: 'Healthcare Experts', value: '4+' },
  ],

  gallery: [
    '/images/dentia-homepage.png',
    '/images/dentia-services.png',
    '/images/dentia-mobile.png',
  ],
},
  // {
  //   slug: 'bloom-blog',
  //   name: 'Bloom Magazine',
  //   tagline: 'A custom WordPress publication with a modern editorial feel.',
  //   category: 'WordPress Projects',
  //   image: '/images/project-saas.png',
  //   tech: ['WordPress', 'PHP', 'ACF', 'Tailwind'],
  //   liveUrl: 'https://example.com',
  //   githubUrl: 'https://github.com',
  //   problem:
  //     'An established publisher wanted a modern reading experience without leaving the WordPress ecosystem their editors loved.',
  //   solution:
  //     'I built a custom WordPress theme with a refined editorial layout, fast page loads, and a flexible block-based editing workflow.',
  //   process: [
  //     'Editorial UX and content modeling',
  //     'Custom theme development with ACF',
  //     'Performance and caching strategy',
  //     'Editor training and handoff',
  //   ],
  //   features: [
  //     'Custom block-based editing',
  //     'Refined editorial typography',
  //     'Fast, cached page delivery',
  //     'Newsletter and membership ready',
  //   ],
  //   results: [
  //     { label: 'Page speed', value: '+55%' },
  //     { label: 'Time on page', value: '+40%' },
  //     { label: 'Editors happy', value: '100%' },
  //   ],
  //   gallery: ['/images/project-saas.png', '/images/project-fintech.png'],
  // },
  // {
  //   slug: 'pulse-crm',
  //   name: 'Pulse CRM',
  //   tagline: 'A collaborative CRM built for fast-moving sales teams.',
  //   category: 'MERN Projects',
  //   image: '/images/project-fintech.png',
  //   tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
  //   liveUrl: 'https://example.com',
  //   githubUrl: 'https://github.com',
  //   problem:
  //     'A growing sales team was losing deals in spreadsheets and disconnected tools.',
  //   solution:
  //     'I delivered a real-time CRM with pipeline management, live collaboration, and automation that keeps the whole team in sync.',
  //   process: [
  //     'Sales workflow mapping',
  //     'Real-time backend with Socket.io',
  //     'Drag-and-drop pipeline UI',
  //     'Automation and notification engine',
  //   ],
  //   features: [
  //     'Real-time deal pipeline',
  //     'Live team collaboration',
  //     'Automated follow-up reminders',
  //     'Custom reporting dashboards',
  //   ],
  //   results: [
  //     { label: 'Deals closed', value: '+47%' },
  //     { label: 'Admin time', value: '-60%' },
  //     { label: 'Team adoption', value: '95%' },
  //   ],
  //   gallery: ['/images/project-fintech.png', '/images/project-saas.png'],
  // },
]

export const projectCategories = [
  'All',
  'SaaS Applications',
  'MERN Projects',
  'Business Websites',
  'WordPress Projects',
] as const

export type Article = {
  slug: string
  title: string
  excerpt: string
  category: 'React' | 'Next.js' | 'MERN Stack' | 'UI/UX' | 'Freelancing' | 'Case Studies'
  cover: string
  readingTime: string
  date: string
  featured?: boolean
}

export const articles: Article[] = [
  {
    slug: 'scaling-nextjs-apps',
    title: 'Scaling Next.js apps without losing your sanity',
    excerpt:
      'Hard-won lessons on architecture, caching, and rendering strategies that keep large Next.js apps fast and maintainable.',
    category: 'Next.js',
    cover: '/images/blog-featured.png',
    readingTime: '8 min read',
    date: 'Jun 2, 2026',
    featured: true,
  },
  {
    slug: 'react-patterns-2026',
    title: 'React patterns I reach for in 2026',
    excerpt:
      'From server components to effect events, the patterns that make my React code cleaner and easier to reason about.',
    category: 'React',
    cover: '/images/blog-1.png',
    readingTime: '6 min read',
    date: 'May 24, 2026',
  },
  {
    slug: 'design-systems-that-scale',
    title: 'Building design systems that actually scale',
    excerpt:
      'A practical guide to tokens, components, and documentation that teams will genuinely use.',
    category: 'UI/UX',
    cover: '/images/blog-3.png',
    readingTime: '7 min read',
    date: 'May 10, 2026',
  },
  {
    slug: 'mern-architecture-guide',
    title: 'A pragmatic MERN architecture for production',
    excerpt:
      'How I structure MongoDB, Express, React, and Node projects so they stay clean as they grow.',
    category: 'MERN Stack',
    cover: '/images/blog-2.png',
    readingTime: '9 min read',
    date: 'Apr 28, 2026',
  },
  {
    slug: 'freelance-pricing',
    title: 'How I price freelance projects as a developer',
    excerpt:
      'Value-based pricing, scoping, and the conversations that lead to better clients and better pay.',
    category: 'Freelancing',
    cover: '/images/blog-1.png',
    readingTime: '5 min read',
    date: 'Apr 12, 2026',
  },
  {
    slug: 'fintech-case-study',
    title: 'Case study: shipping a fintech app in 8 weeks',
    excerpt:
      'A behind-the-scenes look at the decisions, trade-offs, and results from building Vault Finance.',
    category: 'Case Studies',
    cover: '/images/blog-3.png',
    readingTime: '10 min read',
    date: 'Mar 30, 2026',
  },
]

export const articleCategories = [
  'All',
  'React',
  'Next.js',
  'MERN Stack',
  'UI/UX',
  'Freelancing',
  'Case Studies',
] as const
