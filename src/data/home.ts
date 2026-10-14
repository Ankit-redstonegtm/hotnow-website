/**
 * Homepage copy, leads, and pricing.
 * Companies and people here are fictional. The page does not label them.
 *
 * MONTHLY_PRICE is the single plan price, shown as written.
 * Set it to '' to show priceFallback instead.
 */
export const MONTHLY_PRICE = '$29/month';

export const priceFallback = 'Pricing shown when you start your free trial.';

export const trialCta = 'Start getting 10 high-intent leads every day';

export const bookingNote = 'Enter your domain to start. No credit card.';

export const setupNote = '5-minute setup.';

export type LeadContact = {
  priority: string;
  badge: string;
  name: string;
  title: string;
  mobile: string;
};

export type Lead = {
  company: string;
  segment: string;
  evidence: string[];
  tie: string;
  contacts: LeadContact[];
};

export const hero = {
  titleLines: ['Know who to contact today.', 'And why.'],
  sub: 'The hard part of selling is knowing who needs what you sell today.',
  body: 'HotNow finds companies in that situation. You get 10 every day, with the people to contact and the reason to call.',
  detail: 'We read the web for what is happening at their business right now.',
  morning: 'Your 10 hot leads, in Slack every morning.',
  channels: 'Delivered to Slack, Salesforce, email or Teams.',
};

export const leads: Lead[] = [
  {
    company: 'Summit Roofing',
    segment: 'Home services',
    evidence: [
      'They posted field sales roles in three territories.',
      'They set up a new regional structure.',
      'They are adding reps in each of those territories.',
    ],
    tie: 'That is a reason to talk about managing a field sales team.',
    contacts: [
      {
        priority: 'Priority 1',
        badge: 'Champion',
        name: 'Michael Carter',
        title: 'VP of Sales',
        mobile: '(•••) •••-0148',
      },
      {
        priority: 'Priority 2',
        badge: '',
        name: 'Elena Vasquez',
        title: 'Director of Sales',
        mobile: '(•••) •••-2261',
      },
      {
        priority: 'Priority 3',
        badge: '',
        name: 'Chris Dalton',
        title: 'Regional Manager',
        mobile: '(•••) •••-7734',
      },
    ],
  },
  {
    company: 'Northstar Retail',
    segment: 'Retail',
    evidence: [
      'They are opening five new stores.',
      'They are hiring managers for those stores.',
      'They assigned a sales territory to each opening.',
    ],
    tie: 'That is a reason to talk about running reps across new locations.',
    contacts: [
      {
        priority: 'Priority 1',
        badge: 'Champion',
        name: 'Priya Shah',
        title: 'VP of Sales',
        mobile: '(•••) •••-3380',
      },
      {
        priority: 'Priority 2',
        badge: '',
        name: 'Owen Briggs',
        title: 'Director of Stores',
        mobile: '(•••) •••-4419',
      },
      {
        priority: 'Priority 3',
        badge: '',
        name: 'Maya Chen',
        title: 'Regional Manager',
        mobile: '(•••) •••-9026',
      },
    ],
  },
  {
    company: 'Atlas Logistics',
    segment: 'Logistics',
    evidence: [
      'They are hiring a regional sales team.',
      'They posted a head of sales role.',
      'They listed new routes they plan to cover.',
    ],
    tie: 'That is a reason to talk about how that new team will work.',
    contacts: [
      {
        priority: 'Priority 1',
        badge: 'Champion',
        name: 'Daniel Okonkwo',
        title: 'Head of Sales',
        mobile: '(•••) •••-1184',
      },
      {
        priority: 'Priority 2',
        badge: '',
        name: 'Hannah Cole',
        title: 'Director of Regional Sales',
        mobile: '(•••) •••-5572',
      },
      {
        priority: 'Priority 3',
        badge: '',
        name: 'Luis Romero',
        title: 'Sales Operations Lead',
        mobile: '(•••) •••-6641',
      },
    ],
  },
];

export const heroLead = leads[0];

export const moreLeads = leads.slice(1);

