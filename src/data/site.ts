function clean(value: string | undefined, fallback: string) {
  const next = (value && value.trim()) || fallback;
  return next.replace(/\/$/, '');
}

export const site = {
  name: 'HotNow',
  domain: 'hotnow.co',
  url: clean(import.meta.env.PUBLIC_SITE_URL, 'https://hotnow.co'),
  title: 'Know who to contact today, and why',
  description:
    'Know which companies are worth contacting today, and why. HotNow finds companies in a situation that fits what you sell, with the people to contact and the reason to call. Delivered to Slack, Salesforce, email or Teams.',
  imageAlt: 'HotNow. Know who to contact today, and why. Companies worth contacting, with a reason to call.',
  /**
   * The self-serve app. Every primary CTA sends people here to sign up.
   * Override the origin with PUBLIC_APP_URL.
   */
  appUrl: clean(import.meta.env.PUBLIC_APP_URL, 'https://app.hotnow.co'),
  /** Primary CTA target: sign up for the app. */
  bookingUrl: `${clean(import.meta.env.PUBLIC_APP_URL, 'https://app.hotnow.co')}/signup`,
  /** Returning users log in here. */
  loginUrl: `${clean(import.meta.env.PUBLIC_APP_URL, 'https://app.hotnow.co')}/login`,
  /**
   * Public contact email. Leave empty until one exists.
   * The footer shows a booking link either way, and adds this address when set.
   */
  email: '' as string,
  locale: 'en_US',
};

export const navCta = 'Get started';

export const nav = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Leads', href: '/#leads' },
  { label: 'Pricing', href: '/#pricing' },
] as const;
