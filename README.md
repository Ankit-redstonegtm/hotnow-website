# HotNow

Marketing site for hotnow.co. Static Astro pages. No accounts, database, or payments.

## Edit the page

- `src/data/site.ts` holds the name, nav, booking link fallback, and contact email.
- `src/data/home.ts` holds the page copy, sample leads, and price.

`MONTHLY_PRICE` in `src/data/home.ts` is `$29/month`. Clear it to an empty string to show: Pricing available during your trial call.

Sample companies and people are fictional. Delivery tools are labeled Planned.

## Environment

Copy `.env.example` to `.env` if you need to override the defaults.

- `PUBLIC_SITE_URL` is the canonical origin. Default `https://hotnow.co`.
- `PUBLIC_BOOKING_URL` is the link behind every trial CTA. Default `https://cal.com/ankit-singh-gtm/discovery-call`.

That booking URL is the existing discovery call. Swap it when HotNow has its own event. Rebuild after changing either value.

`site.email` in `src/data/site.ts` stays empty until a public contact address exists. The footer links to the booking page either way.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run check
npm run check:copy
```

## Deploy

This repo is ready for a new Vercel project. Publishing to hotnow.co, DNS changes, and production deploys need approval. Do not attach this site to the Redstone Vercel project.