export const product = {
  heading: "Here's what a lead looks like.",
  context: 'For a company that sells field sales software. Each lead names the company, the people to call, and why they need you right now.',
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
      body: 'Each one comes with a reason and the right people to contact.',
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
  body: 'Because something is happening at their business right now. We read the web for that situation. We look for the pain your product fits. Then we rank the people you should contact.',
  chain: [
    {
      label: 'Situation',
      text: 'Hiring field salespeople across three territories.',
    },
    {
      label: 'Why it matters',
      text: 'The sales team is growing right now. That is a reason to talk about managing it.',
    },
    {
      label: 'Who to contact',
      text: 'Michael Carter, VP of Sales. Priority 1.',
    },
  ],
  situationsHeading: 'What we look for',
  situations: [
    'Hiring salespeople',
    'A retailer opening new stores',
    'Expanding into new markets',
    'Hiring for a problem your software solves',
    'Using a process your product could replace',
  ],
  note: 'The situations depend on what you sell. They are not the same for every company.',
  closer: 'Every lead comes with a reason to call now.',
};

export const comparison = {
  heading: "A list of companies isn't a list of opportunities.",
  intro: 'A longer list does not tell you who to call today.',
  columns: ['Lead database', 'HotNow'] as const,
  rows: [
    ['Companies matching filters', 'Companies in the situation right now'],
    ['Hundreds of names', '10 researched leads'],
    ['You research each company', 'We show you why it matters today'],
    ['You find the right person', 'We rank the people to contact'],
    ['You build the list', 'Your leads arrive every day'],
  ],
};

export const outcomes = {
  heading: 'What changes for you.',
  intro: 'You stop guessing who to sell to.',
  items: [
    {
      title: 'The day has a start.',
      body: 'Your 10 hot leads are in Slack when the morning starts. Each one needs what you sell.',
    },
    {
      title: 'The call has a reason.',
      body: 'You know who to contact. You know why they might talk today.',
    },
    {
      title: 'The pipeline refills.',
      body: 'The list comes back every day. Timely accounts keep showing up.',
    },
  ],
  closer: 'Reps know who to call and why. That work is done before the first conversation.',
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
    'Delivered to Slack, Salesforce, email or Teams',
  ],
};

export const delivery = {
  heading: 'Your 10 hot leads, in Slack every morning.',
  body: 'They land where you already work. You open the day knowing who to call, and why.',
  line: 'Delivered to Slack, Salesforce, email or Teams.',
  channels: [
    {
      id: 'slack',
      name: 'Slack',
      text: 'The morning message, with the company, the champion, and the reason to call.',
    },
    {
      id: 'salesforce',
      name: 'Salesforce',
      text: 'The same lead, on the account.',
    },
    {
      id: 'email',
      name: 'Email',
      text: 'The 10 leads, in the inbox.',
    },
    {
      id: 'teams',
      name: 'Microsoft Teams',
      text: 'The same note, in the channel your team already uses.',
    },
  ],
};

export const faq = {
  heading: 'Questions',
  items: [
    {
      q: 'What do I get each day?',
      a: '10 researched leads. Each company has a reason to need what you sell, and the people to contact.',
    },
    {
      q: 'How do I start?',
      a: 'Enter your company domain and start free. Setup takes about 5 minutes. No call required.',
    },
    {
      q: 'What does it cost?',
      a: 'price',
    },
    {
      q: 'Where do the leads show up?',
      a: 'Delivered to Slack, Salesforce, email or Teams.',
    },
    {
      q: 'Why these companies?',
      a: 'Something is happening at the business right now that makes your product relevant. The situations depend on what you sell.',
    },
  ],
};

export const finalCta = {
  heading: 'Know who to contact tomorrow.',
  body: "Tell us what you sell. We'll find companies that need it right now.",
};

export function priceState(price: string = MONTHLY_PRICE) {
  const text = price.trim();
  if (!text) return { kind: 'fallback' as const, text: priceFallback };
  return { kind: 'price' as const, text };
}
