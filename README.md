# Hiland Supply — E-commerce Store (Phase 1)

A custom Next.js + Stripe store for tools, construction supplies, and household goods.
No database — inventory lives in one editable file.

## What's built
- Storefront with category filtering (household / construction)
- Product detail pages
- Stripe hosted Checkout (cards, handles tax & PCI)
- Order webhook (logs orders; optional email)
- 3 SEO blog posts ("Guides")
- Sitemap, robots.txt, and per-page SEO metadata

---

## Run it locally (5 minutes)

1. Install Node.js 18+ if you don't have it: https://nodejs.org
2. In this folder, run:
       npm install
3. Copy the env template and add your Stripe keys:
       cp .env.local.example .env.local
   Then open .env.local and paste your keys from
   https://dashboard.stripe.com/apikeys  (use test keys to start)
4. Start it:
       npm run dev
5. Open http://localhost:3000

The store works without Stripe keys for browsing — you only need them
to test the actual checkout.

---

## Managing your products

Edit ONE file: `data/products.js`
Add, remove, change price, or set `active: false` to hide an item.
Set `image` to a photo URL, or leave the placeholder for now.

## Managing blog posts
Edit `data/posts.js` — same idea, add posts to the array.

---

## Going live (when ready)

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com, import the repo (free tier is fine to start).
3. In Vercel project settings → Environment Variables, add the same
   values from your .env.local (use LIVE Stripe keys for real sales).
4. Set SITE_URL to your real domain.
5. In Stripe Dashboard → Developers → Webhooks, add an endpoint:
       https://yourdomain.com/api/webhook
   Subscribe to `checkout.session.completed`, then copy the signing
   secret into STRIPE_WEBHOOK_SECRET.

That's it — you own the code, the domain, and the Stripe account.
Hand Phase 2 (marketing) to Atsap at $300/mo; you skip their $4,500 build.

## Optional: get an email on each order
See the commented block in `app/api/webhook/route.js`.
Takes ~5 min with Resend (https://resend.com).
