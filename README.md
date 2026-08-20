This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Analytics & conversion tracking

The site loads one Google tag (`gtag.js`) that serves both GA4 and Google Ads.
Nothing loads unless the IDs in `.env.example` are set, and preview deployments
never load it, so QA traffic cannot skew the production property.

To turn it on:

1. Create the GA4 property and the Google Ads conversion actions — **two**
   actions, one for form submissions and one for phone taps.
2. Put the measurement ID, conversion ID and both labels into Vercel's
   environment variables for the Production environment (names in
   `.env.example`).
3. Redeploy. `NEXT_PUBLIC_*` values are inlined at build time, so saving them
   in Vercel is not enough on its own.
4. Verify with Google Tag Assistant: submit a form and tap a phone number, then
   confirm a `generate_lead` event in GA4 DebugView and a `conversion` hit in
   the Ads tag diagnostics.

Leads are reported from four forms (booking modal, sub-service booking, contact,
referrals) and from every `tel:` link, via `trackLead()` in
[`app/lib/analytics.ts`](app/lib/analytics.ts). A phone tap is an upper bound on
calls, not a booked patient — reconcile against the phone system before judging
cost per acquisition.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
