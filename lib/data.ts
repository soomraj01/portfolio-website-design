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
    slug: 'nexus-analytics',
    name: 'Nexus Analytics',
    tagline: 'A real-time analytics platform for modern SaaS teams.',
    category: 'SaaS Applications',
    image: '/images/project-saas.png',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind', 'tRPC'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    problem:
      'The client struggled with fragmented data across multiple tools, making it impossible to get a single source of truth for product decisions.',
    solution:
      'I designed and built a unified analytics dashboard that ingests data from multiple sources in real time, with custom reporting and team collaboration baked in.',
    process: [
      'Discovery & technical audit of existing data pipelines',
      'Schema design and a streaming ingestion architecture',
      'Component-driven UI built with a custom design system',
      'Performance tuning to keep dashboards under 200ms',
    ],
    features: [
      'Real-time event streaming dashboards',
      'Custom report builder with saved views',
      'Role-based team access controls',
      'Exportable, shareable insights',
    ],
    results: [
      { label: 'Faster reporting', value: '8x' },
      { label: 'Load time', value: '180ms' },
      { label: 'Active teams', value: '120+' },
    ],
    gallery: ['/images/project-saas.png', '/images/project-fintech.png'],
  },
  {
    slug: 'lumen-store',
    name: 'Lumen Store',
    tagline: 'A headless e-commerce experience for a premium fashion brand.',
    category: 'MERN Projects',
    image: '/images/project-ecommerce.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    problem:
      'A legacy storefront was slow, hard to maintain, and converting poorly on mobile devices.',
    solution:
      'I rebuilt the storefront on a modern MERN stack with a headless architecture, optimizing the entire checkout funnel for speed and conversion.',
    process: [
      'UX research on the existing checkout funnel',
      'Headless API design with Node and Express',
      'Mobile-first storefront in React',
      'Stripe integration with one-click checkout',
    ],
    features: [
      'Lightning-fast product browsing',
      'One-click Stripe checkout',
      'Headless CMS for merchandising',
      'Optimized mobile conversion flow',
    ],
    results: [
      { label: 'Conversion lift', value: '+42%' },
      { label: 'Mobile speed', value: '98/100' },
      { label: 'Cart abandonment', value: '-31%' },
    ],
    gallery: ['/images/project-ecommerce.png', '/images/project-saas.png'],
  },
  {
    slug: 'vault-finance',
    name: 'Vault Finance',
    tagline: 'A sleek fintech app for personal money management.',
    category: 'SaaS Applications',
    image: '/images/project-fintech.png',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind', 'Plaid'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    problem:
      'Users wanted a single, beautiful place to track spending across accounts without sacrificing security or trust.',
    solution:
      'I built a secure fintech platform with bank integrations, budgeting tools, and a refined interface that makes money management feel effortless.',
    process: [
      'Security-first architecture planning',
      'Plaid integration for bank connections',
      'Budgeting engine and insights model',
      'Polished, accessible UI with micro-interactions',
    ],
    features: [
      'Secure bank account linking via Plaid',
      'Smart budgets and spending insights',
      'Beautiful, animated transaction views',
      'Bank-grade security and encryption',
    ],
    results: [
      { label: 'Users onboarded', value: '15k+' },
      { label: 'App rating', value: '4.9★' },
      { label: 'Retention', value: '+38%' },
    ],
    gallery: ['/images/project-fintech.png', '/images/project-ecommerce.png'],
  },
  {
    slug: 'atlas-agency',
    name: 'Atlas Agency Site',
    tagline: 'A high-converting marketing site for a creative agency.',
    category: 'Business Websites',
    image: '/images/project-ecommerce.png',
    tech: ['Next.js', 'Framer Motion', 'Tailwind', 'Sanity'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    problem:
      'The agency needed a memorable site that reflected the quality of their work and generated qualified leads.',
    solution:
      'I crafted an award-worthy marketing site with smooth animations, a headless CMS, and a conversion-focused contact flow.',
    process: [
      'Brand and motion direction',
      'CMS modeling in Sanity',
      'Animation system with Framer Motion',
      'SEO and Core Web Vitals optimization',
    ],
    features: [
      'Cinematic scroll animations',
      'Editable content via Sanity CMS',
      'Lead capture with smart routing',
      '100 Lighthouse SEO score',
    ],
    results: [
      { label: 'Qualified leads', value: '+65%' },
      { label: 'Lighthouse', value: '100' },
      { label: 'Bounce rate', value: '-28%' },
    ],
    gallery: ['/images/project-ecommerce.png', '/images/project-saas.png'],
  },
  {
    slug: 'bloom-blog',
    name: 'Bloom Magazine',
    tagline: 'A custom WordPress publication with a modern editorial feel.',
    category: 'WordPress Projects',
    image: '/images/project-saas.png',
    tech: ['WordPress', 'PHP', 'ACF', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    problem:
      'An established publisher wanted a modern reading experience without leaving the WordPress ecosystem their editors loved.',
    solution:
      'I built a custom WordPress theme with a refined editorial layout, fast page loads, and a flexible block-based editing workflow.',
    process: [
      'Editorial UX and content modeling',
      'Custom theme development with ACF',
      'Performance and caching strategy',
      'Editor training and handoff',
    ],
    features: [
      'Custom block-based editing',
      'Refined editorial typography',
      'Fast, cached page delivery',
      'Newsletter and membership ready',
    ],
    results: [
      { label: 'Page speed', value: '+55%' },
      { label: 'Time on page', value: '+40%' },
      { label: 'Editors happy', value: '100%' },
    ],
    gallery: ['/images/project-saas.png', '/images/project-fintech.png'],
  },
  {
    slug: 'pulse-crm',
    name: 'Pulse CRM',
    tagline: 'A collaborative CRM built for fast-moving sales teams.',
    category: 'MERN Projects',
    image: '/images/project-fintech.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    problem:
      'A growing sales team was losing deals in spreadsheets and disconnected tools.',
    solution:
      'I delivered a real-time CRM with pipeline management, live collaboration, and automation that keeps the whole team in sync.',
    process: [
      'Sales workflow mapping',
      'Real-time backend with Socket.io',
      'Drag-and-drop pipeline UI',
      'Automation and notification engine',
    ],
    features: [
      'Real-time deal pipeline',
      'Live team collaboration',
      'Automated follow-up reminders',
      'Custom reporting dashboards',
    ],
    results: [
      { label: 'Deals closed', value: '+47%' },
      { label: 'Admin time', value: '-60%' },
      { label: 'Team adoption', value: '95%' },
    ],
    gallery: ['/images/project-fintech.png', '/images/project-saas.png'],
  },
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
