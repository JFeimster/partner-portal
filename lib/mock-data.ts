export type Role = 'admin' | 'partner' | 'prospect';

export type Profile = {
  id: string;
  email: string;
  role: Role;
  created_at: string;
};

export type PartnerAccount = {
  id: string;
  profile_id: string;
  status: 'new' | 'active' | 'paused';
  activation_score: number;
  created_at: string;
};

export type Offer = {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  requirements: string[];
  payout_notes: string;
  affiliate_link: string;
};

export type TrainingModule = {
  id: string;
  slug: string;
  title: string;
  category: string;
  level: string;
  content_url: string;
  required: boolean;
};

export type Playbook = {
  id: string;
  slug: string;
  title: string;
  persona: string;
  content: string[];
  related_offers: string[];
};

export type Resource = {
  id: string;
  title: string;
  category: string;
  file_url: string;
};

export type PerformanceSnapshot = {
  id: string;
  partner_id: string;
  clicks: number;
  applications: number;
  funded: number;
  commissions: number;
  created_at: string;
};

export type ActivityItem = {
  id: string;
  partner_id: string;
  action: string;
  metadata: string;
  created_at: string;
};

export const profiles: Profile[] = [
  { id: 'p1', email: 'operator@moonshinecapital.com', role: 'partner', created_at: '2026-04-01' },
  { id: 'p2', email: 'admin@moonshinecapital.com', role: 'admin', created_at: '2026-04-01' },
];

export const partnerAccounts: PartnerAccount[] = [
  { id: 'pa1', profile_id: 'p1', status: 'active', activation_score: 78, created_at: '2026-04-01' },
];

export const offers: Offer[] = [
  {
    id: 'o1',
    name: 'DAC / BankBreezy Core Offer',
    slug: 'dac-bankbreezy-core-offer',
    category: 'Core',
    description: 'Fast capital positioning for affiliates, brokers, and connectors who need a flexible anchor offer.',
    requirements: ['Business owner with real revenue', 'Urgent use of funds', 'Willing to compare options'],
    payout_notes: 'Use actual partner payout notes later.',
    affiliate_link: 'https://www.distilledfunding.com/partners',
  },
  {
    id: 'o2',
    name: 'Ecommerce Seller Funding',
    slug: 'ecommerce-seller-funding',
    category: 'Ecommerce',
    description: 'Inventory and growth capital for ecommerce operators who cannot wait on bank theater.',
    requirements: ['Consistent seller revenue', 'Clear funding use case'],
    payout_notes: 'Seller finance lane.',
    affiliate_link: 'https://www.distilledfunding.com/partners',
  },
  {
    id: 'o3',
    name: 'Real Estate Investor Capital',
    slug: 'real-estate-investor-capital',
    category: 'Real Estate',
    description: 'Investor-focused capital paths for acquisition, bridge, and operator-grade velocity.',
    requirements: ['Property-backed or project use case', 'Investor profile'],
    payout_notes: 'Investor lane.',
    affiliate_link: 'https://www.distilledfunding.com/partners',
  },
];

export const trainingModules: TrainingModule[] = [
  { id: 't1', slug: 'partner-orientation', title: 'Partner Orientation', category: 'Orientation', level: 'Required', content_url: '#', required: true },
  { id: 't2', slug: 'funding-basics', title: 'Funding Basics', category: 'Funding Fundamentals', level: 'Beginner', content_url: '#', required: true },
  { id: 't3', slug: 'qualification-and-fit', title: 'Qualification and Fit', category: 'Qualification', level: 'Intermediate', content_url: '#', required: false },
  { id: 't4', slug: 'scripts-and-positioning', title: 'Scripts and Positioning', category: 'Scripts', level: 'Intermediate', content_url: '#', required: false },
];

export const playbooks: Playbook[] = [
  {
    id: 'pb1',
    slug: 'contractor-playbook',
    title: 'Contractor Playbook',
    persona: 'Skilled Trades',
    content: ['Lead with speed and cash-flow pain.', 'Show how fast capital protects payroll and materials.', 'Use proof, not fluff.'],
    related_offers: ['o1', 'o3'],
  },
  {
    id: 'pb2',
    slug: 'ecommerce-playbook',
    title: 'Ecommerce Playbook',
    persona: 'Seller Operators',
    content: ['Frame funding as inventory acceleration.', 'Tie capital to sell-through and ad spend velocity.'],
    related_offers: ['o2'],
  },
];

export const resources: Resource[] = [
  { id: 'r1', title: 'Brand Messaging Swipe File', category: 'Copy', file_url: '#' },
  { id: 'r2', title: 'Broker FAQ', category: 'Docs', file_url: '#' },
  { id: 'r3', title: 'Outreach Scripts', category: 'Sales', file_url: '#' },
  { id: 'r4', title: 'Embed Installation Guide', category: 'Technical', file_url: '#' },
];

export const performanceSnapshots: PerformanceSnapshot[] = [
  { id: 'ps1', partner_id: 'pa1', clicks: 214, applications: 19, funded: 3, commissions: 4200, created_at: '2026-04-06' },
];

export const activityLog: ActivityItem[] = [
  { id: 'a1', partner_id: 'pa1', action: 'Completed orientation', metadata: 'Partner finished required module', created_at: '2026-04-06' },
  { id: 'a2', partner_id: 'pa1', action: 'Shared first link', metadata: 'Traffic started moving', created_at: '2026-04-06' },
  { id: 'a3', partner_id: 'pa1', action: 'Booked launch call', metadata: 'Support booked from Start Here flow', created_at: '2026-04-06' },
];

export const dashboardStats = [
  { label: 'Activation Score', value: '78%' },
  { label: 'Applications', value: '19' },
  { label: 'Funded Deals', value: '3' },
  { label: 'Est. Commissions', value: '$4.2K' },
];

export const activationChecklist = [
  'Finish your partner profile',
  'Choose your primary offer lane',
  'Complete required orientation',
  'Save your top links and tools',
  'Book your launch blueprint call',
];

export const supportChannels = [
  'Launch Blueprint Call',
  'Offer Positioning Call',
  'Tech Setup / Embed Install Call',
  'Funding Deal Triage Call',
  'Office Hours / Group Q&A',
];
