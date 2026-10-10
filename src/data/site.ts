function clean(value: string | undefined, fallback: string) {
  const next = (value && value.trim()) || fallback;
  return next.replace(/\/$/, '');
}

export const site = {
  name: 'HotNow',
  domain: 'hotnow.co',
  url: clean(import.meta.env.PUBLIC_SITE_URL, 'https://hotnow.co'),
  title: 'Know who to sell to right now',
  description:
    'The hard part of selling is knowing who needs you today. HotNow finds 10 companies every day. Delivered to Slack, Salesforce, email or Teams.',
  imageAlt: 'HotNow. Know who to sell to right now. 10 companies every day, with a reason to call.',
  /**
   * Every trial link uses this URL.
   * Override with PUBLIC_BOOKING_URL. The fallback is the shared discovery call.
   */
  bookingUrl: clean(
    import.meta.env.PUBLIC_BOOKING_URL,
    'https://cal.com/ankit-singh-gtm/discovery-call',
  ),
  /**
   * Public contact email. Leave empty until one exists.
   * The footer shows a booking link either way, and adds this address when set.
   */
  email: '' as string,
  locale: 'en_US',
};

export const navCta = 'Start free trial';

export const nav = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Leads', href: '/#leads' },
  { label: 'Pricing', href: '/#pricing' },
] as const;
