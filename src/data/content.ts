import { ServiceItem, ProjectItem, ProcessStep, FAQItem } from '../types';
import areebaPortfolioImg from '../assets/images/project_areeba_portfolio.png';
import atelierImg from '../assets/images/project_atelier.png';
import voyageurImg from '../assets/images/project_voyageur.png';
import rentieImg from '../assets/images/project_rentie.png';
import focusFlowImg from '../assets/images/project_focusflow.png';
import tourTravelImg from '../assets/images/project_tour_travel.png';
import kaoLahoreImg from '../assets/images/project_kao_lahore.jpg';


export const BRAND = {
  name: 'Ardenova Digital',
  tagline: 'Progress With Purpose.',
  supportingStatement:
    'Your vision deserves more than a service provider. It deserves a long-term digital partner.',
  contactEmail: 'ardenovadigital@gmail.com',
  heroEyebrow: 'INDEPENDENT DIGITAL PARTNER · WORKING WORLDWIDE',
  heroHeadline: 'Digital Progress. Built on Trust.',
  heroSupporting:
    'We help ambitious businesses build powerful websites, thoughtful digital experiences, and technology solutions designed for lasting growth.',
  heroSupportingLine:
    'Clear communication. Thoughtful execution. Long-term partnerships.',
  aboutHeading: 'Technology Matters. Trust Makes the Difference.',
  aboutBody:
    'Ardenova Digital is an independent digital agency focused on helping businesses move forward with clarity and confidence. We bring strategy, design, and development together to create digital solutions around real business needs. Our approach is built on honest communication, thoughtful planning, and partnerships designed to grow over time.',
  internationalHeading: 'Working Across Borders. Building Together.',
  internationalCopy:
    'We collaborate remotely with businesses across time zones, with clear communication, documented milestones, and a structured delivery process.',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design-dev',
    number: '01',
    title: 'Website Design & Development',
    description:
      'Responsive, modern business websites built to communicate your value and turn visitors into enquiries.',
    deliverables: [
      'Custom bespoke UI/UX architecture',
      'Modern responsive frontend implementation',
      'CMS integration or static headless architecture',
      'Core Web Vitals & technical SEO compliance',
      'Cross-browser & mobile viewport verification',
    ],
    techFocus: ['React / Next.js', 'Tailwind CSS', 'TypeScript', 'Structured Data'],
    engagementModel: 'Fixed milestone delivery with thorough staging reviews',
    timelineEstimate: '4 – 8 weeks based on scope',
  },
  {
    id: 'landing-pages',
    number: '02',
    title: 'Landing Pages',
    description:
      'Focused landing pages designed around your offer, audience, and conversion goals.',
    deliverables: [
      'Conversion-focused visual hierarchy',
      'High-speed single-page architecture',
      'Accessible form validation & lead capture flow',
      'Analytics event tracking & pixel integration',
      'A/B test ready layout structure',
    ],
    techFocus: ['Conversion Architecture', 'Vite / React', 'Tailwind CSS', 'Performance Optimization'],
    engagementModel: 'Rapid sprint delivery with structured copy guidance',
    timelineEstimate: '2 – 3 weeks',
  },
  {
    id: 'ecommerce-websites',
    number: '03',
    title: 'E-commerce Websites',
    description:
      'Online storefronts with intuitive product discovery, clear purchasing flows, and practical store management.',
    deliverables: [
      'Catalog structuring & faceted product discovery',
      'High-conversion checkout & cart UX',
      'Secure payment gateway integration',
      'Inventory, shipping, and tax setup workflows',
      'Mobile-first responsive purchasing experience',
    ],
    techFocus: ['Shopify / Custom Headless', 'Stripe / Regional Gateways', 'TypeScript', 'Speed Optimization'],
    engagementModel: 'Phased rollout: Catalog Architecture → Staging → Launch',
    timelineEstimate: '6 – 10 weeks',
  },
  {
    id: 'ui-ux-design',
    number: '04',
    title: 'UI/UX Design',
    description:
      'User journeys, wireframes, prototypes, and polished interfaces that make digital products easier to use.',
    deliverables: [
      'User journey mapping & information architecture',
      'Low-fidelity wireframing & conceptual validation',
      'High-fidelity interactive Figma prototypes',
      'Design systems, tokens, and reusable components',
      'Developer-ready specifications & asset exports',
    ],
    techFocus: ['Figma Design Systems', 'Component Tokenization', 'WCAG AA Compliance', 'Interaction Design'],
    engagementModel: 'Collaborative weekly review cycles with milestone sign-offs',
    timelineEstimate: '3 – 6 weeks',
  },
  {
    id: 'custom-web-applications',
    number: '05',
    title: 'Custom Web Applications',
    description:
      'Web-based tools and business applications planned around clearly defined operational requirements.',
    deliverables: [
      'System architecture & database schema planning',
      'Role-based access control & authentication',
      'Interactive dashboards & data visualizations',
      'REST / GraphQL API integration',
      'Automated testing & staging deployment',
    ],
    techFocus: ['React / Node.js', 'PostgreSQL / Cloud SQL', 'REST & GraphQL APIs', 'Role-Based Access'],
    engagementModel: 'Agile milestone sprints with continuous staging access',
    timelineEstimate: '8 – 16 weeks based on specifications',
  },
  {
    id: 'ongoing-website-support',
    number: '06',
    title: 'Ongoing Website Support',
    description:
      'Maintenance, improvements, performance checks, and agreed updates after launch.',
    deliverables: [
      'Scheduled security & dependency updates',
      'Continuous uptime & performance monitoring',
      'Monthly feature refinements & content adjustments',
      'Cross-device compatibility checks',
      'Direct communication channel for quick turnarounds',
    ],
    techFocus: ['Continuous Integration', 'Lighthouse Optimization', 'Security Patching', 'Version Control'],
    engagementModel: 'Dedicated monthly retainer with transparent task logging',
    timelineEstimate: 'Ongoing monthly engagement',
  },
];

