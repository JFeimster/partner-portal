export type PartnerOffer = {
  slug: string;
  title: string;
  category: string;
  audience: string[];
  description: string;
  ctaUrl: string;
  scenarios: string[];
  talkTracks: string[];
  objections: string[];
};

export const partnerOffers: PartnerOffer[] = [
  {
    slug: 'dac-lethal',
    title: 'DAC / BankBreezy — Fast Capital for Operators',
    category: 'Core Offer',
    audience: [
      'Trade contractors needing materials or payroll help',
      'Gig workers who need fast survival capital',
      'Business owners recently turned down by a bank',
    ],
    description: 'When banks stall, operators move. This route is built for speed, flexibility, and reality.',
    ctaUrl: 'https://www.distilledfunding.com/partners',
    scenarios: [
      'Missed payroll this week',
      'Inventory stuck and cannot restock fast enough',
      'Equipment down and revenue stopped cold',
    ],
    talkTracks: [
      'This is about keeping the business moving, not waiting on bank approval theater.',
      'Let’s look for a fit that matches your situation instead of forcing a bank box.',
      'Speed and flexibility matter more than pretending every deal should look like SBA underwriting.',
    ],
    objections: [
      'I want a bank loan → then wait. This route is for speed and flexibility.',
      'What is the rate? → focus on total cost and business outcome, not one vanity number.',
      'I will think about it → delay usually costs more than the capital itself.',
    ],
  },
  {
    slug: 'contractor-capital',
    title: 'Contractor Capital — Materials, Payroll, Momentum',
    category: 'Vertical Variant',
    audience: [
      'Electricians',
      'HVAC contractors',
      'Plumbers',
      'General subcontractors waiting on draws',
    ],
    description: 'For contractors who win jobs before they have the cash to buy materials or cover payroll.',
    ctaUrl: 'https://www.distilledfunding.com/partners',
    scenarios: [
      'Won a job but need material money before the first draw',
      'Payroll due Friday but receivables are late',
      'Need to repair or replace field equipment now',
    ],
    talkTracks: [
      'You do not need a lecture from a banker. You need to start the job.',
      'This is bridge capital for the ugly gap between winning work and getting paid.',
      'Cash flow can kill a profitable contractor faster than bad craftsmanship.',
    ],
    objections: [
      'I should wait until the draw hits → then you may lose time, margin, or the whole job.',
      'I do not like alternative funding → you like working. This protects the work.',
      'I need something cheap → cheap is irrelevant if the delay costs you the contract.',
    ],
  },
  {
    slug: 'ecom-growth-capital',
    title: 'Ecom Growth Capital — Inventory, Ads, Velocity',
    category: 'Vertical Variant',
    audience: [
      'Amazon sellers',
      'Shopify brands',
      'TikTok Shop operators',
    ],
    description: 'For sellers who need capital to buy inventory, scale ad spend, or survive a stuck cash cycle.',
    ctaUrl: 'https://www.distilledfunding.com/partners',
    scenarios: [
      'Inventory is selling but you cannot reorder fast enough',
      'Ad spend is working but cash is trapped in payout timing',
      'Seasonal demand hit and you are undercapitalized',
    ],
    talkTracks: [
      'Inventory velocity dies when capital dries up.',
      'This is not random debt. This is fuel for a machine that is already moving.',
      'You do not scale ecommerce by waiting for perfect cash flow.',
    ],
    objections: [
      'I want to bootstrap this → great, until inventory stockouts choke growth.',
      'I need better terms → better terms mean nothing if you miss the sales window.',
      'I can wait until next payout → waiting can cost ranking, momentum, and margin.',
    ],
  },
  {
    slug: 'gig-worker-rescue',
    title: 'Gig Worker Rescue — Keep the Wheels Turning',
    category: 'Vertical Variant',
    audience: [
      'Uber drivers',
      'DoorDash couriers',
      '1099 freelancers',
    ],
    description: 'For independent earners who need fast cash to keep producing income when life punches first.',
    ctaUrl: 'https://www.distilledfunding.com/partners',
    scenarios: [
      'Vehicle repair killed your earning week',
      'You need working cash to stay on the road',
      'You were told no because your business looks too small for a bank',
    ],
    talkTracks: [
      'The bank sees a tiny file. We see a working operator with deposits.',
      'This is not about prestige financing. It is about protecting your income stream.',
      'If the wheels stop, the money stops. Solve that first.',
    ],
    objections: [
      'I do not have a business account → there are still smaller-path routes to consider.',
      'I only need a little money → good, because this is about fast survival capital.',
      'Banks said no → exactly why this lane exists.',
    ],
  },
];

export function getPartnerOfferBySlug(slug: string) {
  return partnerOffers.find((offer) => offer.slug === slug);
}
