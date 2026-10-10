/**
 * Homepage copy, sample leads, and pricing.
 * Companies and people here are fictional. The page labels them as examples.
 *
 * MONTHLY_PRICE is the single plan price, shown as written.
 * Set it to '' to show priceFallback instead.
 */
export const MONTHLY_PRICE = '$29/month';

export const priceFallback = 'Pricing available during your trial call.';

export const exampleLabel = 'Illustrative example';

export const trialCta = 'Start your free trial';

export const bookingNote = 'Book a quick call to get started.';

export const setupNote = '5-minute setup.';

export type SampleLead = {
  company: string;
  reason: string;
  person: string;
  role: string;
  email: string;
  mobile: string;
};

export const hero = {
  titleLines: ['10 leads.', 'Every day.'],
  sub: 'Not random companies. Companies that have a reason to need what you sell.',
  body: 'Tell us about your business in 5 minutes. Get 10 researched leads every day, with the right people to contact.',
  previewTitle: 'Your leads for today',
  previewCount: '10 companies found',
  previewFoot: 'Showing 3 of 10',
};

export const heroLeads: SampleLead[] = [
  {
    company: 'Summit Roofing',
    reason: 'Hiring field salespeople across three territories.',
    person: 'Michael Carter',
    role: 'VP of Sales',
    email: 'Available',
    mobile: 'Available',
  },
  {
    company: 'Northstar Retail',
    reason: 'Opening five new stores.',
    person: 'Priya Shah',
    role: 'VP of Sales',
    email: 'Available',
    mobile: 'Available',
  },
  {
    company: 'Atlas Logistics',
    reason: 'Hiring a regional sales team.',
    person: 'Daniel Okonkwo',
    role: 'Head of Sales',
    email: 'Available',
    mobile: 'Available',
  },
];

export const product = {
  heading: "Here's what a lead looks like.",
  context: 'Example. The customer sells field sales software.',
  prompt: 'The card answers: why this company, and who do you contact?',
  question: 'Why did HotNow choose this company?',
  company: 'Summit Roofing',
  why: 'Hiring field salespeople across three territories. Summit Roofing appears to be expanding its sales operation. That creates a reason to talk about managing field sales teams.',
  sourceLabel: 'Source',
  source: 'Recent job postings',
  personLabel: 'Person to contact',
  person: 'Michael Carter',
  role: 'VP of Sales',
  emailLabel: 'Email',
  email: 'Available',
  mobileLabel: 'Mobile',
  mobile: 'Available',
};

export const howItWorks = {
  heading: 'Five minutes to set up.',
  steps: [
    {
      number: '1',
      title: 'Tell us what you sell.',
      body: 'Enter your website. We learn what you do, who you sell to, and what problems you solve.',
      preview: {
        kind: 'website' as const,
        label: 'Your website',
        value: 'yourcompany.com',
      },
    },
    {
      number: '2',
      title: 'Tell us what makes someone a good customer.',
      body: "Share a few customers you like. Tell us what's usually happening when someone needs your product. That guides the research.",
      preview: {
        kind: 'customers' as const,
        customersLabel: 'Customers you like',
        customers: ['Harbor Home Services', 'Fieldline Medical'],
        happeningLabel: "What's usually happening",
        happening: 'A field team is growing across new territories.',
      },
    },
    {
      number: '3',
      title: 'Get 10 leads every day.',
      body: 'Each one comes with a reason and the right person to contact.',
      preview: {
        kind: 'list' as const,
        label: "Today's list",
        count: '10 leads',
        rows: [
          { company: 'Summit Roofing', reason: 'Hiring field salespeople' },
          { company: 'Northstar Retail', reason: 'Opening five new stores' },
        ],
      },
    },
  ],
};

export const why = {
  heading: 'Why these 10 companies?',
  body: 'Because something is happening at their business that makes your product relevant. We research companies across the web. We look for situations your product can help with. Then we find the people you should contact.',
  chain: [
    {
      label: 'Situation',
      text: 'Hiring field salespeople across three territories.',
    },
    {
      label: 'Why it matters',
      text: 'The company appears to be expanding its sales operation. That creates a reason to talk about managing field sales teams.',
    },
    {
      label: 'Who to contact',
      text: 'Michael Carter, VP of Sales',
    },
  ],
  examplesHeading: 'Situations we might find',
  examples: [
    'Hiring salespeople',
    'A retailer opening new stores',
    'Expanding into new markets',
    'Hiring for a problem your software solves',
    'Using a process your product could replace',
  ],
  note: 'These are examples, not universal rules. The situations depend on what you sell.',
  closer: 'Every lead comes with a reason.',
};

export const comparison = {
  heading: "A list of companies isn't a list of opportunities.",
  columns: ['Lead database', 'HotNow'] as const,
  rows: [
    ['Companies matching filters', 'Companies with a reason to need your product'],
    ['Hundreds of names', '10 researched leads'],
    ['You research each company', 'We show you why it matters'],
    ['You find the right person', 'We find the contact'],
    ['You build the list', 'Your leads arrive every day'],
  ],
};

export const delivery = {
  heading: 'Your leads come to you.',
  body: 'Get your 10 leads where you work.',
  status: 'These destinations are planned. None of them are live yet.',
  destinations: ['Slack', 'Salesforce', 'Microsoft Teams', 'Email', 'Google Sheets'],
  plannedLabel: 'Planned',
  message: {
    app: 'HotNow',
    channel: 'Slack',
    text: 'Your 10 leads for today are ready.',
    lines: [
      'Summit Roofing, hiring field salespeople in three territories.',
      'Northstar Retail, opening five new stores.',
      'Atlas Logistics, hiring a regional sales team.',
    ],
    more: 'View all 10',
  },
};

export const pricing = {
  heading: 'One plan. 10 leads every day.',
  plan: 'HotNow',
  includes: [
    '10 researched leads every day',
    'A reason to reach out to each company',
    'Decision-maker contact details',
    'Verified emails',
    'Mobile numbers when available',
    'Sources behind the research',
    'Delivery to your chosen destination when supported',
  ],
};

export const finalCta = {
  heading: 'Your next 10 leads are waiting.',
  body: "Tell us what you sell. We'll find companies worth reaching out to.",
};

export function priceState(price: string = MONTHLY_PRICE) {
  const text = price.trim();
  if (!text) return { kind: 'fallback' as const, text: priceFallback };
  return { kind: 'price' as const, text };
}