export const TRUST_PRINCIPLES = [
  {
    number: '01',
    title: 'Built Around Your Goals',
    description:
      'We begin by understanding your business, audience, and objectives before recommending a solution.',
  },
  {
    number: '02',
    title: 'Transparent by Design',
    description:
      'Clear scope, realistic timelines, consistent communication, and agreed project milestones.',
  },
  {
    number: '03',
    title: 'Focused on the Long Term',
    description:
      'We aim to create digital solutions that are maintainable, useful, and ready to evolve with your business.',
  },
];

export const DIFFERENTIATORS = [
  {
    title: 'Business-first thinking',
    description:
      'We evaluate technology and design decisions based on their ability to solve real operational problems and generate measurable value, not ephemeral industry trends.',
  },
  {
    title: 'Clear and consistent communication',
    description:
      'You receive direct updates, weekly milestone reviews, and documented decisions. No technical jargon used to obscure delays or ambiguity.',
  },
  {
    title: 'Carefully scoped projects',
    description:
      'We invest early in scoping to establish realistic timelines, agreed deliverables, and predictable budgets before any development commences.',
  },
  {
    title: 'Long-term support and collaboration',
    description:
      'Our relationship does not end at deployment. We ensure your team is trained, handover docs are comprehensive, and ongoing maintenance is accessible.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'areeba-portfolio',
    title: 'Areeba Munir — Portfolio',
    typeLabel: 'Software & Creative Engineering',
    industry: 'Interactive Portfolio & Creative Technology',
    summary:
      'The personal interactive software engineering and design portfolio of Areeba Munir, featuring cinematic starry particle animations, futuristic design language, and live project deployments.',
    challenge:
      'Unifying academic excellence, full-stack software development, DBMS expertise, and modern UI/UX design into an immersive, futuristic web experience that captivates visitors.',
    solution:
      'Built a sleek, dark-mode cosmic canvas with particle physics, dynamic project showcases, smooth navigation, and optimized production hosting on Vercel.',
    deliverables: [
      'Cinematic interactive identity & particle canvas UI',
      'Curated showcase of 13+ software & web development systems',
      'Technical spotlights across SE, DBMS, UI/UX & React',
      'Production deployment on Vercel with responsive mobile performance',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel Architecture', 'Interactive Web'],
    image: areebaPortfolioImg,
    liveUrl: 'https://areeba-munir-portfolio-7de2.vercel.app/',
    isDemonstration: false,
    conceptHighlights: [
      { label: 'Category', value: 'Software Engineering & UI/UX' },
      { label: 'Deployment', value: 'Live on Vercel' },
      { label: 'Key Feature', value: 'Interactive Cinematic Canvas' },
      { label: 'Platform', value: 'Production Web App' },
    ],
  },
  {
    id: 'atelier',
    title: 'Atelier',
    typeLabel: 'Luxury Brand & Studio',
    industry: 'Haute Design, Fashion & Artisanal Goods',
    summary:
      'A high-fashion digital flagship and design studio showcase balancing tactile minimalism, rich aesthetic restraint, editorial lookbooks, and refined client engagement.',
    challenge:
      'Creating a digital brand presence that matches the uncompromising standards of haute couture and artisanal design without clutter or visual distraction.',
    solution:
      'Structured an airy editorial canvas with tight geometric typography, focused product curation, smooth transitions, and an understated aesthetic identity.',
    deliverables: [
      'Haute couture digital identity & design system',
      'Editorial collection showcases & visual lookbooks',
      'Minimalist interactive digital flagship architecture',
      'Studio inquiry conduits & client intake workflows',
    ],
    techStack: ['React', 'Vercel Architecture', 'Tailwind CSS', 'Modern Frontend'],
    image: atelierImg,
    liveUrl: 'https://atelier-eev4rmyeh-areeba-c601.vercel.app/',
    isDemonstration: false,
    conceptHighlights: [
      { label: 'Category', value: 'Luxury Fashion & Studio' },
      { label: 'Deployment', value: 'Live on Vercel' },
      { label: 'Key Feature', value: 'Editorial Flagship Lookbook' },
      { label: 'Platform', value: 'Production Web App' },
    ],
  },
  {
    id: 'voyageur',
    title: 'Voyageur .co',
    typeLabel: 'Travel & Luxury Hospitality',
    industry: 'Curated Global Expeditions & Boutique Journeys',
    summary:
      'A boutique global travel platform offering hand-crafted small-group journeys across 40+ destinations, departure discovery for 240+ itineraries, and bespoke travel reservations.',
    challenge:
      'Presenting multi-destination itineraries, departure date filters, and boutique stay showcases with clean editorial elegance and effortless booking flows.',
    solution:
      'Architected an immersive travel discovery experience with instant departure date pickers, destination filters, traveler group size selection, and direct booking conduits.',
    deliverables: [
      'Global expedition discovery platform & UI system',
      'Search engine for 240+ departure dates & itineraries',
      'Curated boutique lodging & local guide showcases',
      'High-speed responsive web deployment on Vercel',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel Architecture'],
    image: voyageurImg,
    liveUrl: 'https://voyageur-website-areeba-c601.vercel.app/',
    isDemonstration: false,
    conceptHighlights: [
      { label: 'Category', value: 'Boutique Global Journeys' },
      { label: 'Deployment', value: 'Live on Vercel' },
      { label: 'Key Feature', value: '240+ Departures Search Engine' },
      { label: 'Platform', value: 'Production Web App' },
    ],
  },
  {
    id: 'tour-travel',
    title: 'Tour & Travel Ventures',
    typeLabel: 'Travel & Tourism Adventure',
    industry: 'Pakistan Expeditions & Adventure Tourism',
    summary:
      'An adventure and northern expedition travel portal showcasing Pakistan’s breathtaking mountain valleys, curated group and family packages, WhatsApp consultation conduits, and verified reviews.',
    challenge:
      'Building a trusted, conversion-optimized adventure travel platform that connects travelers directly with regional guides, custom packages, and instant booking consultation.',
    solution:
      'Designed an inspiring mountain-adventure portal with instant WhatsApp booking integration, 5-star traveler testimonial showcases, detailed tour packages, and seamless mobile inquiry forms.',
    deliverables: [
      'Adventure tourism portal & brand design system',
      'Direct WhatsApp booking conduit & instant trip inquiry',
      'Curated northern valley packages & itinerary showcases',
      'Production-ready responsive deployment on Vercel',
    ],
    techStack: ['React', 'Next.js / Vercel', 'Tailwind CSS', 'Adventure Portal'],
    image: tourTravelImg,
    liveUrl: 'https://tour-and-travel-ventures-vjxt-hpul54oyh-areeba-c601.vercel.app/',
    isDemonstration: false,
    conceptHighlights: [
      { label: 'Category', value: 'Adventure & Valley Expeditions' },
      { label: 'Deployment', value: 'Live on Vercel' },
      { label: 'Key Feature', value: 'WhatsApp Booking Conduit' },
      { label: 'Platform', value: 'Production Web App' },
    ],
  },
  {
    id: 'kao-lahore',
    title: 'KAO Lahore',
    typeLabel: 'Hospitality & Fine Dining',
    industry: 'Premium Chinese Cuisine & Culinary Arts',
    summary:
      'An ultra-luxury fine dining digital presence in Lahore showcasing authentic Chinese culinary traditions, artisan handmade dim sum, Peking duck, and private dining reservation systems.',
    challenge:
      'Translating the sensory richness and regal prestige of high-end authentic Chinese gastronomy into a digital environment that drives table bookings and VIP private dining reservations.',
    solution:
      'Created an opulent obsidian and warm champagne aesthetic featuring mouth-watering culinary photography, seasonal menus, private dining walkthroughs, and seamless reservation flows.',
    deliverables: [
      'Luxury fine dining brand design & typography system',
      'Interactive culinary menu & tasting course showcase',
      'VIP private dining room inquiry & table reservation conduit',
      'High-speed responsive web experience deployed on Vercel',
    ],
    techStack: ['React', 'Vercel Cloud', 'Tailwind CSS', 'Fine Dining Experience'],
    image: kaoLahoreImg,
    liveUrl: 'https://kao-lahore-premium-chinese-cuisine-tmlh-n50urukp4-areeba-c601.vercel.app/',
    isDemonstration: false,
    conceptHighlights: [
      { label: 'Category', value: 'Hospitality & Fine Dining' },
      { label: 'Deployment', value: 'Live on Vercel' },
      { label: 'Key Feature', value: 'VIP Reservation Conduit' },
      { label: 'Platform', value: 'Production Web App' },
    ],
  },
  {
    id: 'rentie-growth-hub',
    title: 'Rentie Growth Hub',
    typeLabel: 'Business & Growth Platform',
    industry: 'Property & Rental Growth Technology',
    summary:
      'A growth acceleration engine and strategic marketing hub designed to scale modern rental businesses, optimize conversion funnels, and capture high-intent leads.',
    challenge:
      'Communicating commercial impact, acquisition channels, and technical growth infrastructure in a clear, persuasive format for operators and property partners.',
    solution:
      'Built a high-conversion platform with structured value propositions, interactive capability breakdowns, clean service scopes, and automated lead capture funnels.',
    deliverables: [
      'Conversion-centered platform architecture',
      'Growth engine & acquisition funnel strategy',
      'Interactive lead qualification & intake pipeline',
      'Performance-driven responsive interface',
    ],
    techStack: ['React', 'Vercel Deployment', 'Tailwind CSS', 'Conversion Funnel'],
    image: rentieImg,
    liveUrl: 'https://rentie-growth-hub.vercel.app/',
    isDemonstration: false,
    conceptHighlights: [
      { label: 'Category', value: 'Growth & Tech Hub' },
      { label: 'Deployment', value: 'Live on Vercel' },
      { label: 'Key Feature', value: 'Lead Conversion Architecture' },
      { label: 'Platform', value: 'Production Web App' },
    ],
  },
  {
    id: 'focus-flow',
    title: 'Focus Flow',
    typeLabel: 'Web Application & SaaS',
    industry: 'Workflow Optimization & Productivity SaaS',
    summary:
      'A minimalist productivity workspace and flow-state interface built for deep focus, structured task execution, habit momentum, and distraction-free collaboration.',
    challenge:
      'Eliminating digital cognitive fatigue while organizing daily workflows, prioritized milestones, and intuitive habit loops within an elegant, low-friction UI.',
    solution:
      'Crafted a distraction-free, low-latency productivity environment with dark-mode elegance, keyboard-friendly navigation, and clear visual progress momentum.',
    deliverables: [
      'Deep-work workspace interface & design system',
      'Focus sprint & task orchestration engine',
      'Distraction-free productivity dashboard',
      'Cloud-optimized web application architecture',
    ],
    techStack: ['React SPA', 'Vercel Cloud', 'Tailwind CSS', 'SaaS Interaction Design'],
    image: focusFlowImg,
    liveUrl: 'https://focus-flow-website-five.vercel.app/',
    isDemonstration: false,
    conceptHighlights: [
      { label: 'Category', value: 'Productivity SaaS' },
      { label: 'Deployment', value: 'Live on Vercel' },
      { label: 'Key Feature', value: 'Deep-Work Sprint Engine' },
      { label: 'Platform', value: 'Production Web App' },
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    summary: 'Understand your business, objectives, audience, and requirements.',
    actionPoints: [
      'In-depth discovery session on current challenges and commercial goals',
      'Audit of existing digital footprint, competitors, and audience personas',
      'Identification of core functional requirements and integration constraints',
    ],
    typicalDuration: 'Week 1',
    clientTouchpoints: 'Discovery intake review & kickoff workshop',
  },
  {
    number: '02',
    title: 'Define',
    summary: 'Agree on scope, deliverables, project milestones, budget, and timeline.',
    actionPoints: [
      'Detailed scope specification document detailing each page and tool',
      'Information architecture, page wireframes, and user journey definition',
      'Transparent milestone schedule with fixed deliverable dates and responsibilities',
    ],
    typicalDuration: 'Weeks 1 – 2',
    clientTouchpoints: 'Scope walkthrough & milestone approval sign-off',
  },
  {
    number: '03',
    title: 'Create',
    summary: 'Coordinate design and development, review progress, and collect feedback at agreed stages.',
    actionPoints: [
      'High-fidelity interactive UI design with typography, spacing, and brand palette',
      'Staging build deployment so you test features on real devices throughout development',
      'Structured feedback rounds at agreed milestone dates to prevent scope creep',
    ],
    typicalDuration: 'Weeks 3 – 6',
    clientTouchpoints: 'Weekly design/staging demonstrations & review sprints',
  },
  {
    number: '04',
    title: 'Deliver & Support',
    summary: 'Test the final solution, deploy it with client approval, provide handover documentation, and discuss ongoing support if needed.',
    actionPoints: [
      'Comprehensive cross-browser, security, and Core Web Vitals audit',
      'Controlled production deployment with zero downtime and DNS verification',
      'Handover documentation, walkthrough recording, and transition to maintenance plan',
    ],
    typicalDuration: 'Final Week & Ongoing',
    clientTouchpoints: 'Final acceptance walkthrough & handover package delivery',
  },
];

export const TARGET_MARKETS = [
  {
    name: 'United States',
    regions: 'New York (EST) · San Francisco (PST)',
    timezoneOffset: 'UTC-5 / UTC-8',
    overlapWindow: 'Afternoon & evening collaboration hours',
    ianaZone: 'America/New_York',
  },
  {
    name: 'United Kingdom',
    regions: 'London (GMT / BST)',
    timezoneOffset: 'UTC+0 / UTC+1',
    overlapWindow: 'Full business day synchronous overlap',
    ianaZone: 'Europe/London',
  },
  {
    name: 'Saudi Arabia',
    regions: 'Riyadh (AST)',
    timezoneOffset: 'UTC+3',
    overlapWindow: 'Direct morning & afternoon coordination',
    ianaZone: 'Asia/Riyadh',
  },
  {
    name: 'United Arab Emirates',
    regions: 'Dubai / Abu Dhabi (GST)',
    timezoneOffset: 'UTC+4',
    overlapWindow: 'Active cross-gulf working day alignment',
    ianaZone: 'Asia/Dubai',
  },
  {
    name: 'Worldwide',
    regions: 'International Remote Partnerships',
    timezoneOffset: 'Flexible Asynchronous Workflow',
    overlapWindow: 'Clear documented milestones across all time zones',
    ianaZone: 'UTC',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What services does Ardenova Digital provide?',
    answer:
      'We provide website design and development, high-impact landing pages, e-commerce storefronts, UI/UX design, custom web applications, and ongoing website maintenance. Each engagement is tailored around real business objectives and executed with clean, maintainable engineering.',
  },
  {
    id: 'faq-2',
    question: 'Do you work with international clients?',
    answer:
      'Yes. Ardenova Digital operates remotely with ambitious businesses across the United States, the United Kingdom, Saudi Arabia, the United Arab Emirates, and worldwide. We establish documented milestones, schedule meetings around your timezone, and provide continuous staging access so progress is always visible.',
  },
  {
    id: 'faq-3',
    question: 'How does your project process work?',
    answer:
      'Our process follows four structured phases: Discover (understanding your goals), Define (agreeing on precise scope, budget, and timeline), Create (iterative design and development with staging reviews), and Deliver & Support (rigorous testing, deployment, handover documentation, and ongoing support).',
  },
  {
    id: 'faq-4',
    question: 'How are project costs determined?',
    answer:
      'Project costs are determined strictly by the defined scope of work, technical complexity, number of unique templates, third-party integrations, and required timeline. After reviewing your requirements during the discovery phase, we provide a transparent, itemized proposal before any commitment is made.',
  },
  {
    id: 'faq-5',
    question: 'Can you work with an existing website?',
    answer:
      'Yes. Depending on your current architecture, we can either re-architect and modernize your existing codebase, redesign key conversion flows, or perform a complete, clean rebuild to improve performance, responsiveness, and brand presentation.',
  },
  {
    id: 'faq-6',
    question: 'Do you provide ongoing maintenance?',
    answer:
      'Yes. We offer structured monthly support and maintenance arrangements covering regular security updates, performance monitoring, browser compatibility checks, and planned iterative improvements to ensure your digital platform remains dependable as your business expands.',
  },
  {
    id: 'faq-7',
    question: 'How do we get started?',
    answer:
      'The easiest way to begin is by submitting our project inquiry form below or emailing us directly. Share an overview of what you are planning, your target timeline, and your estimated budget. We will review your requirements and coordinate an initial discovery consultation.',
  },
];
