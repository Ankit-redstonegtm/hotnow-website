function clean(value: string | undefined, fallback: string) {
  const next = (value && value.trim()) || fallback;
  return next.replace(/\/$/, '');
}

export const site = {
  name: 'HotNow',
  domain: 'hotnow.co',
  url: clean(import.meta.env.PUBLIC_SITE_URL, 'https://hotnow.co'),
  title: '10 leads every day',
  description:
    'Not random companies. Companies that have a reason to need what you sell. 10 researched leads every day, with the right person to contact.',
  imageAlt: 'HotNow. 10 leads every day. Companies that have a reason to need what you sell.',
  /**
   * Every "Start your free trial" and "Start free trial" link uses this URL.
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
  { label: 'Example leads', href: '/#example-leads' },
  { label: 'Pricing', href: '/#pricing' },
] as const;
