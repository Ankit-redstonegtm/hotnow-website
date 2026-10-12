/**
 * Homepage copy, leads, and pricing.
 * Companies and people here are fictional. The page does not label them.
 *
 * MONTHLY_PRICE is the single plan price, shown as written.
 * Set it to '' to show priceFallback instead.
 */
export const MONTHLY_PRICE = '$29/month';

export const priceFallback = 'Pricing available during your trial call.';

export const trialCta = 'Start your free trial';

export const bookingNote = 'Book a quick call to get started.';

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
  titleLines: ['Find who needs', 'you right now.'],
  sub: 'HotNow finds companies in a buying situation right now.',
  body: 'We read deep web data for hiring, new locations, and the problem you solve.',
  detail: 'Reach them while the reason is fresh. You get 10 companies a day, with ranked contacts and why they need you.',
  morning: 'Your list, every morning.',
  channels: 'Delivered to Slack, Salesforce, email or Teams.',
  slackLeadIn: '10 companies need you today.',
};

export const proof = {
  label: 'Each morning',
  items: [
    { title: '10 companies', text: 'In a buying situation' },
    { title: 'Ranked contacts', text: 'Priority 1 Champion, then 2 and 3' },
    { title: 'Why now', text: 'The reason they need you' },
  ],
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

export const howItWorks = {
  heading: 'Tell us once.',
  steps: [
    {
      number: '1',
      title: 'Tell us what you sell.',
      body: 'Enter your website. We learn what you do, who you sell to, and the problem you solve.',
      preview: {
        kind: 'website' as const,
        label: 'Your website',
        value: 'yourcompany.com',
      },
    },
    {
      number: '2',
      title: 'Tell us when someone needs it.',
      body: 'Share a few customers you like. Tell us what is usually happening when they need you. That sets the search.',
      preview: {
        kind: 'customers' as const,
        customersLabel: 'Customers you like',
        customers: ['Harbor Home Services', 'Fieldline Medical'],
        happeningLabel: 'What is usually happening',
        happening: 'A field team is growing across new territories.',
      },
    },
    {
      number: '3',
      title: 'Get 10 companies every day.',
      body: 'Each one has ranked contacts and the reason they need you now.',
      preview: {
        kind: 'list' as const,
        label: "Today's list",
        count: '10 companies',
        rows: [
          { company: 'Summit Roofing', reason: 'Hiring field salespeople' },
          { company: 'Northstar Retail', reason: 'Opening five new stores' },
        ],
      },
    },
  ],
};

export const watches = {
  heading: 'It runs every morning.',
  body: 'You describe the situation once. We look for it every day and send the companies that fit.',
  items: [
    { name: 'Hiring field salespeople', when: 'Every morning' },
    { name: 'New stores or territories', when: 'Every morning' },
    { name: 'A growing sales team', when: 'Every morning' },
    { name: 'A process you replace', when: 'Every morning' },
  ],
  note: 'This set is for a company that sells field sales software. Your situations follow what you sell.',
};

export const method = {
  heading: 'Find. Rank. Explain.',
  intro: 'Three things, on every company.',
  items: [
    {
      label: 'Find',
      title: 'Companies in a buying situation.',
      body: 'Deep web data shows what changed at the business. Hiring. A new location. A team growing into your problem.',
    },
    {
      label: 'Rank',
      title: 'The people to contact, in order.',
      body: 'Priority 1 is the champion. Priority 2 and Priority 3 are the next people to reach.',
    },
    {
      label: 'Explain',
      title: 'Why they need you now.',
      body: 'Each company comes with what is happening, and why your product fits today.',
    },
  ],
};

export const timing = {
  heading: 'Call while the reason is fresh.',
  body: 'A buying situation is something happening at the company right now.',
  groups: [
    {
      label: 'Hiring',
      text: 'New sales roles, or a team moving into new territories.',
    },
    {
      label: 'Expansion',
      text: 'New stores, new routes, or new markets.',
    },
    {
      label: 'The work',
      text: 'They are staffing a problem your product already solves.',
    },
  ],
  note: 'The situations depend on what you sell. They are not the same for every company.',
  closer: 'Every company comes with a reason to call now.',
};

export const product = {
  heading: 'The company, the people, the reason.',
  context:
    'For a company that sells field sales software. Each lead names who to contact, in rank order, and why they need you right now.',
};

export const delivery = {
  heading: 'It lands where you already work.',
  body: 'Open the morning and the companies are there. The champion is named. The reason is written.',
  line: 'Delivered to Slack, Salesforce, email or Teams.',
  channels: [
    {
      id: 'slack',
      name: 'Slack',
      text: 'The morning note. Company, champion, and the reason to call.',
    },
    {
      id: 'salesforce',
      name: 'Salesforce',
      text: 'The same lead, on the account.',
    },
    {
      id: 'email',
      name: 'Email',
      text: 'The 10 companies, in the inbox.',
    },
    {
      id: 'teams',
      name: 'Microsoft Teams',
      text: 'The same note, in the channel your team uses.',
    },
  ],
};

export const comparison = {
  heading: 'A list of names is not a buying situation.',
  intro: 'Filters can return companies that look right. They do not show who needs you today.',
  columns: ['Lead database', 'HotNow'] as const,
  rows: [
    ['Companies that match filters', 'Companies in a buying situation'],
    ['A long list of names', '10 companies every day'],
    ['You research each one', 'The reason is already written'],
    ['You look for a contact', 'Priority 1 Champion, then 2 and 3'],
    ['You rebuild the list', 'The list arrives every morning'],
  ],
};

export const pricing = {
  heading: 'One plan. 10 companies every day.',
  plan: 'HotNow',
  includes: [
    '10 companies every day',
    'Each one in a buying situation',
    'Ranked contacts, Priority 1 Champion first',
    'Why they need you now',
    'Verified emails',
    'Mobile numbers when available',
    'Sources behind the research',
    'Delivered to Slack, Salesforce, email or Teams',
  ],
};

export const faq = {
  heading: 'Questions',
  items: [
    {
      q: 'What do I get each day?',
      a: '10 companies in a buying situation. Each one has ranked contacts and the reason they need you now.',
    },
    {
      q: 'How do you find the companies?',
      a: 'We read deep web data for what is happening at the business. The situations depend on what you sell.',
    },
    {
      q: 'How do I start?',
      a: 'Book a quick call. Setup takes 5 minutes. We set it up with you.',
    },
    {
      q: 'What does it cost?',
      a: 'price',
    },
    {
      q: 'Where do they show up?',
      a: 'Delivered to Slack, Salesforce, email or Teams.',
    },
    {
      q: 'Who do I contact?',
      a: 'Priority 1 is the champion. Priority 2 and Priority 3 are the next people to reach.',
    },
  ],
};

export const finalCta = {
  heading: 'Find who needs you tomorrow.',
  body: 'Tell us what you sell. We send 10 companies in a buying situation, with the people to call.',
};

export function priceState(price: string = MONTHLY_PRICE) {
  const text = price.trim();
  if (!text) return { kind: 'fallback' as const, text: priceFallback };
  return { kind: 'price' as const, text };
}
